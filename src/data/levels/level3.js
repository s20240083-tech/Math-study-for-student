export const level3 = {
  id: "growing-confidence",
  index: 3,
  stage: "Primary",
  grades: "Grades 5–6",
  ages: "Ages 10–12",
  title: "Growing Confidence",
  tagline: "Decimals, ratios, and the tools for everyday reasoning.",
  description:
    "Connect fractions, decimals, and percentages while exploring volume, coordinates, and averages.",
  accent: "#C7952C",
  soft: "#F3E8C9",
  lessons: [
    {
      id: "l3-decimals",
      title: "Decimals & place value",
      strand: "Number",
      minutes: 8,
      summary:
        "Read decimals as fractions of a whole and compare them with confidence.",
      objectives: [
        "Identify tenths and hundredths",
        "Compare and add decimals",
      ],
      body: [
        "The digits to the right of a decimal point continue the place-value pattern. 0.7 means seven tenths, and 0.45 means forty-five hundredths. The decimal point is not a full stop; it separates whole units from parts of a unit.",
        "Adding a zero to the right does not change a decimal's value: 0.6 = 0.60. This is useful for comparison. To compare 0.6 and 0.58, write 0.60 and 0.58, then compare hundredths: 60 hundredths is more than 58 hundredths.",
        "To add decimals, line up the decimal points so tenths sit with tenths and hundredths with hundredths. 0.7 + 0.45 becomes 0.70 + 0.45 = 1.15.",
      ],
      keyIdea: "Decimal places are just place value continuing to the right of the point.",
      example: {
        prompt: "Find 0.7 + 0.45.",
        steps: [
          "Line up the decimal points: 0.70 + 0.45.",
          "Hundredths: 0 + 5 = 5.",
          "Tenths: 7 + 4 = 11, so write 1 and carry 1 to the ones.",
          "The answer is 1.15.",
        ],
        answer: "1.15",
      },
      questions: [
        {
          id: "l3-decimals-q1",
          type: "input",
          prompt: "What is 0.7 + 0.45?",
          answer: "1.15",
          placeholder: "Type a number",
          hint: "Write 0.7 as 0.70 first.",
          explanation: "0.70 + 0.45 = 1.15.",
        },
        {
          id: "l3-decimals-q2",
          type: "choice",
          prompt: "Which is larger, 0.6 or 0.58?",
          options: ["0.6", "0.58", "They are equal", "Cannot tell"],
          answer: 0,
          hint: "Write 0.6 as 0.60 and compare hundredths.",
          explanation: "0.6 = 0.60, and 60 hundredths is greater than 58 hundredths.",
        },
      ],
    },
    {
      id: "l3-fraction-ops",
      title: "Adding & multiplying fractions",
      strand: "Number",
      minutes: 8,
      summary:
        "Find a common denominator to add, and multiply numerators and denominators to take a fraction of a fraction.",
      objectives: [
        "Add fractions with unlike denominators",
        "Multiply fractions and simplify",
      ],
      body: [
        "Fractions can only be added when the pieces are the same size. To add 1/4 + 1/3, find a common denominator — 12 works. Rewrite both fractions: 3/12 + 4/12 = 7/12.",
        "Multiplying fractions is different: multiply the numerators and multiply the denominators. 2/3 × 3/4 = 6/12, which simplifies to 1/2. The answer is smaller than either fraction, because you are taking a part of a part.",
        "Simplify at the end, or cancel common factors before multiplying. In 2/3 × 3/4, the 3 on top and the 3 on the bottom cancel, leaving 2/4 = 1/2. Same answer, less arithmetic.",
      ],
      keyIdea: "Add with matching denominators; multiply straight across.",
      example: {
        prompt: "Find 1/4 + 1/3.",
        steps: [
          "The least common denominator of 4 and 3 is 12.",
          "1/4 = 3/12 and 1/3 = 4/12.",
          "3/12 + 4/12 = 7/12.",
        ],
        answer: "7/12",
      },
      questions: [
        {
          id: "l3-fraction-ops-q1",
          type: "choice",
          prompt: "What is 1/4 + 1/3?",
          options: ["2/7", "7/12", "1/12", "2/12"],
          answer: 1,
          hint: "Use 12 as the common denominator.",
          explanation: "1/4 = 3/12 and 1/3 = 4/12, so the sum is 7/12.",
        },
        {
          id: "l3-fraction-ops-q2",
          type: "choice",
          prompt: "What is 2/3 × 3/4?",
          options: ["6/7", "1/2", "5/12", "2/4"],
          answer: 1,
          hint: "Multiply straight across, then simplify.",
          explanation: "2/3 × 3/4 = 6/12 = 1/2.",
        },
      ],
    },
    {
      id: "l3-ratios",
      title: "Ratios & rates",
      strand: "Ratio",
      minutes: 8,
      summary:
        "Compare quantities multiplicatively and use unit rates to make fair comparisons.",
      objectives: [
        "Write and scale equivalent ratios",
        "Calculate a unit rate",
      ],
      body: [
        "A ratio compares two quantities. If a recipe uses 3 cups of flour for every 5 cups of milk, the ratio is 3:5. Unlike a fraction, a ratio can compare parts of a whole or two separate quantities.",
        "Equivalent ratios come from multiplying or dividing both parts by the same number. 3:5 = 6:10 = 12:20. The relationship stays the same even as the amounts grow.",
        "A rate compares quantities with different units, such as kilometres per hour. A unit rate rewrites the comparison as 'per one'. If a car travels 180 km in 3 hours, divide both by 3 to get 60 km per hour.",
      ],
      keyIdea: "A ratio stays the same when both quantities are scaled together.",
      example: {
        prompt: "A car travels 180 km in 3 hours. What is its speed in km/h?",
        steps: [
          "Write the rate as 180 km / 3 h.",
          "Divide both quantities by 3 to find the amount per hour.",
          "180 ÷ 3 = 60, so the speed is 60 km/h.",
        ],
        answer: "60 km/h",
      },
      questions: [
        {
          id: "l3-ratios-q1",
          type: "input",
          prompt: "Complete the equivalent ratio: 3:5 = 12:?",
          answer: "20",
          placeholder: "Type a number",
          hint: "The first part was multiplied by 4.",
          explanation: "3 × 4 = 12, so multiply 5 by 4 as well: 5 × 4 = 20.",
        },
        {
          id: "l3-ratios-q2",
          type: "input",
          prompt: "A train travels 180 km in 3 hours. What is its unit rate in km/h?",
          answer: "60",
          placeholder: "Type a number",
          hint: "Divide the distance by the time.",
          explanation: "180 ÷ 3 = 60, so the train travels 60 km each hour.",
        },
      ],
    },
    {
      id: "l3-percentages",
      title: "Percentages",
      strand: "Number",
      minutes: 8,
      summary:
        "Percent means 'per hundred' — a fraction with a denominator of 100 that is built for comparison.",
      objectives: [
        "Find a percentage of an amount",
        "Use percentages for tips and discounts",
      ],
      body: [
        "Percent means per hundred. 20% is 20 out of every 100, or 20/100 = 0.2. Percentages are useful because they put different-sized quantities on the same scale.",
        "To find a percentage of an amount, turn the percentage into a decimal and multiply. 20% of 45 is 0.2 × 45 = 9. A 15% tip on $40 is 0.15 × 40 = $6.",
        "For a discount, subtract the percentage from the original. A 25% discount on $80 saves $20, so you pay $60. Alternatively, pay 75% of the price: 0.75 × 80 = $60. Both routes lead to the same place.",
      ],
      keyIdea: "A percentage is a fraction out of 100, and a decimal shortcut.",
      example: {
        prompt: "What is 20% of 45?",
        steps: [
          "20% = 20/100 = 0.2.",
          "Multiply by 45: 0.2 × 45.",
          "0.2 × 45 = 9.",
        ],
        answer: "9",
      },
      questions: [
        {
          id: "l3-percentages-q1",
          type: "input",
          prompt: "What is 20% of 45?",
          answer: "9",
          placeholder: "Type a number",
          hint: "20% is the same as one fifth.",
          explanation: "20% = 0.2, and 0.2 × 45 = 9.",
        },
        {
          id: "l3-percentages-q2",
          type: "input",
          prompt: "A meal costs $40. How much is a 15% tip?",
          answer: "6",
          placeholder: "Type a number, e.g. 4.50",
          hint: "10% is $4. Half of that is 5%.",
          explanation: "15% = 0.15, and 0.15 × 40 = $6.",
        },
      ],
    },
    {
      id: "l3-volume",
      title: "Volume & surface area",
      strand: "Geometry",
      minutes: 8,
      summary:
        "Count unit cubes to understand volume, then unfold a solid to find its surface area.",
      objectives: [
        "Calculate the volume of a cuboid",
        "Calculate the surface area of a cube",
      ],
      body: [
        "Volume measures the space inside a 3D solid. It is measured in cubic units. A cuboid 4 cm by 3 cm by 2 cm can be filled with 4 × 3 = 12 cubes on each layer, and there are 2 layers, so the volume is 24 cm³.",
        "Surface area measures the total area of all faces. A cube with edge 3 cm has 6 identical square faces, each 9 cm². The surface area is 6 × 9 = 54 cm².",
        "Folding and unfolding helps. A net shows every face laid flat. If you can picture the net, surface area becomes a sum of familiar rectangles or squares.",
      ],
      keyIdea: "Volume fills the inside; surface area covers the outside.",
      example: {
        prompt: "Find the volume of a cuboid measuring 4 cm × 3 cm × 2 cm.",
        steps: [
          "Volume = length × width × height.",
          "4 × 3 = 12, then 12 × 2 = 24.",
          "The volume is 24 cm³.",
        ],
        answer: "24 cm³",
      },
      questions: [
        {
          id: "l3-volume-q1",
          type: "input",
          prompt: "What is the volume of a 4 cm × 3 cm × 2 cm cuboid, in cm³?",
          answer: "24",
          placeholder: "Type a number",
          hint: "Multiply all three dimensions.",
          explanation: "4 × 3 × 2 = 24, so the volume is 24 cm³.",
        },
        {
          id: "l3-volume-q2",
          type: "input",
          prompt: "What is the surface area of a cube with edge length 3 cm, in cm²?",
          answer: "54",
          placeholder: "Type a number",
          hint: "Each face is 3 × 3. A cube has 6 faces.",
          explanation: "One face is 9 cm², and 6 × 9 = 54 cm².",
        },
      ],
    },
    {
      id: "l3-coordinates",
      title: "The coordinate plane",
      strand: "Geometry",
      minutes: 8,
      summary:
        "Use ordered pairs to locate points, navigate four quadrants, and measure distances.",
      objectives: [
        "Plot and read coordinates",
        "Find horizontal and vertical distances",
      ],
      body: [
        "A coordinate plane has a horizontal x-axis and a vertical y-axis that meet at the origin (0, 0). A point is written as (x, y): move along the x-axis first, then the y-axis. The order matters.",
        "The axes divide the plane into four quadrants. In quadrant I, both coordinates are positive. Quadrant II has negative x and positive y. Quadrant III has both negative. Quadrant IV has positive x and negative y.",
        "For points on the same horizontal or vertical line, distance is simple subtraction. The points (1, 2) and (1, 7) share an x-coordinate, so the distance is 7 − 2 = 5.",
      ],
      keyIdea: "Coordinates are directions: x first, then y.",
      example: {
        prompt: "In which quadrant is the point (3, −2)?",
        steps: [
          "The x-coordinate is positive, so move right.",
          "The y-coordinate is negative, so move down.",
          "Right and down is quadrant IV.",
        ],
        answer: "Quadrant IV",
      },
      questions: [
        {
          id: "l3-coordinates-q1",
          type: "choice",
          prompt: "In which quadrant is the point (3, −2)?",
          options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
          answer: 3,
          hint: "Positive x is right; negative y is down.",
          explanation:
            "A positive x-coordinate moves right and a negative y-coordinate moves down, placing (3, −2) in quadrant IV.",
        },
        {
          id: "l3-coordinates-q2",
          type: "input",
          prompt: "What is the distance between (1, 2) and (1, 7)?",
          answer: "5",
          placeholder: "Type a number",
          hint: "The x-coordinates are the same, so compare the y-coordinates.",
          explanation: "Both points have x = 1, so the distance is 7 − 2 = 5.",
        },
      ],
    },
    {
      id: "l3-expressions",
      title: "Expressions & order of operations",
      strand: "Algebra",
      minutes: 8,
      summary:
        "Use letters to stand for numbers and a fixed order to evaluate expressions unambiguously.",
      objectives: [
        "Apply the order of operations",
        "Substitute values into an expression",
      ],
      body: [
        "An expression combines numbers, operations, and sometimes letters, such as 2(x + 5). The letter is a variable: a placeholder for a number we do not yet know. Unlike an equation, an expression has no equals sign.",
        "Order of operations prevents ambiguity: brackets first, then indices (powers and roots), then multiplication and division from left to right, then addition and subtraction from left to right. 3 + 4 × 2 = 11, not 14.",
        "To evaluate an expression, substitute the given value for the variable and calculate. If x = 3, then 2(x + 5) = 2(3 + 5) = 2 × 8 = 16. Brackets keep the addition together.",
      ],
      keyIdea: "Brackets, indices, multiplication/division, addition/subtraction — in that order.",
      example: {
        prompt: "Evaluate 2(x + 5) when x = 3.",
        steps: [
          "Substitute: 2(3 + 5).",
          "Work inside the brackets: 2(8).",
          "Multiply: 16.",
        ],
        answer: "16",
      },
      questions: [
        {
          id: "l3-expressions-q1",
          type: "input",
          prompt: "What is 3 + 4 × 2?",
          answer: "11",
          placeholder: "Type a number",
          hint: "Multiplication comes before addition.",
          explanation: "4 × 2 = 8, then 3 + 8 = 11.",
        },
        {
          id: "l3-expressions-q2",
          type: "input",
          prompt: "Evaluate 2(x + 5) when x = 3.",
          answer: "16",
          placeholder: "Type a number",
          hint: "Substitute 3 for x, then work inside the brackets.",
          explanation: "2(3 + 5) = 2 × 8 = 16.",
        },
      ],
    },
    {
      id: "l3-averages",
      title: "Mean, median, mode & range",
      strand: "Data",
      minutes: 8,
      summary:
        "Summarise a data set with one number — and know which average tells the fairest story.",
      objectives: [
        "Calculate the mean and median",
        "Choose an appropriate average",
      ],
      body: [
        "The mean is the fair-share average: add all values and divide by how many there are. The mean of 4, 8, 6, and 2 is 20 ÷ 4 = 5.",
        "The median is the middle value when the data is ordered. For 3, 7, 9, 12, 15, the median is 9. With an even number of values, average the two middle values.",
        "The mode is the most frequent value, and the range is the largest minus the smallest. The mean is sensitive to outliers: one extremely large value can pull it far from the rest of the data. The median is more resistant.",
      ],
      keyIdea: "Mean uses every value; median resists extremes.",
      example: {
        prompt: "Find the mean of 4, 8, 6, and 2.",
        steps: [
          "Add the values: 4 + 8 + 6 + 2 = 20.",
          "Divide by the number of values: 20 ÷ 4 = 5.",
          "The mean is 5.",
        ],
        answer: "5",
      },
      questions: [
        {
          id: "l3-averages-q1",
          type: "input",
          prompt: "What is the mean of 4, 8, 6, and 2?",
          answer: "5",
          placeholder: "Type a number",
          hint: "Add them, then divide by 4.",
          explanation: "4 + 8 + 6 + 2 = 20, and 20 ÷ 4 = 5.",
        },
        {
          id: "l3-averages-q2",
          type: "input",
          prompt: "What is the median of 3, 7, 9, 12, 15?",
          answer: "9",
          placeholder: "Type a number",
          hint: "The numbers are already in order. Find the middle.",
          explanation: "With five ordered values, the third value is the median: 9.",
        },
      ],
    },
    {
      id: "l3-factors",
      title: "Factors, primes, GCF & LCM",
      strand: "Number",
      minutes: 8,
      summary:
        "Break numbers into building blocks and use common factors to simplify problems.",
      objectives: [
        "Identify prime numbers and prime factors",
        "Find the greatest common factor",
      ],
      body: [
        "A factor divides a number exactly, leaving no remainder. The factors of 12 are 1, 2, 3, 4, 6, and 12. A prime number has exactly two factors: 1 and itself. 2, 3, 5, 7, 11, and 13 are prime; 1 is not.",
        "Every composite number has a unique prime factorisation. 24 = 2³ × 3 and 36 = 2² × 3². Comparing the prime factors reveals what the numbers share and what they combine to make.",
        "The greatest common factor (GCF) is the largest number dividing both. For 24 and 36, the shared factors are 1, 2, 3, 4, 6, and 12, so the GCF is 12. The least common multiple (LCM) is the smallest number both divide into; for 6 and 8 it is 24.",
      ],
      keyIdea: "Prime factorisation is a number's fingerprint.",
      example: {
        prompt: "Find the GCF of 24 and 36.",
        steps: [
          "24 = 2³ × 3 and 36 = 2² × 3².",
          "Shared prime factors: 2² × 3.",
          "2² × 3 = 12, so the GCF is 12.",
        ],
        answer: "12",
      },
      questions: [
        {
          id: "l3-factors-q1",
          type: "choice",
          prompt: "Which of these numbers is prime?",
          options: ["51", "57", "59", "63"],
          answer: 2,
          hint: "Check whether each number can be divided by 3 or 7.",
          explanation:
            "51 = 3 × 17, 57 = 3 × 19, and 63 = 3 × 21. 59 has no factors other than 1 and itself, so it is prime.",
        },
        {
          id: "l3-factors-q2",
          type: "input",
          prompt: "What is the greatest common factor of 24 and 36?",
          answer: "12",
          placeholder: "Type a number",
          hint: "List the factors they share.",
          explanation:
            "The shared factors of 24 and 36 are 1, 2, 3, 4, 6, and 12, so the greatest is 12.",
        },
      ],
    },
  ],
};
