import { useCallback, useEffect, useState } from "react";
import { MobileNav, SearchDialog, Sidebar, Topbar } from "./components/Shell.jsx";
import { HomePage } from "./pages/Home.jsx";
import { LearnPage } from "./pages/Learn.jsx";
import { LessonPage } from "./pages/Lesson.jsx";
import { PracticePage } from "./pages/Practice.jsx";
import { ProgressPage } from "./pages/Progress.jsx";
import { MarketingPage } from "./pages/Marketing.jsx";
import { getLessonById, TOTAL_LESSONS } from "./data/curriculum.js";
import {
  completeLesson,
  createEmptyProgress,
  loadProgress,
  recordAnswer,
  saveProgress,
} from "./lib/progress.js";

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [pathPart, queryPart = ""] = raw.split("?");
  const segments = pathPart.split("/").filter(Boolean);
  return {
    raw,
    segments,
    page: segments[0] || "home",
    params: new URLSearchParams(queryPart),
  };
}

function useHashRoute() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    function onHashChange() {
      setRoute(parseHash());
    }
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#/home");
      setRoute(parseHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((path) => {
    const cleaned = path.startsWith("/") ? path : `/${path}`;
    const next = `#${cleaned}`;
    if (window.location.hash === next) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = next;
  }, []);

  return { route, navigate };
}

const PAGE_TITLES = {
  today: "今日",
  learn: "课程",
  practice: "练习",
  progress: "进度",
};

export default function App() {
  const { route, navigate } = useHashRoute();
  const [progress, setProgress] = useState(loadProgress);
  const [searchOpen, setSearchOpen] = useState(false);
  const [siteLang, setSiteLang] = useState(() => {
    try {
      const saved = window.localStorage.getItem("summa-site-lang");
      if (saved === "zh" || saved === "en") return saved;
    } catch {
      // The site still works without storage.
    }
    return window.navigator.language?.toLowerCase().startsWith("zh")
      ? "zh"
      : "en";
  });

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  useEffect(() => {
    try {
      window.localStorage.setItem("summa-site-lang", siteLang);
    } catch {
      // Language still switches for the current visit.
    }
  }, [siteLang]);

  useEffect(() => {
    setSearchOpen(false);
  }, [route.raw]);

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const page = route.page;
    if (page === "home") {
      document.documentElement.lang = siteLang === "zh" ? "zh-Hant" : "en";
      document.title =
        siteLang === "zh"
          ? "Summa｜由數數到微積分的完整數學路徑"
          : "Summa — A complete mathematics path";
      return;
    }
    document.documentElement.lang = "zh-CN";
    let title = PAGE_TITLES[page] || "今日";
    if (page === "lesson") {
      const lesson = getLessonById(route.segments[1]);
      title = lesson ? lesson.title : "课时";
    }
    document.title = `${title} · Summa`;
  }, [route.raw, route.page, route.segments, siteLang]);

  const handleAnswer = useCallback((question, correct) => {
    setProgress((current) => recordAnswer(current, question, correct));
  }, []);

  const handleComplete = useCallback((lessonId) => {
    setProgress((current) => completeLesson(current, lessonId));
  }, []);

  const handleReset = useCallback(() => {
    setProgress(createEmptyProgress());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const page = route.page;
  const navPage = page === "lesson" ? "learn" : page;

  if (page === "home") {
    return (
      <MarketingPage
        lang={siteLang}
        onLangChange={setSiteLang}
        navigate={navigate}
      />
    );
  }

  let content = null;
  if (page === "learn") {
    content = (
      <LearnPage
        progress={progress}
        levelId={route.segments[1]}
        strandParam={route.params.get("strand")}
        navigate={navigate}
      />
    );
  } else if (page === "lesson") {
    content = (
      <LessonPage
        progress={progress}
        lessonId={route.segments[1]}
        navigate={navigate}
        onAnswer={handleAnswer}
        onComplete={handleComplete}
      />
    );
  } else if (page === "practice") {
    const focusLessonId =
      route.segments[1] === "lesson" ? route.segments[2] : null;
    content = (
      <PracticePage
        key={`practice-${focusLessonId || "setup"}`}
        progress={progress}
        focusLessonId={focusLessonId}
        navigate={navigate}
        onAnswer={handleAnswer}
        keySeed={focusLessonId || "setup"}
      />
    );
  } else if (page === "progress") {
    content = (
      <ProgressPage
        progress={progress}
        navigate={navigate}
        onReset={handleReset}
      />
    );
  } else {
    content = <HomePage progress={progress} navigate={navigate} />;
  }

  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          main?.focus({ preventScroll: true });
          main?.scrollIntoView({ block: "start" });
        }}
      >
        跳至主要内容
      </a>
      <Sidebar page={navPage} progress={progress} navigate={navigate} />
      <div className="app-main">
        <Topbar
          page={page}
          progress={progress}
          onSearch={() => setSearchOpen(true)}
          navigate={navigate}
        />
        <main className="app-content" id="main-content" tabIndex={-1}>
          {content}
        </main>
        <footer className="global-footer">
          <span className="global-footer-brand">summa.</span>
          <button className="global-footer-about" onClick={() => navigate("/home")}>
            产品介绍
          </button>
          <span className="global-footer-author">3D 廖嘉兒</span>
          <span className="global-footer-meta">{TOTAL_LESSONS} 节课 · 6 个阶段 · 6–18 岁</span>
        </footer>
      </div>
      <MobileNav page={navPage} navigate={navigate} />
      <SearchDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        navigate={navigate}
        progress={progress}
      />
    </div>
  );
}
