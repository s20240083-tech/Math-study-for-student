import { useEffect, useMemo, useState } from "react";
import { Icon, ProgressRing } from "../components/Icons.jsx";
import {
  DIFFICULTIES,
  getLessonById,
  LEVEL_MAP,
  QUESTIONS,
  STRANDS,
} from "../data/curriculum.js";
import {
  getContinueLesson,
  getOverallStats,
  getStrandMastery,
  getToday,
  getWeakestLessons,
} from "../lib/progress.js";
import { getScoreMessage, isAnswerCorrect, pluralize } from "../lib/utils.js";

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function getPracticeCeiling(progress) {
  return (getContinueLesson(progress).levelIndex ?? 0) + 1;
}

function questionLevelIndex(question) {
  return LEVEL_MAP.get(question.levelId)?.index ?? 1;
}

function getRecentQuestionIds(progress) {
  return new Set(
    progress.activity
      .slice(0, 60)
      .map((entry) => entry.questionId)
      .filter(Boolean),
  );
}

function pickQuestions(progress, pool, length) {
  const recent = getRecentQuestionIds(progress);
  return [...pool]
    .map((question) => {
      const stats = progress.questionStats[question.id];
      const attempts = stats?.attempts || 0;
      const correct = stats?.correct || 0;
      let priority = Math.random() * 18;
      priority += attempts * 30;
      if (attempts > 0 && correct < attempts) priority -= 28;
      if (recent.has(question.id)) priority += 220;
      return { question, priority };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, Math.min(length, pool.length))
    .map((item) => item.question);
}

function getDifficultyPool(difficulty, ceiling) {
  if (difficulty === "mixed") {
    return QUESTIONS.filter((question) => questionLevelIndex(question) <= ceiling);
  }
  return QUESTIONS.filter((question) => question.difficulty === difficulty);
}

function buildSession(focus, length, progress, difficulty = "mixed") {
  const ceiling = getPracticeCeiling(progress);
  const difficultyInfo = difficulty === "mixed" ? null : DIFFICULTIES[difficulty];

  if (focus.startsWith("lesson:")) {
    const lessonId = focus.slice("lesson:".length);
    const lesson = getLessonById(lessonId);
    if (!lesson) return null;
    const levelQuestions = QUESTIONS.filter(
      (question) => question.levelId === lesson.levelId,
    );
    const own = levelQuestions.filter((question) => question.lessonId === lesson.id);
    const nearby = shuffle(
      levelQuestions.filter((question) => question.lessonId !== lesson.id),
    );
    const questions = [...own, ...nearby].slice(0, Math.min(length, levelQuestions.length));
    return {
      title: lesson.title,
      subtitle: `${lesson.levelTitle} · 本阶段强化 · ${questions.length} 道不重复的题`,
      focus,
      questions,
      source: "lesson",
      lessonId,
      strand: lesson.strand,
      difficulty: "mixed",
      difficultyLabel: "混合",
    };
  }

  if (focus.startsWith("strand:")) {
    const strand = focus.slice("strand:".length);
    const strandLabel = STRANDS[strand]?.label || strand;
    let pool = QUESTIONS.filter(
      (question) =>
        question.strand === strand &&
        (difficulty === "mixed"
          ? questionLevelIndex(question) <= ceiling
          : question.difficulty === difficulty),
    );
    if (pool.length < length) {
      const ids = new Set(pool.map((question) => question.id));
      const fallback = QUESTIONS.filter(
        (question) =>
          !ids.has(question.id) &&
          (difficulty === "mixed"
            ? questionLevelIndex(question) <= ceiling
            : question.difficulty === difficulty),
      );
      pool = [...pool, ...shuffle(fallback)];
    }
    const questions = pickQuestions(progress, pool, length);
    return {
      title: `${strandLabel}练习`,
      subtitle:
        difficulty === "mixed"
          ? `从你学过的概念中抽取 · ${questions.length} 道不重复的题`
          : `${difficultyInfo.label} · ${difficultyInfo.range}题库 · ${questions.length} 道题`,
      focus,
      questions,
      source: "strand",
      strand,
      difficulty,
      difficultyLabel: difficultyInfo?.label || "混合",
    };
  }

  const pool = getDifficultyPool(difficulty, ceiling);
  const questions = pickQuestions(progress, pool, length);
  return {
    title: difficulty === "mixed" ? "智能复习" : `${difficultyInfo.label}练习`,
    subtitle:
      difficulty === "mixed"
        ? `优先挑选你最需要巩固的概念 · ${questions.length} 道不重复的题`
        : `从${difficultyInfo.range}题库中抽取 · ${questions.length} 道不重复的题`,
    focus: "smart",
    questions,
    source: "smart",
    difficulty,
    difficultyLabel: difficultyInfo?.label || "混合",
  };
}

function SessionQuestion({
  question,
  selected,
  setSelected,
  input,
  setInput,
  checked,
  onCheck,
  onNext,
  isLast,
  index,
  total,
}) {
  const [showHint, setShowHint] = useState(false);
  const correct = checked ? isAnswerCorrect(selected ?? input, question) : false;
  const canCheck =
    question.type === "choice"
      ? selected !== null && selected !== undefined
      : String(input).trim().length > 0;

  useEffect(() => {
    setShowHint(false);
  }, [question.id]);

  return (
    <div className="session-card">
      <div className="session-card-head">
        <div className="session-question-meta">
          <span className="question-count">
            第 {index + 1} 题 <span>/ {total}</span>
          </span>
          <span
            className="strand-dot-label"
            style={{ color: question.strandInfo.color }}
          >
            <span
              className="strand-swatch"
              style={{ background: question.strandInfo.color }}
            />
            {question.strandLabel}
          </span>
          <span className={`difficulty-pill difficulty-${question.difficulty}`}>
            {question.difficultyLabel}
          </span>
        </div>
        <span className="session-lesson-label">{question.lessonTitle}</span>
      </div>

      <h1 className="session-prompt">{question.prompt}</h1>

      {question.type === "choice" ? (
        <div className="option-list session-options" role="group" aria-label={question.prompt}>
          {question.options.map((option, optionIndex) => {
            let stateClass = "";
            if (checked && optionIndex === question.answer) stateClass = "is-correct";
            else if (checked && optionIndex === selected) stateClass = "is-wrong";
            else if (!checked && optionIndex === selected) stateClass = "is-selected";
            return (
              <button
                key={option}
                className={`option ${stateClass}`}
                disabled={checked}
                onClick={() => setSelected(optionIndex)}
                aria-pressed={selected === optionIndex}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span>{option}</span>
                {checked && optionIndex === question.answer && (
                  <Icon name="check" size={18} />
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="session-input-wrap">
          <input
            className={`answer-input session-answer ${
              checked ? (correct ? "is-correct" : "is-wrong") : ""
            }`}
            value={input}
            onChange={(event) => !checked && setInput(event.target.value)}
            placeholder={question.placeholder || "输入答案"}
            aria-label={question.prompt}
            disabled={checked}
            autoComplete="off"
            spellCheck="false"
            inputMode="decimal"
            enterKeyHint="done"
            onKeyDown={(event) => {
              if (event.key === "Enter" && !checked && canCheck) onCheck();
              if (event.key === "Enter" && checked) onNext();
            }}
          />
        </div>
      )}

      {!checked && (
        <div className="session-tools">
          <button
            className="hint-button"
            onClick={() => setShowHint((visible) => !visible)}
            aria-expanded={showHint}
          >
            <Icon name="lightbulb" size={16} />
            {showHint ? "收起提示" : "需要提示吗？"}
          </button>
          <button className="button button-dark" onClick={onCheck} disabled={!canCheck}>
            检查答案
            <Icon name="arrowRight" size={16} />
          </button>
        </div>
      )}

      {showHint && !checked && (
        <div className="hint-box">
          <span className="hint-label">提示</span>
          <p>{question.hint}</p>
        </div>
      )}

      {checked && (
        <div
          className={`feedback-box session-feedback ${correct ? "is-correct" : "is-wrong"}`}
          aria-live="polite"
        >
          <div className="feedback-head">
            <span className="feedback-icon">
              <Icon name={correct ? "check" : "lightbulb"} size={17} />
            </span>
            <strong>{correct ? "完全正确。" : "还差一点。"}</strong>
            {!correct && (
              <span className="feedback-correct">
                正确答案：<strong>{question.type === "choice" ? question.options[question.answer] : question.answer}</strong>
              </span>
            )}
          </div>
          <p>{question.explanation}</p>
          <button className="button button-dark session-next" onClick={onNext}>
            {isLast ? "查看结果" : "下一题"}
            <Icon name="arrowRight" size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

function SessionResults({ session, results, onAgain, onExit, navigate }) {
  const correct = results.filter((result) => result.correct).length;
  const total = results.length;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  const missed = results.filter((result) => !result.correct);
  const xp = results.reduce((sum, result) => sum + (result.correct ? 10 : 2), 0);

  return (
    <div className="page results-page">
      <section className="results-hero">
        <div className="results-art" aria-hidden="true">
          {[...Array(12)].map((_, index) => (
            <span key={index} className={`confetti confetti-${index + 1}`} />
          ))}
          <ProgressRing value={accuracy} size={148} stroke={9}>
            <strong>{accuracy}%</strong>
            <span>正确率</span>
          </ProgressRing>
        </div>
        <div className="results-copy">
          <span className="eyebrow with-dot">
            <span className="live-dot" />
            练习完成
          </span>
          <h1>
            {total} 题中，<span className="display-italic">答对 {correct} 题。</span>
          </h1>
          <p>{getScoreMessage(correct, total)}</p>
          <div className="results-stats">
            <div>
              <strong>{correct}</strong>
              <span>答对</span>
            </div>
            <div>
              <strong>{total - correct}</strong>
              <span>待复习</span>
            </div>
            <div>
              <strong>+{xp}</strong>
              <span>获得 XP</span>
            </div>
          </div>
          <div className="results-actions">
            <button className="button button-coral" onClick={onAgain}>
              <Icon name="reset" size={16} />
              再练一次
            </button>
            <button className="button button-quiet" onClick={onExit}>
              返回练习
            </button>
          </div>
        </div>
      </section>

      <div className="results-lower">
        <section className="results-review">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">值得回看</span>
              <h2>{missed.length ? "这些题值得再看一遍。" : "没有漏网之鱼。"}</h2>
            </div>
            <span className="section-note">{session.title}</span>
          </div>
          {missed.length === 0 ? (
            <div className="perfect-note">
              <span className="finish-icon"><Icon name="spark" size={20} /></span>
              <div>
                <h3>全部答对。</h3>
                <p>
                  可以试试更长的练习，或者进入下一个概念。过几天再回来复习，会记得更牢。
                </p>
              </div>
            </div>
          ) : (
            <div className="missed-list">
              {missed.map((result) => (
                <div className="missed-item" key={result.question.id}>
                  <span className="missed-mark">×</span>
                  <div className="missed-copy">
                    <strong>{result.question.prompt}</strong>
                    <p>{result.question.explanation}</p>
                    <button
                      className="text-link with-arrow"
                      onClick={() => navigate(`/lesson/${result.question.lessonId}`)}
                    >
                      复习《{result.question.lessonTitle}》
                      <Icon name="arrowRight" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <aside className="results-aside">
          <span className="eyebrow">接下来</span>
          <h3>保持短而频的节奏。</h3>
          <p>
            明天练十分钟，比下周突击两小时更能帮助记忆。
          </p>
          <button className="button button-dark button-full" onClick={onExit}>
            规划下一次练习
            <Icon name="arrowRight" size={16} />
          </button>
          <button className="text-link" onClick={() => navigate("/today")}>
            回到今日
          </button>
        </aside>
      </div>
    </div>
  );
}

export function PracticePage({
  progress,
  focusLessonId,
  navigate,
  onAnswer,
  keySeed,
}) {
  const lesson = focusLessonId ? getLessonById(focusLessonId) : null;
  const [session, setSession] = useState(() =>
    lesson ? buildSession(`lesson:${lesson.id}`, 20, progress, "mixed") : null,
  );
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);
  const [focus, setFocus] = useState("smart");
  const [length, setLength] = useState(20);
  const [difficulty, setDifficulty] = useState("mixed");

  const overall = getOverallStats(progress);
  const today = getToday(progress);
  const weakest = getWeakestLessons(progress, 3);
  const continueLesson = getContinueLesson(progress);
  const strandCeiling = (continueLesson.levelIndex ?? 0) + 1;
  const strands = getStrandMastery(progress)
    .filter((strand) => strand.lessons > 0)
    .map((strand) => ({
      ...strand,
      availableLessons: new Set(
        QUESTIONS.filter(
          (question) =>
            question.strand === strand.strand &&
            questionLevelIndex(question) <= strandCeiling,
        ).map((question) => question.lessonId),
      ).size,
    }))
    .filter((strand) => strand.availableLessons > 0);

  const question = session && !finished ? session.questions[index] : null;

  useEffect(() => {
    if (!session) return;
    setIndex(0);
    setSelected(null);
    setInput("");
    setChecked(false);
    setResults([]);
    setFinished(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [keySeed, session?.title]);

  function startSession(nextFocus = focus, nextLength = length, nextDifficulty = difficulty) {
    const next = buildSession(nextFocus, nextLength, progress, nextDifficulty);
    if (!next || next.questions.length === 0) return;
    setSession(next);
    setIndex(0);
    setSelected(null);
    setInput("");
    setChecked(false);
    setResults([]);
    setFinished(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCheck() {
    if (!question || checked) return;
    const value = question.type === "choice" ? selected : input;
    const isRight = isAnswerCorrect(value, question);
    setChecked(true);
    setResults((current) => [
      ...current,
      { question, correct: isRight, response: value },
    ]);
    onAnswer(question, isRight);
  }

  function handleNext() {
    if (index + 1 >= session.questions.length) {
      setFinished(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setIndex((current) => current + 1);
    setSelected(null);
    setInput("");
    setChecked(false);
  }

  function exitSession() {
    setSession(null);
    setFinished(false);
    navigate("/practice");
  }

  if (session && finished) {
    return (
      <SessionResults
        session={session}
        results={results}
        onAgain={() => startSession(session.focus, session.questions.length, session.difficulty)}
        onExit={exitSession}
        navigate={navigate}
      />
    );
  }

  if (session && question) {
    return (
      <div className="page practice-session-page">
        <div className="session-topbar">
          <button className="back-link" onClick={exitSession}>
            <Icon name="close" size={17} />
            退出练习
          </button>
          <div className="session-progress-wrap">
            <div className="session-progress-label">
              <span>{session.title}</span>
              <span>
                {index + 1} / {session.questions.length}
              </span>
            </div>
            <div className="progress-track">
              <span
                style={{
                  width: `${((index + (checked ? 1 : 0)) / session.questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="session-score">
            <strong>{results.filter((result) => result.correct).length}</strong>
            <span>答对</span>
          </div>
        </div>

        <div className="session-shell">
          <div className="session-context">
            <span className="eyebrow">{session.subtitle}</span>
            <div className="session-dots" aria-hidden="true">
              {session.questions.map((item, dotIndex) => (
                <span
                  key={item.id}
                  className={`session-dot ${
                    dotIndex < index ? "is-done" : ""
                  } ${dotIndex === index ? "is-current" : ""}`}
                />
              ))}
            </div>
          </div>

          <SessionQuestion
            question={question}
            selected={selected}
            setSelected={setSelected}
            input={input}
            setInput={setInput}
            checked={checked}
            onCheck={handleCheck}
            onNext={handleNext}
            isLast={index + 1 >= session.questions.length}
            index={index}
            total={session.questions.length}
          />

          <div className="session-footer-note">
            <Icon name="lightbulb" size={16} />
            <span>
              错题也是有用的信息，每次作答都会更新掌握度。
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page practice-page">
      <section className="practice-heading">
        <div>
          <p className="eyebrow with-dot">
            <span className="live-dot" />
            练习室
          </p>
          <h1>
            练习，是<span className="display-italic">豁然开朗的地方。</span>
          </h1>
          <p className="page-sub">
            短时练习、即时解析，题目会优先选择你最需要巩固的概念。
          </p>
        </div>
        <div className="practice-profile">
          <div>
            <strong>{overall.attempts}</strong>
            <span>已答题数</span>
          </div>
          <div>
            <strong>{overall.attempts ? `${overall.accuracy}%` : "—"}</strong>
            <span>当前正确率</span>
          </div>
          <div>
            <strong>{overall.lessonsComplete}</strong>
            <span>已完成课程</span>
          </div>
        </div>
      </section>

      <section className="practice-builder">
        <div className="builder-intro">
          <div className="builder-art" aria-hidden="true">
            <span className="builder-symbol">ƒ</span>
            <svg viewBox="0 0 260 260" fill="none">
              <circle cx="130" cy="130" r="100" stroke="rgba(247,242,232,.13)" />
              <circle cx="130" cy="130" r="68" stroke="rgba(247,242,232,.18)" />
              <path
                d="M42 180C78 180 84 80 130 80s52 86 90 86"
                stroke="rgba(233,199,103,.65)"
                strokeWidth="1.5"
              />
              <path d="M42 180h178" stroke="rgba(247,242,232,.22)" />
              <circle cx="130" cy="80" r="4" fill="#E4663A" />
              <circle cx="220" cy="166" r="3" fill="#E9C767" />
            </svg>
          </div>
          <span className="eyebrow eyebrow-light">组合一次练习</span>
          <h2>一次练习，一个目标。</h2>
          <p>
            选一个主题，或交给智能复习。每题都有完整解析，不必猜错在哪里。
          </p>
          <div className="builder-stat">
            <Icon name="target" size={17} />
            <span>
              {weakest.length > 0
                ? `当前薄弱点：${weakest[0].lesson.title}`
                : "你的掌握图谱还在形成中。"}
            </span>
          </div>
        </div>

        <div className="builder-form">
          <div className="form-block">
            <label htmlFor="practice-focus">想练什么？</label>
            <div className="select-wrap">
              <select
                id="practice-focus"
                value={focus}
                onChange={(event) => setFocus(event.target.value)}
              >
                <option value="smart">智能复习 — 帮我选择</option>
                <option value={`lesson:${continueLesson.id}`}>
                  下一课 — {continueLesson.title}
                </option>
                {strands.map((strand) => (
                  <option key={strand.strand} value={`strand:${strand.strand}`}>
                    {strand.label} — {pluralize(strand.availableLessons, "节课")}
                  </option>
                ))}
              </select>
              <Icon name="chevronDown" size={17} />
            </div>
          </div>

          <div className="form-block">
            <span className="form-label">难度</span>
            <div className="difficulty-grid" role="group" aria-label="难度">
              {[
                ["mixed", "混合", "全部难度"],
                ...Object.entries(DIFFICULTIES).map(([key, item]) => [
                  key,
                  item.label,
                  item.range,
                ]),
              ].map(([key, label, note]) => (
                <button
                  key={key}
                  className={`difficulty-choice ${difficulty === key ? "is-active" : ""}`}
                  onClick={() => setDifficulty(key)}
                  aria-pressed={difficulty === key}
                >
                  <strong>{label}</strong>
                  <span>{note}</span>
                </button>
              ))}
            </div>
            <p className="form-note">
              {difficulty === "mixed"
                ? `本阶段题库 ${QUESTIONS.filter((question) => question.levelId === continueLesson.levelId).length} 道，20 题会全部覆盖。`
                : `当前难度共 ${QUESTIONS.filter((question) => question.difficulty === difficulty).length} 道题，每次抽取不重复的题。`}
            </p>
          </div>

          <div className="form-block">
            <span className="form-label">练习长度</span>
            <div className="segmented" role="group" aria-label="练习长度">
              {[5, 10, 20].map((value) => (
                <button
                  key={value}
                  className={length === value ? "is-active" : ""}
                  onClick={() => setLength(value)}
                  aria-pressed={length === value}
                >
                  <strong>{value}</strong>
                  <span>道题</span>
                </button>
              ))}
            </div>
          </div>

          <button className="button button-coral button-full builder-start" onClick={() => startSession()}>
            开始练习
            <Icon name="arrowRight" size={17} />
          </button>
          <p className="builder-footnote">
            约 {length === 5 ? "4" : length === 10 ? "8" : "15"} 分钟 · 进度自动保存
          </p>
        </div>
      </section>

      <div className="practice-lower">
        <section className="practice-main">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">值得复习</span>
              <h2>{weakest.length ? "在这里多花一点心思，会很有帮助。" : "你的薄弱点会显示在这里。"}</h2>
            </div>
            <span className="section-note">
              {overall.attempts
                ? `整体正确率 ${overall.accuracy}%`
                : "先答几道题开始"}
            </span>
          </div>

          {weakest.length === 0 ? (
            <div className="practice-empty">
              <span className="practice-empty-icon">
                <Icon name="compass" size={24} />
              </span>
              <div>
                <h3>还没有薄弱点，只有尚未探索的概念。</h3>
                <p>
                  从智能复习开始。答几道题之后，这里会显示需要再回访的概念。
                </p>
              </div>
              <button className="button button-dark button-small" onClick={() => startSession("smart", 5, "mixed")}>
                试做五道题
              </button>
            </div>
          ) : (
            <div className="weak-list">
              {weakest.map((item) => (
                <button
                  key={item.lesson.id}
                  className="weak-card"
                  onClick={() => startSession(`lesson:${item.lesson.id}`, 20, "mixed")}
                >
                  <span
                    className="weak-accent"
                    style={{ background: item.lesson.accent }}
                  />
                  <span className="weak-copy">
                    <span className="weak-meta">
                      {item.lesson.levelTitle} · {item.lesson.strandLabel}
                    </span>
                    <strong>{item.lesson.title}</strong>
                    <span className="weak-mastery">
                      <span className="mini-progress">
                        <span style={{ width: `${item.mastery}%` }} />
                      </span>
                      掌握度 {item.mastery}%
                    </span>
                  </span>
                  <span className="weak-action">
                    练习
                    <Icon name="arrowRight" size={16} />
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="section-heading compact strand-heading">
            <div>
              <span className="eyebrow">按主题练习</span>
              <h2>选择一个主题。</h2>
            </div>
          </div>
          <div className="practice-strand-grid">
            {strands.map((strand) => (
              <button
                key={strand.strand}
                className="practice-strand-card"
                style={{ "--strand-color": strand.color, "--strand-soft": strand.soft }}
                onClick={() => startSession(`strand:${strand.strand}`, 5)}
              >
                <span className="strand-icon">
                  <Icon name={strand.icon} size={20} />
                </span>
                <span className="practice-strand-copy">
                  <strong>{strand.label}</strong>
                  <span>
                    {pluralize(strand.availableLessons, "节课")}
                    {strand.attempts > 0 && ` · 掌握度 ${strand.mastery}%`}
                  </span>
                </span>
                <Icon name="arrowUpRight" size={15} />
              </button>
            ))}
          </div>
        </section>

        <aside className="practice-aside">
          <div className="how-card">
            <span className="eyebrow">练习方法</span>
            <ol className="how-list">
              <li>
                <span>01</span>
                <div>
                  <strong>不用等准备好，先作答。</strong>
                  <p>努力回忆的过程，正是在建立记忆。</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>每道题的解析都要读。</strong>
                  <p>即使答对，理由也可能并不牢固。</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>明天再回来。</strong>
                  <p>短而分散的练习，胜过长时间突击。</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="daily-mini">
            <div>
              <span className="eyebrow">今天</span>
              <strong>
                {today.questions === 0
                  ? "几分钟就够了"
                  : `已答 ${today.questions} 道题`}
              </strong>
            </div>
            <Icon name="flame" size={22} />
          </div>
        </aside>
      </div>
    </div>
  );
}
