(() => {
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(pointer: fine)");
const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
const cinematicScenes = Array.from(document.querySelectorAll("[data-cinematic-scene]"));
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const heroStage = document.querySelector("[data-depth-stage]");
const prologueStage = document.querySelector("[data-prologue-stage]");
const observationScene = document.querySelector('[data-cinematic-key="observation"]');
const immersiveStage = document.querySelector("[data-immersive-stage]");
const projectPortal = document.querySelector("[data-project-portal]");
const uclScene = document.querySelector('[data-spatial-scene="ucl"]');
const storyRail = document.querySelector("[data-story-rail]");
const storyProgress = document.querySelector("[data-story-progress]");
const storyLinks = Array.from(document.querySelectorAll("[data-story-link]"));
const storySections = Array.from(document.querySelectorAll("[data-story-section]"));
const mobileChapter = document.querySelector("[data-mobile-chapter]");
const experienceScene = document.querySelector('[data-cinematic-key="practice"]');
const experienceItems = Array.from(document.querySelectorAll("[data-cinematic-experience-item]"));
const projectsScene = document.querySelector('[data-cinematic-key="making"]');
const makingScene = document.querySelector('[data-cinematic-key="making"]');
const projectPortalStage = document.querySelector("[data-project-cinematic-stage]");
const projectPlanes = Array.from(document.querySelectorAll("[data-project-plane-index]"));
const seeingScene = document.querySelector('[data-cinematic-key="seeing"]');
const cinematicState = cinematicScenes.map((element) => ({
  element,
  key: element.dataset.cinematicKey,
  top: 0,
  height: 1,
  near: true,
}));
const projectPortalStageMetrics = { top: 0, height: 1 };

let activeStoryKey = storySections[0]?.dataset.storySection || "observe";
let activeCinematicKey = cinematicState[0]?.key || "arrival";
let scrollFrame = 0;
let measureFrame = 0;
let cinematicMode = "static";

const setDepth = (stage, event, maxTilt) => {
  if (cinematicMode === "static" || reducedMotionQuery.matches || !finePointerQuery.matches) return;
  const bounds = stage.getBoundingClientRect();
  const x = clamp((event.clientX - bounds.left) / bounds.width - 0.5, -0.5, 0.5);
  const y = clamp((event.clientY - bounds.top) / bounds.height - 0.5, -0.5, 0.5);
  stage.style.setProperty("--pointer-rx", `${(-y * maxTilt).toFixed(2)}deg`);
  stage.style.setProperty("--pointer-ry", `${(x * maxTilt).toFixed(2)}deg`);
  stage.style.setProperty("--rx", `${(-y * maxTilt).toFixed(2)}deg`);
  stage.style.setProperty("--ry", `${(x * maxTilt).toFixed(2)}deg`);
};

const resetDepth = (stage) => {
  if (!stage) return;
  stage.style.setProperty("--pointer-rx", "0deg");
  stage.style.setProperty("--pointer-ry", "0deg");
  stage.style.setProperty("--rx", "0deg");
  stage.style.setProperty("--ry", "0deg");
};

const attachDepth = (stage, maxTilt) => {
  stage.addEventListener("pointermove", (event) => setDepth(stage, event, maxTilt));
  stage.addEventListener("pointerleave", () => resetDepth(stage));
};

const attachSpatialScene = (stage, maxTilt) => {
  if (!stage) return;
  const move = (event) => {
    if (cinematicMode === "static" || reducedMotionQuery.matches || !finePointerQuery.matches) return;
    const bounds = stage.getBoundingClientRect();
    const x = clamp((event.clientX - bounds.left) / bounds.width - 0.5, -0.5, 0.5);
    const y = clamp((event.clientY - bounds.top) / bounds.height - 0.5, -0.5, 0.5);
    stage.style.setProperty("--pointer-rx", `${(-y * maxTilt).toFixed(2)}deg`);
    stage.style.setProperty("--pointer-ry", `${(x * maxTilt).toFixed(2)}deg`);
    stage.style.setProperty("--scene-rx", `${(-y * maxTilt).toFixed(2)}deg`);
    stage.style.setProperty("--scene-ry", `${(x * maxTilt).toFixed(2)}deg`);
    stage.style.setProperty("--scene-rx-inverse", `${(y * maxTilt * 0.52).toFixed(2)}deg`);
    stage.style.setProperty("--scene-ry-inverse", `${(-x * maxTilt * 0.52).toFixed(2)}deg`);
  };
  const reset = () => {
    stage.style.setProperty("--pointer-rx", "0deg");
    stage.style.setProperty("--pointer-ry", "0deg");
    stage.style.setProperty("--scene-rx", "0deg");
    stage.style.setProperty("--scene-ry", "0deg");
    stage.style.setProperty("--scene-rx-inverse", "0deg");
    stage.style.setProperty("--scene-ry-inverse", "0deg");
  };
  stage.addEventListener("pointermove", move);
  stage.addEventListener("pointerleave", reset);
};

if (heroStage) attachDepth(heroStage, 5);
if (prologueStage) attachDepth(prologueStage, 2);
attachSpatialScene(projectPortal, 2.6);
attachSpatialScene(uclScene, 2);

const setActiveStory = (key) => {
  if (!key || key === activeStoryKey && storyRail?.getAttribute("data-story-active") === key) return;
  activeStoryKey = key;
  storyRail?.setAttribute("data-story-active", key);
  storyLinks.forEach((link) => {
    const isCurrent = link.dataset.storyTarget === key;
    if (isCurrent) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
};

const updateMobileChapter = () => {
  if (!mobileChapter) return;
  const index = Math.max(0, cinematicState.findIndex((scene) => scene.key === activeCinematicKey));
  const scene = cinematicState[index];
  const isChinese = document.body.dataset.lang === "zh";
  const label = isChinese ? scene?.element.dataset.cinematicLabelZh : scene?.element.dataset.cinematicLabelEn;
  mobileChapter.textContent = `${String(index + 1).padStart(2, "0")} / ${label || activeCinematicKey}`;
};

const setActiveCinematicScene = (key) => {
  if (!key || key === activeCinematicKey && document.body.dataset.cinematicActive === key) return;
  activeCinematicKey = key;
  document.body.dataset.cinematicActive = key;
  updateMobileChapter();
};

const measureCinematicScenes = () => {
  measureFrame = 0;
  cinematicState.forEach((scene) => {
    const bounds = scene.element.getBoundingClientRect();
    scene.top = bounds.top + window.scrollY;
    scene.height = Math.max(1, scene.element.offsetHeight);
  });
  if (projectPortalStage) {
    const bounds = projectPortalStage.getBoundingClientRect();
    projectPortalStageMetrics.top = bounds.top + window.scrollY;
    projectPortalStageMetrics.height = Math.max(1, projectPortalStage.offsetHeight);
  }
};

const requestCinematicMeasure = () => {
  if (measureFrame) return;
  measureFrame = window.requestAnimationFrame(() => {
    measureCinematicScenes();
    requestPrologueShift();
  });
};

const setCinematicMode = () => {
  const nextMode = reducedMotionQuery.matches || coarsePointerQuery.matches || window.innerWidth < 768
    ? "static"
    : window.innerWidth < 1280 ? "compact" : "full";
  cinematicMode = nextMode;
  document.documentElement.setAttribute("data-cinematic-mode", nextMode);
  if (nextMode === "static") {
    [heroStage, prologueStage].forEach(resetDepth);
    [projectPortal, uclScene].forEach((scene) => {
      if (!scene) return;
      scene.style.setProperty("--pointer-rx", "0deg");
      scene.style.setProperty("--pointer-ry", "0deg");
      scene.style.setProperty("--scene-rx", "0deg");
      scene.style.setProperty("--scene-ry", "0deg");
      scene.style.setProperty("--scene-rx-inverse", "0deg");
      scene.style.setProperty("--scene-ry-inverse", "0deg");
      scene.style.setProperty("--scene-shift", "0px");
    });
  }
};

const updateCinematicScenes = () => {
  const viewportCenter = window.scrollY + window.innerHeight * 0.5;
  let closestScene = cinematicState[0];
  let closestDistance = Number.POSITIVE_INFINITY;

  cinematicState.forEach((scene) => {
    if (!scene.near && cinematicMode === "full") return;
    const progress = clamp((viewportCenter - scene.top) / scene.height);
    const enter = clamp(progress / 0.32);
    const exit = clamp((progress - 0.68) / 0.32);
    const travel = clamp((progress - 0.5) * 2, -1, 1);
    scene.element.style.setProperty("--scene-progress", progress.toFixed(4));
    scene.element.style.setProperty("--scene-enter", enter.toFixed(4));
    scene.element.style.setProperty("--scene-exit", exit.toFixed(4));
    scene.element.style.setProperty("--scene-travel", travel.toFixed(4));
    const distance = Math.abs(viewportCenter - (scene.top + scene.height * 0.5));
    if (distance < closestDistance) {
      closestDistance = distance;
      closestScene = scene;
    }
  });

  if (closestScene) setActiveCinematicScene(closestScene.key);
  if (experienceScene && experienceItems.length) {
    const progress = Number(experienceScene.style.getPropertyValue("--scene-progress")) || 0;
    const position = progress * (experienceItems.length - 1);
    let activeIndex = 0;
    let activeFocus = -1;
    experienceItems.forEach((item, index) => {
      const focus = clamp(1 - Math.abs(position - index));
      item.style.setProperty("--item-focus", focus.toFixed(4));
      if (focus > activeFocus) {
        activeFocus = focus;
        activeIndex = index;
      }
    });
    experienceScene.setAttribute("data-experience-active", String(activeIndex));
  }
  if (projectsScene && projectPlanes.length) {
    const projectTrack = Math.max(1, projectPortalStageMetrics.height - window.innerHeight * 0.72);
    const progress = projectPortalStage
      ? clamp((window.scrollY + window.innerHeight * 0.25 - projectPortalStageMetrics.top) / projectTrack)
      : Number(projectsScene.style.getPropertyValue("--scene-progress")) || 0;
    projectPortalStage?.style.setProperty("--portal-progress", progress.toFixed(4));
    const position = progress * (projectPlanes.length - 1);
    let activeIndex = 0;
    let activeFocus = -1;
    projectPlanes.forEach((plane, index) => {
      const focus = clamp(1 - Math.abs(position - index));
      plane.style.setProperty("--project-focus", focus.toFixed(4));
      if (focus > activeFocus) {
        activeFocus = focus;
        activeIndex = index;
      }
    });
    projectsScene.setAttribute("data-project-active", String(activeIndex));
  }
  if (prologueStage && cinematicMode !== "static") {
    const prologueProgress = Number(prologueStage.style.getPropertyValue("--scene-progress")) || 0;
    const shift = Math.min(18, Math.max(-18, (0.25 - prologueProgress) * 36));
    prologueStage.style.setProperty("--prologue-shift", `${shift.toFixed(2)}px`);
  }
  [projectPortal, uclScene].forEach((scene) => {
    if (!scene || cinematicMode === "static") return;
    const owner = scene.closest("[data-cinematic-scene]");
    const ownerProgress = Number(owner?.style.getPropertyValue("--scene-progress")) || 0;
    const sceneShift = Math.min(16, Math.max(-16, (0.5 - ownerProgress) * 28));
    scene.style.setProperty("--scene-shift", `${sceneShift.toFixed(2)}px`);
  });
};

const setCinematicSeamProgress = () => {
  const observationProgress = Number(observationScene?.style.getPropertyValue("--scene-progress")) || 0;
  const makingProgress = Number(makingScene?.style.getPropertyValue("--scene-progress")) || 0;
  const observationFormation = cinematicMode === "static"
    ? 1
    : clamp((observationProgress - 0.64) / 0.36);
  const makingCommunication = cinematicMode === "static"
    ? 1
    : clamp((makingProgress - 0.70) / 0.30);

  document.documentElement.style.setProperty("--seam-observation-formation", observationFormation.toFixed(4));
  document.documentElement.style.setProperty("--seam-making-communication", makingCommunication.toFixed(4));
};

const updateCinematicFrame = () => {
  scrollFrame = 0;
  const root = document.documentElement;
  const scrollable = Math.max(1, root.scrollHeight - window.innerHeight);
  const pageProgress = clamp(window.scrollY / scrollable);
  root.style.setProperty("--reading-progress", pageProgress.toFixed(4));
  if (storyProgress) storyProgress.style.height = `${(pageProgress * 100).toFixed(2)}%`;
  if (storySections.length) {
    const storyLine = window.scrollY + Math.min(window.innerHeight * 0.38, 340);
    const currentSection = storySections.reduce((current, section) => (
      section.offsetTop <= storyLine ? section : current
    ), storySections[0]);
    setActiveStory(currentSection.dataset.storySection);
  }
  if (immersiveStage) {
    const stageEnd = immersiveStage.offsetTop + immersiveStage.offsetHeight;
    document.body.classList.toggle("is-beyond-stage", window.scrollY > stageEnd - 120);
  }
  updateCinematicScenes();
  setCinematicSeamProgress();
  updateCinematicRibbon();
};

const requestPrologueShift = () => {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(updateCinematicFrame);
};

if ("IntersectionObserver" in window) {
  const cinematicObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const scene = cinematicState.find((candidate) => candidate.element === entry.target);
      if (scene) scene.near = entry.isIntersecting;
    });
    requestPrologueShift();
  }, { rootMargin: "100% 0px", threshold: 0 });
  cinematicScenes.forEach((scene) => cinematicObserver.observe(scene));
}

