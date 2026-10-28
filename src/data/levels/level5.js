export const level5 = {
  id: "algebra-connections",
  index: 5,
  stage: "Secondary",
  grades: "Grades 9–10",
  ages: "Ages 14–16",
  title: "Algebra & Connections",
  tagline: "Functions, equations, and geometry speaking the same language.",
  description:
    "Master linear systems, quadratics, functions, trigonometry, circles, and data models.",
  accent: "#8A5377",
  soft: "#EEE2EA",
  lessons: [
    {
      id: "l5-linear-functions",
      title: "Linear functions & graphs",
      strand: "Functions",
      minutes: 9,
      summary:
        "Read slope and intercept from an equation, and connect parallel and perpendicular lines.",
      objectives: [
        "Interpret slope-intercept form",
        "Find slopes of parallel and perpendicular lines",
      ],
      body: [
        "A linear function has a constant rate of change, so its graph is a straight line. In slope-intercept form y = mx + b, m is the slope and b is the y-intercept — where the line crosses the y-axis.",
        "Slope measures rise over run. In y = 3x − 2, every step right increases y by 3, so the slope is 3 and the line crosses the y-axis at −2.",
        "Parallel lines have equal slopes. Perpendicular lines have slopes that multiply to −1: a line perpendicular to slope 2 has slope −1/2. The negative reciprocal relationship comes from the right angle between them.",
      ],
      keyIdea: "y = mx + b is a description of a constant rate.",
      example: {
        prompt: "Find the slope and y-intercept of y = 3x − 2.",
        steps: [
          "Compare with y = mx + b.",
          "m = 3, so the slope is 3.",
          "b = −2, so the line crosses the y-axis at (0, −2).",
        ],
        answer: "Slope 3; y-intercept −2",
      },
      questions: [
        {
          id: "l5-linear-functions-q1",
          type: "input",
          prompt: "What is the slope of the line y = 3x − 2?",
          answer: "3",
          placeholder: "Type a number",
          hint: "The slope is the coefficient of x.",
          explanation: "In y = mx + b, m = 3, so the slope is 3.",
        },
        {
          id: "l5-linear-functions-q2",
          type: "choice",
          prompt: "A line is perpendicular to a line with slope 2. What is its slope?",
          options: ["2", "−2", "−1/2", "1/2"],
          answer: 2,
          hint: "Perpendicular slopes multiply to −1.",
          explanation: "The negative reciprocal of 2 is −1/2, and 2 × (−1/2) = −1.",
        },
      ],
    },
    {
      id: "l5-systems",
      title: "Systems of linear equations",
      strand: "Algebra",
      minutes: 9,
      summary:
        "Find the point where two lines agree, using substitution or elimination.",
      objectives: [
        "Solve a system by substitution",
        "Interpret the intersection point",
      ],
      body: [
        "A system of two linear equations asks where two lines meet. The solution is an ordered pair that makes both equations true at once. Graphically, it is the intersection point.",
        "Substitution works well when one variable is isolated. From x + y = 10 and x − y = 4, add the equations to eliminate y: 2x = 14, so x = 7. Then y = 3.",
        "A system can also have no solution — parallel lines that never meet — or infinitely many solutions if the equations describe the same line. The algebra reveals this: a false statement like 0 = 5 means no solution.",
      ],
      keyIdea: "A solution must satisfy every equation in the system.",
      example: {
        prompt: "Solve x + y = 10 and x − y = 4.",
        steps: [
          "Add the equations: 2x = 14, so x = 7.",
          "Substitute back: 7 + y = 10, so y = 3.",
          "The solution is (7, 3).",
        ],
        answer: "(7, 3)",
      },
      questions: [
        {
          id: "l5-systems-q1",
          type: "choice",
          prompt: "Solve the system x + y = 10 and x − y = 4.",
          options: ["(7, 3)", "(3, 7)", "(6, 4)", "(4, 6)"],
          answer: 0,
          hint: "Adding the equations eliminates y.",
          explanation: "Adding gives 2x = 14, so x = 7. Then 7 + y = 10, so y = 3.",
        },
        {
          id: "l5-systems-q2",
          type: "input",
          prompt: "Solve for x: 2x + 3y = 12 and y = 2.",
          answer: "3",
          placeholder: "Type a number",
          hint: "Substitute y = 2 into the first equation.",
          explanation: "2x + 3(2) = 12, so 2x + 6 = 12 and 2x = 6, giving x = 3.",
        },
      ],
    },
    {
      id: "l5-inequalities",
      title: "Linear inequalities",
      strand: "Algebra",
      minutes: 8,
      summary:
        "Solve inequalities like equations — but flip the sign when multiplying or dividing by a negative.",
      objectives: [
        "Solve one-variable inequalities",
        "Represent solutions on a number line",
      ],
      body: [
        "An inequality compares expressions using <, >, ≤, or ≥. Its solution is a range of values, not a single number. 3x − 5 ≤ 10 solves to x ≤ 5: every number up to and including 5.",
        "The balance rules are mostly the same as for equations. The crucial exception: multiplying or dividing both sides by a negative number reverses the inequality sign. −2x > 8 becomes x < −4.",
        "On a number line, use an open circle for < or > (the endpoint is excluded) and a closed circle for ≤ or ≥ (the endpoint is included). Shade the direction that contains the solutions.",
      ],
      keyIdea: "Flip the inequality sign when you multiply or divide by a negative.",
      example: {
        prompt: "Solve −2x > 8.",
        steps: [
          "Divide both sides by −2.",
          "Because −2 is negative, reverse the inequality sign.",
          "x < −4.",
        ],
        answer: "x < −4",
      },
      questions: [
        {
          id: "l5-inequalities-q1",
          type: "choice",
          prompt: "Solve −2x > 8.",
          options: ["x > −4", "x < −4", "x > 4", "x < 4"],
          answer: 1,
          hint: "Divide by −2 and reverse the sign.",
          explanation: "Dividing by −2 gives x < −4 because the inequality sign reverses.",
        },
        {
          id: "l5-inequalities-q2",
          type: "input",
          prompt: "Solve 3x − 5 ≤ 10. What is the largest whole number that works?",
          answer: "5",
          placeholder: "Type a number",
          hint: "Add 5, then divide by 3.",
          explanation: "3x ≤ 15, so x ≤ 5. The largest whole number is 5.",
        },
      ],
    },
    {
      id: "l5-polynomials",
      title: "Polynomials & factoring",
      strand: "Algebra",
      minutes: 9,
      summary:
        "Expand products of brackets, then reverse the process to factor and reveal structure.",
      objectives: [
        "Expand two binomials",
        "Factor a difference of squares",
      ],
      body: [
        "A polynomial is a sum of terms with non-negative whole-number exponents. Expanding (x + 3)(x − 4) means multiplying every term in the first bracket by every term in the second: x² − 4x + 3x − 12 = x² − x − 12.",
        "Factoring reverses expansion. Look for common factors first, then patterns. The difference of squares is especially useful: a² − b² = (a − b)(a + b). So x² − 9 = (x − 3)(x + 3).",
        "Why factor? Because factored form reveals zeros. If a product equals zero, at least one factor is zero. That is the key to solving quadratic equations without guessing.",
      ],
      keyIdea: "Expansion builds a sum; factoring reveals the pieces that multiply to it.",
      example: {
        prompt: "Expand (x + 3)(x − 4).",
        steps: [
          "x(x − 4) = x² − 4x.",
          "3(x − 4) = 3x − 12.",
          "Combine: x² − 4x + 3x − 12 = x² − x − 12.",
        ],
        answer: "x² − x − 12",
      },
      questions: [
        {
          id: "l5-polynomials-q1",
          type: "choice",
          prompt: "What is (x + 3)(x − 4) expanded?",
          options: ["x² − x − 12", "x² + x − 12", "x² − 7x − 12", "x² − 12"],
          answer: 0,
          hint: "Multiply each term in the first bracket by each term in the second.",
          explanation:
            "x² − 4x + 3x − 12 simplifies to x² − x − 12.",
        },
        {
          id: "l5-polynomials-q2",
          type: "choice",
          prompt: "Factor x² − 9.",
          options: ["(x − 3)²", "(x − 3)(x + 3)", "(x − 9)(x + 1)", "x(x − 9)"],
          answer: 1,
          hint: "This is a difference of squares.",
          explanation:
            "x² − 9 = x² − 3², which factors as (x − 3)(x + 3).",
        },
      ],
    },
    {
      id: "l5-quadratics",
      title: "Quadratic equations",
      strand: "Algebra",
      minutes: 9,
      summary:
        "Solve by factoring or the quadratic formula, and use the discriminant to predict the roots.",
      objectives: [
        "Solve quadratic equations",
        "Use the discriminant to count real roots",
      ],
      body: [
        "A quadratic equation has the form ax² + bx + c = 0. Its graph is a parabola. Solutions are the x-values where the graph crosses the x-axis, called roots or zeros.",
        "Factoring is quickest when it works. x² − 5x + 6 = 0 factors as (x − 2)(x − 3) = 0, giving x = 2 or x = 3. When factoring fails, the quadratic formula always works: x = (−b ± √(b² − 4ac)) / 2a.",
        "The expression inside the square root, b² − 4ac, is the discriminant. If it is positive, there are two real roots; if zero, one repeated root; if negative, no real roots. For x² + 2x + 5 = 0, the discriminant is 4 − 20 = −16, so there are no real solutions.",
      ],
      keyIdea: "Roots are where the parabola meets the x-axis.",
      example: {
        prompt: "Solve x² − 5x + 6 = 0.",
        steps: [
          "Find two numbers that multiply to 6 and add to −5: −2 and −3.",
          "Factor: (x − 2)(x − 3) = 0.",
          "So x = 2 or x = 3.",
        ],
        answer: "x = 2 or x = 3",
      },
      questions: [
        {
          id: "l5-quadratics-q1",
          type: "choice",
          prompt: "What are the roots of x² − 5x + 6 = 0?",
          options: ["2 and 3", "−2 and −3", "1 and 6", "−1 and −6"],
          answer: 0,
          hint: "Which two numbers multiply to 6 and add to −5?",
          explanation: "The equation factors as (x − 2)(x − 3) = 0, so x = 2 or x = 3.",
        },
        {
          id: "l5-quadratics-q2",
          type: "input",
          prompt: "What is the discriminant of x² + 2x + 5 = 0?",
          answer: "-16",
          placeholder: "Type a number",
          hint: "Use b² − 4ac with a = 1, b = 2, c = 5.",
          explanation: "b² − 4ac = 2² − 4(1)(5) = 4 − 20 = −16.",
        },
      ],
    },
    {
      id: "l5-functions",
      title: "Functions & transformations",
      strand: "Functions",
      minutes: 9,
      summary:
        "A function is a rule with one output per input; transformations move its graph without changing its shape.",
      objectives: [
        "Evaluate and interpret function notation",
        "Describe shifts of a graph",
      ],
      body: [
        "A function assigns exactly one output to each input. Function notation makes the rule clear: f(x) = 2x + 1. Then f(3) = 2(3) + 1 = 7. The parentheses do not mean multiplication; they mean 'apply the function to 3'.",
        "The domain is the set of allowed inputs, and the range is the set of possible outputs. For f(x) = x², the domain is all real numbers, but the range is y ≥ 0 because a square cannot be negative.",
        "Transformations shift or stretch a graph. Replacing x with x − 2 shifts the graph 2 units right — counterintuitive, because the input must be 2 larger to produce the same output. Adding a constant outside, f(x) + 3, shifts it up.",
      ],
      keyIdea: "Inside the function changes x; outside the function changes y.",
      example: {
        prompt: "If f(x) = 2x + 1, find f(3).",
        steps: [
          "Substitute 3 for x: f(3) = 2(3) + 1.",
          "Multiply: 6 + 1.",
          "The output is 7.",
        ],
        answer: "7",
      },
      questions: [
        {
          id: "l5-functions-q1",
          type: "input",
          prompt: "If f(x) = 2x + 1, what is f(3)?",
          answer: "7",
          placeholder: "Type a number",
          hint: "Substitute 3 for x.",
          explanation: "f(3) = 2(3) + 1 = 7.",
        },
        {
          id: "l5-functions-q2",
          type: "choice",
          prompt: "How is the graph of g(x − 2) related to g(x)?",
          options: [
            "Shifted 2 units left",
            "Shifted 2 units right",
            "Shifted 2 units up",
            "Stretched vertically by 2",
          ],
          answer: 1,
          hint: "Inside the function affects horizontal movement in the opposite direction.",
          explanation:
            "Replacing x with x − 2 shifts the graph 2 units to the right.",
        },
      ],
    },
    {
      id: "l5-trigonometry",
      title: "Right-triangle trigonometry",
      strand: "Geometry",
      minutes: 9,
      summary:
        "Use sine, cosine, and tangent to connect angles to side lengths in right triangles.",
      objectives: [
        "Apply SOH-CAH-TOA",
        "Use exact values for special angles",
      ],
      body: [
        "In a right triangle, the three basic trigonometric ratios compare sides relative to an angle: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent. The mnemonic SOH-CAH-TOA keeps them straight.",
        "These ratios depend only on the angle, not the size of the triangle. That is why a 30° angle always has the same sine, no matter how large the triangle. For 30°, sin 30° = 1/2; for 45°, tan 45° = 1.",
        "Trigonometry solves real triangles. If a ladder makes a 60° angle with the ground and is 8 m long, its height is 8 sin 60° = 8 × (√3/2) = 4√3 ≈ 6.93 m. The sine ratio connects the hypotenuse to the opposite side.",
      ],
      keyIdea: "An angle fixes the ratio of two sides.",
      example: {
        prompt: "What is sin 30°?",
        steps: [
          "Picture a 30-60-90 triangle: sides in ratio 1 : √3 : 2.",
          "The side opposite 30° is 1 and the hypotenuse is 2.",
          "sin 30° = opposite/hypotenuse = 1/2.",
        ],
        answer: "1/2",
      },
      questions: [
        {
          id: "l5-trigonometry-q1",
          type: "choice",
          prompt: "What is sin 30°?",
          options: ["1/2", "√2/2", "√3/2", "1"],
          answer: 0,
          hint: "In a 30-60-90 triangle, the shortest side is half the hypotenuse.",
          explanation: "sin 30° = opposite/hypotenuse = 1/2.",
        },
        {
          id: "l5-trigonometry-q2",
          type: "input",
          prompt: "What is tan 45°?",
          answer: "1",
          placeholder: "Type a number",
          hint: "A 45-45-90 triangle has equal legs.",
          explanation: "For 45°, opposite and adjacent sides are equal, so tan 45° = 1.",
        },
      ],
    },
    {
      id: "l5-circles",
      title: "Circles & coordinate geometry",
      strand: "Geometry",
      minutes: 9,
      summary:
        "Describe circles with equations and use the radius-tangent relationship.",
      objectives: [
        "Read the center and radius from an equation",
        "Use the tangent-radius property",
      ],
      body: [
        "A circle is the set of points a fixed distance from a center. In the coordinate plane, that definition becomes (x − h)² + (y − k)² = r², where (h, k) is the center and r is the radius.",
        "For (x − 2)² + (y + 3)² = 16, the center is (2, −3). Be careful with signs: y + 3 means y − (−3), so k = −3. The radius is √16 = 4.",
        "A tangent line touches the circle at exactly one point and is perpendicular to the radius drawn to that point. This right angle is the key to many circle proofs and to finding tangent lengths with Pythagoras.",
      ],
      keyIdea: "The equation encodes the center and the radius.",
      example: {
        prompt: "Find the center and radius of (x − 2)² + (y + 3)² = 16.",
        steps: [
          "Compare with (x − h)² + (y − k)² = r².",
          "h = 2 and k = −3, so the center is (2, −3).",
          "r² = 16, so r = 4.",
        ],
        answer: "Center (2, −3), radius 4",
      },
      questions: [
        {
          id: "l5-circles-q1",
          type: "choice",
          prompt: "What is the center of the circle (x − 2)² + (y + 3)² = 16?",
          options: ["(2, 3)", "(2, −3)", "(−2, 3)", "(−2, −3)"],
          answer: 1,
          hint: "Rewrite y + 3 as y − (−3).",
          explanation:
            "The standard form is (x − h)² + (y − k)² = r², so h = 2 and k = −3.",
        },
        {
          id: "l5-circles-q2",
          type: "input",
          prompt: "A tangent meets a radius at what angle, in degrees?",
          answer: "90",
          placeholder: "Type a number",
          hint: "Tangent and radius are perpendicular.",
          explanation: "A tangent is perpendicular to the radius at the point of contact, so the angle is 90°.",
        },
      ],
    },
    {
      id: "l5-scatter",
      title: "Scatter plots & lines of best fit",
      strand: "Data",
      minutes: 8,
      summary:
        "Describe relationships between two variables, make predictions, and separate correlation from causation.",
      objectives: [
        "Interpret correlation",
        "Use a line of best fit cautiously",
      ],
      body: [
        "A scatter plot shows pairs of values as points. If the points tend to rise together, the correlation is positive; if one rises as the other falls, it is negative. A cloud with no pattern suggests little or no correlation.",
        "A line of best fit summarises the trend and supports predictions. The line need not pass through every point. Its usefulness depends on how tightly the points cluster around it.",
        "Correlation is not causation. Ice-cream sales and drowning rates both rise in summer, but ice cream does not cause drowning; hot weather is a lurking variable. Also be careful with extrapolation — predicting far beyond the data is unreliable.",
      ],
      keyIdea: "A trend is a pattern in data, not automatically a cause.",
      example: {
        prompt:
          "A study finds that students who eat breakfast score higher on average. Can we conclude breakfast causes higher scores?",
        steps: [
          "The data shows a correlation between breakfast and scores.",
          "Other factors — income, sleep, school support — may affect both.",
          "Correlation alone cannot establish causation.",
        ],
        answer: "No — the relationship may be confounded.",
      },
      questions: [
        {
          id: "l5-scatter-q1",
          type: "choice",
          prompt: "Which situation describes a negative correlation?",
          options: [
            "Hours studied and test score",
            "Outdoor temperature and heating bill",
            "Height and shoe size",
            "Distance travelled and fuel used",
          ],
          answer: 1,
          hint: "As one variable rises, the other falls.",
          explanation:
            "As outdoor temperature rises, heating bills tend to fall, which is a negative correlation.",
        },
        {
          id: "l5-scatter-q2",
          type: "choice",
          prompt:
            "A line of best fit predicts a score of 85 for 10 hours of study, but the data only covers 0–5 hours. What is this an example of?",
          options: ["Causation", "Extrapolation", "Sampling bias", "Correlation"],
          answer: 1,
          hint: "The prediction lies outside the observed range.",
          explanation:
            "Predicting beyond the range of the data is extrapolation, and it is unreliable because the trend may not continue.",
        },
      ],
    },
  ],
};
