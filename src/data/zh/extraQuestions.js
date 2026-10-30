export const EXTRA_QUESTIONS = {
  "l1-counting": [
    {
      id: "l1-counting-q3",
      type: "input",
      prompt: "7 個十和 2 個一組成的數是多少？",
      answer: "72",
      placeholder: "輸入一個數",
      hint: "7 個十是 70。",
      explanation: "7 個十 = 70，70 + 2 = 72。",
    },
  ],
  "l1-money": [
    {
      id: "l1-money-q3",
      type: "input",
      prompt: "一本書 4.50 美元，一支筆 2.30 美元，一共多少錢？",
      answer: "6.8",
      placeholder: "輸入一個數，例如 6.80",
      hint: "把美元和美元、美分和美分分別相加。",
      explanation: "4.50 + 2.30 = 6.80，也就是 6.8 美元。",
    },
  ],
  "l2-multiplication": [
    {
      id: "l2-multiplication-q3",
      type: "choice",
      prompt: "6 × 4 等於多少？",
      options: ["20", "24", "28", "30"],
      answer: 1,
      hint: "把 6 個 4 相加。",
      explanation: "6 × 4 = 24。",
    },
  ],
  "l2-equivalent-fractions": [
    {
      id: "l2-equivalent-fractions-q3",
      type: "input",
      prompt: "把 9/12 約成最簡分數。",
      answer: "3/4",
      placeholder: "輸入一個分數，例如 3/4",
      hint: "分子和分母都除以 3。",
      explanation: "9 ÷ 3 = 3，12 ÷ 3 = 4，所以 9/12 = 3/4。",
    },
  ],
  "l3-decimals": [
    {
      id: "l3-decimals-q3",
      type: "choice",
      prompt: "0.25 寫成百分數是多少？",
      options: ["2.5%", "25%", "250%", "0.25%"],
      answer: 1,
      hint: "小數點向右移動兩位。",
      explanation: "0.25 = 25/100 = 25%。",
    },
  ],
  "l3-ratios": [
    {
      id: "l3-ratios-q3",
      type: "input",
      prompt: "4 支同樣的筆要 6 美元，10 支要多少美元？",
      answer: "15",
      placeholder: "輸入一個數",
      hint: "先求 1 支筆的價錢。",
      explanation: "6 ÷ 4 = 1.5，10 × 1.5 = 15 美元。",
    },
  ],
  "l4-linear-equations": [
    {
      id: "l4-linear-equations-q3",
      type: "input",
      prompt: "解方程：5x + 3 = 28。",
      answer: "5",
      placeholder: "輸入一個數",
      hint: "兩邊先減去 3。",
      explanation: "5x = 25，所以 x = 5。",
    },
  ],
  "l4-probability": [
    {
      id: "l4-probability-q3",
      type: "choice",
      prompt: "袋子裡有 4 個紅球和 6 個藍球，隨機摸出一個藍球的概率是多少？",
      options: ["2/5", "3/5", "4/10", "1/2"],
      answer: 1,
      hint: "一共有 10 個球，藍球有 6 個。",
      explanation: "P(藍球) = 6/10 = 3/5。",
    },
  ],
  "l5-quadratics": [
    {
      id: "l5-quadratics-q3",
      type: "choice",
      prompt: "x² − 7x + 12 = 0 的兩個根是多少？",
      options: ["3 和 4", "−3 和 −4", "2 和 6", "1 和 12"],
      answer: 0,
      hint: "哪兩個數相乘得 12、相加得 7？",
      explanation: "x² − 7x + 12 = (x − 3)(x − 4)，所以根是 3 和 4。",
    },
  ],
  "l5-functions": [
    {
      id: "l5-functions-q3",
      type: "input",
      prompt: "f(x) = x² − 1，求 f(3)。",
      answer: "8",
      placeholder: "輸入一個數",
      hint: "把 x 換成 3。",
      explanation: "3² − 1 = 9 − 1 = 8。",
    },
  ],
  "l6-derivatives": [
    {
      id: "l6-derivatives-q3",
      type: "choice",
      prompt: "3x² 的導數是什麼？",
      options: ["6x", "3x", "x²", "6x²"],
      answer: 0,
      hint: "使用冪法則：nxⁿ⁻¹。",
      explanation: "d/dx(3x²) = 3 · 2x = 6x。",
    },
  ],
  "l6-integrals": [
    {
      id: "l6-integrals-q3",
      type: "input",
      prompt: "計算 ∫₀² 2x dx。",
      answer: "4",
      placeholder: "輸入一個數",
      hint: "2x 的原函數是 x²。",
      explanation: "∫₀² 2x dx = [x²]₀² = 4 − 0 = 4。",
    },
  ],
};
