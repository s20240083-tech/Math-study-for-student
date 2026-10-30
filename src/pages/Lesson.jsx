import { useEffect, useMemo, useState } from "react";
import { Icon } from "../components/Icons.jsx";
import {
  getLessonById,
  getLessonQuestions,
  getNextLesson,
  getPreviousLesson,
  LEVEL_MAP,
} from "../data/curriculum.js";
import { getLessonMastery } from "../lib/progress.js";
import { isAnswerCorrect } from "../lib/utils.js";

function CheckpointQuestion({
  question,
  number,
  total,
  onAnswer,
  checked,
  onCheck,
  onRetry,
  value,
  setValue,
}) {
  const [showHint, setShowHint] = useState(false);
  const correct = checked ? isAnswerCorrect(value, question) : false;

  function handleSubmit() {
    if (value === "" || value === null || value === undefined) return;
    const isRight = isAnswerCorrect(value, question);
    onCheck({ value, correct: isRight });
    onAnswer(question, isRight);
  }

  const correctAnswerLabel =
    question.type === "choice" ? question.options[question.answer] : question.answer;

  return (
    <div className={`checkpoint-card ${checked ? (correct ? "is-correct" : "is-wrong") : ""}`}>
      <div className="checkpoint-top">
        <span className="checkpoint-index">
          檢查點 {number} <span>/ {total}</span>
        </span>
        <span className="checkpoint-type">
          {question.type === "choice" ? "單選" : "簡答"}
        </span>
      </div>
      <h3 className="checkpoint-prompt">{question.prompt}</h3>

      {question.type === "choice" ? (
        <div className="option-list" role="group" aria-label={question.prompt}>
          {question.options.map((option, index) => {
            let stateClass = "";
            if (checked && index === question.answer) stateClass = "is-correct";
            else if (checked && index === value) stateClass = "is-wrong";
            else if (!checked && value === index) stateClass = "is-selected";
            return (
              <button
                key={option}
                className={`option ${stateClass}`}
                onClick={() => !checked && setValue(index)}
                disabled={checked}
                aria-pressed={value === index}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {checked && index === question.answer && (
                  <Icon name="check" size={17} />
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="answer-input-row">
          <input
            className={`answer-input ${checked ? (correct ? "is-correct" : "is-wrong") : ""}`}
            value={value || ""}
            onChange={(event) => !checked && setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !checked) handleSubmit();
            }}
            placeholder={question.placeholder || "輸入答案"}
            aria-label={question.prompt}
            disabled={checked}
            autoComplete="off"
            spellCheck="false"
            inputMode="decimal"
            enterKeyHint="done"
          />
        </div>
      )}

      {!checked && (
        <div className="checkpoint-actions">
          <button
            className="hint-button"
            onClick={() => setShowHint((visible) => !visible)}
            aria-expanded={showHint}
          >
            <Icon name="lightbulb" size={16} />
            {showHint ? "收起提示" : "需要提示嗎？"}
          </button>
          <button
            className="button button-dark button-small"
            onClick={handleSubmit}
            disabled={value === "" || value === null || value === undefined}
          >
            檢查答案
            <Icon name="arrowRight" size={15} />
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
        <div className={`feedback-box ${correct ? "is-correct" : "is-wrong"}`} aria-live="polite">
          <div className="feedback-head">
            <span className="feedback-icon">
              <Icon name={correct ? "check" : "lightbulb"} size={16} />
            </span>
            <strong>{correct ? "完全正確。" : "再想想。"}</strong>
          </div>
          <p>{question.explanation}</p>
          {!correct && (
            <>
              <p className="feedback-answer">
                正確答案：<strong>{correctAnswerLabel}</strong>
              </p>
              <button className="feedback-retry" onClick={onRetry}>
                <Icon name="reset" size={15} />
                再試一次
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function LessonPage({ progress, lessonId, navigate, onAnswer, onComplete }) {
  const lesson = getLessonById(lessonId);
  const [checks, setChecks] = useState({});
  const [drafts, setDrafts] = useState({});
  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    setChecks({});
    setDrafts({});
    setJustCompleted(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [lessonId]);

  const questions = useMemo(
    () => (lesson ? getLessonQuestions(lesson.id) : []),
    [lesson],
  );

  if (!lesson) {
    return (
      <div className="page">
        <div className="empty-state">
          <span className="empty-mark">?</span>
          <h2>找不到這節課。</h2>
          <button className="button button-dark" onClick={() => navigate("/learn")}>
            返回課程地圖
          </button>
        </div>
      </div>
    );
  }

  const complete = progress.completedLessons.includes(lesson.id);
  const previous = getPreviousLesson(lesson.id);
  const next = getNextLesson(lesson.id);
  const mastery = getLessonMastery(progress, lesson.id);
  const levelLessonCount = LEVEL_MAP.get(lesson.levelId)?.lessons.length || 9;
  const answeredCount = Object.keys(checks).length;
  const correctCount = Object.values(checks).filter((check) => check.correct).length;

  function handleCheck(question, payload) {
    setChecks((current) => ({ ...current, [question.id]: payload }));
  }

  function handleRetry(question) {
    setChecks((current) => {
      const copy = { ...current };
      delete copy[question.id];
      return copy;
    });
    setDrafts((current) => ({ ...current, [question.id]: "" }));
  }

  function handleComplete() {
    onComplete(lesson.id);
    setJustCompleted(true);
  }

  return (
    <div
      className="page lesson-page"
      style={{ "--lesson-accent": lesson.accent, "--lesson-soft": lesson.soft }}
    >
      <button className="back-link" onClick={() => navigate(`/learn/${lesson.levelId}`)}>
        <Icon name="arrowLeft" size={16} />
        {lesson.levelTitle}
      </button>

      <header className="lesson-header">
        <div className="lesson-header-main">
          <div className="lesson-badges">
            <span className="badge badge-solid">
              第 {String(lesson.levelIndex + 1).padStart(2, "0")} 階段
            </span>
            <span className="badge">{lesson.grades}</span>
            <span className="badge">
              <span
                className="strand-swatch"
                style={{ background: lesson.strandInfo.color }}
              />
              {lesson.strandLabel}
            </span>
            {complete && (
              <span className="badge badge-complete">
                <Icon name="check" size={13} /> 已完成
              </span>
            )}
          </div>
          <h1>{lesson.title}</h1>
          <p className="lesson-lede">{lesson.summary}</p>
          <div className="lesson-meta-row">
            <span>
              <Icon name="clock" size={16} /> {lesson.minutes} 分鐘閱讀
            </span>
            <span>
              <Icon name="target" size={16} /> {questions.length} 個檢查點
            </span>
            <span>
              <Icon name="layers" size={16} /> {lesson.levelTitle}
            </span>
          </div>
        </div>
        <div className="lesson-header-mark" aria-hidden="true">
          <span>{String(lesson.lessonIndex + 1).padStart(2, "0")}</span>
          <svg viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="49" stroke="currentColor" strokeOpacity=".2" />
            <circle cx="60" cy="60" r="33" stroke="currentColor" strokeOpacity=".3" />
            <path d="M18 88 95 22" stroke="currentColor" strokeOpacity=".55" />
            <circle cx="95" cy="22" r="4" fill="currentColor" />
          </svg>
        </div>
      </header>

      <div className="lesson-layout">
        <article className="lesson-article">
          <div className="lesson-body">
            {lesson.body.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "lesson-drop" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="key-idea">
            <span className="key-idea-icon">
              <Icon name="spark" size={20} />
            </span>
            <div>
              <span className="eyebrow">核心概念</span>
              <p>{lesson.keyIdea}</p>
            </div>
          </aside>

          <section className="worked-example">
            <div className="worked-head">
              <span className="worked-label">
                <span className="worked-number">01</span>
                例題
              </span>
              <span className="worked-caption">跟著推理走，不只記答案。</span>
            </div>
            <h3>{lesson.example.prompt}</h3>
            <ol className="worked-steps">
              {lesson.example.steps.map((step, index) => (
                <li key={step}>
                  <span className="step-number">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="worked-answer">
              <span>答案</span>
              <strong>{lesson.example.answer}</strong>
            </div>
          </section>

          <section className="checkpoint-section" id="checkpoint">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">檢驗理解</span>
                <h2>{questions.length} 道快速檢查。</h2>
              </div>
              <span className="section-note">
                已檢查 {answeredCount}/{questions.length} · 答對 {correctCount}
              </span>
            </div>
            <p className="checkpoint-intro">
              先憑記憶作答。如果卡住了，打開提示，再仔細讀一遍解析。
            </p>

            <div className="checkpoint-list">
              {questions.map((question, index) => (
                <CheckpointQuestion
                  key={question.id}
                  question={question}
                  number={index + 1}
                  total={questions.length}
                  checked={checks[question.id]}
                  value={
                    checks[question.id]?.value ?? drafts[question.id] ?? ""
                  }
                  setValue={(value) =>
                    setDrafts((current) => ({ ...current, [question.id]: value }))
                  }
                  onCheck={(payload) => handleCheck(question, payload)}
                  onAnswer={onAnswer}
                  onRetry={() => handleRetry(question)}
                />
              ))}
            </div>
          </section>

          <section className={`lesson-finish ${complete ? "is-done" : ""}`}>
            <span className="finish-icon">
              <Icon name={complete ? "check" : "spark"} size={22} />
            </span>
            <div className="finish-copy">
              <span className="eyebrow">{complete ? "本課已完成" : "最後一步"}</span>
              <h3>
                {complete
                  ? "這個知識點已經記下了。需要時隨時回來。"
                  : "你能把這個概念清楚地講給別人聽嗎？"}
              </h3>
              <p>
                {complete
                  ? "過幾天再練一次——間隔複習才能讓知識留下來。"
                  : "當你能把核心概念講給別人聽時，就把這一課標記為完成。"}
              </p>
            </div>
            <div className="finish-actions">
              <button
                className={`button ${complete ? "button-quiet" : "button-coral"}`}
                onClick={handleComplete}
                disabled={complete}
              >
                <Icon name="check" size={17} />
                {complete ? "已完成" : "標記完成"}
              </button>
              <button
                className="button button-quiet"
                onClick={() => navigate(`/practice/lesson/${lesson.id}`)}
              >
                做 20 道題
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
            {justCompleted && (
              <p className="finish-toast" aria-live="polite">
                已保存，學習進度已更新。
              </p>
            )}
          </section>

          <nav className="lesson-pager" aria-label="課時導航">
            {previous ? (
              <button
                className="pager-link pager-prev"
                onClick={() => navigate(`/lesson/${previous.id}`)}
              >
                <span className="pager-direction">
                  <Icon name="arrowLeft" size={15} /> 上一課
                </span>
                <strong>{previous.title}</strong>
              </button>
            ) : (
              <span />
            )}
            {next ? (
              <button
                className="pager-link pager-next"
                onClick={() => navigate(`/lesson/${next.id}`)}
              >
                <span className="pager-direction">
                  下一課 <Icon name="arrowRight" size={15} />
                </span>
                <strong>{next.title}</strong>
              </button>
            ) : (
              <button className="pager-link pager-next" onClick={() => navigate("/progress")}>
                <span className="pager-direction">
                  路徑到這裡結束 <Icon name="arrowRight" size={15} />
                </span>
                <strong>查看學習進度</strong>
              </button>
            )}
          </nav>
        </article>

        <aside className="lesson-rail">
          <div className="rail-inner">
            <div className="rail-card">
              <div className="rail-head">
                <span className="eyebrow">本課要點</span>
                <span className="rail-mastery">
                  {mastery > 0 ? `掌握度 ${mastery}%` : "新概念"}
                </span>
              </div>
              <div className="rail-progress">
                <span style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
              </div>
              <ul className="objective-list">
                {lesson.objectives.map((objective) => (
                  <li key={objective}>
                    <span className="objective-check">
                      <Icon name="check" size={12} />
                    </span>
                    {objective}
                  </li>
                ))}
              </ul>
              <div className="rail-divider" />
              <div className="rail-level">
                <span
                  className="rail-level-dot"
                  style={{ background: lesson.accent }}
                />
                <div>
                  <strong>{lesson.levelTitle}</strong>
                  <span>
                    {lesson.grades} · 第 {String(lesson.lessonIndex + 1).padStart(2, "0")} / {levelLessonCount} 課
                  </span>
                </div>
              </div>
              <button
                className="button button-dark button-full"
                onClick={() => navigate(`/practice/lesson/${lesson.id}`)}
              >
                <Icon name="practice" size={16} />
                做 20 道題
              </button>
            </div>

            <div className="rail-tip">
              <Icon name="lightbulb" size={18} />
              <p>
                <strong>學習建議。</strong>合上課程，用一句話把核心概念大聲講出來。如果卡住了，就重讀那一部分。
              </p>
            </div>

            {next && (
              <button
                className="rail-next"
                onClick={() => navigate(`/lesson/${next.id}`)}
              >
                <span className="eyebrow">下一課</span>
                <strong>{next.title}</strong>
                <span className="rail-next-meta">
                  {next.strandLabel} · {next.minutes} 分鐘
                </span>
                <span className="rail-next-arrow">
                  <Icon name="arrowRight" size={17} />
                </span>
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
