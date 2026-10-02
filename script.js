const header = document.querySelector("[data-header]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const languageButtons = Array.from(document.querySelectorAll("[data-lang-toggle]"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const links = {
  en: {
    cv: "https://drive.google.com/file/d/1mGLtWM1eYTXxHXKDGP8l3LyrxBBRxj_r/view?usp=sharing",
    "decision-prototype": "https://js.design/f/KM63Du?p=YE90lv-dKO",
    "decision-report": "https://drive.google.com/file/d/13JvHc2L1JbwjWKGa_m_7OHvv1nM-cMQg/view",
    "lyft-ad-video": "https://youtu.be/08Axhp8f7EI",
    "lyft-journey-map": "https://www.canva.com/design/DAFvXjdhEIA/bAh9f8T-dHQv7OnIJyS4Yw/edit",
    "job-search-prototype": "https://modao.cc/app/Hxh6IPpr7ycgmLNkCPrV5#screen=sl04y25ll64kaxm",
    "domie-design-video": "https://youtu.be/VNLKsv6CtYw",
    "domie-concept-file": "https://drive.google.com/file/d/17MsGqdXW5mxqgbwuuo-goXDBD6uM9VZS/view?usp=sharing",
    "bag-design-slides": "https://drive.google.com/file/d/1Saa_u7VQsaYw5zP0g3mKeni31NZ5G4_Z/view?usp=sharing",
    "bag-redesign-slides": "https://drive.google.com/file/d/1LJMdZwtt1IKzxzYCn52uuAWbZQTI84Nr/view?usp=sharing",
    "domie-cad-video": "https://youtu.be/rFOj1OjNtnU",
    "nyc-github": "https://github.com/Williamsjs0727/Group1-Final-Project",
    "ucl-social": "https://www.youtube.com/watch?v=1A1gI9liGfA",
    instagram: "https://www.instagram.com/s_jingshan/",
  },
  zh: {
    cv: "https://1drv.ms/b/s!AmF6I0bzmNnSgyCIGLfcwh_DggTV?e=uUT7J7",
    "decision-prototype": "https://js.design/f/KM63Du?p=YE90lv-dKO",
    "decision-report": "https://1drv.ms/b/s!AmF6I0bzmNnSgyGYGyQJRkWUOaC8?e=qbuzPf",
    "lyft-ad-video": "https://1drv.ms/v/s!AmF6I0bzmNnSgyhvrcXamQNTlotA?e=UTbdr2",
    "lyft-journey-map": "https://www.canva.com/design/DAFvXjdhEIA/bAh9f8T-dHQv7OnIJyS4Yw/edit",
    "job-search-prototype": "https://modao.cc/app/Hxh6IPpr7ycgmLNkCPrV5#screen=sl04y25ll64kaxm",
    "domie-design-video": "https://1drv.ms/v/s!AmF6I0bzmNnSgyJIZJZNLyN_Qp5N?e=xVcWAu",
    "domie-concept-file": "https://1drv.ms/b/s!AmF6I0bzmNnSgyl8BXwAB1vH9gQQ?e=GlFnsN",
    "bag-design-slides": "https://1drv.ms/b/s!AmF6I0bzmNnSgyYWgcYYV-o5UE_H?e=cWfrv5",
    "bag-redesign-slides": "https://1drv.ms/b/s!AmF6I0bzmNnSgyc-lPp2zoq9kowq?e=d6Hclx",
    "domie-cad-video": "https://1drv.ms/v/s!AmF6I0bzmNnSgyoTkIykbBC_o1Cu?e=Fv1Q3I",
    "nyc-github": "https://github.com/Williamsjs0727/Group1-Final-Project",
    "ucl-social": "https://jingshanshi.framer.website/main---cn#writings-10",
    instagram: "https://www.instagram.com/s_jingshan/",
  },
};

