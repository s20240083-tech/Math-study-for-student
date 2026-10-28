export const EXTRA_QUESTIONS = {
  "l1-counting": [
    {
      id: "l1-counting-q3",
      type: "input",
      prompt: "7 个十和 2 个一组成的数是多少？",
      answer: "72",
      placeholder: "输入一个数",
      hint: "7 个十是 70。",
      explanation: "7 个十 = 70，70 + 2 = 72。",
    },
  ],
  "l1-money": [
    {
      id: "l1-money-q3",
      type: "input",
      prompt: "一本书 4.50 美元，一支笔 2.30 美元，一共多少钱？",
      answer: "6.8",
      placeholder: "输入一个数，例如 6.80",
      hint: "把美元和美元、美分和美分分别相加。",
      explanation: "4.50 + 2.30 = 6.80，也就是 6.8 美元。",
    },
  ],
  "l2-multiplication": [
    {
      id: "l2-multiplication-q3",
      type: "choice",
      prompt: "6 × 4 等于多少？",
      options: ["20", "24", "28", "30"],
      answer: 1,
      hint: "把 6 个 4 相加。",
      explanation: "6 × 4 = 24。",
    },
  ],
  "l2-equivalent-fractions": [
    {
      id: "l2-equivalent-fractions-q3",
      type: "input",
      prompt: "把 9/12 约成最简分数。",
      answer: "3/4",
      placeholder: "输入一个分数，例如 3/4",
      hint: "分子和分母都除以 3。",
      explanation: "9 ÷ 3 = 3，12 ÷ 3 = 4，所以 9/12 = 3/4。",
    },
  ],
  "l3-decimals": [
    {
      id: "l3-decimals-q3",
      type: "choice",
      prompt: "0.25 写成百分数是多少？",
      options: ["2.5%", "25%", "250%", "0.25%"],
      answer: 1,
      hint: "小数点向右移动两位。",
      explanation: "0.25 = 25/100 = 25%。",
    },
  ],
  "l3-ratios": [
    {
      id: "l3-ratios-q3",
      type: "input",
      prompt: "4 支同样的笔要 6 美元，10 支要多少美元？",
      answer: "15",
      placeholder: "输入一个数",
      hint: "先求 1 支笔的价钱。",
      explanation: "6 ÷ 4 = 1.5，10 × 1.5 = 15 美元。",
    },
  ],
  "l4-linear-equations": [
    {
      id: "l4-linear-equations-q3",
      type: "input",
      prompt: "解方程：5x + 3 = 28。",
      answer: "5",
      placeholder: "输入一个数",
      hint: "两边先减去 3。",
      explanation: "5x = 25，所以 x = 5。",
    },
  ],
  "l4-probability": [
    {
      id: "l4-probability-q3",
      type: "choice",
      prompt: "袋子里有 4 个红球和 6 个蓝球，随机摸出一个蓝球的概率是多少？",
      options: ["2/5", "3/5", "4/10", "1/2"],
      answer: 1,
      hint: "一共有 10 个球，蓝球有 6 个。",
      explanation: "P(蓝球) = 6/10 = 3/5。",
    },
  ],
  "l5-quadratics": [
    {
      id: "l5-quadratics-q3",
      type: "choice",
      prompt: "x² − 7x + 12 = 0 的两个根是多少？",
      options: ["3 和 4", "−3 和 −4", "2 和 6", "1 和 12"],
      answer: 0,
      hint: "哪两个数相乘得 12、相加得 7？",
      explanation: "x² − 7x + 12 = (x − 3)(x − 4)，所以根是 3 和 4。",
    },
  ],
  "l5-functions": [
    {
      id: "l5-functions-q3",
      type: "input",
      prompt: "f(x) = x² − 1，求 f(3)。",
      answer: "8",
      placeholder: "输入一个数",
      hint: "把 x 换成 3。",
      explanation: "3² − 1 = 9 − 1 = 8。",
    },
  ],
  "l6-derivatives": [
    {
      id: "l6-derivatives-q3",
      type: "choice",
      prompt: "3x² 的导数是什么？",
      options: ["6x", "3x", "x²", "6x²"],
      answer: 0,
      hint: "使用幂法则：nxⁿ⁻¹。",
      explanation: "d/dx(3x²) = 3 · 2x = 6x。",
    },
  ],
  "l6-integrals": [
    {
      id: "l6-integrals-q3",
      type: "input",
      prompt: "计算 ∫₀² 2x dx。",
      answer: "4",
      placeholder: "输入一个数",
      hint: "2x 的原函数是 x²。",
      explanation: "∫₀² 2x dx = [x²]₀² = 4 − 0 = 4。",
    },
  ],
};