window.addEventListener("scroll", requestPrologueShift, { passive: true });
window.addEventListener("resize", () => {
  setCinematicMode();
  requestCinematicMeasure();
});
window.addEventListener("orientationchange", requestCinematicMeasure);
[reducedMotionQuery, finePointerQuery, coarsePointerQuery].forEach((query) => {
  query.addEventListener("change", () => {
    setCinematicMode();
    requestCinematicMeasure();
  });
});
cinematicScenes.forEach((scene) => {
  scene.querySelectorAll("img").forEach((image) => {
    if (!image.complete) image.addEventListener("load", requestCinematicMeasure, { once: true });
  });
});
document.fonts.ready.then(requestCinematicMeasure);
setCinematicMode();
measureCinematicScenes();

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navToggleLabel = document.querySelector("[data-nav-toggle-label]");
const siteNavigation = document.querySelector("#site-navigation");

const updateNavLanguage = () => {
  if (!navToggle || !navToggleLabel) return;
  const isChinese = document.body.dataset.lang === "zh";
  navToggleLabel.textContent = isChinese ? "菜单" : "Menu";
  navToggle.setAttribute("aria-label", isChinese ? "打开站内导航" : "Open site navigation");
};

const setNavOpen = (isOpen, { restoreFocus = false } = {}) => {
  if (!header || !navToggle) return;
  header.classList.toggle("is-nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  if (restoreFocus) navToggle.focus();
};

navToggle?.addEventListener("click", () => {
  setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

siteNavigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavOpen(false);
});

document.addEventListener("click", (event) => {
  if (header?.classList.contains("is-nav-open") && !header.contains(event.target)) {
    setNavOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header?.classList.contains("is-nav-open")) {
    setNavOpen(false, { restoreFocus: true });
  }
});

const photoItems = Array.from(document.querySelectorAll(".photo-item"));
const photoFilters = Array.from(document.querySelectorAll("[data-photo-filter]"));
const photoStatus = document.querySelector("[data-photo-status]");
const photoLightbox = document.querySelector("[data-photo-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxCounter = document.querySelector("[data-lightbox-counter]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrevious = document.querySelector("[data-lightbox-previous]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
const storyRibbon = document.querySelector("[data-story-ribbon]");
const ribbonTrack = storyRibbon?.querySelector(".story-ribbon-track");
const ribbonItems = Array.from(document.querySelectorAll(".story-ribbon-item"));
let ribbonDirectControlUntil = 0;
let activePhotoIndex = 0;
let activePhotoTrigger = null;
let activePhotoCollection = [];

const visiblePhotoItems = () => photoItems.filter((item) => !item.hidden);

const suspendCinematicRibbon = (duration = 1200) => {
  ribbonDirectControlUntil = window.performance.now() + duration;
};

const updateCinematicRibbon = () => {
  if (!storyRibbon || !ribbonTrack || !seeingScene) return;
  const sceneProgress = Number(seeingScene.style.getPropertyValue("--scene-progress")) || 0;
  const ribbonProgress = clamp((sceneProgress - 0.08) / 0.62);
  storyRibbon.style.setProperty("--ribbon-progress", ribbonProgress.toFixed(4));
  if (cinematicMode !== "full" || window.performance.now() < ribbonDirectControlUntil) return;
  const maximumScroll = Math.max(0, ribbonTrack.scrollWidth - ribbonTrack.clientWidth);
  ribbonTrack.scrollLeft = maximumScroll * ribbonProgress;
};

const updatePhotoStatus = () => {
  if (!photoStatus) return;
  const count = visiblePhotoItems().length;
  const isChinese = document.body.dataset.lang === "zh";
  photoStatus.textContent = isChinese
    ? (count === 18 ? "正在显示全部 18 张作品" : `正在显示 ${count} 张作品`)
    : (count === 18 ? "Showing all 18 photographs" : `Showing ${count} photographs`);
};

const setPhotoFilter = (filter) => {
  photoItems.forEach((item) => {
    item.hidden = filter !== "all" && item.dataset.photoCategory !== filter;
  });
  photoFilters.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.photoFilter === filter));
  });
  updatePhotoStatus();
  requestCinematicMeasure();
};