const copy = {
  en: {
    meta: {
      title: 'Jingshan "William" Shi',
      description:
        "Jingshan William Shi personal website: product management, operations, brand management, design, analytics, and photography.",
    },
    wordmark: ["Jingshan", "William Shi"],
    labels: {
      home: "Jingshan William Shi home",
      portrait: "Portrait of Jingshan William Shi",
      portraitAlt: "Jingshan William Shi professional portrait",
    },
    nav: ["Introduction", "Education", "Experience", "Projects", "UCL", "Photography", "Contact"],
    hero: {
      eyebrow: "Product Management / Operations / Brand Strategy",
      title: 'Jingshan<br><span>William Shi</span>',
      lede:
        "A Columbia MSc graduate and UCL alum building across telecom, product, brand, operations, analytics, and international business.",
      actions: ["View experience", "Download CV"],
      note: "Finding a product manager? Scroll for a focused portfolio.",
    },
    intro: {
      kicker: "Introduction",
      quote: "Stay hungry, stay foolish.",
      credit: "Steve Jobs",
      paragraphs: [
        'I\'m Jingshan "William" Shi, a Columbia MSc graduate and UCL alum working across product, operations, brand, analytics, and telecom business development. My work sits between user needs, commercial execution, and cross-border growth.',
        "Since August 2025, I have been a Graduate Trainee at China Mobile International, where I have been exposed to GSD data card products, overseas MVNO business, and projects supporting Chinese enterprises expanding globally. Earlier roles at Authentic Brands Group, Poppy, and DiDi built my foundation in APAC brand management, product operations, user experience, and data-informed decision making.",
      ],
      highlights: [
        {
          title: "Versatility",
          body: "Drove a 20% increase in user engagement at Poppy and enhanced experiences for over 6 million DiDi users.",
        },
        {
          title: "Telecom and Global Business",
          body: "Developing exposure to GSD data cards, overseas MVNO operations, and Chinese enterprise globalization projects.",
        },
        {
          title: "Brand Management",
          body: "Developed brand protection strategies and optimized royalty reporting at Authentic Brands Group.",
        },
        {
          title: "Innovation and Leadership",
          body: "Led an AI-powered recommendation app in undergraduate study and co-founded Intellioice International Education.",
        },
      ],
    },
    education: {
      kicker: "Education",
      heading: "Academic training across London and New York.",
      items: [
        {
          year: "2023",
          date: "Aug 2023 - Feb 2025",
          location: "New York, United States",
          school: "Columbia University",
          degree: "Master of Science in Management Science and Engineering",
        },
        {
          year: "2020",
          date: "Sep 2020 - Jun 2023",
          location: "London, United Kingdom",
          school: "University College London",
          degree: "Bachelor of Science in Information Management for Business",
        },
      ],
    },
    projects: {
      kicker: "Projects",
      heading: "Selected work across product, design, and analytics.",
      groups: ["Featured Cases", "Project Archive"],
      items: {
        "decision-making": {
          type: "App Prototype",
          title: "Decision Making App Prototype",
          body: "Led an AI-powered recommendation app during undergraduate study to streamline dining and movie decisions through customized recommendations.",
          links: { "decision-prototype": "View prototype", "decision-report": "View report" },
        },
        "lyft-ar": {
          type: "AR Product Concept",
          title: "Lyft AR Pickup Prototype",
          body: "AR visual cues help passengers and drivers accurately identify each other's location.",
          links: { "lyft-ad-video": "View advertising video" },
        },
        "lyft-journey": {
          type: "Journey Mapping",
          title: "Lyft Customer Journey Map",
          body: "A full user-experience map used to identify improvements across the Lyft journey.",
          links: { "lyft-journey-map": "View journey map" },
        },
        "job-search": {
          type: "Marketplace Prototype",
          title: "Job-Search App Prototype",
          body: "A job-search platform for UK students to find opportunities at tech and business startups.",
          links: { "job-search-prototype": "View prototype" },
        },
        domie: {
          type: "Spatial Product + CAD",
          title: "Domie: Repurposing NYC Rooftops",
          body: "A foldable rooftop-igloo system that adapts to weather on demand, extends NYC rooftop use across all four seasons, and includes a CAD prototype for extreme-weather operation.",
          links: { "domie-design-video": "View design video", "domie-concept-file": "View concept file", "domie-cad-video": "View CAD prototype" },
        },
        "ideal-bag": {
          type: "Product Design",
          title: "An Ideal Bag",
          body: "Customer analysis translated into functional and emotional design requirements for an ideal bag.",
          links: { "bag-design-slides": "View design slides", "bag-redesign-slides": "View redesign" },
        },
        "domie-cad": {
          type: "CAD Prototype",
          title: "Domie CAD Prototype",
          body: "A prototype showing how Domie can operate under extreme weather conditions.",
          links: { "domie-cad-video": "View CAD prototype" },
        },
        "nyc-apartment": {
          type: "Urban Data",
          title: "NYC Apartment Search",
          body: "Combined NYC apartment data, 311 complaints, and urban forestry data to support better rental decisions, with project code available on GitHub.",
          links: { "nyc-github": "View project code" },
        },
      },
    },
    experience: {
      kicker: "Professional Experiences",
      heading:
        "Product sense shaped through telecom, brand, marketplace, mobility, and early venture work.",
      lensLabel: "Experience composition",
      lens: [
        { value: "20%", title: "Engagement lift", body: "Poppy · product operations" },
        { value: "6M+", title: "Users reached", body: "DiDi · mobility product" },
        { value: "GSD · MVNO", title: "Telecom scope", body: "CMI · global business exposure" },
      ],
      items: [
        { year: "2025", date: "Aug - Present", company: "China Mobile International", role: "Graduate Trainee · Full-time job", link: "View rotation details" },
        { year: "2024", date: "Jun - Aug", company: "Authentic Brands Group", role: "Brand Management Intern (APAC Team) · Internship", link: "Company profile" },
        { year: "2022", date: "Jul - Oct", company: "Poppy", role: "Product Management and Operation Intern · Internship", link: "Company profile" },
        { year: "2021", date: "May - Nov", company: "DiDi", role: "Product Manager Intern (Discount Express Team) · Internship", link: "Company profile" },
        { year: "2018 - 2020", date: "May - Dec", company: "Intellioice International Education", role: "Co-Founder · High school entrepreneurship", link: "Company profile" },
      ],
    },
    ucl: {
      chapter: "05 — UCL / London",
      kicker: "UCL SOM Official Social Media Project",
      heading: "Content, community, and editorial judgment.",
      body: "A separate creative thread in the portfolio, connected to audience-building, content planning, and the discipline of making information feel considered.",
      button: "YouTube",
    },
    photography: {
      kicker: "Fujifilm Photographer",
      heading: "Urban light and coastal silence.",
      body: "Fujifilm frames of city streets, coastlines, and quiet travel details.",
      meta: ["18 selected frames", "Fujifilm / Cities / Travel"],
      filters: ["All", "Cities", "Coast", "Details"],
      filterLabel: "Filter photographs",
      status: (count) => count === 18 ? "Showing all 18 photographs" : `Showing ${count} photographs`,
      lightbox: { close: "Close", closeLabel: "Close photograph", previous: "Previous", previousLabel: "Previous photograph", next: "Next", nextLabel: "Next photograph", open: "Open photograph" },
    },
    contact: {
      kicker: "Get in touch",
      heading: "Open to product, brand, and operations conversations.",
      links: {
        linkedin: "LinkedIn",
        instagram: "Instagram",
        wechat: "WeChat",
      },
      primaryDetails: ["js6363@columbia.edu", "Professional profile", "Scan to connect"],
      secondaryLabel: "More contact details",
      phoneLabels: { "hong-kong": "Hong Kong", mainland: "Mainland China" },
      wechat: {
        title: "WeChat",
        copy: "Scan the QR code to add me on WeChat.",
        image: "assets/wechat_en.jpg",
        alt: "WeChat QR code",
        close: "Close WeChat QR code",
        closeButton: "Close",
      },
    },
    footer: {
      copyright: '© 2026 Jingshan "William" Shi',
      top: "Back to top",
    },
  },
  zh: {
    meta: {
      title: '石京山 "William"',
      description:
        "石京山 William 的个人网站：展示产品管理、运营、品牌管理、设计、数据分析与摄影项目。",
    },
    wordmark: ["石京山", "William"],
    labels: {
      home: "石京山 William 首页",
      portrait: "石京山 William 职业照",
      portraitAlt: "石京山 William 职业照",
    },
    nav: ["简介", "教育", "经历", "项目", "UCL", "摄影", "联系"],
    hero: {
      eyebrow: "产品管理 / 运营 / 品牌策略",
      title: '石京山<br><span>"William"</span>',
      lede:
        "哥伦比亚大学管理科学与工程硕士、UCL 校友，持续探索电信、产品、品牌、运营、数据分析与国际业务。",
      actions: ["查看经历", "下载简历"],
      note: "正在寻找产品经理？继续向下浏览作品集。",
    },
    intro: {
      kicker: "简介",
      quote: "求知若饥，虚心若愚。",
      credit: "史蒂夫·乔布斯",
      paragraphs: [
        '我是石京山 "William"，哥伦比亚大学管理科学与工程硕士、UCL 校友，工作方向横跨产品、运营、品牌、数据分析与电信业务发展。我关注用户需求、商业落地与跨境增长之间的连接。',
        "自 2025 年 8 月起，我在中国移动国际担任管培生，接触 GSD 数据卡产品、海外 MVNO 业务，以及支持中资企业出海的相关项目。此前在 Authentic Brands Group、Poppy 与滴滴的经历，为我建立了亚太品牌管理、产品运营、用户体验与数据驱动决策的基础。",
      ],
      highlights: [
        {
          title: "多元经验",
          body: "在 Poppy 推动用户参与度提升 20%，并参与优化滴滴超过 600 万用户的产品体验。",
        },
        {
          title: "电信与全球业务",
          body: "持续积累 GSD 数据卡、海外 MVNO 运营与中资企业全球化项目相关经验。",
        },
        {
          title: "品牌管理",
          body: "在 Authentic Brands Group 制定品牌保护策略，并优化特许权使用费报告流程。",
        },
        {
          title: "创新与领导力",
          body: "本科期间主导 AI 推荐应用项目，并联合创办 Intellioice International Education。",
        },
      ],
    },
    education: {
      kicker: "教育经历",
      heading: "横跨伦敦与纽约的学术训练。",
      items: [
        {
          year: "2023",
          date: "2023年8月 - 2025年2月",
          location: "美国纽约",
          school: "哥伦比亚大学",
          degree: "管理科学与工程硕士",
        },
        {
          year: "2020",
          date: "2020年9月 - 2023年6月",
          location: "英国伦敦",
          school: "伦敦大学学院",
          degree: "商务信息管理本科",
        },
      ],
    },
    projects: {
      kicker: "项目",
      heading: "精选作品：产品、设计与数据分析。",
      groups: ["精选案例", "项目档案"],
      items: {
        "decision-making": {
          type: "应用原型",
          title: "决策应用原型",
          body: "本科期间主导一款 AI 推荐应用，通过个性化推荐简化餐厅与电影选择。",
          links: { "decision-prototype": "查看原型", "decision-report": "查看报告" },
        },
        "lyft-ar": {
          type: "AR 产品概念",
          title: "Lyft AR 接驾原型",
          body: "通过 AR 视觉提示，帮助乘客与司机更准确地识别彼此位置。",
          links: { "lyft-ad-video": "查看广告视频" },
        },
        "lyft-journey": {
          type: "用户旅程地图",
          title: "Lyft 用户旅程地图",
          body: "完整梳理 Lyft 用户体验流程，用于识别体验优化机会。",
          links: { "lyft-journey-map": "查看旅程地图" },
        },
        "job-search": {
          type: "平台原型",
          title: "求职应用原型",
          body: "面向英国学生的求职平台，帮助他们发现科技与商业初创企业机会。",
          links: { "job-search-prototype": "查看原型" },
        },
        domie: {
          type: "空间产品 + CAD",
          title: "Domie：纽约屋顶再利用",
          body: "一套可按天气快速展开或收起的折叠式屋顶圆顶系统，将纽约屋顶使用延伸至全年，并通过 CAD 原型展示极端天气下的运行方式。",
          links: { "domie-design-video": "查看设计视频", "domie-concept-file": "查看概念文件", "domie-cad-video": "查看 CAD 原型" },
        },
        "ideal-bag": {
          type: "产品设计",
          title: "理想包袋设计",
          body: "基于用户分析，将功能需求与情感连接转化为包袋设计方案。",
          links: { "bag-design-slides": "查看设计幻灯片", "bag-redesign-slides": "查看重新设计" },
        },
        "domie-cad": {
          type: "CAD 原型",
          title: "Domie CAD 原型",
          body: "展示 Domie 如何在极端天气条件下运行的原型方案。",
          links: { "domie-cad-video": "查看 CAD 原型" },
        },
        "nyc-apartment": {
          type: "城市数据",
          title: "纽约公寓搜索",
          body: "结合纽约公寓数据、311 投诉与城市绿化数据，为更理性的租房决策提供支持，并在 GitHub 提供项目代码。",
          links: { "nyc-github": "查看项目代码" },
        },
      },
    },
    experience: {
      kicker: "工作经历",
      heading: "产品判断力在电信、品牌、平台、出行与早期创业中持续形成。",
      lensLabel: "经历构成",
      lens: [
        { value: "20%", title: "参与度提升", body: "Poppy · 产品运营" },
        { value: "6M+", title: "用户覆盖", body: "滴滴 · 出行产品" },
        { value: "GSD · MVNO", title: "电信业务范围", body: "CMI · 全球业务经验" },
      ],
      items: [
        { year: "2025", date: "8月 - 至今", company: "中国移动国际", role: "管培生 · 全职工作", link: "查看轮岗详情" },
        { year: "2024", date: "6月 - 8月", company: "Authentic Brands Group", role: "品牌管理实习生（亚太团队）· 实习", link: "公司简介" },
        { year: "2022", date: "7月 - 10月", company: "Poppy", role: "产品管理及运营实习生 · 实习", link: "公司简介" },
        { year: "2021", date: "5月 - 11月", company: "滴滴", role: "产品经理实习生（特惠快车团队）· 实习", link: "公司简介" },
        { year: "2018 - 2020", date: "5月 - 12月", company: "Intellioice International Education", role: "联合创始人 · 高中创业", link: "公司简介" },
      ],
    },
    ucl: {
      chapter: "05 — UCL / 伦敦",
      kicker: "UCL 管理学院官方社交媒体项目",
      heading: "内容、社区与编辑判断。",
      body: "作品集中另一条创意线索，连接受众增长、内容规划，以及让信息表达更克制、更清晰的能力。",
      button: "查看项目视频",
    },
    photography: {
      kicker: "富士摄影",
      heading: "城市光线与海岸静默。",
      body: "Fujifilm 镜头下的城市、海岸与旅途细节。",
      meta: ["18 张精选作品", "Fujifilm / 城市 / 旅行"],
      filters: ["全部", "城市", "海岸", "细节"],
      filterLabel: "筛选摄影作品",
      status: (count) => count === 18 ? "正在显示全部 18 张作品" : `正在显示 ${count} 张作品`,
      lightbox: { close: "关闭", closeLabel: "关闭照片", previous: "上一张", previousLabel: "查看上一张照片", next: "下一张", nextLabel: "查看下一张照片", open: "打开照片" },
    },
    contact: {
      kicker: "联系",
      heading: "欢迎就产品、品牌与运营机会交流。",
      links: {
        linkedin: "领英",
        instagram: "Instagram",
        wechat: "微信",
      },
      primaryDetails: ["js6363@columbia.edu", "查看职业主页", "扫码添加微信"],
      secondaryLabel: "更多联系方式",
      phoneLabels: { "hong-kong": "香港", mainland: "中国内地" },
      wechat: {
        title: "微信",
        copy: "扫描二维码添加我的微信。",
        image: "assets/wechat.jpg",
        alt: "微信二维码",
        close: "关闭微信二维码",
        closeButton: "关闭",
      },
    },
    footer: {
      copyright: '© 2026 石京山 "William"',
      top: "回到顶部",
    },
  },
};

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const setHtml = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
};

