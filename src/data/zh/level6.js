export const level6 = {
  id: "advanced-mathematics",
  index: 6,
  stage: "Secondary",
  grades: "11–12 年级",
  ages: "16–18 岁",
  title: "进阶数学",
  tagline: "带你走到中学数学最前沿的那些思想。",
  description:
    "探索指数、数列、复数、微积分、概率分布、向量与矩阵。",
  accent: "#B24A3F",
  soft: "#F2DDDA",
  lessons: [
    {
      id: "l6-exponential-log",
      title: "指数函数与对数函数",
      strand: "Functions",
      minutes: 9,
      summary:
        "理解以倍数方式进行的增长，以及能把它还原的对数。",
      objectives: [
        "计算对数的值",
        "解简单的指数方程",
      ],
      body: [
        "指数函数的自变量在指数上：f(x) = 2ˣ。它按固定的倍数增长，而不是按固定的数量增长。每小时翻一番，得到 2、4、8、16——远比每小时加 2 快得多。",
        "对数回答的是反过来问的问题：需要多大的指数？log₂ 32 = 5，因为 2⁵ = 32。一般地，log_b x = y 表示 bʸ = x。底数 b 必须是正数，且不等于 1。",
        "对数把乘法变成加法：log(xy) = log x + log y。对数还能用来解指数方程。解 2ˣ = 16 时，把 16 写成 2⁴，得 x = 4。如果数字不那么好凑，就对两边取对数。",
      ],
      keyIdea: "对数本质上就是指数，只是换了一种说法。",
      example: {
        prompt: "求 log₂ 32。",
        steps: [
          "问自己：2 的几次方等于 32？",
          "2⁵ = 32。",
          "所以 log₂ 32 = 5。",
        ],
        answer: "5",
      },
      questions: [
        {
          id: "l6-exponential-log-q1",
          type: "input",
          prompt: "log₂ 32 等于多少？",
          answer: "5",
          placeholder: "输入一个数字",
          hint: "2 的几次方等于 32？",
          explanation: "2⁵ = 32，所以 log₂ 32 = 5。",
        },
        {
          id: "l6-exponential-log-q2",
          type: "input",
          prompt: "解 2ˣ = 16。",
          answer: "4",
          placeholder: "输入一个数字",
          hint: "把 16 写成 2 的幂。",
          explanation: "16 = 2⁴，所以 x = 4。",
        },
      ],
    },
    {
      id: "l6-sequences",
      title: "数列与级数",
      strand: "Algebra",
      minutes: 9,
      summary:
        "用位置来描述规律，再用简洁的公式把这些项加起来。",
      objectives: [
        "求等差数列的第 n 项",
        "求等比级数之和",
      ],
      body: [
        "数列是一列按顺序排列的数。等差数列每次加上固定的公差 d；等比数列每次乘以固定的公比 r。数列 3、7、11、15 是等差数列，d = 4。",
        "等差数列的第 n 项是 aₙ = a₁ + (n − 1)d。若首项为 5、d = 3，则第 n 项是 3n + 2，所以第 10 项是 32。",
        "级数把数列的各项加起来。首项为 a、公比为 r 的等比级数，当 r ≠ 1 时和为 a(1 − rⁿ)/(1 − r)。当 |r| < 1 时，无穷级数的和是 a/(1 − r)；当 |r| ≥ 1 时，级数发散。",
      ],
      keyIdea: "数列描述各项，级数把它们相加。",
      example: {
        prompt: "一个等差数列的第 n 项是 3n + 2。求第 10 项。",
        steps: [
          "代入 n = 10。",
          "3(10) + 2 = 30 + 2。",
          "第 10 项是 32。",
        ],
        answer: "32",
      },
      questions: [
        {
          id: "l6-sequences-q1",
          type: "input",
          prompt: "一个等差数列的第 n 项是 3n + 2。第 10 项是多少？",
          answer: "32",
          placeholder: "输入一个数字",
          hint: "代入 n = 10。",
          explanation: "3(10) + 2 = 32。",
        },
        {
          id: "l6-sequences-q2",
          type: "input",
          prompt: "求和 2 + 6 + 18 + 54。",
          answer: "80",
          placeholder: "输入一个数字",
          hint: "直接把四项相加，或者使用等比求和公式。",
          explanation: "2 + 6 + 18 + 54 = 80。",
        },
      ],
    },
    {
      id: "l6-trig-identities",
      title: "三角函数图像与恒等式",
      strand: "Geometry",
      minutes: 9,
      summary:
        "从直角三角形走到单位圆，在这里正弦和余弦不断重复。",
      objectives: [
        "运用同角三角函数的平方关系",
        "弄清频率与周期的关系",
      ],
      body: [
        "单位圆把三角学从 0° 到 90° 推广到任意角。单位圆上对应角 θ 的点的坐标是 (cos θ, sin θ)。由于这个点在 x² + y² = 1 上，就得到平方关系式 sin²θ + cos²θ = 1。",
        "正弦和余弦都是周期函数。sin θ 每隔 2π 弧度（360°）重复一次。如果把角加倍，sin(2θ) 在同样的区间内完成两个周期，所以它的周期是 π。",
        "弧度用单位圆上的弧长来度量角。一整圈是 2π 弧度，半圈是 π，四分之一圈是 π/2。弧度在微积分中很自然，因为它使 sin x 的导数恰好等于 cos x，而不需要额外的常数。",
      ],
      keyIdea: "正弦和余弦就是单位圆上点的坐标。",
      example: {
        prompt: "化简 sin²θ + cos²θ。",
        steps: [
          "在单位圆上，cos θ 是横坐标 x，sin θ 是纵坐标 y。",
          "每个点都满足 x² + y² = 1。",
          "因此 sin²θ + cos²θ = 1。",
        ],
        answer: "1",
      },
      questions: [
        {
          id: "l6-trig-identities-q1",
          type: "input",
          prompt: "sin²θ + cos²θ 等于多少？",
          answer: "1",
          placeholder: "输入一个数字",
          hint: "想想单位圆的方程。",
          explanation: "对任意角 θ，sin²θ + cos²θ = 1。",
        },
        {
          id: "l6-trig-identities-q2",
          type: "choice",
          prompt: "sin(2x) 的周期是多少？",
          options: ["π/2", "π", "2π", "4π"],
          answer: 1,
          hint: "通常的周期 2π 要除以 x 的系数。",
          explanation: "sin(kx) 的周期是 2π/|k|，所以 k = 2 时周期为 π。",
        },
      ],
    },
    {
      id: "l6-complex",
      title: "复数",
      strand: "Number",
      minutes: 9,
      summary:
        "用 i 把数轴扩展成一个平面，其中 i² = −1。",
      objectives: [
        "进行复数的加法",
        "求复数的模",
      ],
      body: [
        "方程 x² = −1 没有实数解，于是我们定义一个新数 i，使 i² = −1。复数的形式是 a + bi，其中 a 是实部，b 是虚部。",
        "复数的加减法是分别合并实部和虚部：(3 + 2i) + (1 − 4i) = 4 − 2i。乘法要用到 i² = −1；例如 (1 + i)² = 1 + 2i + i² = 2i。",
        "模 |a + bi| 表示复数到原点的距离：√(a² + b²)。所以 |3 + 4i| = 5。复数就是平面上的点，因此它与旋转和三角学有着漂亮的联系。",
      ],
      keyIdea: "i 相当于四分之一转：它把数轴旋转成一个平面。",
      example: {
        prompt: "计算 (3 + 2i) + (1 − 4i)。",
        steps: [
          "实部相加：3 + 1 = 4。",
          "虚部相加：2i − 4i = −2i。",
          "和是 4 − 2i。",
        ],
        answer: "4 − 2i",
      },
      questions: [
        {
          id: "l6-complex-q1",
          type: "choice",
          prompt: "(3 + 2i) + (1 − 4i) 等于多少？",
          options: ["4 + 6i", "4 − 2i", "2 + 2i", "4 − 6i"],
          answer: 1,
          hint: "分别合并实部和虚部。",
          explanation: "实部：3 + 1 = 4。虚部：2i − 4i = −2i。和是 4 − 2i。",
        },
        {
          id: "l6-complex-q2",
          type: "input",
          prompt: "模 |3 + 4i| 是多少？",
          answer: "5",
          placeholder: "输入一个数字",
          hint: "使用 √(a² + b²)。",
          explanation: "|3 + 4i| = √(3² + 4²) = √25 = 5。",
        },
      ],
    },
    {
      id: "l6-limits",
      title: "极限与连续性",
      strand: "Calculus",
      minutes: 9,
      summary:
        "描述函数值在无限接近某一点时的趋向，哪怕它永远无法真正取到那个值。",
      objectives: [
        "通过因式分解求极限",
        "识别可去间断点",
      ],
      body: [
        "极限描述的是当自变量无限接近某一点时，函数值趋向的那个数——它未必等于函数在该点的取值。函数在该点甚至可以没有定义，却仍然有极限。",
        "对 lim x→2 (x² − 4)/(x − 2)，直接代入得到 0/0，这是不定式。把分子因式分解：(x − 2)(x + 2)/(x − 2)。当 x ≠ 2 时，可以约去公因式，剩下 x + 2，它趋向 4。",
        "因为公因式被约去，图像在 x = 2 处是一个空心点，而不是竖直渐近线。这叫做可去间断点。当函数在某点的极限存在、函数在该点有定义，并且两者相等时，函数在该点连续。",
      ],
      keyIdea: "极限关心的是“趋近”的过程，而不是“到达”的结果。",
      example: {
        prompt: "求 lim x→2 (x² − 4)/(x − 2)。",
        steps: [
          "直接代入得到 0/0，所以先因式分解。",
          "x² − 4 = (x − 2)(x + 2)。",
          "约去 x − 2，剩下 x + 2。当 x → 2 时，它趋向 4。",
        ],
        answer: "4",
      },
      questions: [
        {
          id: "l6-limits-q1",
          type: "input",
          prompt: "求 lim x→2 (x² − 4)/(x − 2)。",
          answer: "4",
          placeholder: "输入一个数字",
          hint: "把分子因式分解，再约去公因式。",
          explanation: "当 x ≠ 2 时，(x² − 4)/(x − 2) = x + 2，它趋向 4。",
        },
        {
          id: "l6-limits-q2",
          type: "input",
          prompt: "求 lim x→0 (sin x)/x。",
          answer: "1",
          placeholder: "输入一个数字",
          hint: "这是微积分中贯穿始终的一个标准极限。",
          explanation: "当 x 趋向 0 时，(sin x)/x 趋向 1。",
        },
      ],
    },
    {
      id: "l6-derivatives",
      title: "导数与变化率",
      strand: "Calculus",
      minutes: 9,
      summary:
        "用平均变化率的极限来度量瞬时变化率。",
      objectives: [
        "对幂函数和三角函数求导",
        "把导数理解为斜率",
      ],
      body: [
        "平均变化率是两点之间的斜率。瞬时变化率则是当两点间的间隔缩小到零时的情形。这个极限就是导数，记作 f′(x) 或 dy/dx。",
        "幂法则告诉我们 d/dx xⁿ = nxⁿ⁻¹。所以 d/dx x³ = 3x²，在 x = 2 处斜率是 12。sin x 和 cos x 的导数分别是 cos x 和 −sin x，这个循环每求四次导数就重复一遍。",
        "导数是局部的斜率。f′ > 0 的地方，函数递增；f′ < 0 的地方，函数递减；f′ = 0 的地方，图像有水平切线，往往对应极大值或极小值。这是最优化问题的基础。",
      ],
      keyIdea: "导数把一条曲线变成某一点处的斜率。",
      example: {
        prompt: "求 y = x² 在 x = 2 处的斜率。",
        steps: [
          "求导：dy/dx = 2x。",
          "代入 x = 2：2(2) = 4。",
          "斜率是 4。",
        ],
        answer: "4",
      },
      questions: [
        {
          id: "l6-derivatives-q1",
          type: "input",
          prompt: "y = x² 在 x = 2 处的斜率是多少？",
          answer: "4",
          placeholder: "输入一个数字",
          hint: "先求导：dy/dx = 2x。",
          explanation: "dy/dx = 2x，所以 x = 2 处斜率是 4。",
        },
        {
          id: "l6-derivatives-q2",
          type: "choice",
          prompt: "sin x 的导数是什么？",
          options: ["cos x", "−cos x", "−sin x", "tan x"],
          answer: 0,
          hint: "正弦的导数是余弦。",
          explanation: "d/dx (sin x) = cos x。",
        },
      ],
    },
    {
      id: "l6-integrals",
      title: "积分与面积",
      strand: "Calculus",
      minutes: 9,
      summary:
        "把求导反过来，用来累积变化、度量曲线下方的面积。",
      objectives: [
        "求原函数",
        "计算定积分",
      ],
      body: [
        "积分是求导的逆运算。因为 d/dx x² = 2x，所以 2x 的一个原函数是 x²。由于常数的导数为零，我们写成 ∫2x dx = x² + C，其中 C 是积分常数。",
        "定积分累积的是两个上下限之间的量。微积分基本定理告诉我们：∫ₐᵇ f(x) dx = F(b) − F(a)，其中 F 是 f 的任意一个原函数。",
        "从几何上看，定积分给出的是曲线下方的有向面积。∫₀¹ 3x² dx = [x³]₀¹ = 1 − 0 = 1。x 轴下方的面积记为负，所以积分不仅能表示几何面积，还能刻画净变化。",
      ],
      keyIdea: "积分就是把无穷多个无穷小的部分累加起来。",
      example: {
        prompt: "计算 ∫₀¹ 3x² dx。",
        steps: [
          "3x² 的一个原函数是 x³。",
          "代入上下限：[x³]₀¹ = 1³ − 0³。",
          "结果是 1。",
        ],
        answer: "1",
      },
      questions: [
        {
          id: "l6-integrals-q1",
          type: "choice",
          prompt: "∫2x dx 等于什么？",
          options: ["x² + C", "2x² + C", "x + C", "2 + C"],
          answer: 0,
          hint: "哪个函数求导后能得到 2x？",
          explanation: "d/dx (x²) = 2x，所以 ∫2x dx = x² + C。",
        },
        {
          id: "l6-integrals-q2",
          type: "input",
          prompt: "计算 ∫₀¹ 3x² dx。",
          answer: "1",
          placeholder: "输入一个数字",
          hint: "3x² 的一个原函数是 x³。",
          explanation: "[x³]₀¹ = 1³ − 0³ = 1。",
        },
      ],
    },
    {
      id: "l6-distributions",
      title: "概率分布",
      strand: "Data",
      minutes: 9,
      summary:
        "用概率规则为随机过程建模，从抛硬币到钟形曲线。",
      objectives: [
        "求二项分布的均值",
        "理解正态分布中标准差的含义",
      ],
      body: [
        "随机变量给每一个结果指定一个数值。概率分布列出每个可能取值及其概率；所有概率之和必须等于 1，而期望值是按概率加权的平均值。",
        "二项分布统计的是 n 次独立重复试验中成功的次数，每次试验成功的概率为 p，其均值是 np。若罚球 10 次、命中率 30%，则期望命中次数是 10 × 0.3 = 3。",
        "正态分布是一条对称的钟形曲线。约 68% 的数值落在均值的一个标准差之内，约 95% 落在两个标准差以内，约 99.7% 落在三个标准差以内。中心极限定理说明了为什么和与平均值常常呈现正态的样子。",
      ],
      keyIdea: "概率分布把不确定性变成可以计算的规律。",
      example: {
        prompt: "一名球员罚球 10 次，每次成功的概率为 0.3。期望命中次数是多少？",
        steps: [
          "这是二项分布，n = 10，p = 0.3。",
          "二项分布的均值是 np。",
          "10 × 0.3 = 3。",
        ],
        answer: "3",
      },
      questions: [
        {
          id: "l6-distributions-q1",
          type: "input",
          prompt:
            "某二项分布的试验次数 n = 10，成功概率 p = 0.3。它的均值是多少？",
          answer: "3",
          placeholder: "输入一个数字",
          hint: "均值 = np。",
          explanation: "np = 10 × 0.3 = 3。",
        },
        {
          id: "l6-distributions-q2",
          type: "input",
          prompt:
            "对于正态分布，大约有百分之几的数值落在均值的一个标准差之内？",
          answer: "68",
          placeholder: "输入一个百分数",
          hint: "68–95–99.7 法则。",
          explanation:
            "在正态分布中，约 68% 的数值落在均值的一个标准差之内。",
        },
      ],
    },
    {
      id: "l6-vectors",
      title: "向量与矩阵",
      strand: "Advanced",
      minutes: 9,
      summary:
        "用向量表示方向与大小，用矩阵表示有条理的变换。",
      objectives: [
        "求向量的模",
        "计算数量积",
      ],
      body: [
        "向量既有大小，也有方向。在二维平面上，v = (3, 4) 表示向右 3、向上 4。它的模是 √(3² + 4²) = 5，也就是箭头的长度。",
        "数量积把两个向量合成一个数：(a, b) · (c, d) = ac + bd。所以 (1, 2) · (3, 4) = 3 + 8 = 11。当数量积为零时，两个向量互相垂直。",
        "矩阵是排列成长方形的数表，可以表示一种变换。矩阵相乘相当于依次施加两个变换；单位矩阵不改变任何向量。顺序很重要：AB 通常不等于 BA。",
      ],
      keyIdea: "向量描述运动，矩阵描述变换。",
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
          placeholder: "输入一个数字",
          hint: "使用 √(x² + y²)。",
          explanation: "√(3² + 4²) = √25 = 5。",
        },
        {
          id: "l6-vectors-q2",
          type: "input",
          prompt: "数量积 (1, 2) · (3, 4) 等于多少？",
          answer: "11",
          placeholder: "输入一个数字",
          hint: "对应分量相乘，再把积相加。",
          explanation: "(1)(3) + (2)(4) = 3 + 8 = 11。",
        },
      ],
    },
  ],
};
