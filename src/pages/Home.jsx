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
            {greeting}。<span className="display-italic">一次一个概念。</span>
          </h1>
          <p className="page-sub">
            一条完整的数学学习路径，从最初的数字到最终的考试。
            从你停下的地方继续。
          </p>
        </div>
        <button
          className="button button-quiet home-quick-button"
          onClick={() => navigate("/practice")}
        >
          <Icon name="practice" size={17} />
          快速练习
        </button>
      </section>

      <div className="home-hero-grid">
        <section className="continue-card">
          <div className="continue-copy">
            <div className="continue-kicker">
              <span className="eyebrow eyebrow-light">
                {isNextComplete ? "值得重温的一课" : "继续上次的学习"}
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
                <Icon name="clock" size={15} /> {nextLesson.minutes} 分钟
              </span>
              <span>
                <Icon name="check" size={15} /> 已完成 {levelProgress.completed} /{" "}
                {levelProgress.total} 节
              </span>
            </div>
            <div className="continue-actions">
              <button
                className="button button-coral"
                onClick={() => navigate(`/lesson/${nextLesson.id}`)}
              >
                {isNextComplete ? "复习这一课" : "继续学习"}
                <Icon name="arrowRight" size={17} />
              </button>
              <button
                className="button button-ghost-light"
                onClick={() => navigate(`/practice/lesson/${nextLesson.id}`)}
              >
                20 道练习
              </button>
            </div>
            <div className="continue-progress">
              <div className="continue-progress-label">
                <span>{level.title} · 进度</span>
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
              <span className="eyebrow">今日节奏</span>
              <h3>给数学一点时间。</h3>
            </div>
            <ProgressRing value={dailyPercent} size={76} stroke={6}>
              <strong>{dailyPercent}%</strong>
              <span>目标</span>
            </ProgressRing>
          </div>

          <div className="daily-stats">
            <div>
              <strong>{today.xp}</strong>
              <span>目标 {DAILY_GOAL} XP</span>
            </div>
            <div>
              <strong>{today.questions}</strong>
              <span>道题</span>
            </div>
            <div>
              <strong>{today.lessons}</strong>
              <span>节课</span>
            </div>
          </div>

          {hasWeekActivity ? (
            <div className="week-chart" aria-label="本周学习活动">
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
                <strong>本周还没有练习。</strong>
                <span>一次短短的练习，就能开始留下痕迹。</span>
              </div>
            </div>
          )}

          <div className="streak-strip">
            <span className="streak-flame"><Icon name="flame" size={19} /></span>
            <div>
              <strong>连续学习 {activeStreak} 天</strong>
              <span>
                {activeStreak > 0
                  ? "今天也保持下去。"
                  : "答一道题就开始。"}
              </span>
            </div>
            <button
              className="text-link"
              onClick={() => navigate("/practice")}
              aria-label="开始一次练习"
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
            <h2>你的路径：从数数到微积分。</h2>
          </div>
          <button className="text-link with-arrow" onClick={() => navigate("/learn")}>
            浏览全部课程
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
                    <span className="level-done" title="阶段已完成">
                      <Icon name="check" size={15} />
                    </span>
                  ) : current ? (
                    <span className="level-now">下一阶段</span>
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
                    {itemProgress.completed}/{itemProgress.total} 节课
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
              <span className="eyebrow">跟随好奇心</span>
              <h2>按主题浏览。</h2>
            </div>
            <span className="section-note">{stats.completion}% 的路径已完成</span>
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
                      <span>{count} 节课</span>
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
            数学不是关于数字、方程、计算或算法的：
            它是关于<em>理解</em>的。
          </p>
          <div className="note-rule" />
          <p className="note-caption">
            不设年级，不必赶路。{TOTAL_LESSONS} 节课，一步一步来。
          </p>
          <cite className="note-cite">威廉·保罗·瑟斯顿</cite>
          <button
            className="button button-dark note-button"
            onClick={() => navigate(`/lesson/${nextLesson.id}`)}
          >
            打开今天的课
            <Icon name="arrowRight" size={16} />
          </button>
        </aside>
      </div>
    </div>
  );
}