const setMetaContent = (title, description) => {
  const meta = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.setAttribute("content", title);
  if (meta) meta.setAttribute("content", description);
  if (ogDescription) ogDescription.setAttribute("content", description);
};

const applyLinks = (language) => {
  const linkSet = links[language] || links.en;
  document.querySelectorAll("[data-link-key]").forEach((link) => {
    const url = linkSet[link.dataset.linkKey];
    if (url) link.setAttribute("href", url);
  });
};

const applyLanguage = (language) => {
  const lang = language === "zh" ? "zh" : "en";
  const content = copy[lang];

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.body.dataset.lang = lang;
  document.title = content.meta.title;
  setMetaContent(content.meta.title, content.meta.description);
  applyLinks(lang);

  const wordmark = document.querySelector(".wordmark");
  if (wordmark) {
    wordmark.setAttribute("aria-label", content.labels.home);
    wordmark.querySelectorAll("span").forEach((span, index) => {
      span.textContent = content.wordmark[index];
    });
  }

  const languageSwitch = document.querySelector(".language-switch");
  if (languageSwitch) languageSwitch.setAttribute("aria-label", lang === "zh" ? "语言" : "Language");
  const headerContact = document.querySelector(".header-contact");
  if (headerContact) headerContact.setAttribute("aria-label", lang === "zh" ? "快捷联系方式" : "Quick contact");

  navLinks.forEach((link, index) => {
    link.textContent = content.nav[index];
  });

  setText(".hero .eyebrow", content.hero.eyebrow);
  setHtml(".hero h1", content.hero.title);
  setText(".hero-lede", content.hero.lede);
  document.querySelectorAll(".hero-actions a").forEach((link, index) => {
    link.textContent = content.hero.actions[index];
  });
  setText(".hero-note", content.hero.note);
  setText(".photo-prologue-bridge", lang === "zh" ? "从观察到系统——让摄影、产品与运营共享同一种视觉语言。" : "From observation to systems — one visual language across photographs, products, and operations.");

  setText(".intro > .section-kicker", content.intro.kicker);
  setText(".intro h2", content.intro.quote);
  setText(".quote-credit", content.intro.credit);
  document.querySelectorAll(".intro-copy p").forEach((paragraph, index) => {
    paragraph.textContent = content.intro.paragraphs[index];
  });
  document.querySelectorAll(".highlight").forEach((highlight, index) => {
    const item = content.intro.highlights[index];
    if (!item) return;
    highlight.querySelector("h3").textContent = item.title;
    highlight.querySelector("p").textContent = item.body;
  });

  setText(".education-section .section-kicker", content.education.kicker);
  setText(".education-section .section-heading h2", content.education.heading);
  document.querySelectorAll(".education-item").forEach((item, index) => {
    const education = content.education.items[index];
    if (!education) return;
    const time = item.querySelector("time");
    if (time && time.firstChild) time.firstChild.nodeValue = education.year;
    item.querySelector("time span").textContent = education.date;
    item.querySelector(".education-location").textContent = education.location;
    item.querySelector("h3").textContent = education.school;
    item.querySelector("div > p:last-child").textContent = education.degree;
  });

  setText(".projects-section .section-kicker", content.projects.kicker);
  setText(".projects-section .section-heading h2", content.projects.heading);
  document.querySelectorAll("#projects .group-title").forEach((title, index) => {
    title.textContent = content.projects.groups[index];
  });
  document.querySelectorAll("#projects [data-project-key]").forEach((project) => {
    const item = content.projects.items[project.dataset.projectKey];
    if (!item) return;
    const projectType = project.querySelector(".project-type");
    const projectTitle = project.querySelector("h3");
    if (projectType) projectType.textContent = item.type;
    if (projectTitle) projectTitle.textContent = item.title;
    const body = project.querySelector(".project-copy > p:not(.project-type), :scope > div > p:not(.project-type)");
    if (body) body.textContent = item.body;
    project.querySelectorAll("a[data-link-key]").forEach((link) => {
      const label = item.links[link.dataset.linkKey];
      if (label) link.textContent = label;
    });
  });

  setText(".experience-section .section-kicker", content.experience.kicker);
  setText(".experience-section .section-heading h2", content.experience.heading);
  document.querySelector(".experience-lens")?.setAttribute("aria-label", content.experience.lensLabel);
  document.querySelectorAll(".experience-lens article").forEach((item, index) => {
    const lens = content.experience.lens[index];
    if (!lens) return;
    item.querySelector("span").textContent = lens.value;
    item.querySelector("strong").textContent = lens.title;
    item.querySelector("small").textContent = lens.body;
  });
  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    const experience = content.experience.items[index];
    if (!experience) return;
    const time = item.querySelector("time");
    if (time && time.firstChild) time.firstChild.nodeValue = experience.year;
    item.querySelector("time span").textContent = experience.date;
    item.querySelector("h3").textContent = experience.company;
    item.querySelector("p").textContent = experience.role;
    const link = item.querySelector("a");
    if (link) link.textContent = experience.link;
  });

  setText("#ucl .section-kicker", content.ucl.kicker);
  setText("#ucl .ucl-chapter-mark", content.ucl.chapter);
  setText("#ucl h2", content.ucl.heading);
  setText("#ucl .ucl-description", content.ucl.body);
  setText("#ucl .button", content.ucl.button);

  setText("#photography .section-kicker", content.photography.kicker);
  setText("#photography h2", content.photography.heading);
  setText("#photography .photo-description", content.photography.body);
  document.querySelectorAll("#photography .photo-meta span").forEach((item, index) => {
    item.textContent = content.photography.meta[index];
  });
  const photoFilters = document.querySelector(".photo-filters");
  if (photoFilters) photoFilters.setAttribute("aria-label", content.photography.filterLabel);
  document.querySelectorAll("[data-photo-filter]").forEach((button, index) => {
    button.textContent = content.photography.filters[index];
  });
  const visiblePhotos = document.querySelectorAll(".photo-item:not([hidden])").length;
  setText("[data-photo-status]", content.photography.status(visiblePhotos));
  document.querySelectorAll(".photo-open").forEach((button) => {
    const alt = button.querySelector("img")?.alt || "";
    button.setAttribute("aria-label", `${content.photography.lightbox.open}: ${alt}`);
  });
  const lightboxClose = document.querySelector("[data-lightbox-close]");
  const lightboxPrevious = document.querySelector("[data-lightbox-previous]");
  const lightboxNext = document.querySelector("[data-lightbox-next]");
  if (lightboxClose) {
    lightboxClose.textContent = content.photography.lightbox.close;
    lightboxClose.setAttribute("aria-label", content.photography.lightbox.closeLabel);
  }
  if (lightboxPrevious) {
    lightboxPrevious.textContent = content.photography.lightbox.previous;
    lightboxPrevious.setAttribute("aria-label", content.photography.lightbox.previousLabel);
  }
  if (lightboxNext) {
    lightboxNext.textContent = content.photography.lightbox.next;
    lightboxNext.setAttribute("aria-label", content.photography.lightbox.nextLabel);
  }

  setText("#contact .section-kicker", content.contact.kicker);
  setText("#contact h2", content.contact.heading);
  document.querySelectorAll("[data-contact-key]").forEach((element) => {
    const label = content.contact.links[element.dataset.contactKey];
    if (label) element.textContent = label;
  });
  document.querySelectorAll(".contact-primary strong").forEach((element, index) => {
    element.textContent = content.contact.primaryDetails[index];
  });
  setText("[data-contact-secondary-label]", content.contact.secondaryLabel);
  document.querySelectorAll("[data-phone-label]").forEach((element) => {
    element.textContent = content.contact.phoneLabels[element.dataset.phoneLabel];
  });

  const wechatImage = document.querySelector("[data-wechat-image]");
  const wechatTitle = document.querySelector("#wechat-title");
  const wechatCopy = document.querySelector("[data-wechat-copy]");
  const wechatClose = document.querySelector(".wechat-close");
  if (wechatImage) {
    wechatImage.src = content.contact.wechat.image;
    wechatImage.alt = content.contact.wechat.alt;
  }
  if (wechatTitle) wechatTitle.textContent = content.contact.wechat.title;
  if (wechatCopy) wechatCopy.textContent = content.contact.wechat.copy;
  if (wechatClose) {
    wechatClose.textContent = content.contact.wechat.closeButton;
    wechatClose.setAttribute("aria-label", content.contact.wechat.close);
  }

  setText(".site-footer p", content.footer.copyright);
  setText(".site-footer a", content.footer.top);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langToggle === lang;
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    window.localStorage.setItem("preferred-language", lang);
  } catch {
    // Local storage can be unavailable in private browsing contexts.
  }
};

