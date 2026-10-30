import { Icon, ProgressRing } from "../components/Icons.jsx";
import {
  CURRICULUM,
  LEVEL_MAP,
  STRANDS,
  TOTAL_LESSONS,
} from "../data/curriculum.js";
import {
  DAILY_GOAL,
  getActiveStreak,
  getContinueLesson,
  getDailyPercent,
  getLevelProgress,
  getOverallStats,
  getToday,
  getWeek,
} from "../lib/progress.js";
import { formatLongDate, getGreeting, pluralize } from "../lib/utils.js";

export function HomePage({ progress, navigate }) {
  const nextLesson = getContinueLesson(progress);
  const level = LEVEL_MAP.get(nextLesson.levelId);
  const levelProgress = getLevelProgress(progress, level);
  const stats = getOverallStats(progress);
  const today = getToday(progress);
  const dailyPercent = getDailyPercent(progress);
  const week = getWeek(progress);
  const hasWeekActivity = week.some((day) => day.xp > 0);
  const maxWeekXp = Math.max(DAILY_GOAL, ...week.map((day) => day.xp));
  const isNextComplete = progress.completedLessons.includes(nextLesson.id);
  const greeting = getGreeting();
  const activeStreak = getActiveStreak(progress);

  return (
    <div className="page home-page">
      <section className="home-heading">
        <div>
          <p className="eyebrow with-dot">
            <span className="live-dot" />
            {formatLongDate()}
          </p>
          <h1>
            {greeting}。<span className="display-italic">一次一個概念。</span>
          </h1>
          <p className="page-sub">
            一條完整的數學學習路徑，從最初的數字到最終的考試。
            從你停下的地方繼續。
          </p>
        </div>
        <button
          className="button button-quiet home-quick-button"
          onClick={() => navigate("/practice")}
        >
          <Icon name="practice" size={17} />
          快速練習
        </button>
      </section>

      <div className="home-hero-grid">
        <section className="continue-card">
          <div className="continue-copy">
            <div className="continue-kicker">
              <span className="eyebrow eyebrow-light">
                {isNextComplete ? "值得重溫的一課" : "繼續上次的學習"}
              </span>
              <span className="continue-level">
                {level.title} <span>·</span> {level.grades}
              </span>
            </div>
            <h2>{nextLesson.title}</h2>
            <p className="continue-summary">{nextLesson.summary}</p>
            <div className="continue-meta">
              <span>
                <Icon name="layers" size={15} /> {nextLesson.strandLabel}
              </span>
              <span>
                <Icon name="clock" size={15} /> {nextLesson.minutes} 分鐘
              </span>
              <span>
                <Icon name="check" size={15} /> 已完成 {levelProgress.completed} /{" "}
                {levelProgress.total} 節
              </span>
            </div>
            <div className="continue-actions">
              <button
                className="button button-coral"
                onClick={() => navigate(`/lesson/${nextLesson.id}`)}
              >
                {isNextComplete ? "複習這一課" : "繼續學習"}
                <Icon name="arrowRight" size={17} />
              </button>
              <button
                className="button button-ghost-light"
                onClick={() => navigate(`/practice/lesson/${nextLesson.id}`)}
              >
                20 道練習
              </button>
            </div>
            <div className="continue-progress">
              <div className="continue-progress-label">
                <span>{level.title} · 進度</span>
                <span>{levelProgress.percent}%</span>
              </div>
              <div className="progress-track progress-track-light">
                <span style={{ width: `${levelProgress.percent}%` }} />
              </div>
            </div>
          </div>

          <div className="continue-art" aria-hidden="true">
            <svg viewBox="0 0 320 320" fill="none">
              <circle cx="160" cy="160" r="124" stroke="rgba(247,242,232,.12)" />
              <circle cx="160" cy="160" r="90" stroke="rgba(247,242,232,.16)" />
              <circle cx="160" cy="160" r="54" stroke="rgba(247,242,232,.22)" />
              <path
                d="M44 224A124 124 0 0 1 224 44"
                stroke="rgba(233,199,103,.8)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <path
                d="M96 252 252 96"
                stroke="rgba(228,102,58,.85)"
                strokeWidth="2"
              />
              <path
                d="M160 160 224 96"
                stroke="rgba(247,242,232,.5)"
                strokeWidth="1.5"
              />
              <circle cx="160" cy="160" r="5" fill="#F7F2E8" />
              <circle cx="224" cy="96" r="7" fill="#E4663A" />
              <circle cx="96" cy="252" r="5" fill="#E9C767" />
              <text
                x="76"
                y="92"
                fill="rgba(247,242,232,.7)"
                fontSize="12"
                fontFamily="DM Sans, sans-serif"
                letterSpacing="2"
              >
                {String(level.index).padStart(2, "0")} / 06
              </text>
              <text
                x="172"
                y="264"
                fill="rgba(247,242,232,.5)"
                fontSize="13"
                fontFamily="Fraunces, Georgia, serif"
                fontStyle="italic"
              >
                a² + b² = c²
              </text>
            </svg>
            <span className="art-index">{String(level.index).padStart(2, "0")}</span>
          </div>
        </section>

        <aside className="daily-card">
          <div className="card-heading-row">
            <div>
              <span className="eyebrow">今日節奏</span>
              <h3>給數學一點時間。</h3>
            </div>
            <ProgressRing value={dailyPercent} size={76} stroke={6}>
              <strong>{dailyPercent}%</strong>
              <span>目標</span>
            </ProgressRing>
          </div>

          <div className="daily-stats">
            <div>
              <strong>{today.xp}</strong>
              <span>目標 {DAILY_GOAL} XP</span>
            </div>
            <div>
              <strong>{today.questions}</strong>
              <span>道題</span>
            </div>
            <div>
              <strong>{today.lessons}</strong>
              <span>節課</span>
            </div>
          </div>

          {hasWeekActivity ? (
            <div className="week-chart" aria-label="本週學習活動">
              {week.map((day) => (
                <div className="week-day" key={day.key}>
                  <div className="week-bar-track">
                    <span
                      className={`week-bar ${day.isToday ? "is-today" : ""}`}
                      style={{
                        height: `${Math.max(6, Math.round((day.xp / maxWeekXp) * 100))}%`,
                      }}
                      title={`${day.fullLabel}: ${day.xp} XP`}
                    />
                  </div>
                  <span className={`week-label ${day.isToday ? "is-today" : ""}`}>
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="week-empty">
              <span className="week-empty-icon">
                <Icon name="spark" size={16} />
              </span>
              <div>
                <strong>本週還沒有練習。</strong>
                <span>一次短短的練習，就能開始留下痕跡。</span>
              </div>
            </div>
          )}

          <div className="streak-strip">
            <span className="streak-flame"><Icon name="flame" size={19} /></span>
            <div>
              <strong>連續學習 {activeStreak} 天</strong>
              <span>
                {activeStreak > 0
                  ? "今天也保持下去。"
                  : "答一道題就開始。"}
              </span>
            </div>
            <button
              className="text-link"
              onClick={() => navigate("/practice")}
              aria-label="開始一次練習"
            >
              <Icon name="arrowRight" size={17} />
            </button>
          </div>
        </aside>
      </div>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">完整旅程</span>
            <h2>你的路徑：從數數到微積分。</h2>
          </div>
          <button className="text-link with-arrow" onClick={() => navigate("/learn")}>
            瀏覽全部課程
            <Icon name="arrowRight" size={16} />
          </button>
        </div>

        <div className="level-grid">
          {CURRICULUM.map((item) => {
            const itemProgress = getLevelProgress(progress, item);
            const current = item.id === nextLesson.levelId;
            const complete = itemProgress.completed === itemProgress.total;
            return (
              <button
                key={item.id}
                className={`level-card ${current ? "is-current" : ""} ${
                  complete ? "is-complete" : ""
                }`}
                style={{ "--level-accent": item.accent, "--level-soft": item.soft }}
                onClick={() => navigate(`/learn/${item.id}`)}
              >
                <div className="level-card-top">
                  <span className="level-number">
                    {String(item.index).padStart(2, "0")}
                  </span>
                  <span className="level-stage">{item.grades}</span>
                  {complete ? (
                    <span className="level-done" title="階段已完成">
                      <Icon name="check" size={15} />
                    </span>
                  ) : current ? (
                    <span className="level-now">下一階段</span>
                  ) : null}
                </div>
                <div className="level-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                </div>
                <div className="level-card-foot">
                  <div className="level-progress-line">
                    <span style={{ width: `${itemProgress.percent}%` }} />
                  </div>
                  <span>
                    {itemProgress.completed}/{itemProgress.total} 節課
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <div className="home-lower-grid">
        <section className="strand-panel">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">跟隨好奇心</span>
              <h2>按主題瀏覽。</h2>
            </div>
            <span className="section-note">{stats.completion}% 的路徑已完成</span>
          </div>
          <div className="strand-grid">
            {["Number", "Algebra", "Geometry", "Data", "Functions", "Calculus"].map(
              (strandKey) => {
                const strand = STRANDS[strandKey];
                const strandLessons = CURRICULUM.flatMap((item) => item.lessons).filter(
                  (lesson) => lesson.strand === strandKey,
                );
                const count = strandLessons.length;
                const targetLevel = strandLessons[0]?.levelId || CURRICULUM[0].id;
                return (
                  <button
                    key={strandKey}
                    className="strand-card"
                    style={{ "--strand-color": strand.color, "--strand-soft": strand.soft }}
                    onClick={() => navigate(`/learn/${targetLevel}?strand=${strandKey}`)}
                  >
                    <span className="strand-icon">
                      <Icon name={strand.icon} size={21} />
                    </span>
                    <span className="strand-card-copy">
                      <strong>{strand.label}</strong>
                      <span>{count} 節課</span>
                    </span>
                    <Icon name="arrowUpRight" size={15} />
                  </button>
                );
              },
            )}
          </div>
        </section>

        <aside className="note-card">
          <span className="note-mark">“</span>
          <p className="note-quote">
            數學不是關於數字、方程、計算或算法的：
            它是關於<em>理解</em>的。
          </p>
          <div className="note-rule" />
          <p className="note-caption">
            不設年級，不必趕路。{TOTAL_LESSONS} 節課，一步一步來。
          </p>
          <cite className="note-cite">威廉·保羅·瑟斯頓</cite>
          <button
            className="button button-dark note-button"
            onClick={() => navigate(`/lesson/${nextLesson.id}`)}
          >
            打開今天的課
            <Icon name="arrowRight" size={16} />
          </button>
        </aside>
      </div>
    </div>
  );
}
