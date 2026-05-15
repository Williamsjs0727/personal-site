const header = document.querySelector("[data-header]");
const languageButtons = Array.from(document.querySelectorAll("[data-lang-toggle]"));
const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const copy = {
  en: {
    meta: {
      title: "China Mobile International | Jingshan William Shi",
      description:
        "China Mobile International graduate trainee rotations by Jingshan William Shi, covering Jego Trip UX, communications SMS products, MVNO iteration, and enterprise business operations.",
    },
    wordmark: ["Jingshan", "William Shi"],
    labels: {
      home: "Jingshan William Shi home",
      nav: "Experience page navigation",
      quickLinks: "Experience page quick links",
      language: "Language",
      rotationTimeline: "CMI rotation timeline",
      learningFlow: "CMI rotation learning flow",
    },
    nav: ["Overview", "Rotations", "Integration", "Logic"],
    links: {
      mainSite: "Main site",
      company: "CMI website",
    },
    hero: {
      eyebrow: "China Mobile International",
      title: "Graduate Trainee<br><span>Rotation Portfolio</span>",
      lede:
        "A structured rotation across customer-facing travel products, communications SMS products, overseas MVNO iteration, and enterprise business operations.",
      primaryAction: "View rotations",
      secondaryAction: "Back to experience",
    },
    signal: [
      { title: "International Jego Trip", body: "Jego Trip Operations Center" },
      { title: "SMS Product", body: "Carrier Business Department" },
      { title: "MVNO", body: "Mobile Business Department" },
      { title: "BO+IDC+ICT", body: "Enterprise Business Department" },
    ],
    summary: {
      kicker: "Role Summary",
      heading: "Aug 2025 - Present, Graduate Trainee.",
      cards: [
        {
          label: "Role",
          title: "Graduate Trainee",
          body: "Built exposure from Jego Trip and SMS products to MVNO products and enterprise business operations.",
        },
        {
          label: "Company",
          title: "China Mobile International",
          body: "Worked inside a cross-border telecom environment connecting consumer products and enterprise needs.",
        },
        {
          label: "Focus",
          title: "From UX to operations",
          body: "Moved from overseas user journeys into product logic, feature iteration, and business coordination.",
        },
      ],
    },
    rotationsKicker: "Rotation Timeline",
    rotationsHeading: "Four operating contexts, one product-minded path.",
    rotations: [
      {
        time: "2025 Aug - Oct",
        team: "Jego Trip Platform",
        title: "International Jego Trip user experience optimization",
        body:
          "Rotated through the Jego Trip platform, focusing on user experience optimization for the international version of Jego Trip.",
      },
      {
        time: "2025 Nov - Dec",
        team: "Carrier Department Product Team",
        title: "SMS product logic and platform flow",
        body:
          "Learned SMS products, including business logic, platform workflow, platform optimization, and emerging business development.",
      },
      {
        time: "2025 Dec - 2026 Jan",
        team: "Mobile Department MVNO Team",
        title: "Malaysia MVNO SIM product iteration",
        body:
          "Collected, updated, and optimized functional iteration points for Malaysia MVNO SIM card products.",
      },
      {
        time: "2026 Feb - May",
        team: "Enterprise Business Development Operations Center",
        title: "Policy learning, coordination, and conference operations",
        body:
          "Studied dual-plan dual-assessment business policy and province-specialized company coordination, maintained and updated the 331 Chinese enterprises overseas conference attendee list, and rewrote and organized enterprise department good-news statistics.",
      },
    ],
    integration: {
      kicker: "Integrated Learning",
      heading: "A rotation arc from product detail to business execution.",
      flow: [
        "UX optimization",
        "Communications SMS products",
        "MVNO product iteration",
        "Enterprise business operations",
      ],
      body:
        "The CMI rotation connected concrete user experience work, communications SMS products, product iteration discipline, and cross-organization business operations.",
    },
    resources: {
      kicker: "Rotation Logic",
      heading: "A rotation logic across product operations and enterprise business.",
      summary:
        "From international Jego Trip UX to communications SMS products, MVNO iteration, and enterprise operations, the rotation connects user experience, product mechanisms, and business coordination into one working chain.",
      links: ["Visit CMI website", "Back to experience timeline", "Contact William"],
    },
    footer: {
      copyright: '© 2026 Jingshan "William" Shi',
      top: "Back to top",
    },
  },
  zh: {
    meta: {
      title: "中国移动国际 | 石京山 William",
      description:
        "石京山 William 在中国移动国际管培生轮岗经历：覆盖无忧行用户体验、通讯类短信产品、MVNO 产品迭代与企业业务运营。",
    },
    wordmark: ["石京山", "William"],
    labels: {
      home: "石京山 William 首页",
      nav: "经历详情页导航",
      quickLinks: "经历详情页快捷链接",
      language: "语言",
      rotationTimeline: "CMI 轮岗时间轴",
      learningFlow: "CMI 轮岗学习路径",
    },
    nav: ["概览", "轮岗", "串联", "逻辑"],
    links: {
      mainSite: "主站",
      company: "CMI 官网",
    },
    hero: {
      eyebrow: "中国移动国际",
      title: "管培生<br><span>轮岗经历</span>",
      lede:
        "一段横跨用户侧旅行产品、通讯类短信产品、海外 MVNO 迭代与企业业务运营的结构化轮岗经历。",
      primaryAction: "查看轮岗",
      secondaryAction: "返回经历",
    },
    signal: [
      { title: "国际版无忧行", body: "无忧行运营中心" },
      { title: "短信产品", body: "运营商业务部" },
      { title: "MVNO", body: "移动业务部" },
      { title: "BO+IDC+ICT", body: "企业业务部" },
    ],
    summary: {
      kicker: "角色概览",
      heading: "2025 年 8 月至今，管培生。",
      cards: [
        {
          label: "角色",
          title: "管培生",
          body: "从无忧行、SMS 产品、MVNO 产品，到企业业务运营。",
        },
        {
          label: "公司",
          title: "中国移动国际",
          body: "在跨境电信业务环境中理解消费侧产品与企业侧需求之间的连接。",
        },
        {
          label: "重点",
          title: "从体验到运营",
          body: "从海外用户旅程进入产品逻辑、功能迭代与业务协同。",
        },
      ],
    },
    rotationsKicker: "轮岗时间轴",
    rotationsHeading: "四个业务场景，一条产品化理解路径。",
    rotations: [
      {
        time: "2025 年 8 月 - 10 月",
        team: "无忧行（Jego Trip）平台",
        title: "国际版无忧行用户体验优化",
        body:
          "在无忧行（Jego Trip）平台轮岗，聚焦国际版无忧行的用户体验优化。",
      },
      {
        time: "2025 年 11 月 - 12 月",
        team: "运营商部产品团队",
        title: "短信类产品业务逻辑与平台流程",
        body:
          "轮岗学习短信类产品，包含其业务逻辑、平台流程、平台优化与新兴业务发展。",
      },
      {
        time: "2025 年 12 月 - 2026 年 1 月",
        team: "移动部 MVNO 团队",
        title: "马来西亚 MVNO 电话卡产品功能迭代",
        body:
          "主要收集、更新并优化马来西亚 MVNO 电话卡的产品功能迭代。",
      },
      {
        time: "2026 年 2 月 - 5 月",
        team: "企业部业务发展运营中心",
        title: "政策学习、协同与大会运营支持",
        body:
          "轮岗期间主要学习双计双考业务政策与省专公司协同，维护更新 331 中资出海大会人员名单，并完成企业部喜报统计改写整理。",
      },
    ],
    integration: {
      kicker: "能力串联",
      heading: "从产品细节到业务执行的轮岗路径。",
      flow: ["用户体验优化", "通讯类短信产品", "MVNO 产品迭代", "企业业务运营"],
      body:
        "CMI 轮岗把具体的用户体验工作、通讯类短信产品、产品功能迭代纪律与跨组织业务运营串联起来。",
    },
    resources: {
      kicker: "轮岗逻辑",
      heading: "一段跨产品运营与企业业务的轮岗逻辑。",
      summary:
        "从国际版无忧行的用户体验优化，到通讯类短信产品、MVNO 产品迭代与企业业务运营，这段轮岗把用户体验、产品机制与业务协同放在同一条工作链路中理解。",
      links: ["访问 CMI 官网", "返回经历时间轴", "联系 William"],
    },
    footer: {
      copyright: "© 2026 石京山 William",
      top: "回到顶部",
    },
  },
};

const getContent = (content, path) =>
  path.split(".").reduce((value, key) => (value == null ? value : value[key]), content);

const setMetaContent = (title, description) => {
  const meta = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  document.title = title;
  if (meta) meta.setAttribute("content", description);
  if (ogTitle) ogTitle.setAttribute("content", title);
  if (ogDescription) ogDescription.setAttribute("content", description);
};

const applyLanguage = (language) => {
  const lang = language === "zh" ? "zh" : "en";
  const content = copy[lang];

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.body.dataset.lang = lang;
  setMetaContent(content.meta.title, content.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getContent(content, element.dataset.i18n);
    if (value != null) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getContent(content, element.dataset.i18nHtml);
    if (value != null) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = getContent(content, element.dataset.i18nAria);
    if (value != null) element.setAttribute("aria-label", value);
  });

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

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langToggle));
});

applyLanguage(getPreferredLanguage());

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
