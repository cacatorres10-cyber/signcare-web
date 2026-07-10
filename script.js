/* ============================================================
   SignCare Group, LLC | i18n + interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  const I18N = {
    es: {
      "nav.services": "Servicios",
      "nav.works": "Trabajos",
      "nav.plans": "Planes",
      "nav.coverage": "Cobertura",
      "nav.about": "Nosotros",
      "nav.contact": "Contacto",
      "nav.cta": "Diagnóstico gratis",

      "hero.eyebrow": "SignCare Group, LLC · Puerto Rico & Islas Vírgenes",
      "hero.title": 'Su rótulo,<br /><span class="neon">como&nbsp;nuevo</span>.<br />Sin gastar miles.',
      "hero.sub": "Especialistas exclusivos en mantenimiento preventivo y correctivo de rótulos comerciales. Protegemos su inversión y la imagen de su negocio durante todo el año.",
      "hero.cta1": "Solicitar diagnóstico",
      "hero.cta2": "Ver planes",
      "hero.stat1": "Respuesta de emergencia",
      "hero.stat2": "Enfocados en rótulos",
      "hero.stat3": "Islas con cobertura",
      "hero.chip1": "Emergencias",
      "hero.chip2": "Cobertura total",

      "mq.items": "Limpieza profunda·Módulos LED·Transformadores·Fotoceldas·Revisión estructural·Sellados y anclajes·Restauración de brillo·Laminado protector·Emergencias 24h·Inspección preventiva",

      "lema.eyebrow": "La pregunta correcta",
      "lema.title": "“¿Por qué gastar <em>miles de dólares</em> en un rótulo nuevo, cuando el suyo puede lucir y funcionar <em>como nuevo</em>?”",
      "lema.body": "En SignCare Group, LLC nos especializamos exclusivamente en el mantenimiento de rótulos comerciales. Un rótulo limpio, iluminado y bien mantenido transmite confianza, atrae más clientes y fortalece la imagen de cualquier negocio, y evita costosas reparaciones o un reemplazo prematuro.",
      "lema.p1": "Protege su inversión",
      "lema.p2": "Prolonga la vida útil",
      "lema.p3": "Imagen profesional todo el año",
      "lema.before": "Antes",
      "lema.after": "Después",
      "lema.hint": "← Deslice para ver la diferencia →",

      "svc.eyebrow": "¿Qué hacemos?",
      "svc.title": 'Un programa completo para que su rótulo<br class="br-lg" /> <em>nunca deje de brillar</em>',
      "svc.c1.title": "Limpieza & Restauración",
      "svc.c1.desc": "Eliminamos la suciedad que corroe y apaga su rótulo, devolviéndole el brillo del primer día.",
      "svc.c1.i1": "Limpieza profunda de rótulos comerciales",
      "svc.c1.i2": "Remoción de contaminación y excremento de aves",
      "svc.c1.i3": "Letras, acrílicos, cajas de luz y paneles",
      "svc.c1.i4": "Restauración del brillo y protección laminada",
      "svc.c1.i5": "Tornillería, anclajes y sellados",
      "svc.c1.i6": "Inspección preventiva completa",
      "svc.c2.title": "Mantenimiento Eléctrico",
      "svc.c2.desc": "Su iluminación siempre encendida: diagnóstico y reparación del sistema eléctrico completo.",
      "svc.c2.i1": "Diagnóstico del sistema eléctrico",
      "svc.c2.i2": "Cambio de módulos LED",
      "svc.c2.i3": "Reemplazo de transformadores y fotoceldas",
      "svc.c2.i4": "Revisión de cableado y conexiones",
      "svc.c2.i5": "Corrección de fallas eléctricas",
      "svc.c2.i6": "Reparación de iluminación parcial o total",
      "svc.c3.title": "Reparaciones Correctivas",
      "svc.c3.desc": "Cuando detectamos una avería, la resolvemos. Su rótulo vuelve a funcionar como debe.",
      "svc.c3.i1": "Reparación de letras iluminadas",
      "svc.c3.i2": "Reparación de cajas de luz",
      "svc.c3.i3": "Sustitución de componentes eléctricos dañados",
      "svc.c3.i4": "Reparaciones por desgaste natural",
      "svc.c3.i5": "Reemplazo de piezas deterioradas",

      "works.eyebrow": "Trabajos reales",
      "works.title": 'Resultados que<br class="br-lg" /> <em>hablan por sí solos</em>',
      "works.sub": "Arrastre para girar el carrusel y toque una foto para ampliarla.",
      "works.cap1": "Mantenimiento de letras de canal y módulos LED",
      "works.cap2": "Restauración de letra iluminada: antes y después",
      "works.cap3": "Letras corpóreas restauradas: antes y después",
      "works.cap4": "Rótulo restaurado y reinstalado: antes y después",
      "works.cap5": "Limpieza profesional de rótulos y menu boards",
      "works.prev": "Anterior",
      "works.next": "Siguiente",
      "works.close": "Cerrar",

      "cov.eyebrow": "Cobertura",
      "cov.title": "De Puerto Rico<br />a las <em>Islas Vírgenes</em>",
      "cov.body": "Nuestro equipo está preparado para atender desde pequeños comercios hasta cadenas comerciales con múltiples localidades.",
      "cov.i1": "Todo Puerto Rico",

      "emg.title": "¿Rótulo apagado?<br />Respondemos en <em>menos de 24 horas</em>.",
      "emg.body": "Un rótulo apagado afecta la imagen de su negocio y representa pérdidas. Nuestros clientes con contrato de mantenimiento cuentan con atención prioritaria y respuesta de emergencia garantizada.",
      "emg.cta": "Llamar ahora · (787) 550-4894",

      "plans.eyebrow": "Planes de mantenimiento",
      "plans.title": 'Un plan a la medida<br class="br-lg" /> de <em>cada negocio</em>',
      "plans.b.tag": "Lo esencial, bien hecho",
      "plans.b.i1": "Limpieza profesional",
      "plans.b.i2": "Inspección general",
      "plans.b.i3": "Remoción de contaminantes",
      "plans.b.i4": "Revisión estructural",
      "plans.b.i5": "Informe del estado del rótulo",
      "plans.b.cta": "Elegir Básico",
      "plans.p.flag": "Más popular",
      "plans.p.tag": "Todo lo del Básico, además de:",
      "plans.p.i1": "Revisión eléctrica",
      "plans.p.i2": "Diagnóstico de iluminación",
      "plans.p.i3": "Ajustes menores",
      "plans.p.i4": "Atención prioritaria",
      "plans.p.i5": "Descuentos en reparaciones",
      "plans.p.cta": "Elegir Premium",
      "plans.g.tag": "Cobertura total. Todo lo anterior, más:",
      "plans.g.i1": "Respuesta de emergencia <24h",
      "plans.g.i2": "Prioridad máxima de servicio",
      "plans.g.i3": "Visitas preventivas programadas",
      "plans.g.i4": "Cobertura para múltiples rótulos",
      "plans.g.i5": "Descuentos especiales en piezas",
      "plans.g.cta": "Elegir Gold",

      "why.eyebrow": "¿Por qué SignCare?",
      "why.title": 'El aliado que su rótulo<br class="br-lg" /> <em>estaba esperando</em>',
      "why.i1.t": "Especialistas exclusivos",
      "why.i1.d": "Solo hacemos una cosa: mantenimiento de rótulos. Y la hacemos mejor que nadie.",
      "why.i2.t": "Protegemos su inversión",
      "why.i2.d": "Evitamos gastos innecesarios en reemplazos y aumentamos la vida útil de su rótulo.",
      "why.i3.t": "Técnicos capacitados",
      "why.i3.d": "Equipo altamente entrenado en estructuras, acrílicos y sistemas eléctricos de rotulación.",
      "why.i4.t": "Servicio rápido",
      "why.i4.d": "Soluciones profesionales y confiables, con emergencias atendidas en menos de 24 horas.",
      "why.i5.t": "Cobertura regional",
      "why.i5.d": "Puerto Rico, Vieques, Culebra, St. Thomas y St. John, donde esté su negocio.",
      "why.i6.t": "Planes adaptados",
      "why.i6.d": "Tres niveles de mantenimiento diseñados para ajustarse a cada tipo de negocio.",
      "why.mision.t": "Nuestra Misión",
      "why.mision.d": "Brindar el mejor servicio de mantenimiento de rótulos comerciales, con soluciones rápidas, profesionales y confiables que mantengan su imagen corporativa siempre en excelentes condiciones.",
      "why.vision.t": "Nuestra Visión",
      "why.vision.d": "Ser la empresa líder en mantenimiento de rótulos en Puerto Rico y expandirnos al Caribe, como el aliado de confianza de empresas, franquicias y comercios.",

      "commit.quote": "No espere a que su rótulo deje de funcionar.<br /><em>Permítanos cuidarlo</em> antes de que se convierta en un gasto mayor.",
      "commit.cta": "Proteger mi rótulo ahora",

      "ct.eyebrow": "Contacto",
      "ct.title": "Hablemos de<br /><em>su rótulo</em>",
      "ct.body": "Cuéntenos qué necesita y le responderemos con un diagnóstico y una propuesta a la medida. Sin compromiso.",
      "ct.phone": "Teléfono",
      "ct.wa": "Respuesta rápida",
      "ct.area": "Área de servicio",
      "ct.areaV": "PR · Vieques · Culebra · St. Thomas · St. John",
      "ct.f.name": "Nombre *",
      "ct.f.nameP": "Su nombre",
      "ct.f.nameE": "Escriba su nombre",
      "ct.f.biz": "Negocio",
      "ct.f.bizP": "Nombre del negocio",
      "ct.f.phone": "Teléfono *",
      "ct.f.phoneP": "(787) 000-0000",
      "ct.f.phoneE": "Escriba un teléfono válido",
      "ct.f.loc": "Ubicación",
      "ct.f.svc": "Servicio de interés",
      "ct.f.o1": "Diagnóstico gratuito",
      "ct.f.o2": "Plan Básico",
      "ct.f.o3": "Plan Premium",
      "ct.f.o4": "Plan Gold",
      "ct.f.o5": "Reparación puntual",
      "ct.f.o6": "🚨 Emergencia",
      "ct.f.qty": "Cantidad de rótulos",
      "ct.f.msg": "Mensaje",
      "ct.f.msgP": "Cuéntenos sobre su rótulo (estado, tamaño, ubicación)…",
      "ct.f.send": "Enviar por WhatsApp",
      "ct.f.note": "Al enviar, se abrirá WhatsApp con su mensaje listo para nuestro equipo.",

      "ft.tag": "Protegemos la imagen de su negocio, un mantenimiento a la vez.",
      "ft.nav": "Navegación",
      "ft.cov": "Cobertura",
      "ft.contact": "Contacto",
      "ft.rights": "Todos los derechos reservados",

      "wa.svc": { diag: "Diagnóstico gratuito", basico: "Plan Básico", premium: "Plan Premium", gold: "Plan Gold", repair: "Reparación puntual", emergency: "EMERGENCIA 🚨" },
      "wa.msg": (d) => `Hola SignCare 👋 Soy ${d.name}${d.biz ? ", de " + d.biz : ""}.
• Servicio: ${d.service}
• Ubicación: ${d.loc}
• Rótulos: ${d.qty}
• Teléfono: ${d.phone}${d.msg ? "\n• Mensaje: " + d.msg : ""}`,
      "meta.title": "SignCare Group, LLC | Mantenimiento de Rótulos Comerciales | Puerto Rico & USVI",
      "meta.desc": "Especialistas exclusivos en mantenimiento preventivo y correctivo de rótulos comerciales en Puerto Rico, Vieques, Culebra, St. Thomas y St. John. Su rótulo, como nuevo, sin gastar miles en reemplazarlo."
    },

    en: {
      "nav.services": "Services",
      "nav.works": "Our Work",
      "nav.plans": "Plans",
      "nav.coverage": "Coverage",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Free assessment",

      "hero.eyebrow": "SignCare Group, LLC · Puerto Rico & U.S. Virgin Islands",
      "hero.title": 'Your sign,<br /><span class="neon">like&nbsp;new</span>.<br />Without spending thousands.',
      "hero.sub": "Specialists dedicated exclusively to preventive and corrective maintenance of commercial signs. We protect your investment and your business image all year round.",
      "hero.cta1": "Request an assessment",
      "hero.cta2": "View plans",
      "hero.stat1": "Emergency response",
      "hero.stat2": "Focused on signs",
      "hero.stat3": "Islands covered",
      "hero.chip1": "Emergencies",
      "hero.chip2": "Full coverage",

      "mq.items": "Deep cleaning·LED modules·Transformers·Photocells·Structural inspection·Seals & anchors·Shine restoration·Protective laminate·24h emergencies·Preventive inspection",

      "lema.eyebrow": "The right question",
      "lema.title": "“Why spend <em>thousands of dollars</em> on a new sign, when yours can look and work <em>like new</em>?”",
      "lema.body": "At SignCare Group, LLC we specialize exclusively in commercial sign maintenance. A clean, well-lit, well-maintained sign builds trust, attracts more customers and strengthens any business image, while avoiding costly repairs or premature replacement.",
      "lema.p1": "Protects your investment",
      "lema.p2": "Extends its service life",
      "lema.p3": "A professional image all year",
      "lema.before": "Before",
      "lema.after": "After",
      "lema.hint": "← Drag to see the difference →",

      "svc.eyebrow": "What we do",
      "svc.title": 'A complete program so your sign<br class="br-lg" /> <em>never stops shining</em>',
      "svc.c1.title": "Cleaning & Restoration",
      "svc.c1.desc": "We remove the grime that corrodes and dulls your sign, bringing back its day-one shine.",
      "svc.c1.i1": "Deep cleaning of commercial signs",
      "svc.c1.i2": "Removal of pollution and bird droppings",
      "svc.c1.i3": "Letters, acrylics, light boxes and panels",
      "svc.c1.i4": "Shine restoration and laminate protection",
      "svc.c1.i5": "Hardware, anchors and seals",
      "svc.c1.i6": "Full preventive inspection",
      "svc.c2.title": "Electrical Maintenance",
      "svc.c2.desc": "Your lighting always on: diagnosis and repair of the complete electrical system.",
      "svc.c2.i1": "Electrical system diagnostics",
      "svc.c2.i2": "LED module replacement",
      "svc.c2.i3": "Transformer and photocell replacement",
      "svc.c2.i4": "Wiring and connection checks",
      "svc.c2.i5": "Electrical fault correction",
      "svc.c2.i6": "Partial or total lighting repair",
      "svc.c3.title": "Corrective Repairs",
      "svc.c3.desc": "When we detect a failure, we fix it. Your sign works the way it should again.",
      "svc.c3.i1": "Illuminated letter repair",
      "svc.c3.i2": "Light box repair",
      "svc.c3.i3": "Replacement of damaged electrical components",
      "svc.c3.i4": "Repairs due to natural wear",
      "svc.c3.i5": "Replacement of deteriorated parts",

      "works.eyebrow": "Real work",
      "works.title": 'Results that<br class="br-lg" /> <em>speak for themselves</em>',
      "works.sub": "Drag to spin the carousel and tap a photo to enlarge it.",
      "works.cap1": "Channel letter and LED module maintenance",
      "works.cap2": "Illuminated letter restoration: before and after",
      "works.cap3": "Dimensional letters restored: before and after",
      "works.cap4": "Sign restored and reinstalled: before and after",
      "works.cap5": "Professional cleaning of signs and menu boards",
      "works.prev": "Previous",
      "works.next": "Next",
      "works.close": "Close",

      "cov.eyebrow": "Coverage",
      "cov.title": "From Puerto Rico<br />to the <em>Virgin Islands</em>",
      "cov.body": "Our team is ready to serve everyone from small businesses to commercial chains with multiple locations.",
      "cov.i1": "All of Puerto Rico",

      "emg.title": "Sign gone dark?<br />We respond in <em>less than 24 hours</em>.",
      "emg.body": "A dark sign hurts your business image and means lost revenue. Our maintenance-contract clients get priority attention and guaranteed emergency response.",
      "emg.cta": "Call now · (787) 550-4894",

      "plans.eyebrow": "Maintenance plans",
      "plans.title": 'A plan tailored<br class="br-lg" /> to <em>every business</em>',
      "plans.b.tag": "The essentials, done right",
      "plans.b.i1": "Professional cleaning",
      "plans.b.i2": "General inspection",
      "plans.b.i3": "Contaminant removal",
      "plans.b.i4": "Structural check",
      "plans.b.i5": "Sign condition report",
      "plans.b.cta": "Choose Basic",
      "plans.p.flag": "Most popular",
      "plans.p.tag": "Everything in Basic, plus:",
      "plans.p.i1": "Electrical inspection",
      "plans.p.i2": "Lighting diagnostics",
      "plans.p.i3": "Minor adjustments",
      "plans.p.i4": "Priority attention",
      "plans.p.i5": "Repair discounts",
      "plans.p.cta": "Choose Premium",
      "plans.g.tag": "Total coverage. Everything above, plus:",
      "plans.g.i1": "Emergency response <24h",
      "plans.g.i2": "Highest service priority",
      "plans.g.i3": "Scheduled preventive visits",
      "plans.g.i4": "Coverage for multiple signs",
      "plans.g.i5": "Special discounts on parts",
      "plans.g.cta": "Choose Gold",

      "why.eyebrow": "Why SignCare?",
      "why.title": 'The ally your sign<br class="br-lg" /> <em>has been waiting for</em>',
      "why.i1.t": "Exclusive specialists",
      "why.i1.d": "We do one thing only: sign maintenance. And we do it better than anyone.",
      "why.i2.t": "We protect your investment",
      "why.i2.d": "We prevent unnecessary replacement costs and extend your sign's service life.",
      "why.i3.t": "Highly trained technicians",
      "why.i3.d": "A team expert in sign structures, acrylics and electrical systems.",
      "why.i4.t": "Fast service",
      "why.i4.d": "Professional, reliable solutions, with emergencies handled in under 24 hours.",
      "why.i5.t": "Regional coverage",
      "why.i5.d": "Puerto Rico, Vieques, Culebra, St. Thomas and St. John, wherever your business is.",
      "why.i6.t": "Tailored plans",
      "why.i6.d": "Three maintenance tiers designed to fit every type of business.",
      "why.mision.t": "Our Mission",
      "why.mision.d": "To provide the best commercial sign maintenance service, with fast, professional and reliable solutions that keep your corporate image in excellent condition at all times.",
      "why.vision.t": "Our Vision",
      "why.vision.d": "To be the leading sign maintenance company in Puerto Rico and expand across the Caribbean as the trusted ally of businesses, franchises and retailers.",

      "commit.quote": "Don't wait for your sign to stop working.<br /><em>Let us care for it</em> before it becomes a bigger expense.",
      "commit.cta": "Protect my sign now",

      "ct.eyebrow": "Contact",
      "ct.title": "Let's talk about<br /><em>your sign</em>",
      "ct.body": "Tell us what you need and we'll get back to you with an assessment and a tailored proposal. No commitment.",
      "ct.phone": "Phone",
      "ct.wa": "Fast response",
      "ct.area": "Service area",
      "ct.areaV": "PR · Vieques · Culebra · St. Thomas · St. John",
      "ct.f.name": "Name *",
      "ct.f.nameP": "Your name",
      "ct.f.nameE": "Please enter your name",
      "ct.f.biz": "Business",
      "ct.f.bizP": "Business name",
      "ct.f.phone": "Phone *",
      "ct.f.phoneP": "(787) 000-0000",
      "ct.f.phoneE": "Please enter a valid phone",
      "ct.f.loc": "Location",
      "ct.f.svc": "Service of interest",
      "ct.f.o1": "Free assessment",
      "ct.f.o2": "Basic Plan",
      "ct.f.o3": "Premium Plan",
      "ct.f.o4": "Gold Plan",
      "ct.f.o5": "One-time repair",
      "ct.f.o6": "🚨 Emergency",
      "ct.f.qty": "Number of signs",
      "ct.f.msg": "Message",
      "ct.f.msgP": "Tell us about your sign (condition, size, location)…",
      "ct.f.send": "Send via WhatsApp",
      "ct.f.note": "On submit, WhatsApp will open with your message ready for our team.",

      "ft.tag": "Protecting your business image, one maintenance at a time.",
      "ft.nav": "Navigation",
      "ft.cov": "Coverage",
      "ft.contact": "Contact",
      "ft.rights": "All rights reserved",

      "wa.svc": { diag: "Free assessment", basico: "Basic Plan", premium: "Premium Plan", gold: "Gold Plan", repair: "One-time repair", emergency: "EMERGENCY 🚨" },
      "wa.msg": (d) => `Hi SignCare 👋 I'm ${d.name}${d.biz ? ", from " + d.biz : ""}.
• Service: ${d.service}
• Location: ${d.loc}
• Signs: ${d.qty}
• Phone: ${d.phone}${d.msg ? "\n• Message: " + d.msg : ""}`,
      "meta.title": "SignCare Group, LLC | Commercial Sign Maintenance | Puerto Rico & USVI",
      "meta.desc": "Specialists dedicated exclusively to preventive and corrective maintenance of commercial signs in Puerto Rico, Vieques, Culebra, St. Thomas and St. John. Your sign, like new, without spending thousands on a replacement."
    }
  };

  const urlLang = new URLSearchParams(location.search).get("lang");
  let lang = urlLang || localStorage.getItem("sc-lang") || "es";
  if (!I18N[lang]) lang = "es";

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  function applyLang(next) {
    lang = next;
    localStorage.setItem("sc-lang", lang);
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", dict["meta.desc"]);

    $$("[data-i18n]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n")];
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-i18n-html]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-html")];
      if (typeof v === "string") el.innerHTML = v;
    });
    $$("[data-i18n-ph]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-ph")];
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });
    $$("[data-i18n-aria]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-aria")];
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });
    $$(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    buildMarquee();
  }

  $$(".lang-btn").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  /* ---------------- Marquee ---------------- */
  function buildMarquee() {
    const track = $("#marqueeTrack");
    if (!track) return;
    const items = I18N[lang]["mq.items"].split("·");
    const seq = items.map((t) => `<span>${t}</span><span class="mq-dot">✦</span>`).join("");
    track.innerHTML = seq + seq; // duplicated for seamless loop
  }

  /* ---------------- Preloader ---------------- */
  window.addEventListener("load", () => {
    setTimeout(() => {
      const p = $("#preloader");
      if (p) p.classList.add("done");
    }, 900);
  });
  // Safety: never leave the preloader stuck
  setTimeout(() => {
    const p = $("#preloader");
    if (p) p.classList.add("done");
  }, 3500);

  /* ---------------- Nav ---------------- */
  const nav = $("#nav");
  const progress = $("#scrollProgress");
  const heroBgImg = $("#heroBgImg");
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        nav.classList.toggle("scrolled", y > 30);
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
        if (heroBgImg && y < window.innerHeight && !reducedMotion && window.innerWidth > 980) {
          heroBgImg.style.transform = "translateY(" + y * 0.16 + "px)";
        }
        ticking = false;
      });
    },
    { passive: true }
  );

  const burger = $("#burger");
  const mobileMenu = $("#mobileMenu");
  function closeMenu() {
    burger.classList.remove("open");
    mobileMenu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  burger.addEventListener("click", () => {
    const open = !mobileMenu.classList.contains("open");
    burger.classList.toggle("open", open);
    mobileMenu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$("#mobileMenu a").forEach((a) => a.addEventListener("click", closeMenu));

  /* ---------------- Reveal on scroll ---------------- */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------------- Counters ---------------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const dur = 1400;
    const t0 = performance.now();
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const counters = $$(".count");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count));
  }

  /* ---------------- Cursor glow ---------------- */
  const glow = $("#cursorGlow");
  if (glow && !reducedMotion && window.matchMedia("(hover: hover)").matches) {
    document.addEventListener(
      "mousemove",
      (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      },
      { passive: true }
    );
  }

  /* ---------------- Before / After slider ---------------- */
  const ba = $("#beforeAfter");
  const baRange = $("#baRange");
  if (ba && baRange) {
    const set = (v) => ba.style.setProperty("--pos", v + "%");
    baRange.addEventListener("input", () => set(baRange.value));
    set(baRange.value);
  }

  /* ---------------- Tilt cards ---------------- */
  if (!reducedMotion && window.matchMedia("(hover: hover)").matches) {
    $$(".tilt").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ---------------- 3D works carousel ---------------- */
  const stage3d = $("#c3dStage");
  const ring3d = $("#c3dRing");
  const lb = $("#lightbox");
  if (stage3d && ring3d && lb) {
    const UNIQUE = 5;
    const FACES = 10;
    const lbImg = $("#lbImg");
    const lbCap = $("#lbCap");
    const lbClose = $("#lbClose");
    let rot = 0, vel = 0, dragging = false, moved = 0, lastX = 0;
    let autoOn = true;
    let autoTimer = null;
    let lbOpen = false;

    const faces = [];
    for (let i = 0; i < FACES; i++) {
      const idx = (i % UNIQUE) + 1;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "c3d-face";
      b.dataset.idx = String(idx);
      const img = document.createElement("img");
      img.src = "assets/gallery/work-" + idx + ".jpg";
      img.alt = "";
      img.draggable = false;
      img.loading = "lazy";
      b.appendChild(img);
      ring3d.appendChild(b);
      faces.push(b);
    }

    function layout3d() {
      const cw = window.innerWidth <= 640 ? 1280 : 1980;
      const faceW = cw / FACES;
      const faceH = faceW * 0.74;
      const radius = Math.round(cw / (2 * Math.PI));
      stage3d.style.height = Math.round(faceH + 60) + "px";
      faces.forEach((f, i) => {
        f.style.width = faceW + "px";
        f.style.height = faceH + "px";
        f.style.margin = -faceH / 2 + "px 0 0 " + -faceW / 2 + "px";
        f.style.transform = "rotateY(" + (i * (360 / FACES)) + "deg) translateZ(" + radius + "px)";
      });
      render3d();
    }
    function render3d() {
      ring3d.style.transform = "translate(-50%, -50%) rotateY(" + rot + "deg)";
    }
    function pauseAuto() {
      autoOn = false;
      clearTimeout(autoTimer);
      autoTimer = setTimeout(() => {
        if (!lbOpen) autoOn = true;
      }, 3200);
    }

    let lastFrame = performance.now();
    function loop3d(t) {
      const dt = Math.min((t - lastFrame) / 16.67, 3);
      lastFrame = t;
      if (!dragging) {
        if (Math.abs(vel) > 0.012) {
          rot += vel * dt;
          vel *= Math.pow(0.94, dt);
          render3d();
        } else if (autoOn) {
          rot += 0.05 * dt;
          render3d();
        }
      }
      requestAnimationFrame(loop3d);
    }

    stage3d.addEventListener("pointerdown", (e) => {
      dragging = true;
      moved = 0;
      lastX = e.clientX;
      vel = 0;
      pauseAuto();
    });
    window.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      moved += Math.abs(dx);
      rot += dx * 0.16;
      vel = dx * 0.16;
      render3d();
    }, { passive: true });
    window.addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      pauseAuto();
    });

    faces.forEach((f) => {
      f.addEventListener("click", () => {
        if (moved > 8) return;
        openLb(parseInt(f.dataset.idx, 10));
      });
    });

    function openLb(idx) {
      lbOpen = true;
      autoOn = false;
      const cap = I18N[lang]["works.cap" + idx] || "";
      lbImg.src = "assets/gallery/work-" + idx + ".jpg";
      lbImg.alt = cap;
      lbCap.textContent = cap;
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      document.body.classList.add("lb-open");
      lbClose.focus();
    }
    function closeLb() {
      lbOpen = false;
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lb-open");
      pauseAuto();
    }
    lbClose.addEventListener("click", closeLb);
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLb();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lbOpen) closeLb();
    });

    $("#c3dPrev").addEventListener("click", () => { vel = 0; pauseAuto(); rot += 360 / FACES; render3d(); });
    $("#c3dNext").addEventListener("click", () => { vel = 0; pauseAuto(); rot -= 360 / FACES; render3d(); });

    window.addEventListener("resize", layout3d);
    layout3d();
    requestAnimationFrame(loop3d);
  }

  /* ---------------- Plan CTA -> form prefill ---------------- */
  const planMap = { "Básico": "basico", Premium: "premium", Gold: "gold" };
  $$(".plan-cta").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sel = $("#fService");
      if (sel) sel.value = planMap[btn.dataset.plan] || "diag";
      $("#contacto").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      setTimeout(() => $("#fName") && $("#fName").focus({ preventScroll: true }), 700);
    });
  });

  /* ---------------- Contact form -> WhatsApp ---------------- */
  const form = $("#contactForm");
  if (form) {
    const validate = (input, ok) => {
      input.closest(".field").classList.toggle("invalid", !ok);
      return ok;
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#fName").value.trim();
      const phone = $("#fPhone").value.trim();
      const okName = validate($("#fName"), name.length >= 2);
      const okPhone = validate($("#fPhone"), phone.replace(/\D/g, "").length >= 7);
      if (!okName) return $("#fName").focus();
      if (!okPhone) return $("#fPhone").focus();

      const dict = I18N[lang];
      const data = {
        name,
        phone,
        biz: $("#fBiz").value.trim(),
        loc: $("#fLoc").value,
        qty: $("#fQty").value || "1",
        service: dict["wa.svc"][$("#fService").value] || $("#fService").value,
        msg: $("#fMsg").value.trim()
      };
      const url = "https://wa.me/17875504894?text=" + encodeURIComponent(dict["wa.msg"](data));
      window.open(url, "_blank", "noopener");
    });
    $("#fName").addEventListener("blur", () => validate($("#fName"), $("#fName").value.trim().length >= 2));
    $("#fPhone").addEventListener("blur", () => validate($("#fPhone"), $("#fPhone").value.replace(/\D/g, "").length >= 7));
  }

  /* ---------------- Init ---------------- */
  applyLang(lang);
})();
