export function cn(...values) {
  return values.filter(Boolean).join(" ");
}

export function dayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function offsetDayKey(offset, base = new Date()) {
  const date = new Date(base);
  date.setDate(date.getDate() + offset);
  return dayKey(date);
}

export function formatLongDate(date = new Date()) {
  const monthDay = new Intl.DateTimeFormat("zh-Hant", {
    month: "long",
    day: "numeric",
  }).format(date);
  const weekday = new Intl.DateTimeFormat("zh-Hant", {
    weekday: "long",
  }).format(date);
  return `${monthDay} · ${weekday}`;
}

export function getGreeting(date = new Date()) {
  const hour = date.getHours();
  if (hour < 5) return "夜深了";
  if (hour < 12) return "早上好";
  if (hour < 18) return "下午好";
  return "晚上好";
}

export function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/−/g, "-")
    .replace(/,/g, "")
    .replace(/\s+/g, "")
    .replace(/^\+/, "");
}

export function isAnswerCorrect(response, question) {
  if (question.type === "choice") {
    return Number(response) === question.answer;
  }
  const submitted = normalizeAnswer(response);
  const expected = normalizeAnswer(question.answer);
  if (submitted === expected) return true;

  const submittedNumber = Number(submitted);
  const expectedNumber = Number(expected);
  if (
    submitted !== "" &&
    Number.isFinite(submittedNumber) &&
    Number.isFinite(expectedNumber)
  ) {
    return Math.abs(submittedNumber - expectedNumber) < 1e-9;
  }
  return false;
}

export function formatMinutes(minutes) {
  if (minutes < 60) return `${minutes} 分鐘`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} 小時 ${rest} 分鐘` : `${hours} 小時`;
}

export function pluralize(count, unit) {
  return `${count} ${unit}`;
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function getScoreMessage(score, total) {
  const ratio = total ? score / total : 0;
  if (ratio === 1) return "全部答對，這個知識點已經屬於你了。";
  if (ratio >= 0.8) return "完成得很棒。再打磨一下，就徹底掌握了。";
  if (ratio >= 0.6) return "進展不錯。現在能看見薄弱點，這很有價值。";
  if (ratio > 0) return "學習正是從這裡開始。回顧步驟，再試一次。";
  return "還沒掌握也沒關係。讀一遍解析，再試一次。";
}

export function getQuizLengthLabel(length) {
  return `${length} 道題`;
}

export function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
