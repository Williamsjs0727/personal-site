const header = document.querySelector("[data-header]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const languageButtons = Array.from(document.querySelectorAll("[data-lang-toggle]"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const links = {
  en: {
    cv: "http://drive.google.com/file/d/1mGLtWM1eYTXxHXKDGP8l3LyrxBBRxj_r/view?usp=sharing",
    "decision-prototype": "https://js.design/f/KM63Du?p=YE90lv-dKO",
    "decision-report": "https://drive.google.com/file/d/13JvHc2L1JbwjWKGa_m_7OHvv1nM-cMQg/view",
    "lyft-ad-video": "http://youtu.be/08Axhp8f7EI",
    "lyft-journey-map": "https://www.canva.com/design/DAFvXjdhEIA/bAh9f8T-dHQv7OnIJyS4Yw/edit",
    "job-search-prototype": "https://modao.cc/app/Hxh6IPpr7ycgmLNkCPrV5#screen=sl04y25ll64kaxm",
    "domie-design-video": "http://youtu.be/VNLKsv6CtYw",
    "domie-concept-file": "http://drive.google.com/file/d/17MsGqdXW5mxqgbwuuo-goXDBD6uM9VZS/view?usp=sharing",
    "bag-design-slides": "http://drive.google.com/file/d/1Saa_u7VQsaYw5zP0g3mKeni31NZ5G4_Z/view?usp=sharing",
    "bag-redesign-slides": "http://drive.google.com/file/d/1LJMdZwtt1IKzxzYCn52uuAWbZQTI84Nr/view?usp=sharing",
    "domie-cad-video": "http://youtu.be/rFOj1OjNtnU",
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
      title: 'Jingshan<br><span>"William"</span> Shi',
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
      groups: ["Product Management", "Design", "Data Analytics"],
      items: [
        {
          type: "App Prototype",
          title: "Decision Making App Prototype",
          body: "An inventive app that streamlines decision-making for customized dining and cinematic recommendations.",
          links: ["View prototype", "View report"],
        },
        {
          type: "AR Product Concept",
          title: "Lyft AR Pickup Prototype",
          body: "AR visual cues help passengers and drivers accurately identify each other's location.",
          links: ["View advertising video"],
        },
        {
          type: "Journey Mapping",
          title: "Lyft Customer Journey Map",
          body: "A full user-experience map used to identify improvements across the Lyft journey.",
          links: ["View customer journey map"],
        },
        {
          type: "Marketplace Prototype",
          title: "Job-Search App Prototype",
          body: "A job-search platform for UK students to find opportunities at tech and business startups.",
          links: ["View prototype"],
        },
        {
          type: "Spatial Product",
          title: "Domie: Repurposing NYC Rooftops",
          body: "Foldable rooftop igloos that adapt to weather on demand and extend rooftop use to all four seasons.",
          links: ["View design video", "View concept development file"],
        },
        {
          type: "Product Design",
          title: "An Ideal Bag",
          body: "Customer analysis translated into functional and emotional design requirements for an ideal bag.",
          links: ["View design slides", "View re-design slides"],
        },
        {
          type: "CAD Prototype",
          title: "Domie CAD Prototype",
          body: "A prototype showing how Domie can operate under extreme weather conditions.",
          links: ["View prototype video"],
        },
        {
          type: "Urban Data",
          title: "NYC Apartment Search",
          body: "A data-driven analysis of NYC apartment data, 311 complaints, and urban forestry data to support better apartment rental decisions.",
          links: ["View project code on GitHub"],
        },
      ],
    },
    experience: {
      kicker: "Professional Experiences",
      heading:
        "Product sense shaped through telecom, brand, marketplace, mobility, and early venture work.",
      items: [
        { year: "2025", date: "Aug - Present", company: "China Mobile International", role: "Graduate Trainee · Full-time job", link: "View rotation details" },
        { year: "2024", date: "Jun - Aug", company: "Authentic Brands Group", role: "Brand Management Intern (APAC Team) · Internship", link: "Company profile" },
        { year: "2022", date: "Jul - Oct", company: "Poppy", role: "Product Management and Operation Intern · Internship", link: "Company profile" },
        { year: "2021", date: "May - Nov", company: "DiDi", role: "Product Manager Intern (Discount Express Team) · Internship", link: "Company profile" },
        { year: "2018 - 2020", date: "May - Dec", company: "Intellioice International Education", role: "Co-Founder · High school entrepreneurship", link: "Company profile" },
      ],
    },
    ucl: {
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
    },
    contact: {
      kicker: "Get in touch",
      heading: "Open to product, brand, and operations conversations.",
      links: {
        linkedin: "LinkedIn",
        instagram: "Instagram",
        wechat: "WeChat",
      },
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
      groups: ["产品管理", "设计", "数据分析"],
      items: [
        {
          type: "应用原型",
          title: "决策应用原型",
          body: "一款帮助用户在餐厅与电影选择中做出个性化决策的创新应用。",
          links: ["查看原型", "查看报告"],
        },
        {
          type: "AR 产品概念",
          title: "Lyft AR 接驾原型",
          body: "通过 AR 视觉提示，帮助乘客与司机更准确地识别彼此位置。",
          links: ["查看广告视频"],
        },
        {
          type: "用户旅程地图",
          title: "Lyft 用户旅程地图",
          body: "完整梳理 Lyft 用户体验流程，用于识别体验优化机会。",
          links: ["查看用户旅程地图"],
        },
        {
          type: "平台原型",
          title: "求职应用原型",
          body: "面向英国学生的求职平台，帮助他们发现科技与商业初创企业机会。",
          links: ["查看原型"],
        },
        {
          type: "空间产品",
          title: "Domie：纽约屋顶再利用",
          body: "可折叠屋顶圆顶小屋，能根据天气快速展开或收起，将屋顶使用从单一季节扩展到全年。",
          links: ["查看设计视频", "查看概念开发文件"],
        },
        {
          type: "产品设计",
          title: "理想包袋设计",
          body: "基于用户分析，将功能需求与情感连接转化为包袋设计方案。",
          links: ["查看设计幻灯片", "查看重新设计幻灯片"],
        },
        {
          type: "CAD 原型",
          title: "Domie CAD 原型",
          body: "展示 Domie 如何在极端天气条件下运行的原型方案。",
          links: ["查看原型视频"],
        },
        {
          type: "城市数据",
          title: "纽约公寓搜索",
          body: "基于纽约公寓数据、311 投诉与城市绿化数据的分析，支持更理性的租房决策。",
          links: ["在 GitHub 查看项目代码"],
        },
      ],
    },
    experience: {
      kicker: "工作经历",
      heading: "产品判断力在电信、品牌、平台、出行与早期创业中持续形成。",
      items: [
        { year: "2025", date: "8月 - 至今", company: "中国移动国际", role: "管培生 · 全职工作", link: "查看轮岗详情" },
        { year: "2024", date: "6月 - 8月", company: "Authentic Brands Group", role: "品牌管理实习生（亚太团队）· 实习", link: "公司简介" },
        { year: "2022", date: "7月 - 10月", company: "Poppy", role: "产品管理及运营实习生 · 实习", link: "公司简介" },
        { year: "2021", date: "5月 - 11月", company: "滴滴", role: "产品经理实习生（特惠快车团队）· 实习", link: "公司简介" },
        { year: "2018 - 2020", date: "5月 - 12月", company: "Intellioice International Education", role: "联合创始人 · 高中创业", link: "公司简介" },
      ],
    },
    ucl: {
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
    },
    contact: {
      kicker: "联系",
      heading: "欢迎就产品、品牌与运营机会交流。",
      links: {
        linkedin: "领英",
        instagram: "Instagram",
        wechat: "微信",
      },
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

  const heroMedia = document.querySelector(".hero-media");
  const heroImage = document.querySelector(".hero-media img");
  if (heroMedia) heroMedia.setAttribute("aria-label", content.labels.portrait);
  if (heroImage) heroImage.setAttribute("alt", content.labels.portraitAlt);

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
  document.querySelectorAll(".group-title").forEach((title, index) => {
    title.textContent = content.projects.groups[index];
  });
  document.querySelectorAll("#projects .project").forEach((project, index) => {
    const item = content.projects.items[index];
    if (!item) return;
    project.querySelector(".project-type").textContent = item.type;
    project.querySelector("h3").textContent = item.title;
    project.querySelector(".project-copy > p:not(.project-type)").textContent = item.body;
    project.querySelectorAll(".project-copy a").forEach((link, linkIndex) => {
      link.textContent = item.links[linkIndex];
    });
  });

  setText(".experience-section .section-kicker", content.experience.kicker);
  setText(".experience-section .section-heading h2", content.experience.heading);
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
  setText("#ucl h2", content.ucl.heading);
  setText("#ucl .split-copy p", content.ucl.body);
  setText("#ucl .button", content.ucl.button);

  setText("#photography .section-kicker", content.photography.kicker);
  setText("#photography h2", content.photography.heading);
  setText("#photography .photo-heading p", content.photography.body);
  document.querySelectorAll("#photography .photo-meta span").forEach((item, index) => {
    item.textContent = content.photography.meta[index];
  });

  setText("#contact .section-kicker", content.contact.kicker);
  setText("#contact h2", content.contact.heading);
  document.querySelectorAll("[data-contact-key]").forEach((element) => {
    const label = content.contact.links[element.dataset.contactKey];
    if (label) element.textContent = label;
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

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${visible.target.id}`
      );
    });
  },
  { rootMargin: "-20% 0px -60% 0px", threshold: [0.08, 0.2, 0.4] }
);

sections.forEach((section) => navObserver.observe(section));