photoFilters.forEach((button) => {
  button.addEventListener("click", () => setPhotoFilter(button.dataset.photoFilter));
});

const renderLightboxPhoto = () => {
  const items = activePhotoCollection.length ? activePhotoCollection : visiblePhotoItems();
  if (!items.length || !lightboxImage) return;
  activePhotoIndex = (activePhotoIndex + items.length) % items.length;
  const source = items[activePhotoIndex].querySelector("img");
  if (!source) return;
  lightboxImage.src = source.currentSrc || source.src;
  lightboxImage.alt = source.alt;
  lightboxImage.width = source.naturalWidth || Number(source.getAttribute("width"));
  lightboxImage.height = source.naturalHeight || Number(source.getAttribute("height"));
  if (lightboxCaption) lightboxCaption.textContent = source.alt;
  if (lightboxCounter) lightboxCounter.textContent = `${activePhotoIndex + 1} / ${items.length}`;
};

const openPhotoLightbox = (item, trigger, collection = visiblePhotoItems()) => {
  if (!photoLightbox || typeof photoLightbox.showModal !== "function") return;
  activePhotoTrigger = trigger;
  activePhotoCollection = collection;
  activePhotoIndex = activePhotoCollection.indexOf(item);
  renderLightboxPhoto();
  photoLightbox.showModal();
  document.body.classList.add("modal-open");
};

