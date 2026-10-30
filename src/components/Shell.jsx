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
  { id: "learn", label: "学习", href: "/learn", icon: "learn" },
  { id: "practice", label: "练习", href: "/practice", icon: "practice" },
  { id: "progress", label: "进度", href: "/progress", icon: "progress" },
];

const PAGE_LABELS = {
  today: "今日",
  learn: "课程",
  lesson: "课时",
  practice: "练习",
  progress: "进度",
};

export function Sidebar({ page, progress, navigate }) {
  const dailyPercent = getDailyPercent(progress);
  const today = getToday(progress);

  return (
    <aside className="sidebar">
      <button
        className="sidebar-brand"
        onClick={() => navigate("/home")}
        aria-label="Summa 产品介绍"
      >
        <Logo />
      </button>

      <div className="sidebar-section-label">你的空间</div>
      <nav className="sidebar-nav" aria-label="主导航">
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
          <span className="eyebrow">每日节奏</span>
          <span className="sidebar-goal-xp">{today.xp} / {DAILY_GOAL} XP</span>
        </div>
        <div className="mini-progress" aria-hidden="true">
          <span style={{ width: `${dailyPercent}%` }} />
        </div>
        <p className="sidebar-goal-copy">
          {dailyPercent >= 100
            ? "今日目标已完成，再做一点都是额外收获。"
            : "每天专注几分钟，就能保持学习的连续性。"}
        </p>
      </div>

      <div className="sidebar-spacer" />

      <div className="sidebar-profile">
        <span className="avatar">学</span>
        <span className="profile-copy">
          <strong>本地学习者</strong>
          <span>{progress.xp} XP · 已保存在本机</span>
        </span>
      </div>
      <div className="sidebar-footnote">
        <Icon name="bookOpen" size={14} />
        <span>{TOTAL_LESSONS} 节课 · 6–18 岁</span>
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
        aria-label="Summa 产品介绍"
      >
        <Logo compact />
      </button>
      <div className="topbar-crumb">
        <span>你的学习空间</span>
        <span className="crumb-slash">/</span>
        <strong>{PAGE_LABELS[page] || "今日"}</strong>
      </div>
      <div className="topbar-actions">
        <button className="search-trigger" onClick={onSearch} aria-label="搜索课程">
          <Icon name="search" size={17} />
          <span>搜索课程</span>
          <kbd>⌘K</kbd>
        </button>
        <div className="streak-pill" title={`${activeStreak} 天连续学习`}>
          <Icon name="flame" size={16} />
          <span>
            <strong>{activeStreak}</strong> 天
          </span>
        </div>
        <button
          className="avatar avatar-button"
          onClick={() => navigate("/progress")}
          aria-label="查看学习进度"
        >
          学
        </button>
      </div>
    </header>
  );
}

export function MobileNav({ page, navigate }) {
  return (
    <nav className="mobile-nav" aria-label="移动端导航">
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
        aria-label="搜索课程内容"
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="search-input-row">
          <Icon name="search" size={21} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索知识点、技能或年级…"
            aria-label="搜索知识点、技能或年级"
          />
          <button className="icon-button" onClick={onClose} aria-label="关闭搜索">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="search-results" aria-live="polite">
          <div className="search-section-head">
            <span>{query.trim() ? "课程" : "从这里开始"}</span>
            {query.trim() && <span>{results.length} 个结果</span>}
          </div>

          {visible.length === 0 ? (
            <div className="search-empty">
              <span className="search-empty-mark">∅</span>
              <p>没有找到与“{query}”匹配的课程，试试更宽泛的关键词，比如“分数”。</p>
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
                      {lesson.levelTitle} · {lesson.grades} · {lesson.minutes} 分钟
                    </span>
                  </span>
                  <Icon name="arrowUpRight" size={16} />
                </button>
              ))}
            </div>
          )}

          {!query.trim() && (
            <p className="search-footnote">
              小提示：打开一节课，再用“做 20 道题”巩固它。
            </p>
          )}
        </div>
        <div className="search-dialog-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> 移动</span>
          <span><kbd>↵</kbd> 打开</span>
          <span><kbd>esc</kbd> 关闭</span>
        </div>
      </div>
    </div>
  );
}
