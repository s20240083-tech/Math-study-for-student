export const level1 = {
  id: "first-steps",
  index: 1,
  stage: "Primary",
  grades: "Grades 1–2",
  ages: "Ages 6–8",
  title: "First Steps",
  tagline: "Numbers, shapes, and the confidence to explore.",
  description:
    "Build a sturdy foundation with counting, early arithmetic, simple fractions, and the language of shape.",
  accent: "#E4663A",
  soft: "#F9E3D8",
  lessons: [
    {
      id: "l1-counting",
      title: "Counting & place value",
      strand: "Number",
      minutes: 7,
      summary:
        "Every number is built from digits, and each digit's value depends on where it sits.",
      objectives: [
        "Read and write two-digit numbers",
        "Break a number into tens and ones",
      ],
      body: [
        "When we write 34, the 3 is not just a 3. It sits in the tens place, so it stands for three groups of ten. The 4 sits in the ones place, so it stands for four single units. Together they make thirty-four.",
        "We bundle ten ones into one ten, and ten tens into one hundred. That is why the whole number system can be written with just ten digits. The position of a digit carries its meaning.",
        "Place value also helps us compare. 58 is greater than 49 because five tens beat four tens — even though 8 is smaller than 9. Look at the largest place first.",
      ],
      keyIdea: "The same digit can mean very different amounts depending on its place.",
      example: {
        prompt: "What number is made of 6 tens and 8 ones?",
        steps: [
          "Six tens are 6 × 10 = 60.",
          "Eight ones are simply 8.",
          "60 + 8 = 68.",
        ],
        answer: "68",
      },
      questions: [
        {
          id: "l1-counting-q1",
          type: "choice",
          prompt: "In the number 58, what does the digit 5 represent?",
          options: ["5 ones", "5 tens", "5 hundreds", "50 tens"],
          answer: 1,
          hint: "The digit on the left sits in the tens place.",
          explanation:
            "The 5 is in the tens place, so it represents 5 × 10 = 50, or five tens.",
        },
        {
          id: "l1-counting-q2",
          type: "input",
          prompt: "Write the number made of 4 tens and 7 ones.",
          answer: "47",
          placeholder: "Type a number",
          hint: "Four tens are 40. Now add the ones.",
          explanation: "4 tens = 40, and 40 + 7 = 47.",
        },
      ],
    },
    {
      id: "l1-add-sub-20",
      title: "Addition & subtraction within 20",
      strand: "Number",
      minutes: 8,
      summary:
        "Use number bonds and the make-ten strategy to add and subtract with confidence.",
      objectives: [
        "Add numbers that cross ten",
        "Use addition to help solve subtraction",
      ],
      body: [
        "Addition puts parts together to make a whole. Subtraction takes a part away or finds the missing part. They are two directions of the same relationship: if 8 + 7 = 15, then 15 − 7 = 8.",
        "The make-ten strategy is a useful bridge. To find 8 + 7, first notice that 8 needs 2 more to reach 10. Split the 7 into 2 and 5, make 10, then add the remaining 5 to get 15.",
        "Number bonds — pairs that make 10 — are worth knowing by heart: 1 + 9, 2 + 8, 3 + 7, 4 + 6, and 5 + 5. They make both adding and subtracting faster.",
      ],
      keyIdea: "Make a friendly ten first, then add or subtract what is left.",
      example: {
        prompt: "Find 9 + 6 by making ten.",
        steps: [
          "9 needs 1 more to make 10.",
          "Split 6 into 1 + 5.",
          "9 + 1 = 10, then 10 + 5 = 15.",
        ],
        answer: "15",
      },
      questions: [
        {
          id: "l1-add-sub-20-q1",
          type: "choice",
          prompt: "What is 9 + 6?",
          options: ["13", "14", "15", "16"],
          answer: 2,
          hint: "Make 10 first: 9 + 1, then add 5 more.",
          explanation: "9 + 1 = 10, and 10 + 5 = 15.",
        },
        {
          id: "l1-add-sub-20-q2",
          type: "input",
          prompt: "What is 14 − 8?",
          answer: "6",
          placeholder: "Type a number",
          hint: "Think: 8 + ? = 14.",
          explanation: "8 + 6 = 14, so 14 − 8 = 6.",
        },
      ],
    },
    {
      id: "l1-add-sub-100",
      title: "Adding & subtracting to 100",
      strand: "Number",
      minutes: 8,
      summary:
        "Split numbers into tens and ones, then regroup when a column is too large or too small.",
      objectives: [
        "Add two-digit numbers using place value",
        "Regroup when subtracting",
      ],
      body: [
        "With bigger numbers, work in tens and ones. For 36 + 27, add the tens (30 + 20 = 50) and the ones (6 + 7 = 13), then combine: 50 + 13 = 63.",
        "Sometimes the ones add to more than nine. That extra ten gets carried into the tens column. This is called regrouping. Subtraction can also need regrouping: to take 8 from 2, borrow one ten so the 2 becomes 12.",
        "A quick estimate keeps you honest. 36 + 27 is close to 40 + 30 = 70, so an answer near 63 makes sense. An answer like 9 would not.",
      ],
      keyIdea: "Add tens to tens and ones to ones — then regroup what spills over.",
      example: {
        prompt: "Find 36 + 27.",
        steps: [
          "Tens: 30 + 20 = 50.",
          "Ones: 6 + 7 = 13.",
          "Combine: 50 + 13 = 63.",
        ],
        answer: "63",
      },
      questions: [
        {
          id: "l1-add-sub-100-q1",
          type: "input",
          prompt: "What is 45 + 38?",
          answer: "83",
          placeholder: "Type a number",
          hint: "40 + 30 = 70; 5 + 8 = 13.",
          explanation: "40 + 30 = 70 and 5 + 8 = 13, so 70 + 13 = 83.",
        },
        {
          id: "l1-add-sub-100-q2",
          type: "choice",
          prompt: "What is 52 − 28?",
          options: ["24", "26", "34", "30"],
          answer: 0,
          hint: "52 − 30 = 22. Then add back 2.",
          explanation:
            "Subtract 30 to get 22, then add 2 back because 28 is 2 less than 30. The answer is 24.",
        },
      ],
    },
    {
      id: "l1-shapes",
      title: "Shapes & their properties",
      strand: "Geometry",
      minutes: 7,
      summary:
        "Name shapes by their sides, corners, and faces — and spot them in the world around you.",
      objectives: [
        "Identify triangles, quadrilaterals, and circles",
        "Describe 3D shapes by faces, edges, and vertices",
      ],
      body: [
        "Shapes are described by their properties, not just their names. A triangle always has three straight sides and three corners. A quadrilateral has four. A circle is different: it has one curved edge and no corners at all.",
        "Some quadrilaterals have special names. A rectangle has four right angles. A square is a rectangle with all four sides equal. A rhombus has four equal sides but does not need right angles.",
        "Solid shapes have faces (flat surfaces), edges (where faces meet), and vertices (corners). A cube has 6 square faces, 12 edges, and 8 vertices — a useful fact to picture rather than memorise blindly.",
      ],
      keyIdea: "A shape's name is a shortcut for a set of properties.",
      example: {
        prompt: "A shape has 4 equal sides and 4 right angles. What is it?",
        steps: [
          "Four sides make it a quadrilateral.",
          "Four equal sides rule out an ordinary rectangle.",
          "Four right angles make it a square.",
        ],
        answer: "A square",
      },
      questions: [
        {
          id: "l1-shapes-q1",
          type: "choice",
          prompt: "Which shape has 4 equal sides and 4 right angles?",
          options: ["Triangle", "Rectangle", "Square", "Circle"],
          answer: 2,
          hint: "It is a special kind of rectangle.",
          explanation:
            "A square has four equal sides and four right angles. It is also a rectangle.",
        },
        {
          id: "l1-shapes-q2",
          type: "input",
          prompt: "How many faces does a cube have?",
          answer: "6",
          placeholder: "Type a number",
          hint: "Think of a dice.",
          explanation: "A cube has 6 faces: top, bottom, front, back, left, and right.",
        },
      ],
    },
    {
      id: "l1-measure",
      title: "Measuring length, mass & time",
      strand: "Measurement",
      minutes: 7,
      summary:
        "Choose sensible units, read scales carefully, and tell the time on an analogue clock.",
      objectives: [
        "Convert between common units",
        "Read o'clock, half past, and quarter past",
      ],
      body: [
        "Measurement compares an object with a unit. We choose the unit to fit the job: centimetres for a pencil, metres for a room, kilometres for a journey. A sensible unit makes a number easy to picture.",
        "Metric units are built on tens and hundreds. 1 metre = 100 centimetres, 1 kilogram = 1,000 grams, and 1 litre = 1,000 millilitres. Converting is a matter of multiplying or dividing by those amounts.",
        "On an analogue clock, the short hand shows the hour and the long hand shows minutes. The 12 marks zero minutes, and each number is five minutes further: 3:30 means half past three, with the long hand on the 6.",
      ],
      keyIdea: "The number is only meaningful with its unit.",
      example: {
        prompt: "A ribbon is 2 metres and 35 centimetres long. How many centimetres is that?",
        steps: [
          "2 metres = 2 × 100 = 200 centimetres.",
          "Add the extra 35 centimetres.",
          "200 + 35 = 235 centimetres.",
        ],
        answer: "235 cm",
      },
      questions: [
        {
          id: "l1-measure-q1",
          type: "choice",
          prompt: "How many centimetres are in 1 metre?",
          options: ["10", "100", "1,000", "60"],
          answer: 1,
          hint: "The prefix centi- means one hundredth.",
          explanation: "1 metre = 100 centimetres.",
        },
        {
          id: "l1-measure-q2",
          type: "choice",
          prompt: "The long hand points to 6 and the short hand is between 3 and 4. What time is it?",
          options: ["3:15", "3:30", "4:30", "3:00"],
          answer: 1,
          hint: "The long hand on 6 means half past.",
          explanation:
            "The long hand on 6 shows 30 minutes. With the short hand past 3, the time is 3:30, or half past three.",
        },
      ],
    },
    {
      id: "l1-fractions-intro",
      title: "Halves, quarters & thirds",
      strand: "Number",
      minutes: 7,
      summary:
        "Fractions describe equal parts of a whole — and the size of the part depends on how many parts there are.",
      objectives: [
        "Write simple fractions from pictures",
        "Compare unit fractions",
      ],
      body: [
        "A fraction is a fair share. If a pizza is cut into four equal slices, each slice is one quarter. We write it as 1/4: the bottom number says how many equal parts the whole was cut into, and the top says how many parts we have.",
        "The parts must be equal. Cutting a cake into four pieces that are not the same size does not make quarters. The whole also matters: half of a small apple is less than half of a large apple.",
        "When the top number is 1, the fraction is called a unit fraction. More parts means smaller parts: 1/2 is bigger than 1/4, and 1/4 is bigger than 1/8.",
      ],
      keyIdea: "The bigger the denominator, the smaller each equal share.",
      example: {
        prompt: "What is 1/2 of 8?",
        steps: [
          "Half means split into 2 equal groups.",
          "8 ÷ 2 = 4.",
          "So 1/2 of 8 is 4.",
        ],
        answer: "4",
      },
      questions: [
        {
          id: "l1-fractions-intro-q1",
          type: "choice",
          prompt: "A pizza is cut into 4 equal slices. One slice is what fraction of the pizza?",
          options: ["1/2", "1/3", "1/4", "4/1"],
          answer: 2,
          hint: "Count the equal parts in the whole.",
          explanation:
            "There are 4 equal parts and the slice is 1 of them, so the fraction is 1/4.",
        },
        {
          id: "l1-fractions-intro-q2",
          type: "choice",
          prompt: "Which fraction is larger?",
          options: ["1/2", "1/4", "They are equal", "It depends on the shape"],
          answer: 0,
          hint: "Draw a rectangle and split it into halves, then quarters.",
          explanation:
            "Halves are larger than quarters because the whole is split into fewer equal pieces. 1/2 > 1/4.",
        },
      ],
    },
    {
      id: "l1-patterns",
      title: "Patterns & skip counting",
      strand: "Algebra",
      minutes: 6,
      summary:
        "Find the rule behind a sequence, then use it to predict what comes next.",
      objectives: [
        "Continue repeating and growing patterns",
        "Describe a simple rule in words",
      ],
      body: [
        "A pattern is a rule that repeats. It can repeat a shape (red, blue, red, blue) or grow by a fixed amount (5, 10, 15, 20). Finding the rule is more powerful than memorising the next number.",
        "Skip counting is a growing pattern. Counting by 2s gives 2, 4, 6, 8; counting by 5s gives 5, 10, 15, 20. Each term is the previous term plus the step size.",
        "To describe a pattern, compare neighbouring terms. Ask: what is the same each time? What changes? If the gap is always +3, you have found the rule.",
      ],
      keyIdea: "A pattern is a promise about what comes next.",
      example: {
        prompt: "Find the next number: 7, 10, 13, 16, …",
        steps: [
          "10 − 7 = 3, 13 − 10 = 3, 16 − 13 = 3.",
          "The rule is add 3 each time.",
          "16 + 3 = 19.",
        ],
        answer: "19",
      },
      questions: [
        {
          id: "l1-patterns-q1",
          type: "choice",
          prompt: "What comes next in 5, 10, 15, 20, …?",
          options: ["21", "24", "25", "30"],
          answer: 2,
          hint: "Notice how much is added each time.",
          explanation: "The pattern adds 5 each time, so 20 + 5 = 25.",
        },
        {
          id: "l1-patterns-q2",
          type: "input",
          prompt: "What comes next in 7, 10, 13, 16, …?",
          answer: "19",
          placeholder: "Type a number",
          hint: "The gap between terms is 3.",
          explanation: "Each term increases by 3, so 16 + 3 = 19.",
        },
      ],
    },
    {
      id: "l1-money",
      title: "Money in real life",
      strand: "Number",
      minutes: 7,
      summary:
        "Add prices, work out change, and keep track of amounts written with a decimal point.",
      objectives: [
        "Add and subtract money amounts",
        "Calculate change from a note",
      ],
      body: [
        "Money uses decimals because it has a whole part and a part of a whole: dollars and cents. $3.50 means 3 dollars and 50 cents. The digits after the point are cents, not a second dollar amount.",
        "To add prices, line up the decimal points and add like units. $3.50 + $2.20 = $5.70. One dollar is 100 cents, so 50 cents + 20 cents = 70 cents, with no carrying needed here.",
        "Change is subtraction. If you pay with $10 for something that costs $6.25, think up from $6.25 to $10: 75 cents gets you to $7, then $3 more gets you to $10. The change is $3.75.",
      ],
      keyIdea: "Keep dollars with dollars and cents with cents.",
      example: {
        prompt: "You buy a book for $6.25 and pay with $10. How much change?",
        steps: [
          "$6.25 + $0.75 = $7.00.",
          "$7.00 + $3.00 = $10.00.",
          "Change = $0.75 + $3.00 = $3.75.",
        ],
        answer: "$3.75",
      },
      questions: [
        {
          id: "l1-money-q1",
          type: "choice",
          prompt: "What is $3.50 + $2.20?",
          options: ["$5.50", "$5.70", "$6.70", "$5.20"],
          answer: 1,
          hint: "Line up the decimal points and add cents to cents.",
          explanation: "$3.50 + $2.20 = $5.70.",
        },
        {
          id: "l1-money-q2",
          type: "input",
          prompt: "A toy costs $6.25. How much change do you get from $10?",
          answer: "3.75",
          placeholder: "Type a number, e.g. 1.50",
          hint: "Count up from $6.25 to $10.",
          explanation: "$10.00 − $6.25 = $3.75.",
        },
      ],
    },
    {
      id: "l1-data",
      title: "Picture graphs & tally charts",
      strand: "Data",
      minutes: 6,
      summary:
        "Collect information, show it clearly, and answer questions by reading the chart.",
      objectives: [
        "Read tally marks grouped in fives",
        "Compare values in a picture graph",
      ],
      body: [
        "Data is information collected by counting or measuring. A tally chart keeps a running count: mark one line for each item, and every fifth line crosses the group. Four groups of five plus three marks means 23.",
        "A picture graph uses symbols to stand for amounts. Always check the key: one picture might represent 1, 2, or even 10 items. The picture alone does not tell you the value.",
        "Good graphs make comparison easy. To find how many more, subtract the smaller value from the larger. To find a total, add the categories together.",
      ],
      keyIdea: "Read the key and the labels before you read the pictures.",
      example: {
        prompt:
          "A picture graph shows 12 cats, 8 dogs, and 15 birds. How many more birds than dogs?",
        steps: [
          "Find the two values being compared: birds 15, dogs 8.",
          "Subtract: 15 − 8 = 7.",
          "There are 7 more birds than dogs.",
        ],
        answer: "7",
      },
      questions: [
        {
          id: "l1-data-q1",
          type: "input",
          prompt:
            "A tally chart has 4 complete groups of five marks, plus 3 extra marks. What is the total?",
          answer: "23",
          placeholder: "Type a number",
          hint: "Four groups of five make 20.",
          explanation: "4 × 5 = 20, and 20 + 3 = 23.",
        },
        {
          id: "l1-data-q2",
          type: "input",
          prompt:
            "A bar chart shows 12 cats, 8 dogs, and 15 birds. How many more birds than dogs are there?",
          answer: "7",
          placeholder: "Type a number",
          hint: "Subtract the smaller number from the larger.",
          explanation: "Birds = 15 and dogs = 8, so 15 − 8 = 7.",
        },
      ],
    },
  ],
};