const closePhotoLightbox = () => {
  if (!photoLightbox?.open) return;
  photoLightbox.close();
  document.body.classList.remove("modal-open");
  activePhotoTrigger?.focus();
};

photoItems.forEach((item) => {
  const trigger = item.querySelector(".photo-open");
  trigger?.addEventListener("click", () => openPhotoLightbox(item, trigger));
});

let ribbonPointerId = null;
let ribbonPointerStart = 0;
let ribbonScrollStart = 0;
let ribbonDidDrag = false;

ribbonTrack?.addEventListener("pointerdown", (event) => {
  if (!finePointerQuery.matches || event.button !== 0) return;
  suspendCinematicRibbon();
  ribbonPointerId = event.pointerId;
  ribbonPointerStart = event.clientX;
  ribbonScrollStart = ribbonTrack.scrollLeft;
  ribbonDidDrag = false;
  ribbonTrack.setPointerCapture(event.pointerId);
});

ribbonTrack?.addEventListener("pointermove", (event) => {
  if (ribbonPointerId !== event.pointerId) return;
  suspendCinematicRibbon();
  const distance = event.clientX - ribbonPointerStart;
  if (Math.abs(distance) > 5) {
    ribbonDidDrag = true;
    ribbonTrack.classList.add("is-dragging");
  }
  ribbonTrack.scrollLeft = ribbonScrollStart - distance;
});

