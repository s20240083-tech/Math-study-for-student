import { useMemo, useState } from "react";
import { Icon, ProgressRing } from "../components/Icons.jsx";
import { CURRICULUM, TOTAL_LESSONS } from "../data/curriculum.js";
import {
  getActiveStreak,
  getBadges,
  getContinueLesson,
  getHeatmap,
  getLevelProgress,
  getOverallStats,
  getRecentCompletions,
  getStrandMastery,
  getToday,
  getWeek,
} from "../lib/progress.js";
import { formatLongDate, pluralize } from "../lib/utils.js";

export function ProgressPage({ progress, navigate, onReset }) {
  const stats = getOverallStats(progress);
  const strands = getStrandMastery(progress);
  const badges = getBadges(progress);
  const heatmap = useMemo(() => getHeatmap(progress), [progress]);
  const week = getWeek(progress);
  const today = getToday(progress);
  const activeStreak = getActiveStreak(progress);
  const recent = getRecentCompletions(progress, 4);
  const nextLesson = getContinueLesson(progress);
  const [confirmReset, setConfirmReset] = useState(false);

  const weekXp = week.reduce((sum, day) => sum + day.xp, 0);
  const weekQuestions = week.reduce((sum, day) => sum + day.questions, 0);
  const maxWeekXp = Math.max(10, ...week.map((day) => day.xp));
  const activeStrands = strands.filter((strand) => strand.attempts > 0).length;
  const levelProgresses = CURRICULUM.map((level) => ({
    level,
    progress: getLevelProgress(progress, level),
  }));

  return (
    <div className="page progress-page">
      <section className="progress-heading">
        <div>
          <p className="eyebrow with-dot">
            <span className="live-dot" />
            你的學習記錄
          </p>
          <h1>
            進度，<span className="display-italic">如實記錄。</span>
          </h1>
          <p className="page-sub">
            不製造打卡焦慮，也不和別人比較。只清楚呈現你會什麼、遇見過什麼、下一步去哪裡。
          </p>
        </div>
        <div className="progress-date-card">
          <span className="eyebrow">今日概覽</span>
          <strong>{formatLongDate()}</strong>
          <span>今日獲得 {today.xp} XP</span>
        </div>
      </section>

      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-icon"><Icon name="layers" size={19} /></span>
          <div className="stat-value">
            <strong>{stats.lessonsComplete}</strong>
            <span>/ {TOTAL_LESSONS} 節</span>
          </div>
          <span className="stat-label">已完成課程</span>
          <div className="stat-bar">
            <span style={{ width: `${stats.completion}%` }} />
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon"><Icon name="target" size={19} /></span>
          <div className="stat-value">
            <strong>{stats.attempts ? `${stats.accuracy}%` : "—"}</strong>
          </div>
          <span className="stat-label">
            正確率 · 共 {pluralize(stats.attempts, "道題")}
          </span>
          <div className="stat-bar stat-bar-alt">
            <span style={{ width: `${stats.accuracy}%` }} />
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon"><Icon name="flame" size={19} /></span>
          <div className="stat-value">
            <strong>{activeStreak}</strong>
            <span>天</span>
          </div>
          <span className="stat-label">當前連續學習</span>
          <span className="stat-footnote">
            {activeStreak > 0 ? "保持輕鬆而規律的節奏。" : "從一道題開始。"}
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-icon"><Icon name="spark" size={19} /></span>
          <div className="stat-value">
            <strong>{progress.xp}</strong>
            <span>XP</span>
          </div>
          <span className="stat-label">累計經驗</span>
          <span className="stat-footnote">
            已探索 {activeStrands} / {strands.length} 個主題
          </span>
        </div>
      </div>

      <div className="progress-main-grid">
        <section className="mastery-panel">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">你的掌握情況</span>
              <h2>各主題掌握度。</h2>
            </div>
            <span className="section-note">基於你的每一次作答</span>
          </div>
          <div className="mastery-list">
            {strands.map((strand) => (
              <div className="mastery-row" key={strand.strand}>
                <span
                  className="mastery-icon"
                  style={{ color: strand.color, background: strand.soft }}
                >
                  <Icon name={strand.icon} size={17} />
                </span>
                <span className="mastery-name">
                  <strong>{strand.label}</strong>
                  <span>{pluralize(strand.lessons, "節課")}</span>
                </span>
                <span className="mastery-bar-wrap">
                  <span className="mastery-bar">
                    <span
                      style={{
                        width: `${strand.mastery}%`,
                        background: strand.color,
                      }}
                    />
                  </span>
                </span>
                <span className={`mastery-value ${strand.attempts ? "" : "is-empty"}`}>
                  {strand.attempts ? `${strand.mastery}%` : "—"}
                </span>
              </div>
            ))}
          </div>
          <div className="mastery-foot">
            <Icon name="lightbulb" size={16} />
            <span>
              掌握度會隨著作答變化。低分不是判決，而是邀請你再來一次。
            </span>
          </div>
        </section>

        <aside className="next-move-card">
          <div className="next-move-glow" aria-hidden="true" />
          <span className="eyebrow eyebrow-light">下一步</span>
          <h2>
            {stats.lessonsComplete === TOTAL_LESSONS
              ? "你已走完整條路徑。"
              : "保持連續性。"}
          </h2>
          <p>
            {stats.lessonsComplete === TOTAL_LESSONS
              ? "重溫一個主題，或做一次更長的練習，讓所有知識保持鋒利。"
              : "下一小步已經選好，你只需要打開它。"}
          </p>
          <div className="next-move-lesson">
            <span className="next-move-number">
              {String(nextLesson.order + 1).padStart(2, "0")}
            </span>
            <div>
              <span>{nextLesson.levelTitle} · {nextLesson.grades}</span>
              <strong>{nextLesson.title}</strong>
            </div>
          </div>
          <button
            className="button button-coral button-full"
            onClick={() => navigate(`/lesson/${nextLesson.id}`)}
          >
            {stats.lessonsComplete === TOTAL_LESSONS ? "複習一節課" : "打開下一課"}
            <Icon name="arrowRight" size={16} />
          </button>
          <div className="next-move-ring">
            <ProgressRing value={stats.completion} size={68} stroke={5}>
              <strong>{stats.completion}%</strong>
            </ProgressRing>
            <span>完整路徑已完成</span>
          </div>
          <div className="next-move-path">
            <div className="next-move-path-head">
              <span className="eyebrow eyebrow-light">完整路徑</span>
              <span>已完成 {stats.levelsComplete} / {CURRICULUM.length} 個階段</span>
            </div>
            <div className="path-markers">
              {levelProgresses.map(({ level, progress: levelProgress }) => {
                const complete = levelProgress.completed === levelProgress.total;
                const current = level.id === nextLesson.levelId;
                return (
                  <span
                    key={level.id}
                    className={`path-marker ${complete ? "is-complete" : ""} ${
                      current ? "is-current" : ""
                    }`}
                    title={`${level.title}: ${levelProgress.percent}%`}
                  >
                    {complete ? (
                      <Icon name="check" size={11} />
                    ) : (
                      String(level.index).padStart(2, "0")
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      <section className="activity-panel">
        <div className="activity-head">
          <div>
            <span className="eyebrow">學習節奏</span>
            <h2>每一天，一個小方塊。</h2>
          </div>
          <div className="activity-summary">
            <div>
              <strong>{weekXp}</strong>
              <span>本週 XP</span>
            </div>
            <div>
              <strong>{weekQuestions}</strong>
              <span>本週答題</span>
            </div>
          </div>
        </div>

        <div className="activity-body">
          <div className="heatmap-wrap">
            <div className="heatmap" aria-label="最近十二週的學習活動">
              {heatmap.map((weekColumn, weekIndex) => (
                <div className="heatmap-week" key={weekIndex}>
                  {weekColumn.map((day) => (
                    <span
                      key={day.key}
                      className={`heatmap-cell level-${day.level}`}
                      title={`${new Intl.DateTimeFormat("zh-Hant", {
                        month: "short",
                        day: "numeric",
                      }).format(day.date)}: ${day.xp} XP`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="heatmap-legend">
              <span>少</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span key={level} className={`heatmap-cell level-${level}`} />
              ))}
              <span>多</span>
            </div>
          </div>

          <div className="week-summary">
            {week.map((day) => (
              <div className="week-summary-row" key={day.key}>
                <span className={`week-summary-day ${day.isToday ? "is-today" : ""}`}>
                  {day.label}
                </span>
                <span className="week-summary-track">
                  <span style={{ width: `${Math.max(4, (day.xp / maxWeekXp) * 100)}%` }} />
                </span>
                <span className="week-summary-value">{day.xp > 0 ? `${day.xp} XP` : "—"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="progress-lower">
        <section className="recent-panel">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">最近完成</span>
              <h2>已經走過的課程。</h2>
            </div>
            <span className="section-note">共 {stats.lessonsComplete} 節</span>
          </div>
          {recent.length === 0 ? (
            <div className="recent-empty">
              <span className="empty-mark">∅</span>
              <div>
                <h3>還沒有完成的課程。</h3>
                <p>完成一節課後，它會帶著主題和日期出現在這裡。</p>
                <button
                  className="button button-dark button-small"
                  onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                >
                  從《{nextLesson.title}》開始
                </button>
              </div>
            </div>
          ) : (
            <div className="recent-list">
              {recent.map((lesson) => {
                const completedDate = progress.completedAt[lesson.id]
                  ? new Intl.DateTimeFormat("zh-Hant", {
                      month: "short",
                      day: "numeric",
                    }).format(new Date(progress.completedAt[lesson.id]))
                  : "";
                return (
                  <button
                    key={lesson.id}
                    className="recent-item"
                    onClick={() => navigate(`/lesson/${lesson.id}`)}
                  >
                    <span className="recent-check"><Icon name="check" size={15} /></span>
                    <span className="recent-copy">
                      <strong>{lesson.title}</strong>
                      <span>{lesson.levelTitle} · {lesson.strandLabel}</span>
                    </span>
                    <span className="recent-date">{completedDate}</span>
                    <Icon name="arrowUpRight" size={15} />
                  </button>
                );
              })}
            </div>
          )}
        </section>

        <section className="badges-panel">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">里程碑</span>
              <h2>一小步，也值得記下。</h2>
            </div>
            <span className="section-note">
              {badges.filter((badge) => badge.unlocked).length}/{badges.length}
            </span>
          </div>
          <div className="badge-grid">
            {badges.map((badge) => (
              <div
                className={`achievement ${badge.unlocked ? "is-unlocked" : ""}`}
                key={badge.id}
                title={badge.description}
              >
                <span className="achievement-icon">
                  <Icon name={badge.unlocked ? badge.icon : "lock"} size={18} />
                </span>
                <div>
                  <strong>{badge.title}</strong>
                  <span>{badge.description}</span>
                  {!badge.unlocked && (
                    <span className="achievement-progress">
                      {badge.progress}/{badge.target} {badge.unit}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="progress-footer">
        <div>
          <strong>所有數據都保存在這臺設備上。</strong>
          <p>沒有賬號，沒有云端，也沒有別人能看到你的學習記錄。</p>
        </div>
        {confirmReset ? (
          <div className="reset-confirm">
            <span>清除所有課程、答題和 XP？</span>
            <button
              className="button button-danger button-small"
              onClick={() => {
                onReset();
                setConfirmReset(false);
              }}
            >
              確認重置
            </button>
            <button className="text-link" onClick={() => setConfirmReset(false)}>
              取消
            </button>
          </div>
        ) : (
          <button className="text-link reset-link" onClick={() => setConfirmReset(true)}>
            <Icon name="reset" size={15} />
            重置進度
          </button>
        )}
      </footer>
    </div>
  );
}
