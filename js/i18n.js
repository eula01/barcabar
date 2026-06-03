const LANG_LABELS = {
  en: "English",
  es: "Español",
  ca: "Català",
};

const FLAG_SVG = {
  en: `<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#fff"/><path fill="#ce1124" d="M13 0h4v20h-4zM0 8h30v4H0z"/></svg>`,
  es: `<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="6.67" y="0" fill="#c60b1e"/><rect width="30" height="6.66" y="6.67" fill="#ffc400"/><rect width="30" height="6.67" y="13.33" fill="#c60b1e"/></svg>`,
  ca: `<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#fcd116"/><rect width="30" height="2.5" y="3.75" fill="#da121a"/><rect width="30" height="2.5" y="8.75" fill="#da121a"/><rect width="30" height="2.5" y="13.75" fill="#da121a"/></svg>`,
};

const T = {
  en: {
    "meta.title.home": "Barcabar",
    "meta.title.drinks": "Drinks — Barcabar",
    "meta.title.upcoming": "Upcoming — Barcabar",
    "lang.group": "Language",
    "nav.home": "Home",
    "nav.drinks": "Drinks",
    "nav.upcoming": "Upcoming",
    "newsletter.btn": "Newsletter",
    "newsletter.close": "Close",
    "newsletter.title": "Newsletter",
    "newsletter.name": "Name",
    "newsletter.email": "Email",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Thank you — you're on the list.",
    "footer.contact": "Contact",
    "footer.address": "Carrer de Pujades, 33, Sant Martí,<br>08018 Barcelona, Spain",
    "home.about": "A poblenou bar from ? and team with a focus on ?",
    "home.hours":
      "Open Wednesday through to Sunday til late (?), with our 01366 friends spinning vinyl on the weekends. We recommend booking to save a space but we'll always try to accommodate walk-ins.",
    "home.imagePlaceholder": "Image placeholder",
    "drinks.title": "Drinks",
    "drinks.disclaimer":
      "Our drinks, wines and spirits carry a maker's touch and rotate often. The team can answer questions on allergies and aversions — not every ingredient is listed on the menu, so please speak to us before you order. A full allergen list is available on request.",
    "drinks.tomatillo.desc":
      "Tequila, pineapple and tomatillo verde shaken with Scotch bon agave heat and a Tajín rim.",
    "drinks.persepolis.desc":
      "A sour-style brandy serve with advieh honey, apricot liqueur and sumac on the garnish.",
    "drinks.pesto.desc":
      "Fresh, herbal gin with pine nut syrup, citrus and basil — a modern classic with pecorino on the rocks.",
    "drinks.mezcal.desc":
      "Smoky tequila and Del Maguey mezcal built long with blackberry, ginger and soda — easy, smashable, slightly spicy.",
    "drinks.turmeric.desc":
      "Fruity, bright highball of pacharán, gin, turmeric liquor, raspberry and soda with a spicy lift.",
    "drinks.americano.desc":
      "Campari and Torino built long with lime and beer — bitter, refreshing, boozier than it looks.",
    "drinks.bloody.desc":
      "House bloody mix and spice with vodka — savoury, spicy, breakfast-friendly; speak to us about allergies.",
    "drinks.nut.desc":
      "Smooth, thick coupe of nut liqueur, bourbon, lemon and egg white with grated nut on top.",
    "drinks.paddington.desc":
      "Bright, citrus-forward gin stirred with marmalade, triple sec and brioche syrup — mini sandwich garnish.",
    "drinks.brandy.desc":
      "Rich, indulgent cognac coupe with chocolate bitters, PX, date syrup, Mozart Dark and double cream.",
    "drinks.cuban.desc":
      "Rum shaken with mint syrup and lime, topped with prosecco — fresh, herbal, citrus-forward and carbonated.",
    "drinks.bees.desc":
      "Gin with eucalyptus or heather mead, lemon, pêche and orange blossom — floral, balanced, served up.",
    "drinks.lao.desc":
      "Dirty, savoury martini of fat-washed vodka or gin, dry vermouth, MSG and savoury bitters with mang gong cake.",
    "drinks.sazerac.desc":
      "Prebatched Tuaca, cognac and rye stirred with Peychaud's, absinthe and saline — rich, herbal, medicinal, short.",
    "upcoming.title": "Upcoming",
    "upcoming.e1.date": "Thu, 18 Jun",
    "upcoming.e1.title": "01366 OFFBCN 26̸Objekt, Adriana Lopez, DJ TOOL, Memory Palace & Myrcene",
    "upcoming.e1.lineup": "Objekt, Adriana Lopez, DJ TOOL, Memory Palace, Myrcene, Joey Stella",
    "upcoming.e1.venue": "Village Underground Barcelona",
    "upcoming.e1.country": "Spain",
    "upcoming.e2.date": "Fri, 21 Aug",
    "upcoming.e2.title": "01366̸Quelza, Jin Synth & colell",
    "upcoming.e2.lineup": "Quelza, Jin Synth, colell, HØLEIGH, Sylvia (ES)",
    "upcoming.e2.venue": "The White Hotel",
    "upcoming.e2.country": "United Kingdom",
  },
  es: {
    "meta.title.home": "Barcabar",
    "meta.title.drinks": "Bebidas — Barcabar",
    "meta.title.upcoming": "Próximos — Barcabar",
    "lang.group": "Idioma",
    "nav.home": "Inicio",
    "nav.drinks": "Bebidas",
    "nav.upcoming": "Próximos",
    "newsletter.btn": "Boletín",
    "newsletter.close": "Cerrar",
    "newsletter.title": "Boletín",
    "newsletter.name": "Nombre",
    "newsletter.email": "Correo",
    "newsletter.subscribe": "Suscribirse",
    "newsletter.success": "Gracias — ya estás en la lista.",
    "footer.contact": "Contacto",
    "footer.address": "Carrer de Pujades, 33, Sant Martí,<br>08018 Barcelona, España",
    "home.about": "Un bar de Poblenou de ? y equipo, con foco en ?",
    "home.hours":
      "Abierto de miércoles a domingo hasta tarde (?), con nuestros amigos de 01366 poniendo vinilos los fines de semana. Recomendamos reservar para asegurar sitio, pero siempre intentamos acoger sin reserva.",
    "home.imagePlaceholder": "Imagen provisional",
    "drinks.title": "Bebidas",
    "drinks.disclaimer":
      "Nuestras bebidas, vinos y destilados llevan la huella del artesano y rotan a menudo. El equipo puede resolver dudas sobre alergias y aversiones — no todos los ingredientes figuran en la carta; háblanos antes de pedir. Lista completa de alérgenos disponible bajo petición.",
    "drinks.tomatillo.desc":
      "Tequila, piña y verde de tomatillo, batido con agave picante de Scotch bon y borde de Tajín.",
    "drinks.persepolis.desc":
      "Brandy en estilo sour con miel de advieh, licor de albaricoque y sumac en la guarnición.",
    "drinks.pesto.desc":
      "Gin herbal y fresco con sirope de piñón, cítricos y albahaca — clásico moderno con pecorino en rocks.",
    "drinks.mezcal.desc":
      "Tequila ahumada y mezcal Del Maguey largo con mora, jengibre y soda — fácil, tritable, con un toque picante.",
    "drinks.turmeric.desc":
      "Highball afrutado y luminoso de pacharán, gin, licor de cúrcuma, frambuesa y soda con picante.",
    "drinks.americano.desc":
      "Campari y Torino largos con lima y cerveza — amargo, refrescante, más fuerte de lo que parece.",
    "drinks.bloody.desc":
      "Mezcla bloody de la casa con vodka — salado, picante, ideal al desayuno; consúltanos alergias.",
    "drinks.nut.desc":
      "Coupe espeso y suave de licor de frutos secos, bourbon, limón y clara, con fruto seco rallado.",
    "drinks.paddington.desc":
      "Gin cítrico removido con mermelada, triple sec y sirope de brioche — mini sándwich de guarnición.",
    "drinks.brandy.desc":
      "Coupe indulgente de coñac con bitter de chocolate, PX, sirope de dátil, Mozart Dark y nata.",
    "drinks.cuban.desc":
      "Ron batido con sirope de menta y lima, coronado con prosecco — fresco, herbal y con gas.",
    "drinks.bees.desc":
      "Gin con hidromiel de eucalipto o brezo, limón, pêche y flor de azahar — floral, equilibrado, en copa.",
    "drinks.lao.desc":
      "Martini salado y untuoso de vodka o gin fat-washed, vermut seco, MSG y bitters salados con mang gong.",
    "drinks.sazerac.desc":
      "Tuaca, coñac y rye premezclados con Peychaud's, absenta y salina — rico, herbal, medicinal, corto.",
    "upcoming.title": "Próximos",
    "upcoming.e1.date": "Jue, 18 jun",
    "upcoming.e1.title": "01366 OFFBCN 26̸Objekt, Adriana Lopez, DJ TOOL, Memory Palace & Myrcene",
    "upcoming.e1.lineup": "Objekt, Adriana Lopez, DJ TOOL, Memory Palace, Myrcene, Joey Stella",
    "upcoming.e1.venue": "Village Underground Barcelona",
    "upcoming.e1.country": "España",
    "upcoming.e2.date": "Vie, 21 ago",
    "upcoming.e2.title": "01366̸Quelza, Jin Synth & colell",
    "upcoming.e2.lineup": "Quelza, Jin Synth, colell, HØLEIGH, Sylvia (ES)",
    "upcoming.e2.venue": "The White Hotel",
    "upcoming.e2.country": "Reino Unido",
  },
  ca: {
    "meta.title.home": "Barcabar",
    "meta.title.drinks": "Begudes — Barcabar",
    "meta.title.upcoming": "Propers — Barcabar",
    "lang.group": "Idioma",
    "nav.home": "Inici",
    "nav.drinks": "Begudes",
    "nav.upcoming": "Propers",
    "newsletter.btn": "Butlletí",
    "newsletter.close": "Tancar",
    "newsletter.title": "Butlletí",
    "newsletter.name": "Nom",
    "newsletter.email": "Correu",
    "newsletter.subscribe": "Subscriure's",
    "newsletter.success": "Gràcies — ja ets a la llista.",
    "footer.contact": "Contacte",
    "footer.address": "Carrer de Pujades, 33, Sant Martí,<br>08018 Barcelona, Espanya",
    "home.about": "Un bar del Poblenou de ? i equip, amb focus en ?",
    "home.hours":
      "Obert de dimecres a diumenge fins tard (?), amb els amics de 01366 posant vinils el cap de setmana. Recomanem reservar per assegurar lloc, però sempre intentem acollir sense reserva.",
    "home.imagePlaceholder": "Imatge provisional",
    "drinks.title": "Begudes",
    "drinks.disclaimer":
      "Les nostres begudes, vins i destil·lats porten empremta d'artesà i giren sovint. L'equip respon dubtes sobre al·lèrgies i aversions — no tots els ingredients surten a la carta; parla'ns abans de demanar. Llista completa d'al·lèrgens disponible sota petició.",
    "drinks.tomatillo.desc":
      "Tequila, pinya i verde de tomatillo, sacsejat amb agave picant de Scotch bon i vora de Tajín.",
    "drinks.persepolis.desc":
      "Brandy en estil sour amb mel d'advieh, licor d'albercoc i sumac a la guarnició.",
    "drinks.pesto.desc":
      "Gin herbal i fresc amb xarop de pinyó, cítrics i alfàbrega — clàssic modern amb pecorino en rocks.",
    "drinks.mezcal.desc":
      "Tequila fumada i mezcal Del Maguey llarg amb mora, gingebre i soda — fàcil, trencable, amb un toc picant.",
    "drinks.turmeric.desc":
      "Highball afruitat i lluminós de pacharán, gin, licor de cúrcuma, gerds i soda amb picant.",
    "drinks.americano.desc":
      "Campari i Torino llargs amb llimona i cervesa — amarg, refrescant, més fort del que sembla.",
    "drinks.bloody.desc":
      "Mescla bloody de la casa amb vodka — salat, picant, ideal a l'esmorzar; consulta'ns al·lèrgies.",
    "drinks.nut.desc":
      "Copa espessa i suau de licor de fruits secs, bourbon, llimona i clara, amb fruit sec ratllat.",
    "drinks.paddington.desc":
      "Gin cítric remenat amb melmelada, triple sec i xarop de brioche — mini entrepà de guarnició.",
    "drinks.brandy.desc":
      "Copa indulgent de conyac amb bitter de xocolata, PX, xarop de dàtil, Mozart Dark i nata.",
    "drinks.cuban.desc":
      "Ron sacsejat amb xarop de menta i llimona, coronat amb prosecco — fresc, herbal i amb gas.",
    "drinks.bees.desc":
      "Gin amb hidromel d'eucaliptus o bruc, llimona, pêche i flor de taronger — floral, equilibrat, en copa.",
    "drinks.lao.desc":
      "Martini salat i untuós de vodka o gin fat-washed, vermut sec, MSG i bitters salats amb mang gong.",
    "drinks.sazerac.desc":
      "Tuaca, conyac i rye premesclats amb Peychaud's, absenta i salina — ric, herbal, medicinal, curt.",
    "upcoming.title": "Propers",
    "upcoming.e1.date": "Dj, 18 jun",
    "upcoming.e1.title": "01366 OFFBCN 26̸Objekt, Adriana Lopez, DJ TOOL, Memory Palace & Myrcene",
    "upcoming.e1.lineup": "Objekt, Adriana Lopez, DJ TOOL, Memory Palace, Myrcene, Joey Stella",
    "upcoming.e1.venue": "Village Underground Barcelona",
    "upcoming.e1.country": "Espanya",
    "upcoming.e2.date": "Div, 21 ag",
    "upcoming.e2.title": "01366̸Quelza, Jin Synth & colell",
    "upcoming.e2.lineup": "Quelza, Jin Synth, colell, HØLEIGH, Sylvia (ES)",
    "upcoming.e2.venue": "The White Hotel",
    "upcoming.e2.country": "Regne Unit",
  },
};

