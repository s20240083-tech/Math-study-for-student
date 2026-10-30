import { useEffect, useMemo, useState } from "react";
import { Icon, ProgressRing } from "../components/Icons.jsx";
import {
  CURRICULUM,
  LEVEL_MAP,
  STAGES,
  STRANDS,
  TOTAL_LESSONS,
  TOTAL_MINUTES,
  TOTAL_QUESTIONS,
} from "../data/curriculum.js";
import { getLevelProgress, getLessonMastery } from "../lib/progress.js";
import { formatMinutes, pluralize } from "../lib/utils.js";

export function LearnPage({ progress, levelId, strandParam, navigate }) {
  const defaultLevel =
    (strandParam &&
      CURRICULUM.find((level) =>
        level.lessons.some((lesson) => lesson.strand === strandParam),
      )) ||
    CURRICULUM.find(
      (level) => getLevelProgress(progress, level).completed < level.lessons.length,
    ) ||
    CURRICULUM[0];

  const selectedLevel =
    (levelId && LEVEL_MAP.get(levelId)) || defaultLevel;
  const stage = selectedLevel.stage;
  const [strandFilter, setStrandFilter] = useState(strandParam || "All");

  useEffect(() => {
    setStrandFilter(strandParam || "All");
  }, [strandParam]);

  const stageLevels = useMemo(
    () => CURRICULUM.filter((level) => level.stage === stage),
    [stage],
  );

  const levelProgress = getLevelProgress(progress, selectedLevel);
  const levelMinutes = selectedLevel.lessons.reduce(
    (sum, lesson) => sum + lesson.minutes,
    0,
  );

  const nextLessonInLevel =
    selectedLevel.lessons.find(
      (lesson) => !progress.completedLessons.includes(lesson.id),
    ) || selectedLevel.lessons[0];

  const availableStrands = useMemo(() => {
    const set = new Set(selectedLevel.lessons.map((lesson) => lesson.strand));
    return ["All", ...Array.from(set)];
  }, [selectedLevel]);

  const visibleLessons =
    strandFilter === "All"
      ? selectedLevel.lessons
      : selectedLevel.lessons.filter((lesson) => lesson.strand === strandFilter);

  const completedInStage = stageLevels.reduce(
    (sum, level) => sum + getLevelProgress(progress, level).completed,
    0,
  );
  const lessonsInStage = stageLevels.reduce(
    (sum, level) => sum + level.lessons.length,
    0,
  );

  return (
    <div className="page learn-page">
      <section className="learn-heading">
        <div>
          <p className="eyebrow with-dot">
            <span className="live-dot" />
            課程地圖
          </p>
          <h1>
            每個概念，<span className="display-italic">都在恰當的順序裡。</span>
          </h1>
          <p className="page-sub">
            六個相互銜接的階段，從數數一路走到微積分，
            不留缺口，也不靠猜。
          </p>
        </div>
        <div className="learn-overview">
          <div>
            <strong>{TOTAL_LESSONS}</strong>
            <span>節課</span>
          </div>
          <div>
            <strong>{TOTAL_QUESTIONS}</strong>
            <span>個檢查點</span>
          </div>
          <div>
            <strong>{Math.round(TOTAL_MINUTES / 60)}</strong>
            <span>小時閱讀</span>
          </div>
        </div>
      </section>

      <div className="stage-tabs" role="tablist" aria-label="學習階段">
        {STAGES.map((item) => {
          const stageLevelList = CURRICULUM.filter((level) => level.stage === item.id);
          const first = stageLevelList[0];
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={stage === item.id}
              className={`stage-tab ${stage === item.id ? "is-active" : ""}`}
              onClick={() => {
                if (stage === item.id) return;
                navigate(`/learn/${first.id}`);
              }}
            >
              <span className="stage-tab-label">{item.label}</span>
              <span className="stage-tab-grades">{item.grades}</span>
            </button>
          );
        })}
        <div className="stage-tab-note">
          本階段已完成 {completedInStage} / {lessonsInStage} 節課
        </div>
      </div>

      <div className={`level-picker cols-${stageLevels.length}`}>
        {stageLevels.map((item) => {
          const itemProgress = getLevelProgress(progress, item);
          const active = item.id === selectedLevel.id;
          return (
            <button
              key={item.id}
              className={`level-pick ${active ? "is-active" : ""}`}
              style={{ "--level-accent": item.accent, "--level-soft": item.soft }}
              onClick={() => navigate(`/learn/${item.id}`)}
              aria-pressed={active}
            >
              <span className="level-pick-number">
                {String(item.index).padStart(2, "0")}
              </span>
              <span className="level-pick-copy">
                <span className="level-pick-meta">
                  {item.grades} · {item.lessons.length} 節課
                </span>
                <strong>{item.title}</strong>
                <span className="level-pick-line">
                  <span style={{ width: `${itemProgress.percent}%` }} />
                </span>
              </span>
              <span className="level-pick-percent">{itemProgress.percent}%</span>
            </button>
          );
        })}
      </div>

      <section
        className="level-panel"
        style={{ "--level-accent": selectedLevel.accent, "--level-soft": selectedLevel.soft }}
      >
        <div className="level-panel-head">
          <div className="level-panel-title">
            <span className="level-panel-number">{String(selectedLevel.index).padStart(2, "0")}</span>
            <div>
              <div className="level-panel-meta">
                {STAGES.find((item) => item.id === selectedLevel.stage)?.label || selectedLevel.stage} · {selectedLevel.grades} · {selectedLevel.ages}
              </div>
              <h2>{selectedLevel.title}</h2>
              <p>{selectedLevel.description}</p>
            </div>
          </div>
          <div className="level-panel-actions">
            <div className="level-panel-progress">
              <ProgressRing value={levelProgress.percent} size={76} stroke={6}>
                <strong>{levelProgress.percent}%</strong>
              </ProgressRing>
              <div>
                <strong>
                  已完成 {levelProgress.completed} / {levelProgress.total} 節
                </strong>
                <span>約 {formatMinutes(levelMinutes)} 的學習</span>
              </div>
            </div>
            <button
              className="button button-dark"
              onClick={() => navigate(`/lesson/${nextLessonInLevel.id}`)}
            >
              {levelProgress.completed === 0
                ? "開始本階段"
                : levelProgress.completed === levelProgress.total
                  ? "複習本階段"
                  : "繼續本階段"}
              <Icon name="arrowRight" size={17} />
            </button>
          </div>
        </div>

        <div className="level-toolbar">
          <div className="filter-chips" aria-label="按主題篩選課程">
            {availableStrands.map((strandKey) => {
              const count =
                strandKey === "All"
                  ? selectedLevel.lessons.length
                  : selectedLevel.lessons.filter(
                      (lesson) => lesson.strand === strandKey,
                    ).length;
              return (
                <button
                  key={strandKey}
                  className={`filter-chip ${strandFilter === strandKey ? "is-active" : ""}`}
                  onClick={() => setStrandFilter(strandKey)}
                >
                  {strandKey === "All" ? "全部主題" : STRANDS[strandKey]?.label || strandKey}
                  <span>{count}</span>
                </button>
              );
            })}
          </div>
          <span className="toolbar-count">
            {pluralize(visibleLessons.length, "節課")}
          </span>
        </div>

        <div className="lesson-list">
          {visibleLessons.map((lesson, index) => {
            const complete = progress.completedLessons.includes(lesson.id);
            const mastery = getLessonMastery(progress, lesson.id);
            const attempted = (progress.lessonStats[lesson.id]?.attempts || 0) > 0;
            return (
              <button
                key={lesson.id}
                className={`lesson-row ${complete ? "is-complete" : ""}`}
                onClick={() => navigate(`/lesson/${lesson.id}`)}
              >
                <span className="lesson-row-index">
                  {complete ? <Icon name="check" size={16} /> : String(index + 1).padStart(2, "0")}
                </span>
                <span className="lesson-row-main">
                  <span className="lesson-row-title">
                    <strong>{lesson.title}</strong>
                    <span
                      className="strand-dot-label"
                      style={{ color: lesson.strandInfo.color }}
                    >
                      <span
                        className="strand-swatch"
                        style={{ background: lesson.strandInfo.color }}
                      />
                      {lesson.strandLabel}
                    </span>
                  </span>
                  <span className="lesson-row-summary">{lesson.summary}</span>
                </span>
                <span className="lesson-row-aside">
                  {attempted && (
                    <span className={`mastery-pill ${complete ? "is-good" : ""}`}>
                      掌握度 {mastery}%
                    </span>
                  )}
                  <span className="lesson-minutes">{lesson.minutes} 分鐘</span>
                  <span className="lesson-go">
                    <Icon name="arrowRight" size={17} />
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {visibleLessons.length === 0 && (
          <div className="empty-state">
            <span className="empty-mark">∅</span>
            <h3>這個主題下還沒有課程。</h3>
            <p>換個篩選，繼續探索這一階段。</p>
            <button className="button button-quiet" onClick={() => setStrandFilter("All")}>
              顯示全部課程
            </button>
          </div>
        )}
      </section>

      <section className="learn-next">
        <div>
          <span className="eyebrow">關於順序</span>
          <h3>不必從頭開始。</h3>
          <p>
            路徑有順序，但沒有上鎖。如果你已經會某個主題，可以先練習檢驗，再繼續前進。如果一節課感覺吃力，前一節課通常藏著缺少的那塊拼圖。
          </p>
        </div>
        <button className="button button-quiet" onClick={() => navigate("/practice")}>
          在練習中找到你的位置
          <Icon name="arrowRight" size={16} />
        </button>
      </section>
    </div>
  );
}
