export const level6 = {
  id: "advanced-mathematics",
  index: 6,
  stage: "Secondary",
  grades: "Grades 11–12",
  ages: "Ages 16–18",
  title: "Advanced Mathematics",
  tagline: "The ideas that take you to the edge of school mathematics.",
  description:
    "Explore exponentials, sequences, complex numbers, calculus, distributions, vectors, and matrices.",
  accent: "#B24A3F",
  soft: "#F2DDDA",
  lessons: [
    {
      id: "l6-exponential-log",
      title: "Exponential & logarithmic functions",
      strand: "Functions",
      minutes: 9,
      summary:
        "Understand growth that multiplies, and the logarithm that reverses it.",
      objectives: [
        "Evaluate logarithms",
        "Solve simple exponential equations",
      ],
      body: [
        "An exponential function has the variable in the exponent: f(x) = 2ˣ. It grows by a constant factor, not a constant amount. Doubling every hour produces 2, 4, 8, 16 — far faster than adding 2 each hour.",
        "A logarithm answers the reverse question: what exponent do I need? log₂ 32 = 5 because 2⁵ = 32. In general, log_b x = y means bʸ = x. The base b must be positive and not equal to 1.",
        "Logarithms turn multiplication into addition: log(xy) = log x + log y. They also solve exponential equations. To solve 2ˣ = 16, rewrite 16 as 2⁴, so x = 4. With less friendly numbers, take logs of both sides.",
      ],
      keyIdea: "A logarithm is an exponent in disguise.",
      example: {
        prompt: "Evaluate log₂ 32.",
        steps: [
          "Ask: 2 to what power gives 32?",
          "2⁵ = 32.",
          "So log₂ 32 = 5.",
        ],
        answer: "5",
      },
      questions: [
        {
          id: "l6-exponential-log-q1",
          type: "input",
          prompt: "What is log₂ 32?",
          answer: "5",
          placeholder: "Type a number",
          hint: "2 to what power equals 32?",
          explanation: "2⁵ = 32, so log₂ 32 = 5.",
        },
        {
          id: "l6-exponential-log-q2",
          type: "input",
          prompt: "Solve 2ˣ = 16.",
          answer: "4",
          placeholder: "Type a number",
          hint: "Write 16 as a power of 2.",
          explanation: "16 = 2⁴, so x = 4.",
        },
      ],
    },
    {
      id: "l6-sequences",
      title: "Sequences & series",
      strand: "Algebra",
      minutes: 9,
      summary:
        "Describe patterns by position, then add their terms with efficient formulas.",
      objectives: [
        "Find the nth term of an arithmetic sequence",
        "Sum a geometric series",
      ],
      body: [
        "A sequence is an ordered list of numbers. An arithmetic sequence adds a constant difference d; a geometric sequence multiplies by a constant ratio r. The sequence 3, 7, 11, 15 is arithmetic with d = 4.",
        "The nth term of an arithmetic sequence is aₙ = a₁ + (n − 1)d. With first term 5 and d = 3, the nth term is 3n + 2, so the 10th term is 32.",
        "A series adds the terms of a sequence. A geometric series with first term a and ratio r sums to a(1 − rⁿ)/(1 − r) for r ≠ 1. When |r| < 1, the infinite sum is a/(1 − r); when |r| ≥ 1, it diverges.",
      ],
      keyIdea: "Sequences describe the terms; series add them.",
      example: {
        prompt: "An arithmetic sequence has nth term 3n + 2. Find the 10th term.",
        steps: [
          "Substitute n = 10.",
          "3(10) + 2 = 30 + 2.",
          "The 10th term is 32.",
        ],
        answer: "32",
      },
      questions: [
        {
          id: "l6-sequences-q1",
          type: "input",
          prompt: "An arithmetic sequence has nth term 3n + 2. What is the 10th term?",
          answer: "32",
          placeholder: "Type a number",
          hint: "Substitute n = 10.",
          explanation: "3(10) + 2 = 32.",
        },
        {
          id: "l6-sequences-q2",
          type: "input",
          prompt: "What is the sum 2 + 6 + 18 + 54?",
          answer: "80",
          placeholder: "Type a number",
          hint: "Add the four terms directly, or use the geometric sum formula.",
          explanation: "2 + 6 + 18 + 54 = 80.",
        },
      ],
    },
    {
      id: "l6-trig-identities",
      title: "Trigonometric graphs & identities",
      strand: "Geometry",
      minutes: 9,
      summary:
        "Move from right triangles to the unit circle, where sine and cosine repeat.",
      objectives: [
        "Use the Pythagorean identity",
        "Relate frequency to period",
      ],
      body: [
        "The unit circle extends trigonometry beyond 0° to 90°. A point on the unit circle at angle θ has coordinates (cos θ, sin θ). Since the point lies on x² + y² = 1, we get the Pythagorean identity sin²θ + cos²θ = 1.",
        "Sine and cosine are periodic. sin θ repeats every 2π radians (360°). If the angle is doubled, sin(2θ) completes two cycles in the same interval, so its period is π.",
        "Radians measure angles by arc length on the unit circle. A full turn is 2π radians, a half turn π, and a quarter turn π/2. Radians are natural in calculus because they make the derivative of sin x equal to cos x without extra constants.",
      ],
      keyIdea: "Sine and cosine are coordinates on the unit circle.",
      example: {
        prompt: "Simplify sin²θ + cos²θ.",
        steps: [
          "On the unit circle, cos θ is x and sin θ is y.",
          "Every point satisfies x² + y² = 1.",
          "Therefore sin²θ + cos²θ = 1.",
        ],
        answer: "1",
      },
      questions: [
        {
          id: "l6-trig-identities-q1",
          type: "input",
          prompt: "What is sin²θ + cos²θ?",
          answer: "1",
          placeholder: "Type a number",
          hint: "Think of the unit circle equation.",
          explanation: "For any angle θ, sin²θ + cos²θ = 1.",
        },
        {
          id: "l6-trig-identities-q2",
          type: "choice",
          prompt: "What is the period of sin(2x)?",
          options: ["π/2", "π", "2π", "4π"],
          answer: 1,
          hint: "The usual period 2π is divided by the coefficient of x.",
          explanation: "The period of sin(kx) is 2π/|k|, so for k = 2 the period is π.",
        },
      ],
    },
    {
      id: "l6-complex",
      title: "Complex numbers",
      strand: "Number",
      minutes: 9,
      summary:
        "Extend the number line into a plane with i, where i² = −1.",
      objectives: [
        "Add complex numbers",
        "Find the modulus of a complex number",
      ],
      body: [
        "The equation x² = −1 has no real solution, so we define a new number i with i² = −1. A complex number has the form a + bi, where a is the real part and b is the imaginary part.",
        "Add and subtract complex numbers by combining real parts and imaginary parts separately: (3 + 2i) + (1 − 4i) = 4 − 2i. Multiplication uses i² = −1; for example, (1 + i)² = 1 + 2i + i² = 2i.",
        "The modulus |a + bi| is the distance from the origin: √(a² + b²). So |3 + 4i| = 5. Complex numbers are points in a plane, which is why they connect beautifully to rotation and trigonometry.",
      ],
      keyIdea: "i is a quarter-turn: it rotates the number line into a plane.",
      example: {
        prompt: "Add (3 + 2i) and (1 − 4i).",
        steps: [
          "Add the real parts: 3 + 1 = 4.",
          "Add the imaginary parts: 2i − 4i = −2i.",
          "The sum is 4 − 2i.",
        ],
        answer: "4 − 2i",
      },
      questions: [
        {
          id: "l6-complex-q1",
          type: "choice",
          prompt: "What is (3 + 2i) + (1 − 4i)?",
          options: ["4 + 6i", "4 − 2i", "2 + 2i", "4 − 6i"],
          answer: 1,
          hint: "Combine real parts and imaginary parts separately.",
          explanation: "Real: 3 + 1 = 4. Imaginary: 2i − 4i = −2i. The sum is 4 − 2i.",
        },
        {
          id: "l6-complex-q2",
          type: "input",
          prompt: "What is the modulus |3 + 4i|?",
          answer: "5",
          placeholder: "Type a number",
          hint: "Use √(a² + b²).",
          explanation: "|3 + 4i| = √(3² + 4²) = √25 = 5.",
        },
      ],
    },
    {
      id: "l6-limits",
      title: "Limits & continuity",
      strand: "Calculus",
      minutes: 9,
      summary:
        "Describe what a function approaches, even when it never quite arrives.",
      objectives: [
        "Evaluate limits by factoring",
        "Recognise a removable discontinuity",
      ],
      body: [
        "A limit describes the value a function approaches as the input gets close to a point — not necessarily the value at that point. The function may be undefined there and still have a limit.",
        "For lim x→2 (x² − 4)/(x − 2), direct substitution gives 0/0, which is indeterminate. Factor the numerator: (x − 2)(x + 2)/(x − 2). For x ≠ 2, the factors cancel, leaving x + 2, which approaches 4.",
        "The graph has a hole at x = 2, not a vertical asymptote, because the factor cancels. This is a removable discontinuity. A function is continuous at a point when the limit exists, the function is defined there, and the two are equal.",
      ],
      keyIdea: "A limit is about the approach, not the arrival.",
      example: {
        prompt: "Evaluate lim x→2 (x² − 4)/(x − 2).",
        steps: [
          "Substituting gives 0/0, so factor.",
          "x² − 4 = (x − 2)(x + 2).",
          "Cancel x − 2, leaving x + 2. As x → 2, this approaches 4.",
        ],
        answer: "4",
      },
      questions: [
        {
          id: "l6-limits-q1",
          type: "input",
          prompt: "Evaluate lim x→2 (x² − 4)/(x − 2).",
          answer: "4",
          placeholder: "Type a number",
          hint: "Factor the numerator and cancel.",
          explanation: "(x² − 4)/(x − 2) = x + 2 for x ≠ 2, which approaches 4.",
        },
        {
          id: "l6-limits-q2",
          type: "input",
          prompt: "Evaluate lim x→0 (sin x)/x.",
          answer: "1",
          placeholder: "Type a number",
          hint: "This is a standard limit used throughout calculus.",
          explanation: "As x approaches 0, (sin x)/x approaches 1.",
        },
      ],
    },
    {
      id: "l6-derivatives",
      title: "Derivatives & rates of change",
      strand: "Calculus",
      minutes: 9,
      summary:
        "Measure the instantaneous rate of change as the limit of average rates.",
      objectives: [
        "Differentiate power and trig functions",
        "Interpret the derivative as a slope",
      ],
      body: [
        "Average rate of change is a slope between two points. Instantaneous rate of change is what happens as the gap shrinks to zero. That limit is the derivative, written f′(x) or dy/dx.",
        "The power rule says d/dx xⁿ = nxⁿ⁻¹. So d/dx x³ = 3x², and at x = 2 the slope is 12. The derivatives of sin x and cos x are cos x and −sin x, a cycle that repeats every four derivatives.",
        "The derivative is a local slope. Where f′ > 0, the function increases; where f′ < 0, it decreases; where f′ = 0, the graph has a horizontal tangent, often a maximum or minimum. This is the foundation of optimisation.",
      ],
      keyIdea: "A derivative turns a curve into a slope at a single point.",
      example: {
        prompt: "Find the slope of y = x² at x = 2.",
        steps: [
          "Differentiate: dy/dx = 2x.",
          "Substitute x = 2: 2(2) = 4.",
          "The slope is 4.",
        ],
        answer: "4",
      },
      questions: [
        {
          id: "l6-derivatives-q1",
          type: "input",
          prompt: "What is the slope of y = x² at x = 2?",
          answer: "4",
          placeholder: "Type a number",
          hint: "Differentiate first: dy/dx = 2x.",
          explanation: "dy/dx = 2x, so at x = 2 the slope is 4.",
        },
        {
          id: "l6-derivatives-q2",
          type: "choice",
          prompt: "What is the derivative of sin x?",
          options: ["cos x", "−cos x", "−sin x", "tan x"],
          answer: 0,
          hint: "The derivative of sine is cosine.",
          explanation: "d/dx (sin x) = cos x.",
        },
      ],
    },
    {
      id: "l6-integrals",
      title: "Integrals & area",
      strand: "Calculus",
      minutes: 9,
      summary:
        "Reverse differentiation to accumulate change and measure area under a curve.",
      objectives: [
        "Find an antiderivative",
        "Evaluate a definite integral",
      ],
      body: [
        "Integration is the reverse of differentiation. Since d/dx x² = 2x, an antiderivative of 2x is x². Because constants differentiate to zero, we write ∫2x dx = x² + C, where C is the constant of integration.",
        "A definite integral accumulates a quantity between two limits. The fundamental theorem of calculus says ∫ₐᵇ f(x) dx = F(b) − F(a), where F is any antiderivative of f.",
        "Geometrically, the definite integral gives signed area under a curve. ∫₀¹ 3x² dx = [x³]₀¹ = 1 − 0 = 1. Areas below the x-axis count as negative, which is why integration can model net change, not just geometric area.",
      ],
      keyIdea: "Integration adds up infinitely many infinitesimal pieces.",
      example: {
        prompt: "Evaluate ∫₀¹ 3x² dx.",
        steps: [
          "An antiderivative of 3x² is x³.",
          "Apply the limits: [x³]₀¹ = 1³ − 0³.",
          "The value is 1.",
        ],
        answer: "1",
      },
      questions: [
        {
          id: "l6-integrals-q1",
          type: "choice",
          prompt: "What is ∫2x dx?",
          options: ["x² + C", "2x² + C", "x + C", "2 + C"],
          answer: 0,
          hint: "Which function differentiates to 2x?",
          explanation: "d/dx (x²) = 2x, so ∫2x dx = x² + C.",
        },
        {
          id: "l6-integrals-q2",
          type: "input",
          prompt: "Evaluate ∫₀¹ 3x² dx.",
          answer: "1",
          placeholder: "Type a number",
          hint: "An antiderivative of 3x² is x³.",
          explanation: "[x³]₀¹ = 1³ − 0³ = 1.",
        },
      ],
    },
    {
      id: "l6-distributions",
      title: "Probability distributions",
      strand: "Data",
      minutes: 9,
      summary:
        "Model random processes with probability rules, from coin flips to the bell curve.",
      objectives: [
        "Find the mean of a binomial distribution",
        "Interpret the normal distribution's standard deviation",
      ],
      body: [
        "A random variable assigns a number to each outcome. A probability distribution lists each possible value and its probability; the probabilities must add to 1, and the expected value is the probability-weighted average.",
        "A binomial distribution counts successes in n independent trials, each with probability p. Its mean is np. For 10 free throws at 30% accuracy, the expected number made is 10 × 0.3 = 3.",
        "The normal distribution is a symmetric bell curve. About 68% of values lie within one standard deviation of the mean, about 95% within two, and about 99.7% within three. The central limit theorem explains why sums and averages so often look normal.",
      ],
      keyIdea: "A distribution turns uncertainty into a calculable pattern.",
      example: {
        prompt: "A player takes 10 free throws, each with probability 0.3 of success. What is the expected number of successes?",
        steps: [
          "This is binomial with n = 10 and p = 0.3.",
          "The mean of a binomial distribution is np.",
          "10 × 0.3 = 3.",
        ],
        answer: "3",
      },
      questions: [
        {
          id: "l6-distributions-q1",
          type: "input",
          prompt:
            "A binomial distribution has n = 10 trials and p = 0.3. What is its mean?",
          answer: "3",
          placeholder: "Type a number",
          hint: "Mean = np.",
          explanation: "np = 10 × 0.3 = 3.",
        },
        {
          id: "l6-distributions-q2",
          type: "input",
          prompt:
            "For a normal distribution, approximately what percentage of values lie within one standard deviation of the mean?",
          answer: "68",
          placeholder: "Type a percentage",
          hint: "The 68–95–99.7 rule.",
          explanation:
            "About 68% of values lie within one standard deviation of the mean in a normal distribution.",
        },
      ],
    },
    {
      id: "l6-vectors",
      title: "Vectors & matrices",
      strand: "Advanced",
      minutes: 9,
      summary:
        "Use vectors for direction and magnitude, and matrices for organised transformations.",
      objectives: [
        "Find a vector's magnitude",
        "Calculate a dot product",
      ],
      body: [
        "A vector has both magnitude and direction. In two dimensions, v = (3, 4) means 3 right and 4 up. Its magnitude is √(3² + 4²) = 5, the length of the arrow.",
        "The dot product combines two vectors into a scalar: (a, b) · (c, d) = ac + bd. So (1, 2) · (3, 4) = 3 + 8 = 11. When the dot product is zero, the vectors are perpendicular.",
        "A matrix is a rectangular array of numbers that can represent a transformation. Multiplying matrices applies one transformation after another; the identity matrix leaves every vector unchanged. Order matters: AB is usually not equal to BA.",
      ],
      keyIdea: "Vectors describe motion; matrices describe transformations.",
      example: {
        prompt: "Find the magnitude of the vector (3, 4).",
        steps: [
          "Use |v| = √(x² + y²).",
          "√(3² + 4²) = √(9 + 16).",
          "√25 = 5.",
        ],
        answer: "5",
      },
      questions: [
        {
          id: "l6-vectors-q1",
          type: "input",
          prompt: "What is the magnitude of the vector (3, 4)?",
          answer: "5",
          placeholder: "Type a number",
          hint: "Use √(x² + y²).",
          explanation: "√(3² + 4²) = √25 = 5.",
        },
        {
          id: "l6-vectors-q2",
          type: "input",
          prompt: "What is the dot product (1, 2) · (3, 4)?",
          answer: "11",
          placeholder: "Type a number",
          hint: "Multiply matching components, then add.",
          explanation: "(1)(3) + (2)(4) = 3 + 8 = 11.",
        },
      ],
    },
  ],
};