const finishRibbonDrag = (event) => {
  if (ribbonPointerId !== event.pointerId) return;
  if (ribbonTrack?.hasPointerCapture(event.pointerId)) ribbonTrack.releasePointerCapture(event.pointerId);
  ribbonPointerId = null;
  ribbonTrack?.classList.remove("is-dragging");
  window.setTimeout(() => { ribbonDidDrag = false; }, 0);
};

ribbonTrack?.addEventListener("pointerup", finishRibbonDrag);
ribbonTrack?.addEventListener("pointercancel", finishRibbonDrag);
ribbonTrack?.addEventListener("wheel", () => suspendCinematicRibbon(), { passive: true });
ribbonTrack?.addEventListener("touchstart", () => suspendCinematicRibbon(), { passive: true });
ribbonTrack?.addEventListener("focusin", () => suspendCinematicRibbon());

ribbonItems.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (ribbonDidDrag) {
      event.preventDefault();
      return;
    }
    const dataRibbonPhotoIndex = Number(button.dataset.ribbonPhotoIndex);
    const target = photoItems[dataRibbonPhotoIndex];
    if (target) openPhotoLightbox(target, button, photoItems);
  });
});

lightboxClose?.addEventListener("click", closePhotoLightbox);
lightboxPrevious?.addEventListener("click", () => {
  activePhotoIndex -= 1;
  renderLightboxPhoto();
});
lightboxNext?.addEventListener("click", () => {
  activePhotoIndex += 1;
  renderLightboxPhoto();
});
photoLightbox?.addEventListener("click", (event) => {
  if (event.target === photoLightbox) closePhotoLightbox();
});
photoLightbox?.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  activePhotoTrigger?.focus();
  activePhotoCollection = [];
});
photoLightbox?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closePhotoLightbox();
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    activePhotoIndex -= 1;
    renderLightboxPhoto();
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    activePhotoIndex += 1;
    renderLightboxPhoto();
  }
});

