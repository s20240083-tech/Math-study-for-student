export const SITE_COPY = {
  zh: {
    htmlLang: "zh-Hant",
    switchLabel: "EN",
    switchAria: "切換至英文版",
    brandSub: "由第一步到最後一步",
    launch: "進入應用程式",
    nav: [
      { id: "why", label: "理念" },
      { id: "tour", label: "產品導覽" },
      { id: "curriculum", label: "課程" },
      { id: "author", label: "作者" },
    ],
    hero: {
      eyebrow: "為 6–18 歲學習者而設的完整數學路徑",
      title: "由數數開始，",
      titleAccent: "走到微積分。",
      lead:
        "Summa 把六年小學、六年中學的數學，整理成一條安靜而清楚的路：54 節引導課程、120 道練習題，以及一個真正屬於學習者的進度紀錄。",
      primary: "免費開始學習",
      secondary: "先看課程",
      note: "毋須註冊 · 進度保存在你的裝置 · 可離線使用",
      imageAlt: "Summa 學習總覽畫面",
      floatingLabel: "20 題練習",
      floatingTitle: "簡單 / 普通 / 困難",
      floatingNote: "每輪不重複，優先抽未做過的題目",
      miniStat: "6–18 歲",
      miniStatLabel: "一條連續的路",
    },
    stats: [
      { value: "06", label: "學習階段" },
      { value: "54", label: "引導課程" },
      { value: "120", label: "練習題目" },
      { value: "09", label: "數學主題" },
    ],
    trust: [
      { title: "學生獨立專題", text: "由課程設計到網站部署，完整完成。" },
      { title: "本機優先", text: "你的進度只留在你的裝置。" },
      { title: "離線可用", text: "首次載入後，沒有網絡也可以學習。" },
      { title: "免費使用", text: "沒有廣告，沒有排行榜，沒有訂閱。" },
    ],
    why: {
      eyebrow: "為什麼是 Summa",
      title: "不是再一個題庫，",
      titleAccent: "而是一條可以走完的路。",
      lead:
        "市面上的數學資源很多，但很少告訴你：現在應該學什麼，下一步去哪裡。Summa 把概念、例子、練習和進度放在同一個地方，讓學習有順序，也有回聲。",
      cards: [
        {
          number: "01",
          title: "沒有斷層的課程",
          text:
            "小學與中學的數學經常被切成零散章節。六個相連階段由數數開始，逐層接到代數、函數與微積分，每個新概念都找得到它的前一步。",
        },
        {
          number: "02",
          title: "不重複的練習",
          text:
            "同一個題型做十次，不代表真的學會。每階段 20 題、每輪 20 題，系統優先抽出你未做過或做得較少的題目，讓每次練習都有新東西。",
        },
        {
          number: "03",
          title: "看得見的進度",
          text:
            "完成課程、答對率、九個主題的掌握度與每日活動分開呈現。它不是一個漂亮的分數，而是一張告訴你「下一步去哪裡」的地圖。",
        },
      ],
    },
    tour: {
      eyebrow: "產品導覽",
      title: "四個畫面，",
      titleAccent: "一個完整的學習循環。",
      lead: "由今天要做什麼，到一節課的解釋、20 題練習，再到長期掌握度，每個畫面都只做一件事。",
      cards: [
        {
          tag: "01 · 學習",
          title: "先理解，再練習",
          text:
            "每節課以短篇講解、核心概念與例題開始，再用 2–3 道檢查點確認理解。不是先背公式，而是先知道它在說什麼。",
          image: "./marketing/lesson.png",
          alt: "Summa 課程頁面",
        },
        {
          tag: "02 · 練習",
          title: "20 題，三種難度",
          text:
            "選擇簡單、普通、困難或混合，再決定 5、10 或 20 題。每輪題目不重複，作答後即時看到完整解析與正確答案。",
          image: "./marketing/session.png",
          alt: "Summa 20 題練習畫面",
        },
        {
          tag: "03 · 進度",
          title: "掌握度，而不是排名",
          text:
            "九個數學主題的掌握度、每日活動與里程碑，讓你看見自己的變化。沒有班級排名，只有你與自己的上一步。",
          image: "./marketing/progress.png",
          alt: "Summa 學習進度頁面",
        },
        {
          tag: "04 · 隨身",
          title: "在手機上，也能專心",
          text:
            "響應式介面、可安裝的 PWA 與離線快取。通勤、睡前或沒有網絡的時候，打開同一個學習空間。",
          image: "./marketing/mobile.png",
          alt: "Summa 手機版畫面",
          mobile: true,
        },
      ],
    },
    practice: {
      eyebrow: "練習室",
      title: "每一輪 20 題，",
      titleAccent: "都是新的。",
      lead:
        "每個階段都有一個 20 題的練習庫。你可以只做 5 題，也可以完成一整輪 20 題；系統會先抽未做過或較少做的題目，讓下一輪不會又是同一批。",
      bullets: [
        { title: "每階段 20 題", text: "從基礎到進階，覆蓋該階段的全部主題。" },
        { title: "三種難度", text: "簡單、普通、困難，另有混合模式。" },
        { title: "每輪不重複", text: "同一輪不會出現重複題目。" },
        { title: "即時解析", text: "每次作答後立即看到步驟與原因。" },
      ],
      difficultyTitle: "選一個難度，開始練習",
      difficulties: [
        { key: "easy", label: "簡單", range: "1–2 階段", count: "40 道題", note: "打好基礎" },
        { key: "normal", label: "普通", range: "3–4 階段", count: "40 道題", note: "鞏固核心" },
        { key: "hard", label: "困難", range: "5–6 階段", count: "40 道題", note: "挑戰進階" },
      ],
      image: "./marketing/practice.png",
      imageAlt: "Summa 練習設定畫面",
      cta: "打開練習室",
    },
    curriculum: {
      eyebrow: "課程地圖",
      title: "六年小學，六年中學，",
      titleAccent: "一條連續的路。",
      lead:
        "課程分成六個相連階段。你可以按順序走，也可以跳到最需要的一個概念；每個階段都包含九節課與一個 20 題練習庫。",
      levels: [
        { number: "01", title: "第一步", grades: "1–2 年級", focus: "數數、數位、加減、圖形、分數入門" },
        { number: "02", title: "搭積木", grades: "3–4 年級", focus: "乘除、分數、小數、面積、角、統計圖" },
        { number: "03", title: "信心漸長", grades: "5–6 年級", focus: "小數運算、比、百分數、體積、平均數" },
        { number: "04", title: "橋樑", grades: "7–8 年級", focus: "負數、方程、比例、勾股定理、概率、統計" },
        { number: "05", title: "代數與聯繫", grades: "9–10 年級", focus: "函數、方程組、二次方程、三角、圓、數據" },
        { number: "06", title: "進階數學", grades: "11–12 年級", focus: "指數、數列、複數、微積分、概率分佈、向量" },
      ],
      strandsTitle: "九個主題，互相連結",
      strands: [
        "數與運算",
        "圖形與幾何",
        "測量",
        "數據與概率",
        "代數",
        "比與比例",
        "函數",
        "微積分",
        "進階專題",
      ],
      note: "每節課：短篇講解 · 核心概念 · 例題 · 2–3 道檢查點 · 20 題延伸練習",
    },
    principles: {
      eyebrow: "設計原則",
      title: "安靜、清楚，",
      titleAccent: "尊重學習者。",
      lead: "學習已經夠忙了。Summa 刻意拿走多餘的東西，只留下會幫助你理解的部分。",
      cards: [
        {
          icon: "lock",
          title: "本機優先",
          text: "不設帳號，不收集個人資料。完成紀錄、掌握度與 XP 都只存在你的瀏覽器裡。",
        },
        {
          icon: "compass",
          title: "沒有排行榜",
          text: "沒有班級排名，也沒有連續打卡的罪惡感。你只需要和昨天的自己比較。",
        },
        {
          icon: "bookOpen",
          title: "可以帶走",
          text: "支援離線使用，也可以安裝到手機主畫面。數學不應該只在有 Wi-Fi 的時候出現。",
        },
      ],
    },
    author: {
      eyebrow: "關於作者",
      name: "3D 廖嘉兒",
      role: "作者 · 設計與開發",
      intro:
        "Summa 是一個由 3D 班廖嘉兒構思、設計及開發的數學學習專題。",
      paragraphs: [
        "她希望把完整的學校數學課程，整理成一個學生真正願意打開、也能一直用下去的學習空間；不是把練習堆得更高，而是把路標記得更清楚。",
        "從課程結構、中文內容、視覺設計，到網站與 GitHub Pages 部署，都是這個專題的一部分。",
      ],
      facts: [
        { label: "作者", value: "3D 廖嘉兒" },
        { label: "課程", value: "6 階段 · 54 節" },
        { label: "題庫", value: "120 道 · 每階段 20 道" },
        { label: "技術", value: "React · Vite · PWA" },
      ],
      github: "在 GitHub 查看原始碼",
      app: "進入互動課程",
    },
    finalCta: {
      eyebrow: "準備好走第一步了嗎？",
      title: "從第一個概念開始。",
      text: "免費、毋須註冊。從你最需要的那一課開始，或先看看完整的課程地圖。",
      primary: "免費開始學習",
      secondary: "查看 GitHub",
      note: "課程介面：簡體中文 · 這個網站：繁體中文 / English",
    },
    footer: {
      tagline: "一條完整的學校數學路徑，為理解而設計。",
      madeBy: "由 3D 廖嘉兒設計及開發",
      appLanguage: "互動課程目前以簡體中文呈現；網站提供繁體中文與英文。",
      sections: "課程",
      rights: "© 2026 Summa · 3D 廖嘉兒",
      links: {
        github: "GitHub",
        app: "互動課程",
      },
    },
  },
  en: {
    htmlLang: "en",
    switchLabel: "繁中",
    switchAria: "Switch to Traditional Chinese",
    brandSub: "FROM FIRST STEPS TO CALCULUS",
    launch: "Open the app",
    nav: [
      { id: "why", label: "Why Summa" },
      { id: "tour", label: "Product tour" },
      { id: "curriculum", label: "Curriculum" },
      { id: "author", label: "Author" },
    ],
    hero: {
      eyebrow: "A complete mathematics path for ages 6–18",
      title: "Start with counting.",
      titleAccent: "Finish with calculus.",
      lead:
        "Summa turns six years of primary and six years of secondary mathematics into one calm, connected path: 54 guided lessons, 120 practice questions, and a record of progress that belongs to the learner.",
      primary: "Start learning free",
      secondary: "Explore the curriculum",
      note: "No sign-up · Progress stays on your device · Works offline",
      imageAlt: "Summa learning dashboard",
      floatingLabel: "20-question sets",
      floatingTitle: "Easy / Normal / Hard",
      floatingNote: "No repeats in a set; unseen questions come first",
      miniStat: "Ages 6–18",
      miniStatLabel: "One continuous path",
    },
    stats: [
      { value: "06", label: "Stages" },
      { value: "54", label: "Guided lessons" },
      { value: "120", label: "Practice questions" },
      { value: "09", label: "Mathematical strands" },
    ],
    trust: [
      { title: "Student-built", text: "Designed, written, and shipped end to end." },
      { title: "Local-first", text: "Your progress stays on your device." },
      { title: "Offline ready", text: "After the first visit, learning works without a network." },
      { title: "Free to use", text: "No ads, no leaderboards, no subscription." },
    ],
    why: {
      eyebrow: "Why Summa",
      title: "Not another question bank.",
      titleAccent: "A path you can actually finish.",
      lead:
        "There is no shortage of maths resources. What is rare is a clear answer to: what should I learn now, and where do I go next? Summa keeps concepts, examples, practice, and progress in one place.",
      cards: [
        {
          number: "01",
          title: "A path without gaps",
          text:
            "School mathematics is often split into disconnected chapters. Six connected stages begin with counting and build steadily toward algebra, functions, and calculus, so every new idea has a visible predecessor.",
        },
        {
          number: "02",
          title: "Practice that changes",
          text:
            "Doing the same question ten times is not transfer. Each stage has 20 questions, and every 20-question set avoids repeats while prioritising questions you have not seen or have practised least.",
        },
        {
          number: "03",
          title: "Progress you can see",
          text:
            "Completion, accuracy, mastery across nine strands, and daily activity are shown separately. It is not a vanity score; it is a map of where to go next.",
        },
      ],
    },
    tour: {
      eyebrow: "Product tour",
      title: "Four screens.",
      titleAccent: "One complete learning loop.",
      lead: "From today's next step to a lesson, a 20-question set, and long-term mastery, each screen does one job.",
      cards: [
        {
          tag: "01 · Learn",
          title: "Understand before practising",
          text:
            "Each lesson opens with a short explanation, a key idea, and a worked example, then checks understanding with 2–3 checkpoints. The formula comes after the meaning.",
          image: "./marketing/lesson.png",
          alt: "Summa lesson screen",
        },
        {
          tag: "02 · Practise",
          title: "20 questions, three levels",
          text:
            "Choose Easy, Normal, Hard, or Mixed, then 5, 10, or 20 questions. Every set is non-repeating, with a full explanation after each answer.",
          image: "./marketing/session.png",
          alt: "Summa 20-question practice screen",
        },
        {
          tag: "03 · Progress",
          title: "Mastery, not ranking",
          text:
            "See mastery across nine strands, daily activity, and milestones. There is no class leaderboard, only your own trajectory.",
          image: "./marketing/progress.png",
          alt: "Summa progress screen",
        },
        {
          tag: "04 · Anywhere",
          title: "Focused on a phone, too",
          text:
            "A responsive interface, an installable PWA, and offline caching make the same learning space available on the bus, before bed, or without Wi-Fi.",
          image: "./marketing/mobile.png",
          alt: "Summa mobile screen",
          mobile: true,
        },
      ],
    },
    practice: {
      eyebrow: "Practice studio",
      title: "Every 20-question set",
      titleAccent: "is a fresh one.",
      lead:
        "Each stage has a bank of 20 questions. Do five, ten, or a full set of twenty; the app prioritises questions you have not tried or have practised least, so the next set does not repeat the last one.",
      bullets: [
        { title: "20 questions per stage", text: "Every strand in the stage, from foundations to challenge." },
        { title: "Three difficulty levels", text: "Easy, Normal, Hard, plus a Mixed mode." },
        { title: "No repeats in a set", text: "Every question in a round is distinct." },
        { title: "Explanations built in", text: "See the reasoning and the answer after every attempt." },
      ],
      difficultyTitle: "Choose a level and begin",
      difficulties: [
        { key: "easy", label: "Easy", range: "Stages 1–2", count: "40 questions", note: "Build the basics" },
        { key: "normal", label: "Normal", range: "Stages 3–4", count: "40 questions", note: "Secure the core" },
        { key: "hard", label: "Hard", range: "Stages 5–6", count: "40 questions", note: "Reach further" },
      ],
      image: "./marketing/practice.png",
      imageAlt: "Summa practice setup screen",
      cta: "Open the practice studio",
    },
    curriculum: {
      eyebrow: "Curriculum map",
      title: "Six primary years. Six secondary years.",
      titleAccent: "One continuous path.",
      lead:
        "The curriculum is divided into six connected stages. Follow them in order or jump to the idea you need; each stage contains nine lessons and a 20-question practice bank.",
      levels: [
        { number: "01", title: "First Steps", grades: "Grades 1–2", focus: "Counting, place value, addition, shapes, early fractions" },
        { number: "02", title: "Building Blocks", grades: "Grades 3–4", focus: "Multiplication, division, fractions, decimals, area, angles, graphs" },
        { number: "03", title: "Growing Confidence", grades: "Grades 5–6", focus: "Decimal operations, ratio, percentages, volume, averages" },
        { number: "04", title: "The Bridge", grades: "Grades 7–8", focus: "Integers, equations, proportion, Pythagoras, probability, statistics" },
        { number: "05", title: "Algebra & Connections", grades: "Grades 9–10", focus: "Functions, systems, quadratics, trigonometry, circles, data" },
        { number: "06", title: "Advanced Mathematics", grades: "Grades 11–12", focus: "Exponentials, sequences, complex numbers, calculus, distributions, vectors" },
      ],
      strandsTitle: "Nine strands, connected",
      strands: [
        "Number",
        "Geometry",
        "Measurement",
        "Data & Probability",
        "Algebra",
        "Ratio & Proportion",
        "Functions",
        "Calculus",
        "Advanced topics",
      ],
      note: "Every lesson: short explanation · key idea · worked example · 2–3 checkpoints · 20-question extension practice",
    },
    principles: {
      eyebrow: "Design principles",
      title: "Calm, clear,",
      titleAccent: "and respectful of the learner.",
      lead: "Learning is busy enough. Summa deliberately removes the noise and keeps only what helps understanding.",
      cards: [
        {
          icon: "lock",
          title: "Local-first",
          text: "No accounts and no personal data collection. Completion, mastery, and XP live in your browser, not on a server.",
        },
        {
          icon: "compass",
          title: "No leaderboard",
          text: "No class rankings and no streak guilt. The only comparison is with your own previous step.",
        },
        {
          icon: "bookOpen",
          title: "Take it with you",
          text: "Offline support and an installable home-screen app. Mathematics should not require Wi-Fi to appear.",
        },
      ],
    },
    author: {
      eyebrow: "About the author",
      name: "3D 廖嘉兒",
      role: "Author · Design & development",
      intro:
        "Summa is a mathematics learning project conceived, designed, and built by 廖嘉兒 of Class 3D.",
      paragraphs: [
        "She wanted to turn the whole school mathematics curriculum into a learning space a student would genuinely want to open again, with clearer signposts rather than simply more exercises.",
        "The curriculum structure, Chinese content, visual design, website, and GitHub Pages deployment are all part of the project.",
      ],
      facts: [
        { label: "Author", value: "3D 廖嘉兒" },
        { label: "Lessons", value: "6 stages · 54 lessons" },
        { label: "Questions", value: "120 · 20 per stage" },
        { label: "Built with", value: "React · Vite · PWA" },
      ],
      github: "View the source on GitHub",
      app: "Open the interactive course",
    },
    finalCta: {
      eyebrow: "Ready for the first step?",
      title: "Begin with one idea.",
      text: "Free and sign-up free. Start with the lesson you need, or explore the full curriculum first.",
      primary: "Start learning free",
      secondary: "View GitHub",
      note: "Course interface: Simplified Chinese · This site: Traditional Chinese / English",
    },
    footer: {
      tagline: "A complete school mathematics path, designed for understanding.",
      madeBy: "Designed and built by 3D 廖嘉兒",
      appLanguage: "The interactive course is currently presented in Simplified Chinese; this site is available in Traditional Chinese and English.",
      sections: "Curriculum",
      rights: "© 2026 Summa · 3D 廖嘉兒",
      links: {
        github: "GitHub",
        app: "Interactive course",
      },
    },
  },
};
