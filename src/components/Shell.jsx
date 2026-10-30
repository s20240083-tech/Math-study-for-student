import { useEffect, useMemo, useRef, useState } from "react";
import { Icon, Logo } from "./Icons.jsx";
import {
  DAILY_GOAL,
  getActiveStreak,
  getDailyPercent,
  getToday,
} from "../lib/progress.js";
import {
  getLessonById,
  searchCurriculum,
  TOTAL_LESSONS,
} from "../data/curriculum.js";

const NAV_ITEMS = [
  { id: "today", label: "今日", href: "/today", icon: "home" },
  { id: "learn", label: "學習", href: "/learn", icon: "learn" },
  { id: "practice", label: "練習", href: "/practice", icon: "practice" },
  { id: "progress", label: "進度", href: "/progress", icon: "progress" },
];

const PAGE_LABELS = {
  today: "今日",
  learn: "課程",
  lesson: "課時",
  practice: "練習",
  progress: "進度",
};

export function Sidebar({ page, progress, navigate }) {
  const dailyPercent = getDailyPercent(progress);
  const today = getToday(progress);

  return (
    <aside className="sidebar">
      <button
        className="sidebar-brand"
        onClick={() => navigate("/home")}
        aria-label="Summa 產品介紹"
      >
        <Logo />
      </button>

      <div className="sidebar-section-label">你的空間</div>
      <nav className="sidebar-nav" aria-label="主導航">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${page === item.id ? "is-active" : ""}`}
            onClick={() => navigate(item.href)}
            aria-current={page === item.id ? "page" : undefined}
          >
            <span className="nav-icon">
              <Icon name={item.icon} size={19} />
            </span>
            <span>{item.label}</span>
            {page === item.id && <span className="nav-active-dot" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-rule" />

      <div className="sidebar-goal">
        <div className="sidebar-goal-head">
          <span className="eyebrow">每日節奏</span>
          <span className="sidebar-goal-xp">{today.xp} / {DAILY_GOAL} XP</span>
        </div>
        <div className="mini-progress" aria-hidden="true">
          <span style={{ width: `${dailyPercent}%` }} />
        </div>
        <p className="sidebar-goal-copy">
          {dailyPercent >= 100
            ? "今日目標已完成，再做一點都是額外收穫。"
            : "每天專注幾分鐘，就能保持學習的連續性。"}
        </p>
      </div>

      <div className="sidebar-spacer" />

      <div className="sidebar-profile">
        <span className="avatar">學</span>
        <span className="profile-copy">
          <strong>本地學習者</strong>
          <span>{progress.xp} XP · 已保存在本機</span>
        </span>
      </div>
      <div className="sidebar-footnote">
        <Icon name="bookOpen" size={14} />
        <span>{TOTAL_LESSONS} 節課 · 6–18 歲</span>
      </div>
    </aside>
  );
}

export function Topbar({ page, progress, onSearch, navigate }) {
  const activeStreak = getActiveStreak(progress);
  return (
    <header className="topbar">
      <button
        className="mobile-brand"
        onClick={() => navigate("/home")}
        aria-label="Summa 產品介紹"
      >
        <Logo compact />
      </button>
      <div className="topbar-crumb">
        <span>你的學習空間</span>
        <span className="crumb-slash">/</span>
        <strong>{PAGE_LABELS[page] || "今日"}</strong>
      </div>
      <div className="topbar-actions">
        <button className="search-trigger" onClick={onSearch} aria-label="搜尋課程">
          <Icon name="search" size={17} />
          <span>搜尋課程</span>
          <kbd>⌘K</kbd>
        </button>
        <div className="streak-pill" title={`${activeStreak} 天連續學習`}>
          <Icon name="flame" size={16} />
          <span>
            <strong>{activeStreak}</strong> 天
          </span>
        </div>
        <button
          className="avatar avatar-button"
          onClick={() => navigate("/progress")}
          aria-label="查看學習進度"
        >
          學
        </button>
      </div>
    </header>
  );
}

export function MobileNav({ page, navigate }) {
  return (
    <nav className="mobile-nav" aria-label="移動端導航">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`mobile-nav-item ${page === item.id ? "is-active" : ""}`}
          onClick={() => navigate(item.href)}
          aria-current={page === item.id ? "page" : undefined}
        >
          <Icon name={item.icon} size={21} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

const SUGGESTED_IDS = [
  "l1-counting",
  "l3-fraction-ops",
  "l4-proportion",
  "l5-quadratics",
  "l6-derivatives",
];

export function SearchDialog({ open, onClose, navigate, progress }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    previousFocus.current = document.activeElement;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchCurriculum(query);
  }, [query]);

  const emptyItems = useMemo(() => {
    const ids = [progress.lastLessonId, ...SUGGESTED_IDS].filter(Boolean);
    const lessons = ids.map((id) => getLessonById(id)).filter(Boolean);
    return [...new Map(lessons.map((lesson) => [lesson.id, lesson])).values()].slice(0, 4);
  }, [progress.lastLessonId]);

  const visible = query.trim() ? results : emptyItems;

  function handleSelect(lesson) {
    if (!lesson) return;
    navigate(`/lesson/${lesson.id}`);
    onClose();
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, Math.max(visible.length - 1, 0)));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter" && visible[activeIndex]) {
      event.preventDefault();
      handleSelect(visible[activeIndex]);
    }
  }

  if (!open) return null;

  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <div
        className="search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="搜尋課程內容"
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="search-input-row">
          <Icon name="search" size={21} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜尋知識點、技能或年級…"
            aria-label="搜尋知識點、技能或年級"
          />
          <button className="icon-button" onClick={onClose} aria-label="關閉搜尋">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="search-results" aria-live="polite">
          <div className="search-section-head">
            <span>{query.trim() ? "課程" : "從這裡開始"}</span>
            {query.trim() && <span>{results.length} 個結果</span>}
          </div>

          {visible.length === 0 ? (
            <div className="search-empty">
              <span className="search-empty-mark">∅</span>
              <p>沒有找到與“{query}”匹配的課程，試試更寬泛的關鍵詞，比如“分數”。</p>
            </div>
          ) : (
            <div className="search-list">
              {visible.map((lesson, index) => (
                <button
                  key={lesson.id}
                  className={`search-result ${index === activeIndex ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleSelect(lesson)}
                >
                  <span
                    className="strand-swatch"
                    style={{ background: lesson.strandInfo.color }}
                  />
                  <span className="search-result-copy">
                    <strong>{lesson.title}</strong>
                    <span>
                      {lesson.levelTitle} · {lesson.grades} · {lesson.minutes} 分鐘
                    </span>
                  </span>
                  <Icon name="arrowUpRight" size={16} />
                </button>
              ))}
            </div>
          )}

          {!query.trim() && (
            <p className="search-footnote">
              小提示：打開一節課，再用“做 20 道題”鞏固它。
            </p>
          )}
        </div>
        <div className="search-dialog-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> 移動</span>
          <span><kbd>↵</kbd> 打開</span>
          <span><kbd>esc</kbd> 關閉</span>
        </div>
      </div>
    </div>
  );
}
