export const level2 = {
  id: "building-blocks",
  index: 2,
  stage: "Primary",
  grades: "Grades 3–4",
  ages: "Ages 8–10",
  title: "Building Blocks",
  tagline: "Multiplication, fractions, and the shape of space.",
  description:
    "Move from counting to calculating: times tables, division, fractions, area, angles, and graphs.",
  accent: "#2D7A63",
  soft: "#DDEBE3",
  lessons: [
    {
      id: "l2-multiplication",
      title: "Multiplication as equal groups",
      strand: "Number",
      minutes: 8,
      summary:
        "See multiplication as repeated equal groups, arrays, and a shortcut for addition.",
      objectives: [
        "Interpret multiplication as groups of equal size",
        "Use arrays and the commutative property",
      ],
      body: [
        "Multiplication is a fast way to add equal groups. 4 × 6 can mean 4 groups of 6, which is 6 + 6 + 6 + 6. The two numbers are called factors, and the result is the product.",
        "An array shows the same idea in rows and columns. A tray with 5 rows of 9 counters contains 45 counters. Arrays make the commutative property visible: 5 rows of 9 is the same total as 9 rows of 5, so 5 × 9 = 9 × 5.",
        "Knowing a few facts unlocks others. If you know 5 × 7 = 35, then 6 × 7 is one more group of 7: 35 + 7 = 42. Multiplication is not a separate world from addition — it is built on it.",
      ],
      keyIdea: "Multiplication counts equal groups, quickly.",
      example: {
        prompt: "Find 6 × 7 using a fact you already know.",
        steps: [
          "Start with 5 groups of 7: 5 × 7 = 35.",
          "Add one more group of 7: 35 + 7 = 42.",
          "So 6 × 7 = 42.",
        ],
        answer: "42",
      },
      questions: [
        {
          id: "l2-multiplication-q1",
          type: "choice",
          prompt: "What is 7 × 8?",
          options: ["54", "56", "48", "64"],
          answer: 1,
          hint: "5 × 8 = 40. Add two more groups of 8.",
          explanation: "5 × 8 = 40, plus 2 × 8 = 16, gives 56.",
        },
        {
          id: "l2-multiplication-q2",
          type: "input",
          prompt: "An array has 5 rows of 9 counters. How many counters are there?",
          answer: "45",
          placeholder: "Type a number",
          hint: "Multiply the number of rows by the number in each row.",
          explanation: "5 × 9 = 45.",
        },
      ],
    },
    {
      id: "l2-division",
      title: "Division & remainders",
      strand: "Number",
      minutes: 8,
      summary:
        "Share into equal groups, and learn what to do when something is left over.",
      objectives: [
        "Divide by sharing and grouping",
        "Interpret a remainder in context",
      ],
      body: [
        "Division undoes multiplication. If 4 × 6 = 24, then 24 ÷ 4 = 6 and 24 ÷ 6 = 4. We can read 24 ÷ 4 as: how many groups of 4 fit into 24?",
        "Sometimes the groups do not divide evenly. 17 ÷ 5 = 3 remainder 2, because three groups of 5 make 15 and 2 is left over. The remainder must be smaller than the divisor — otherwise another group would fit.",
        "The context decides what a remainder means. If 17 children need taxis that hold 5 each, 3 taxis are full and 2 children still need a ride, so you need 4 taxis. If you are cutting ribbon, the leftover 2 metres may simply stay unused.",
      ],
      keyIdea: "The remainder is what cannot make another full group.",
      example: {
        prompt: "Find 29 ÷ 4.",
        steps: [
          "4 × 7 = 28, and 4 × 8 = 32 is too big.",
          "29 − 28 = 1.",
          "So 29 ÷ 4 = 7 remainder 1.",
        ],
        answer: "7 remainder 1",
      },
      questions: [
        {
          id: "l2-division-q1",
          type: "choice",
          prompt: "What is 29 ÷ 4?",
          options: ["7 remainder 1", "7 remainder 2", "6 remainder 5", "8 remainder 1"],
          answer: 0,
          hint: "Which multiple of 4 is closest without going over?",
          explanation: "4 × 7 = 28, and 29 − 28 = 1, so the answer is 7 remainder 1.",
        },
        {
          id: "l2-division-q2",
          type: "input",
          prompt: "What is the remainder when 38 is divided by 6?",
          answer: "2",
          placeholder: "Type a number",
          hint: "6 × 6 = 36. How far is 38 from 36?",
          explanation: "6 × 6 = 36, and 38 − 36 = 2, so the remainder is 2.",
        },
      ],
    },
    {
      id: "l2-multi-digit",
      title: "Multi-digit addition & subtraction",
      strand: "Number",
      minutes: 8,
      summary:
        "Use column methods and regrouping to calculate accurately with larger numbers.",
      objectives: [
        "Add three-digit numbers with carrying",
        "Subtract with borrowing across zeros",
      ],
      body: [
        "Column addition works because of place value: ones sit under ones, tens under tens, hundreds under hundreds. Add each column, and carry a ten to the next column when a total reaches 10 or more.",
        "Subtraction can require borrowing. In 502 − 178, there are 2 ones and we need to take 8, so we regroup. Because the tens digit is 0, we borrow from the hundreds first: 5 hundreds becomes 4 hundreds and 10 tens; then one ten becomes 10 ones.",
        "Estimation is a built-in check. 502 − 178 is roughly 500 − 180 = 320, so 324 is believable. A result far from the estimate signals a regrouping mistake.",
      ],
      keyIdea: "Regrouping moves value between columns without changing the total.",
      example: {
        prompt: "Find 347 + 286.",
        steps: [
          "Ones: 7 + 6 = 13. Write 3, carry 1 ten.",
          "Tens: 4 + 8 + 1 = 13. Write 3, carry 1 hundred.",
          "Hundreds: 3 + 2 + 1 = 6. The answer is 633.",
        ],
        answer: "633",
      },
      questions: [
        {
          id: "l2-multi-digit-q1",
          type: "input",
          prompt: "What is 347 + 286?",
          answer: "633",
          placeholder: "Type a number",
          hint: "Remember to carry from the ones and the tens.",
          explanation: "7 + 6 = 13 (carry 1); 4 + 8 + 1 = 13 (carry 1); 3 + 2 + 1 = 6. Total: 633.",
        },
        {
          id: "l2-multi-digit-q2",
          type: "input",
          prompt: "What is 502 − 178?",
          answer: "324",
          placeholder: "Type a number",
          hint: "You will need to borrow across the zero.",
          explanation:
            "Regroup 502 as 4 hundreds, 9 tens, and 12 ones. Then 12 − 8 = 4, 9 − 7 = 2, and 4 − 1 = 3, giving 324.",
        },
      ],
    },
    {
      id: "l2-fractions-number-line",
      title: "Fractions on a number line",
      strand: "Number",
      minutes: 7,
      summary:
        "Place fractions between whole numbers and use the line to compare their size.",
      objectives: [
        "Identify fractions on a number line",
        "Compare fractions with the same denominator",
      ],
      body: [
        "A fraction is a number, not just a slice of pizza. On a number line from 0 to 1, split the distance into equal parts. If there are 5 parts, each jump is 1/5. Three jumps land at 3/5.",
        "The denominator tells you how many equal parts make one whole. The numerator tells you how many parts you have counted. So 3/5 means three jumps of 1/5.",
        "With the same denominator, comparing is easy: more parts means a larger fraction. 4/7 > 2/7 because 4 jumps is farther along the line than 2 jumps. The denominator sets the step size; the numerator counts the steps.",
      ],
      keyIdea: "Fractions are points on the number line, spaced by unit fractions.",
      example: {
        prompt: "A number line from 0 to 1 is split into 4 equal parts. Where is 3/4?",
        steps: [
          "Each part is 1/4 of the whole.",
          "Count three jumps from 0.",
          "You land at 3/4, three quarters of the way to 1.",
        ],
        answer: "3/4",
      },
      questions: [
        {
          id: "l2-fractions-number-line-q1",
          type: "choice",
          prompt:
            "A number line from 0 to 1 is split into 5 equal parts. What fraction is at the third mark?",
          options: ["3/5", "1/3", "5/3", "3/10"],
          answer: 0,
          hint: "Count the jumps from 0, not the parts.",
          explanation:
            "Each part is 1/5. The third mark is three jumps from 0, which is 3/5.",
        },
        {
          id: "l2-fractions-number-line-q2",
          type: "choice",
          prompt: "Which fraction is equivalent to one half?",
          options: ["2/3", "2/4", "3/5", "1/3"],
          answer: 1,
          hint: "One half means one of two equal parts.",
          explanation: "2/4 simplifies to 1/2 because both numbers divide by 2.",
        },
      ],
    },
    {
      id: "l2-equivalent-fractions",
      title: "Equivalent fractions",
      strand: "Number",
      minutes: 8,
      summary:
        "Multiply or divide the top and bottom together to create the same amount in a new form.",
      objectives: [
        "Generate equivalent fractions",
        "Simplify fractions to lowest terms",
      ],
      body: [
        "Equivalent fractions look different but name the same amount. 1/2 = 2/4 = 4/8. Imagine cutting every half into two equal pieces: you now have four pieces, but the same total amount of pizza.",
        "To make an equivalent fraction, multiply the numerator and denominator by the same number. To go from 2/3 to ninths, multiply both by 3: 2/3 = 6/9. Dividing both by the same number works too.",
        "Simplifying means dividing until no common factor remains. For 8/12, both numbers divide by 4, giving 2/3. The value is unchanged; only the way we write it is simpler.",
      ],
      keyIdea: "Whatever you do to the top, do exactly the same to the bottom.",
      example: {
        prompt: "Complete the equivalent fraction: 2/3 = ?/9.",
        steps: [
          "The denominator changed from 3 to 9, so it was multiplied by 3.",
          "Multiply the numerator by the same number: 2 × 3 = 6.",
          "So 2/3 = 6/9.",
        ],
        answer: "6",
      },
      questions: [
        {
          id: "l2-equivalent-fractions-q1",
          type: "input",
          prompt: "Complete the equivalent fraction: 2/3 = ?/9.",
          answer: "6",
          placeholder: "Type the missing numerator",
          hint: "What number times 3 gives 9?",
          explanation: "3 × 3 = 9, so multiply the numerator by 3 as well: 2 × 3 = 6.",
        },
        {
          id: "l2-equivalent-fractions-q2",
          type: "choice",
          prompt: "Simplify 8/12.",
          options: ["4/6", "2/3", "3/4", "8/12"],
          answer: 1,
          hint: "Both numbers divide by 4.",
          explanation: "Divide the numerator and denominator by 4: 8 ÷ 4 = 2 and 12 ÷ 4 = 3.",
        },
      ],
    },
    {
      id: "l2-area-perimeter",
      title: "Area & perimeter",
      strand: "Geometry",
      minutes: 8,
      summary:
        "Perimeter measures the distance around a shape; area measures the surface inside it.",
      objectives: [
        "Calculate the perimeter of a rectangle",
        "Calculate area by multiplying side lengths",
      ],
      body: [
        "Perimeter is the distance around the edge. For a rectangle, add all four sides, or use P = 2 × (length + width). A 7 cm by 4 cm rectangle has perimeter 2 × 11 = 22 cm.",
        "Area is the amount of flat space inside. It is measured in square units. A rectangle 7 cm long and 4 cm wide holds 7 × 4 = 28 squares that are 1 cm by 1 cm, so its area is 28 cm².",
        "Area and perimeter are not the same, and a shape can have the same perimeter but a different area. A 5 × 5 square and a 6 × 4 rectangle both have perimeter 20, but their areas are 25 and 24.",
      ],
      keyIdea: "Perimeter is a length; area is a count of square units.",
      example: {
        prompt: "Find the area and perimeter of a 7 cm by 4 cm rectangle.",
        steps: [
          "Area = length × width = 7 × 4 = 28 cm².",
          "Perimeter = 2 × (7 + 4) = 2 × 11 = 22 cm.",
          "Area is 28 cm²; perimeter is 22 cm.",
        ],
        answer: "Area 28 cm², perimeter 22 cm",
      },
      questions: [
        {
          id: "l2-area-perimeter-q1",
          type: "input",
          prompt: "A rectangle is 7 cm long and 4 cm wide. What is its area in cm²?",
          answer: "28",
          placeholder: "Type a number",
          hint: "Area = length × width.",
          explanation: "7 × 4 = 28, so the area is 28 cm².",
        },
        {
          id: "l2-area-perimeter-q2",
          type: "input",
          prompt: "The same 7 cm by 4 cm rectangle has what perimeter in cm?",
          answer: "22",
          placeholder: "Type a number",
          hint: "Add the four sides.",
          explanation: "7 + 4 + 7 + 4 = 22, so the perimeter is 22 cm.",
        },
      ],
    },
    {
      id: "l2-angles",
      title: "Lines, angles & turns",
      strand: "Geometry",
      minutes: 7,
      summary:
        "Classify angles by size, spot parallel and perpendicular lines, and measure turns in degrees.",
      objectives: [
        "Identify acute, right, and obtuse angles",
        "Relate turns to degrees",
      ],
      body: [
        "An angle measures a turn between two rays that meet at a point. A right angle is exactly 90°, like the corner of a square. Smaller than 90° is acute; between 90° and 180° is obtuse.",
        "A full turn is 360°, so a half turn is 180° and a quarter turn is 90°. Clock hands help: from 12 to 3 is a quarter turn.",
        "Parallel lines never meet and stay the same distance apart. Perpendicular lines meet at a right angle. The symbol for parallel is ∥ and for perpendicular is ⊥.",
      ],
      keyIdea: "A right angle is 90°, a quarter of a full turn.",
      example: {
        prompt: "An angle measures 35°. Is it acute, right, or obtuse?",
        steps: [
          "Compare 35° with 90°, the size of a right angle.",
          "35° is smaller than 90°.",
          "So the angle is acute.",
        ],
        answer: "Acute",
      },
      questions: [
        {
          id: "l2-angles-q1",
          type: "choice",
          prompt: "An angle smaller than 90° is called …",
          options: ["obtuse", "right", "acute", "straight"],
          answer: 2,
          hint: "Think of a sharp corner.",
          explanation: "Acute angles measure less than 90°.",
        },
        {
          id: "l2-angles-q2",
          type: "input",
          prompt: "How many degrees are in a quarter turn?",
          answer: "90",
          placeholder: "Type a number",
          hint: "A full turn is 360°. Divide by 4.",
          explanation: "360° ÷ 4 = 90°.",
        },
      ],
    },
    {
      id: "l2-graphs",
      title: "Tables, bar charts & line plots",
      strand: "Data",
      minutes: 7,
      summary:
        "Organise data in tables and read the story a graph is telling.",
      objectives: [
        "Read and compare bar chart values",
        "Find the mode from a line plot",
      ],
      body: [
        "A table organises raw data into rows and columns. A bar chart turns those counts into lengths, which makes comparisons visual: the tallest bar is the most common category.",
        "Always read the axes. The vertical axis may count in ones, twos, or fives, and the horizontal axis names the categories. Missing a scale is the most common graph-reading mistake.",
        "A line plot puts a dot above a number line for each data value. The value with the most dots is the mode — the most frequent result. Clusters show where most of the data sits.",
      ],
      keyIdea: "A graph is a picture of a table — check the labels and scale first.",
      example: {
        prompt:
          "A bar chart shows 12 cats, 8 dogs, and 15 birds. How many more birds than dogs?",
        steps: [
          "Read the bird bar: 15.",
          "Read the dog bar: 8.",
          "15 − 8 = 7 more birds.",
        ],
        answer: "7",
      },
      questions: [
        {
          id: "l2-graphs-q1",
          type: "input",
          prompt:
            "A bar chart shows 12 cats, 8 dogs, and 15 birds. How many more birds than dogs are there?",
          answer: "7",
          placeholder: "Type a number",
          hint: "Subtract the dog count from the bird count.",
          explanation: "15 birds − 8 dogs = 7 more birds.",
        },
        {
          id: "l2-graphs-q2",
          type: "input",
          prompt:
            "A line plot shows shoe sizes 4, 4, 5, 6, 6, 6, 7. What is the mode?",
          answer: "6",
          placeholder: "Type a number",
          hint: "Which value appears most often?",
          explanation: "Size 6 appears three times, more than any other value, so the mode is 6.",
        },
      ],
    },
    {
      id: "l2-word-problems",
      title: "Multi-step word problems",
      strand: "Number",
      minutes: 8,
      summary:
        "Slow down, identify what is known, choose operations, and check that the answer makes sense.",
      objectives: [
        "Break a problem into smaller steps",
        "Choose operations from the story, not the numbers",
      ],
      body: [
        "Word problems are stories with numbers hidden inside. Read once for the situation, then again with a pencil: what do you know, and what are you trying to find?",
        "Look for the action. 'Three packs of 8' suggests multiplication. 'Gives away 5' suggests subtraction. The numbers alone do not tell you the operation — the relationships do.",
        "After calculating, check the answer against the story. If 4 boxes hold 6 pencils each and 7 are used, the total is 24 and 24 − 7 = 17. A negative answer, or one larger than the starting total, would signal a mistake.",
      ],
      keyIdea: "Plan the steps before you calculate.",
      example: {
        prompt:
          "Sam buys 3 packs of 8 pens and gives 5 pens away. How many does he have left?",
        steps: [
          "3 packs of 8: 3 × 8 = 24 pens.",
          "Give away 5: 24 − 5 = 19.",
          "Sam has 19 pens left.",
        ],
        answer: "19 pens",
      },
      questions: [
        {
          id: "l2-word-problems-q1",
          type: "input",
          prompt:
            "Mia has 4 boxes with 6 pencils in each box. She uses 7 pencils. How many pencils are left?",
          answer: "17",
          placeholder: "Type a number",
          hint: "First find the total, then subtract.",
          explanation: "4 × 6 = 24 pencils, and 24 − 7 = 17.",
        },
        {
          id: "l2-word-problems-q2",
          type: "input",
          prompt:
            "Three buses have 45 seats each. 128 students board. How many seats are empty?",
          answer: "7",
          placeholder: "Type a number",
          hint: "Find the total number of seats first.",
          explanation: "3 × 45 = 135 seats, and 135 − 128 = 7 empty seats.",
        },
      ],
    },
  ],
};