function getPageId() {
  const page = document.body.dataset.page;
  if (page) return page;
  const path = window.location.pathname;
  if (path.includes("/drinks")) return "drinks";
  if (path.includes("/upcoming")) return "upcoming";
  return "home";
}

function getStoredLang() {
  const stored = localStorage.getItem("barcabar-lang");
  if (stored && T[stored]) return stored;
  return "en";
}

function setLang(lang) {
  if (!T[lang]) return;
  localStorage.setItem("barcabar-lang", lang);
  document.documentElement.lang = lang === "ca" ? "ca" : lang === "es" ? "es" : "en";
  applyTranslations(lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
}

function applyTranslations(lang) {
  const strings = T[lang];
  const page = getPageId();
  document.title = strings[`meta.title.${page}`] || strings["meta.title.home"];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = strings[key];
    if (value == null) return;
    if (el.dataset.i18nHtml === "true") {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  const group = document.querySelector(".lang-switcher");
  if (group) group.setAttribute("aria-label", strings["lang.group"]);
}

function renderLangSwitcher() {
  const container = document.querySelector(".lang-switcher");
  if (!container || container.children.length) return;

  ["en", "es", "ca"].forEach((lang) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-btn";
    btn.dataset.lang = lang;
    btn.setAttribute("aria-label", LANG_LABELS[lang]);
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = FLAG_SVG[lang];
    btn.addEventListener("click", () => setLang(lang));
    container.appendChild(btn);
  });
}

const WIDTH_LOCK_SELECTOR =
  ".site-header nav a[data-i18n], #newsletter-open[data-i18n], .event-date[data-i18n], .footer-label[data-i18n], #newsletter-close[data-i18n], .newsletter-form [data-i18n], .modal-title[data-i18n], .drinks-title[data-i18n], .upcoming-title[data-i18n]";

const HEIGHT_LOCK_SELECTOR =
  ".about-text[data-i18n], .split-text[data-i18n], .drinks-subheading[data-i18n], .drink-desc[data-i18n], .event-title[data-i18n], .event-lineup[data-i18n], .event-location-row > span[data-i18n], li[data-i18n][data-i18n-html]";

function createProbe(el, widthPx) {
  const probe = document.createElement("div");
  const cs = getComputedStyle(el);
  probe.style.cssText = [
    "position:fixed",
    "left:-9999px",
    "top:0",
    "visibility:hidden",
    "pointer-events:none",
    "margin:0",
    "padding:0",
    "border:0",
    widthPx ? `width:${widthPx}px` : "width:auto",
    `font:${cs.font}`,
    `font-size:${cs.fontSize}`,
    `font-weight:${cs.fontWeight}`,
    `font-family:${cs.fontFamily}`,
    `line-height:${cs.lineHeight}`,
    `letter-spacing:${cs.letterSpacing}`,
    `text-transform:${cs.textTransform}`,
    "white-space:normal",
  ].join(";");
  document.body.appendChild(probe);
  return probe;
}

function maxTextWidth(el, key) {
  const probe = createProbe(el);
  probe.style.whiteSpace = "nowrap";
  let max = 0;
  for (const lang of ["en", "es", "ca"]) {
    probe.textContent = T[lang][key] || "";
    max = Math.max(max, probe.offsetWidth);
  }
  probe.remove();
  return Math.ceil(max);
}

function maxTextHeight(el, key, widthPx) {
  const probe = createProbe(el, widthPx);
  let max = 0;
  for (const lang of ["en", "es", "ca"]) {
    const value = T[lang][key];
    if (el.dataset.i18nHtml === "true") probe.innerHTML = value || "";
    else probe.textContent = value || "";
    max = Math.max(max, probe.offsetHeight);
  }
  probe.remove();
  return Math.ceil(max);
}

function lockI18nWidths() {
  document.querySelectorAll(WIDTH_LOCK_SELECTOR).forEach((el) => {
    const key = el.dataset.i18n;
    if (!key || !T.en[key]) return;
    el.style.minWidth = `${maxTextWidth(el, key)}px`;
  });
}

function lockI18nHeights() {
  document.querySelectorAll(HEIGHT_LOCK_SELECTOR).forEach((el) => {
    const key = el.dataset.i18n;
    if (!key || !T.en[key]) return;
    const width = el.getBoundingClientRect().width;
    if (width < 1) return;
    el.style.minHeight = `${maxTextHeight(el, key, width)}px`;
  });
}

function syncHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  document.documentElement.style.setProperty(
    "--header-h",
    `${header.offsetHeight}px`
  );
}

function stabilizeLayout() {
  lockI18nWidths();
  lockI18nHeights();
  syncHeaderHeight();
}

let resizeTimer;
function scheduleStabilize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const lang = getStoredLang();
    applyTranslations(lang);
    stabilizeLayout();
  }, 120);
}

function initI18n() {
  renderLangSwitcher();
  setLang(getStoredLang());

  const run = () => {
    stabilizeLayout();
  };

  if (document.fonts?.ready) {
    document.fonts.ready.then(run);
  } else {
    requestAnimationFrame(run);
  }

  window.addEventListener("resize", scheduleStabilize);
}

window.barcabarI18n = { setLang, getStoredLang, T, stabilizeLayout };
