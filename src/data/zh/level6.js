export const level6 = {
  id: "advanced-mathematics",
  index: 6,
  stage: "Secondary",
  grades: "11–12 年級",
  ages: "16–18 歲",
  title: "進階數學",
  tagline: "帶你走到中學數學最前沿的那些思想。",
  description:
    "探索指數、數列、複數、微積分、概率分佈、向量與矩陣。",
  accent: "#B24A3F",
  soft: "#F2DDDA",
  lessons: [
    {
      id: "l6-exponential-log",
      title: "指數函數與對數函數",
      strand: "Functions",
      minutes: 9,
      summary:
        "理解以倍數方式進行的增長，以及能把它還原的對數。",
      objectives: [
        "計算對數的值",
        "解簡單的指數方程",
      ],
      body: [
        "指數函數的自變量在指數上：f(x) = 2ˣ。它按固定的倍數增長，而不是按固定的數量增長。每小時翻一番，得到 2、4、8、16——遠比每小時加 2 快得多。",
        "對數回答的是反過來問的問題：需要多大的指數？log₂ 32 = 5，因為 2⁵ = 32。一般地，log_b x = y 表示 bʸ = x。底數 b 必須是正數，且不等於 1。",
        "對數把乘法變成加法：log(xy) = log x + log y。對數還能用來解指數方程。解 2ˣ = 16 時，把 16 寫成 2⁴，得 x = 4。如果數字不那麼好湊，就對兩邊取對數。",
      ],
      keyIdea: "對數本質上就是指數，只是換了一種說法。",
      example: {
        prompt: "求 log₂ 32。",
        steps: [
          "問自己：2 的幾次方等於 32？",
          "2⁵ = 32。",
          "所以 log₂ 32 = 5。",
        ],
        answer: "5",
      },
      questions: [
        {
          id: "l6-exponential-log-q1",
          type: "input",
          prompt: "log₂ 32 等於多少？",
          answer: "5",
          placeholder: "輸入一個數字",
          hint: "2 的幾次方等於 32？",
          explanation: "2⁵ = 32，所以 log₂ 32 = 5。",
        },
        {
          id: "l6-exponential-log-q2",
          type: "input",
          prompt: "解 2ˣ = 16。",
          answer: "4",
          placeholder: "輸入一個數字",
          hint: "把 16 寫成 2 的冪。",
          explanation: "16 = 2⁴，所以 x = 4。",
        },
      ],
    },
    {
      id: "l6-sequences",
      title: "數列與級數",
      strand: "Algebra",
      minutes: 9,
      summary:
        "用位置來描述規律，再用簡潔的公式把這些項加起來。",
      objectives: [
        "求等差數列的第 n 項",
        "求等比級數之和",
      ],
      body: [
        "數列是一列按順序排列的數。等差數列每次加上固定的公差 d；等比數列每次乘以固定的公比 r。數列 3、7、11、15 是等差數列，d = 4。",
        "等差數列的第 n 項是 aₙ = a₁ + (n − 1)d。若首項為 5、d = 3，則第 n 項是 3n + 2，所以第 10 項是 32。",
        "級數把數列的各項加起來。首項為 a、公比為 r 的等比級數，當 r ≠ 1 時和為 a(1 − rⁿ)/(1 − r)。當 |r| < 1 時，無窮級數的和是 a/(1 − r)；當 |r| ≥ 1 時，級數發散。",
      ],
      keyIdea: "數列描述各項，級數把它們相加。",
      example: {
        prompt: "一個等差數列的第 n 項是 3n + 2。求第 10 項。",
        steps: [
          "代入 n = 10。",
          "3(10) + 2 = 30 + 2。",
          "第 10 項是 32。",
        ],
        answer: "32",
      },
      questions: [
        {
          id: "l6-sequences-q1",
          type: "input",
          prompt: "一個等差數列的第 n 項是 3n + 2。第 10 項是多少？",
          answer: "32",
          placeholder: "輸入一個數字",
          hint: "代入 n = 10。",
          explanation: "3(10) + 2 = 32。",
        },
        {
          id: "l6-sequences-q2",
          type: "input",
          prompt: "求和 2 + 6 + 18 + 54。",
          answer: "80",
          placeholder: "輸入一個數字",
          hint: "直接把四項相加，或者使用等比求和公式。",
          explanation: "2 + 6 + 18 + 54 = 80。",
        },
      ],
    },
    {
      id: "l6-trig-identities",
      title: "三角函數圖像與恆等式",
      strand: "Geometry",
      minutes: 9,
      summary:
        "從直角三角形走到單位圓，在這裡正弦和餘弦不斷重複。",
      objectives: [
        "運用同角三角函數的平方關係",
        "弄清頻率與週期的關係",
      ],
      body: [
        "單位圓把三角學從 0° 到 90° 推廣到任意角。單位圓上對應角 θ 的點的座標是 (cos θ, sin θ)。由於這個點在 x² + y² = 1 上，就得到平方關係式 sin²θ + cos²θ = 1。",
        "正弦和餘弦都是週期函數。sin θ 每隔 2π 弧度（360°）重複一次。如果把角加倍，sin(2θ) 在同樣的區間內完成兩個週期，所以它的週期是 π。",
        "弧度用單位圓上的弧長來度量角。一整圈是 2π 弧度，半圈是 π，四分之一圈是 π/2。弧度在微積分中很自然，因為它使 sin x 的導數恰好等於 cos x，而不需要額外的常數。",
      ],
      keyIdea: "正弦和餘弦就是單位圓上點的座標。",
      example: {
        prompt: "化簡 sin²θ + cos²θ。",
        steps: [
          "在單位圓上，cos θ 是橫座標 x，sin θ 是縱座標 y。",
          "每個點都滿足 x² + y² = 1。",
          "因此 sin²θ + cos²θ = 1。",
        ],
        answer: "1",
      },
      questions: [
        {
          id: "l6-trig-identities-q1",
          type: "input",
          prompt: "sin²θ + cos²θ 等於多少？",
          answer: "1",
          placeholder: "輸入一個數字",
          hint: "想想單位圓的方程。",
          explanation: "對任意角 θ，sin²θ + cos²θ = 1。",
        },
        {
          id: "l6-trig-identities-q2",
          type: "choice",
          prompt: "sin(2x) 的週期是多少？",
          options: ["π/2", "π", "2π", "4π"],
          answer: 1,
          hint: "通常的週期 2π 要除以 x 的係數。",
          explanation: "sin(kx) 的週期是 2π/|k|，所以 k = 2 時週期為 π。",
        },
      ],
    },
    {
      id: "l6-complex",
      title: "複數",
      strand: "Number",
      minutes: 9,
      summary:
        "用 i 把數軸擴展成一個平面，其中 i² = −1。",
      objectives: [
        "進行復數的加法",
        "求複數的模",
      ],
      body: [
        "方程 x² = −1 沒有實數解，於是我們定義一個新數 i，使 i² = −1。複數的形式是 a + bi，其中 a 是實部，b 是虛部。",
        "複數的加減法是分別合併實部和虛部：(3 + 2i) + (1 − 4i) = 4 − 2i。乘法要用到 i² = −1；例如 (1 + i)² = 1 + 2i + i² = 2i。",
        "模 |a + bi| 表示複數到原點的距離：√(a² + b²)。所以 |3 + 4i| = 5。複數就是平面上的點，因此它與旋轉和三角學有著漂亮的聯繫。",
      ],
      keyIdea: "i 相當於四分之一轉：它把數軸旋轉成一個平面。",
      example: {
        prompt: "計算 (3 + 2i) + (1 − 4i)。",
        steps: [
          "實部相加：3 + 1 = 4。",
          "虛部相加：2i − 4i = −2i。",
          "和是 4 − 2i。",
        ],
        answer: "4 − 2i",
      },
      questions: [
        {
          id: "l6-complex-q1",
          type: "choice",
          prompt: "(3 + 2i) + (1 − 4i) 等於多少？",
          options: ["4 + 6i", "4 − 2i", "2 + 2i", "4 − 6i"],
          answer: 1,
          hint: "分別合併實部和虛部。",
          explanation: "實部：3 + 1 = 4。虛部：2i − 4i = −2i。和是 4 − 2i。",
        },
        {
          id: "l6-complex-q2",
          type: "input",
          prompt: "模 |3 + 4i| 是多少？",
          answer: "5",
          placeholder: "輸入一個數字",
          hint: "使用 √(a² + b²)。",
          explanation: "|3 + 4i| = √(3² + 4²) = √25 = 5。",
        },
      ],
    },
    {
      id: "l6-limits",
      title: "極限與連續性",
      strand: "Calculus",
      minutes: 9,
      summary:
        "描述函數值在無限接近某一點時的趨向，哪怕它永遠無法真正取到那個值。",
      objectives: [
        "通過因式分解求極限",
        "識別可去間斷點",
      ],
      body: [
        "極限描述的是當自變量無限接近某一點時，函數值趨向的那個數——它未必等於函數在該點的取值。函數在該點甚至可以沒有定義，卻仍然有極限。",
        "對 lim x→2 (x² − 4)/(x − 2)，直接代入得到 0/0，這是不定式。把分子因式分解：(x − 2)(x + 2)/(x − 2)。當 x ≠ 2 時，可以約去公因式，剩下 x + 2，它趨向 4。",
        "因為公因式被約去，圖像在 x = 2 處是一個空心點，而不是豎直漸近線。這叫做可去間斷點。當函數在某點的極限存在、函數在該點有定義，並且兩者相等時，函數在該點連續。",
      ],
      keyIdea: "極限關心的是“趨近”的過程，而不是“到達”的結果。",
      example: {
        prompt: "求 lim x→2 (x² − 4)/(x − 2)。",
        steps: [
          "直接代入得到 0/0，所以先因式分解。",
          "x² − 4 = (x − 2)(x + 2)。",
          "約去 x − 2，剩下 x + 2。當 x → 2 時，它趨向 4。",
        ],
        answer: "4",
      },
      questions: [
        {
          id: "l6-limits-q1",
          type: "input",
          prompt: "求 lim x→2 (x² − 4)/(x − 2)。",
          answer: "4",
          placeholder: "輸入一個數字",
          hint: "把分子因式分解，再約去公因式。",
          explanation: "當 x ≠ 2 時，(x² − 4)/(x − 2) = x + 2，它趨向 4。",
        },
        {
          id: "l6-limits-q2",
          type: "input",
          prompt: "求 lim x→0 (sin x)/x。",
          answer: "1",
          placeholder: "輸入一個數字",
          hint: "這是微積分中貫穿始終的一個標準極限。",
          explanation: "當 x 趨向 0 時，(sin x)/x 趨向 1。",
        },
      ],
    },
    {
      id: "l6-derivatives",
      title: "導數與變化率",
      strand: "Calculus",
      minutes: 9,
      summary:
        "用平均變化率的極限來度量瞬時變化率。",
      objectives: [
        "對冪函數和三角函數求導",
        "把導數理解為斜率",
      ],
      body: [
        "平均變化率是兩點之間的斜率。瞬時變化率則是當兩點間的間隔縮小到零時的情形。這個極限就是導數，記作 f′(x) 或 dy/dx。",
        "冪法則告訴我們 d/dx xⁿ = nxⁿ⁻¹。所以 d/dx x³ = 3x²，在 x = 2 處斜率是 12。sin x 和 cos x 的導數分別是 cos x 和 −sin x，這個循環每求四次導數就重複一遍。",
        "導數是局部的斜率。f′ > 0 的地方，函數遞增；f′ < 0 的地方，函數遞減；f′ = 0 的地方，圖像有水平切線，往往對應極大值或極小值。這是最優化問題的基礎。",
      ],
      keyIdea: "導數把一條曲線變成某一點處的斜率。",
      example: {
        prompt: "求 y = x² 在 x = 2 處的斜率。",
        steps: [
          "求導：dy/dx = 2x。",
          "代入 x = 2：2(2) = 4。",
          "斜率是 4。",
        ],
        answer: "4",
      },
      questions: [
        {
          id: "l6-derivatives-q1",
          type: "input",
          prompt: "y = x² 在 x = 2 處的斜率是多少？",
          answer: "4",
          placeholder: "輸入一個數字",
          hint: "先求導：dy/dx = 2x。",
          explanation: "dy/dx = 2x，所以 x = 2 處斜率是 4。",
        },
        {
          id: "l6-derivatives-q2",
          type: "choice",
          prompt: "sin x 的導數是什麼？",
          options: ["cos x", "−cos x", "−sin x", "tan x"],
          answer: 0,
          hint: "正弦的導數是餘弦。",
          explanation: "d/dx (sin x) = cos x。",
        },
      ],
    },
    {
      id: "l6-integrals",
      title: "積分與面積",
      strand: "Calculus",
      minutes: 9,
      summary:
        "把求導反過來，用來累積變化、度量曲線下方的面積。",
      objectives: [
        "求原函數",
        "計算定積分",
      ],
      body: [
        "積分是求導的逆運算。因為 d/dx x² = 2x，所以 2x 的一個原函數是 x²。由於常數的導數為零，我們寫成 ∫2x dx = x² + C，其中 C 是積分常數。",
        "定積分累積的是兩個上下限之間的量。微積分基本定理告訴我們：∫ₐᵇ f(x) dx = F(b) − F(a)，其中 F 是 f 的任意一個原函數。",
        "從幾何上看，定積分給出的是曲線下方的有向面積。∫₀¹ 3x² dx = [x³]₀¹ = 1 − 0 = 1。x 軸下方的面積記為負，所以積分不僅能表示幾何面積，還能刻畫淨變化。",
      ],
      keyIdea: "積分就是把無窮多個無窮小的部分累加起來。",
      example: {
        prompt: "計算 ∫₀¹ 3x² dx。",
        steps: [
          "3x² 的一個原函數是 x³。",
          "代入上下限：[x³]₀¹ = 1³ − 0³。",
          "結果是 1。",
        ],
        answer: "1",
      },
      questions: [
        {
          id: "l6-integrals-q1",
          type: "choice",
          prompt: "∫2x dx 等於什麼？",
          options: ["x² + C", "2x² + C", "x + C", "2 + C"],
          answer: 0,
          hint: "哪個函數求導後能得到 2x？",
          explanation: "d/dx (x²) = 2x，所以 ∫2x dx = x² + C。",
        },
        {
          id: "l6-integrals-q2",
          type: "input",
          prompt: "計算 ∫₀¹ 3x² dx。",
          answer: "1",
          placeholder: "輸入一個數字",
          hint: "3x² 的一個原函數是 x³。",
          explanation: "[x³]₀¹ = 1³ − 0³ = 1。",
        },
      ],
    },
    {
      id: "l6-distributions",
      title: "概率分佈",
      strand: "Data",
      minutes: 9,
      summary:
        "用概率規則為隨機過程建模，從拋硬幣到鐘形曲線。",
      objectives: [
        "求二項分佈的均值",
        "理解正態分佈中標準差的含義",
      ],
      body: [
        "隨機變量給每一個結果指定一個數值。概率分佈列出每個可能取值及其概率；所有概率之和必須等於 1，而期望值是按概率加權的平均值。",
        "二項分佈統計的是 n 次獨立重複試驗中成功的次數，每次試驗成功的概率為 p，其均值是 np。若罰球 10 次、命中率 30%，則期望命中次數是 10 × 0.3 = 3。",
        "正態分佈是一條對稱的鐘形曲線。約 68% 的數值落在均值的一個標準差之內，約 95% 落在兩個標準差以內，約 99.7% 落在三個標準差以內。中心極限定理說明瞭為什麼和與平均值常常呈現正態的樣子。",
      ],
      keyIdea: "概率分佈把不確定性變成可以計算的規律。",
      example: {
        prompt: "一名球員罰球 10 次，每次成功的概率為 0.3。期望命中次數是多少？",
        steps: [
          "這是二項分佈，n = 10，p = 0.3。",
          "二項分佈的均值是 np。",
          "10 × 0.3 = 3。",
        ],
        answer: "3",
      },
      questions: [
        {
          id: "l6-distributions-q1",
          type: "input",
          prompt:
            "某二項分佈的試驗次數 n = 10，成功概率 p = 0.3。它的均值是多少？",
          answer: "3",
          placeholder: "輸入一個數字",
          hint: "均值 = np。",
          explanation: "np = 10 × 0.3 = 3。",
        },
        {
          id: "l6-distributions-q2",
          type: "input",
          prompt:
            "對於正態分佈，大約有百分之幾的數值落在均值的一個標準差之內？",
          answer: "68",
          placeholder: "輸入一個百分數",
          hint: "68–95–99.7 法則。",
          explanation:
            "在正態分佈中，約 68% 的數值落在均值的一個標準差之內。",
        },
      ],
    },
    {
      id: "l6-vectors",
      title: "向量與矩陣",
      strand: "Advanced",
      minutes: 9,
      summary:
        "用向量表示方向與大小，用矩陣表示有條理的變換。",
      objectives: [
        "求向量的模",
        "計算數量積",
      ],
      body: [
        "向量既有大小，也有方向。在二維平面上，v = (3, 4) 表示向右 3、向上 4。它的模是 √(3² + 4²) = 5，也就是箭頭的長度。",
        "數量積把兩個向量合成一個數：(a, b) · (c, d) = ac + bd。所以 (1, 2) · (3, 4) = 3 + 8 = 11。當數量積為零時，兩個向量互相垂直。",
        "矩陣是排列成長方形的數表，可以表示一種變換。矩陣相乘相當於依次施加兩個變換；單位矩陣不改變任何向量。順序很重要：AB 通常不等於 BA。",
      ],
      keyIdea: "向量描述運動，矩陣描述變換。",
      example: {
        prompt: "求向量 (3, 4) 的模。",
        steps: [
          "使用 |v| = √(x² + y²)。",
          "√(3² + 4²) = √(9 + 16)。",
          "√25 = 5。",
        ],
        answer: "5",
      },
      questions: [
        {
          id: "l6-vectors-q1",
          type: "input",
          prompt: "向量 (3, 4) 的模是多少？",
          answer: "5",
          placeholder: "輸入一個數字",
          hint: "使用 √(x² + y²)。",
          explanation: "√(3² + 4²) = √25 = 5。",
        },
        {
          id: "l6-vectors-q2",
          type: "input",
          prompt: "數量積 (1, 2) · (3, 4) 等於多少？",
          answer: "11",
          placeholder: "輸入一個數字",
          hint: "對應分量相乘，再把積相加。",
          explanation: "(1)(3) + (2)(4) = 3 + 8 = 11。",
        },
      ],
    },
  ],
};