const updateCinematicLanguage = () => {
  const isChinese = document.body.dataset.lang === "zh";
  cinematicScenes.forEach((scene) => {
    const label = isChinese ? scene.dataset.cinematicLabelZh : scene.dataset.cinematicLabelEn;
    if (label) scene.setAttribute("aria-label", label);
  });
  updateMobileChapter();
};

const updateStoryLanguage = () => {
  const isChinese = document.body.dataset.lang === "zh";
  storyLinks.forEach((link) => {
    const title = link.querySelector("strong");
    if (title) title.textContent = isChinese ? title.dataset.storyTitleZh : title.dataset.storyTitleEn;
  });
  document.querySelectorAll("[data-story-copy-en]").forEach((element) => {
    element.textContent = isChinese ? element.dataset.storyCopyZh : element.dataset.storyCopyEn;
  });
  document.querySelectorAll("[data-portal-term-en]").forEach((element) => {
    element.textContent = isChinese ? element.dataset.portalTermZh : element.dataset.portalTermEn;
  });
  document.querySelectorAll("[data-ribbon-label-en]").forEach((element) => {
    element.textContent = isChinese ? element.dataset.ribbonLabelZh : element.dataset.ribbonLabelEn;
  });
  document.querySelectorAll("[data-ribbon-caption-en]").forEach((element) => {
    element.textContent = isChinese ? element.dataset.ribbonCaptionZh : element.dataset.ribbonCaptionEn;
  });
  document.querySelectorAll("[data-ribbon-drag-en]").forEach((element) => {
    element.textContent = isChinese ? element.dataset.ribbonDragZh : element.dataset.ribbonDragEn;
  });
  document.querySelectorAll("[data-spatial-label-en]").forEach((element) => {
    element.setAttribute("aria-label", isChinese ? element.dataset.spatialLabelZh : element.dataset.spatialLabelEn);
  });
  storyRail?.setAttribute("aria-label", isChinese ? "作品集叙事章节" : "Portfolio story chapters");
  ribbonTrack?.setAttribute("aria-label", isChinese ? "摄影精选胶片带" : "Selected photography contact sheet");
  updateCinematicLanguage();
};

new MutationObserver(() => {
  updateNavLanguage();
  updatePhotoStatus();
  updateStoryLanguage();
  requestCinematicMeasure();
}).observe(document.body, {
  attributes: true,
  attributeFilter: ["data-lang"],
});

updateNavLanguage();
updatePhotoStatus();
updateStoryLanguage();
requestPrologueShift();
})();