const getPreferredLanguage = () => {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "zh" || queryLanguage === "en") return queryLanguage;

  try {
    const stored = window.localStorage.getItem("preferred-language");
    if (stored === "zh" || stored === "en") return stored;
  } catch {
    // Ignore storage access failures.
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langToggle));
});

applyLanguage(getPreferredLanguage());

const wechatModal = document.querySelector("[data-wechat-modal]");
const wechatPanel = document.querySelector(".wechat-panel");
const wechatOpenButtons = Array.from(document.querySelectorAll("[data-wechat-open]"));
const wechatCloseButtons = Array.from(document.querySelectorAll("[data-wechat-close]"));
let activeWechatTrigger = null;

const openWechatModal = (trigger) => {
  if (!wechatModal) return;
  activeWechatTrigger = trigger;
  wechatModal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    wechatModal.classList.add("is-open");
    wechatPanel?.focus();
  });
};

const closeWechatModal = () => {
  if (!wechatModal) return;
  wechatModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  window.setTimeout(() => {
    wechatModal.hidden = true;
    activeWechatTrigger?.focus();
  }, 180);
};

wechatOpenButtons.forEach((button) => {
  button.addEventListener("click", () => openWechatModal(button));
});

wechatCloseButtons.forEach((button) => {
  button.addEventListener("click", closeWechatModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && wechatModal && !wechatModal.hidden) {
    closeWechatModal();
  }
});

document.querySelectorAll('.highlights, .education-grid, .project-archive-list').forEach((group) => {
  group.querySelectorAll('.reveal').forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 65}ms`);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const updateActiveNav = () => {
  const offset = window.innerHeight * 0.35;
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top <= offset ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    link.classList.toggle(
      "is-active",
      Boolean(current) && link.getAttribute("href") === `#${current.id}`
    );
  });
};

updateActiveNav();
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
