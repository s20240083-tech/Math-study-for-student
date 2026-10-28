export const level4 = {
  id: "the-bridge",
  index: 4,
  stage: "Middle",
  grades: "Grades 7–8",
  ages: "Ages 12–14",
  title: "The Bridge",
  tagline: "From arithmetic to algebra — the leap that changes everything.",
  description:
    "Work confidently with negative numbers, equations, proportion, Pythagoras, transformations, and probability.",
  accent: "#3E6A8C",
  soft: "#DEE8F0",
  lessons: [
    {
      id: "l4-integers",
      title: "Integers & absolute value",
      strand: "Number",
      minutes: 8,
      summary:
        "Extend the number line to the left and learn the rules for moving around zero.",
      objectives: [
        "Add and subtract positive and negative numbers",
        "Interpret absolute value as distance",
      ],
      body: [
        "Integers are the whole numbers together with their negatives: … −3, −2, −1, 0, 1, 2, 3 … On the number line, adding a positive number moves right; adding a negative moves left. −7 + 4 means start at −7 and move 4 right, landing at −3.",
        "Subtracting a negative is the same as adding: 5 − (−3) = 5 + 3 = 8. Two negatives make a positive because removing a debt increases what you have.",
        "Absolute value measures distance from zero, regardless of direction. |−9| = 9 and |9| = 9. Distance is never negative — that is why absolute value strips away the sign.",
      ],
      keyIdea: "A negative sign can mean direction, not just 'less than zero'.",
      example: {
        prompt: "Find −7 + 4.",
        steps: [
          "Start at −7 on the number line.",
          "Move 4 units to the right.",
          "You land at −3.",
        ],
        answer: "−3",
      },
      questions: [
        {
          id: "l4-integers-q1",
          type: "input",
          prompt: "What is −7 + 4?",
          answer: "-3",
          placeholder: "Type a number",
          hint: "Start at −7 and move 4 to the right.",
          explanation: "Moving 4 right from −7 gives −3.",
        },
        {
          id: "l4-integers-q2",
          type: "input",
          prompt: "What is |−9|?",
          answer: "9",
          placeholder: "Type a number",
          hint: "Absolute value is distance from zero.",
          explanation: "−9 is 9 units from zero, so |−9| = 9.",
        },
      ],
    },
    {
      id: "l4-rational",
      title: "Rational numbers & operations",
      strand: "Number",
      minutes: 8,
      summary:
        "Add, compare, and order fractions and decimals — including the negative ones.",
      objectives: [
        "Add fractions with unlike denominators",
        "Order negative rational numbers",
      ],
      body: [
        "A rational number can be written as a fraction of two integers. That includes 3/4, −0.6, 5, and 0.333… . Fractions and decimals are two languages for the same kind of number.",
        "To add fractions, use a common denominator. −1/2 + 3/4 = −2/4 + 3/4 = 1/4. The sign belongs to the numerator: subtracting a half is the same as adding negative two quarters.",
        "Negative numbers reverse the usual ordering. On the number line, −0.6 lies to the left of −0.45, so −0.6 is smaller. The digit 6 is larger than 4, but the negative sign flips the comparison.",
      ],
      keyIdea: "For negative numbers, farther left on the line means smaller.",
      example: {
        prompt: "Find −1/2 + 3/4.",
        steps: [
          "Use denominator 4: −1/2 = −2/4.",
          "Add: −2/4 + 3/4 = 1/4.",
          "The result is positive because 3/4 is larger than 1/2.",
        ],
        answer: "1/4",
      },
      questions: [
        {
          id: "l4-rational-q1",
          type: "choice",
          prompt: "What is −1/2 + 3/4?",
          options: ["−1/4", "1/4", "1/2", "−1"],
          answer: 1,
          hint: "Rewrite −1/2 with denominator 4.",
          explanation: "−1/2 = −2/4, so −2/4 + 3/4 = 1/4.",
        },
        {
          id: "l4-rational-q2",
          type: "choice",
          prompt: "Which number is smaller, −0.6 or −0.45?",
          options: ["−0.6", "−0.45", "They are equal", "Cannot tell"],
          answer: 0,
          hint: "Plot both on a number line. Which is farther left?",
          explanation:
            "−0.6 is farther left than −0.45 on the number line, so −0.6 is smaller.",
        },
      ],
    },
    {
      id: "l4-linear-equations",
      title: "Linear expressions & equations",
      strand: "Algebra",
      minutes: 9,
      summary:
        "Simplify expressions, then use inverse operations to keep an equation balanced.",
      objectives: [
        "Expand brackets and collect like terms",
        "Solve equations with variables on both sides",
      ],
      body: [
        "An equation is a balance. Whatever you do to one side, you must do to the other. To solve 3(x − 2) = 12, first distribute: 3x − 6 = 12. Then add 6 and divide by 3 to get x = 6.",
        "When variables appear on both sides, collect them on one side. For 4x − 7 = 2x + 5, subtract 2x from both sides to get 2x − 7 = 5, then add 7 and divide by 2: x = 6.",
        "Always check your solution. Substitute x = 6 into the original equation: 3(6 − 2) = 3 × 4 = 12. The check catches sign errors and arithmetic slips.",
      ],
      keyIdea: "An equation stays true only if both sides change in the same way.",
      example: {
        prompt: "Solve 3(x − 2) = 12.",
        steps: [
          "Distribute: 3x − 6 = 12.",
          "Add 6 to both sides: 3x = 18.",
          "Divide both sides by 3: x = 6.",
        ],
        answer: "x = 6",
      },
      questions: [
        {
          id: "l4-linear-equations-q1",
          type: "input",
          prompt: "Solve 3(x − 2) = 12.",
          answer: "6",
          placeholder: "Type the value of x",
          hint: "Distribute first, then undo the operations.",
          explanation: "3x − 6 = 12, so 3x = 18 and x = 6.",
        },
        {
          id: "l4-linear-equations-q2",
          type: "choice",
          prompt: "Solve 4x − 7 = 2x + 5.",
          options: ["x = 6", "x = −6", "x = 2", "x = 12"],
          answer: 0,
          hint: "Subtract 2x from both sides first.",
          explanation:
            "Subtracting 2x gives 2x − 7 = 5. Adding 7 gives 2x = 12, so x = 6.",
        },
      ],
    },
    {
      id: "l4-proportion",
      title: "Proportional relationships & slope",
      strand: "Algebra",
      minutes: 9,
      summary:
        "Recognise a constant rate of change in tables, graphs, and equations.",
      objectives: [
        "Identify a proportional relationship",
        "Calculate slope as a rate of change",
      ],
      body: [
        "Two quantities are proportional when one is a constant multiple of the other: y = kx. The constant k is the unit rate. If 3 books cost $21, each book costs $7, so 5 books cost $35.",
        "On a graph, a proportional relationship is a straight line through the origin. Its steepness is the slope: rise over run. A line through (0, 0) and (4, 10) rises 10 while running 4, so the slope is 10/4 = 2.5.",
        "Slope measures how much y changes for each one-unit increase in x — a rate. A positive slope rises left to right; a negative slope falls; a horizontal line has slope 0; a vertical line has undefined slope.",
      ],
      keyIdea: "Proportional means a constant ratio — and a straight line through the origin.",
      example: {
        prompt: "Find the slope of the line through (0, 0) and (4, 10).",
        steps: [
          "Slope = change in y ÷ change in x.",
          "Change in y: 10 − 0 = 10. Change in x: 4 − 0 = 4.",
          "Slope = 10 ÷ 4 = 2.5.",
        ],
        answer: "2.5",
      },
      questions: [
        {
          id: "l4-proportion-q1",
          type: "input",
          prompt: "What is the slope of the line through (0, 0) and (4, 10)?",
          answer: "2.5",
          placeholder: "Type a number",
          hint: "Divide the change in y by the change in x.",
          explanation: "The rise is 10 and the run is 4, so the slope is 10 ÷ 4 = 2.5.",
        },
        {
          id: "l4-proportion-q2",
          type: "input",
          prompt: "If 3 books cost $21, how much do 5 books cost?",
          answer: "35",
          placeholder: "Type a number",
          hint: "Find the cost of one book first.",
          explanation: "$21 ÷ 3 = $7 per book, and 5 × $7 = $35.",
        },
      ],
    },
    {
      id: "l4-pythagoras",
      title: "Pythagoras & right triangles",
      strand: "Geometry",
      minutes: 9,
      summary:
        "Use a² + b² = c² to connect the three sides of any right triangle.",
      objectives: [
        "Find a missing side of a right triangle",
        "Recognise common Pythagorean triples",
      ],
      body: [
        "In a right triangle, the side opposite the right angle is the hypotenuse — the longest side. Pythagoras' theorem says the squares of the two shorter sides add to the square of the hypotenuse: a² + b² = c².",
        "If the legs are 6 and 8, then c² = 36 + 64 = 100, so c = 10. If the hypotenuse is 13 and one leg is 5, then b² = 169 − 25 = 144, so b = 12.",
        "The converse also works: if a triangle's sides satisfy a² + b² = c², the triangle must be right-angled. Whole-number examples such as 3-4-5 and 5-12-13 are called Pythagorean triples.",
      ],
      keyIdea: "The two smaller squares together equal the largest square.",
      example: {
        prompt: "A right triangle has legs 6 and 8. Find the hypotenuse.",
        steps: [
          "6² + 8² = c².",
          "36 + 64 = 100.",
          "c = √100 = 10.",
        ],
        answer: "10",
      },
      questions: [
        {
          id: "l4-pythagoras-q1",
          type: "input",
          prompt: "A right triangle has legs 6 and 8. How long is the hypotenuse?",
          answer: "10",
          placeholder: "Type a number",
          hint: "Find 6² + 8², then take the square root.",
          explanation: "6² + 8² = 36 + 64 = 100, and √100 = 10.",
        },
        {
          id: "l4-pythagoras-q2",
          type: "input",
          prompt: "A right triangle has hypotenuse 13 and one leg 5. How long is the other leg?",
          answer: "12",
          placeholder: "Type a number",
          hint: "13² − 5² = ?",
          explanation: "13² − 5² = 169 − 25 = 144, and √144 = 12.",
        },
      ],
    },
    {
      id: "l4-transformations",
      title: "Transformations & congruence",
      strand: "Geometry",
      minutes: 8,
      summary:
        "Slide, flip, turn, and resize shapes — and track what stays the same.",
      objectives: [
        "Apply translations, reflections, and rotations",
        "Distinguish congruence from similarity",
      ],
      body: [
        "A translation slides a shape without turning or flipping it. A reflection flips it over a line, like a mirror. A rotation turns it around a fixed point. These three are rigid transformations: size and shape stay the same, so the image is congruent to the original.",
        "Reflecting the point (3, 4) over the x-axis changes the sign of y: (3, −4). Reflecting over the y-axis changes the sign of x. A 180° rotation about the origin changes both signs.",
        "A dilation resizes a shape by a scale factor. It keeps angles and proportions but changes lengths, producing a similar shape, not a congruent one. If lengths double, areas multiply by 4, because area is two-dimensional.",
      ],
      keyIdea: "Rigid transformations preserve size; dilations preserve shape.",
      example: {
        prompt: "Reflect the point (3, 4) across the x-axis.",
        steps: [
          "A reflection across the x-axis keeps x the same.",
          "It changes the sign of y: 4 becomes −4.",
          "The image is (3, −4).",
        ],
        answer: "(3, −4)",
      },
      questions: [
        {
          id: "l4-transformations-q1",
          type: "choice",
          prompt: "Reflecting (3, 4) across the x-axis gives …",
          options: ["(−3, 4)", "(3, −4)", "(−3, −4)", "(4, 3)"],
          answer: 1,
          hint: "A reflection over the x-axis affects the y-coordinate.",
          explanation: "The x-coordinate stays 3 and the y-coordinate changes sign, giving (3, −4).",
        },
        {
          id: "l4-transformations-q2",
          type: "input",
          prompt:
            "A shape is dilated by a scale factor of 2. By what factor does its area change?",
          answer: "4",
          placeholder: "Type a number",
          hint: "Area depends on two dimensions.",
          explanation:
            "Both length and width double, so area is multiplied by 2 × 2 = 4.",
        },
      ],
    },
    {
      id: "l4-probability",
      title: "Probability & sample space",
      strand: "Data",
      minutes: 8,
      summary:
        "List all possible outcomes and measure likelihood on a scale from 0 to 1.",
      objectives: [
        "Calculate simple probabilities",
        "Use sample spaces for combined events",
      ],
      body: [
        "Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). For equally likely outcomes, probability = favourable outcomes ÷ total outcomes. A fair die has 6 outcomes, and 3 are even, so P(even) = 3/6 = 1/2.",
        "A sample space lists every possible outcome. For two coins, the sample space is HH, HT, TH, TT. 'At least one head' covers HH, HT, and TH — 3 of the 4 outcomes, so the probability is 3/4.",
        "Probabilities of all outcomes in a sample space add to 1. The complement of an event has probability 1 minus the event's probability: if rain has probability 0.3, no rain has probability 0.7.",
      ],
      keyIdea: "Count the outcomes you want, then divide by all possible outcomes.",
      example: {
        prompt: "A fair die is rolled. What is the probability of an even number?",
        steps: [
          "The even outcomes are 2, 4, and 6 — three outcomes.",
          "A die has six equally likely outcomes.",
          "P(even) = 3/6 = 1/2.",
        ],
        answer: "1/2",
      },
      questions: [
        {
          id: "l4-probability-q1",
          type: "choice",
          prompt: "A fair six-sided die is rolled. What is the probability of an even number?",
          options: ["1/6", "1/3", "1/2", "2/3"],
          answer: 2,
          hint: "How many even numbers are on a die?",
          explanation: "There are 3 even outcomes (2, 4, 6) out of 6, so the probability is 3/6 = 1/2.",
        },
        {
          id: "l4-probability-q2",
          type: "choice",
          prompt: "Two fair coins are flipped. What is the probability of at least one head?",
          options: ["1/4", "1/2", "3/4", "1"],
          answer: 2,
          hint: "List HH, HT, TH, TT.",
          explanation:
            "The sample space is HH, HT, TH, TT. Three of the four outcomes include at least one head, so the probability is 3/4.",
        },
      ],
    },
    {
      id: "l4-statistics",
      title: "Statistics & sampling",
      strand: "Data",
      minutes: 8,
      summary:
        "Use samples to learn about a population — and question whether the sample is fair.",
      objectives: [
        "Recognise biased samples",
        "Explain how outliers affect averages",
      ],
      body: [
        "A population is the whole group you want to understand; a sample is the part you actually measure. A good sample is representative: every member of the population should have a fair chance of being chosen.",
        "Convenience samples can mislead. Surveying only gym members about exercise habits will overestimate how much the general population exercises. The sample is biased because the selection method favours a particular group.",
        "Outliers are extreme values. Because the mean uses every value, one very large value can pull it up dramatically. The median, which depends only on position, moves much less. When data is skewed, the median often tells a fairer story.",
      ],
      keyIdea: "Ask not just what the data says, but who was included.",
      example: {
        prompt:
          "A gym surveys its members about weekly exercise. Why might the result be biased?",
        steps: [
          "The population of interest is probably all adults, not just gym members.",
          "Gym members are more likely to exercise often.",
          "The sample over-represents active people, so the estimate will be too high.",
        ],
        answer: "The sample is not representative of all adults.",
      },
      questions: [
        {
          id: "l4-statistics-q1",
          type: "choice",
          prompt:
            "A researcher wants to estimate how often adults in a city exercise. Which sample is most likely to be biased?",
          options: [
            "A random sample of city residents",
            "Members of a fitness club",
            "Names drawn from the tax register",
            "Every 50th person entering a library",
          ],
          answer: 1,
          hint: "Which group is unusually likely to exercise?",
          explanation:
            "Fitness club members are more active than the general adult population, so their responses would overestimate exercise rates.",
        },
        {
          id: "l4-statistics-q2",
          type: "choice",
          prompt:
            "A data set of salaries has one extremely high salary added. Which measure is pulled up the most?",
          options: ["Mean", "Median", "Mode", "None of them"],
          answer: 0,
          hint: "Which average uses the size of every value?",
          explanation:
            "The mean uses every value, so an extreme salary pulls it upward much more than the median.",
        },
      ],
    },
    {
      id: "l4-exponents",
      title: "Exponents & roots",
      strand: "Number",
      minutes: 8,
      summary:
        "Use powers as repeated multiplication, and roots as the reverse question.",
      objectives: [
        "Apply the laws of exponents",
        "Evaluate square roots and scientific notation",
      ],
      body: [
        "An exponent records repeated multiplication: 2³ = 2 × 2 × 2 = 8. The base is 2 and the exponent is 3. When multiplying powers with the same base, add the exponents: 2³ × 2⁴ = 2⁷.",
        "Roots undo powers. Since 12² = 144, √144 = 12. The square root asks: what number multiplied by itself gives this value? The cube root of 27 is 3, because 3³ = 27.",
        "Scientific notation writes very large or small numbers as a number between 1 and 10 times a power of 10. 0.00042 = 4.2 × 10⁻⁴. The negative exponent means the decimal point moves left.",
      ],
      keyIdea: "Exponents count repeated factors; roots ask what factor was repeated.",
      example: {
        prompt: "Simplify 2³ × 2⁴.",
        steps: [
          "The bases are the same, so add the exponents.",
          "3 + 4 = 7.",
          "The result is 2⁷.",
        ],
        answer: "2⁷",
      },
      questions: [
        {
          id: "l4-exponents-q1",
          type: "choice",
          prompt: "What is 2³ × 2⁴?",
          options: ["2⁷", "2¹²", "4⁷", "2⁶"],
          answer: 0,
          hint: "Keep the base and add the exponents.",
          explanation: "2³ × 2⁴ = 2^(3+4) = 2⁷.",
        },
        {
          id: "l4-exponents-q2",
          type: "input",
          prompt: "What is √144?",
          answer: "12",
          placeholder: "Type a number",
          hint: "Which number times itself gives 144?",
          explanation: "12 × 12 = 144, so √144 = 12.",
        },
      ],
    },
  ],
};
