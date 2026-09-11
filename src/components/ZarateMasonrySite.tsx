"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type Lang = "en" | "es";
type Cat = "chimney" | "brick" | "stone" | "block";
type GalFilter = "all" | "chimney" | "firebox" | "brick" | "block";

const TEXT = {
  en: {
    nav_services: "Services",
    nav_chimney: "Chimney Repair",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Free Estimate",
    hero_badge: "DES MOINES, WA",
    hero_h1_pre: "Chimney Repair & Masonry ",
    hero_h1_em: "Built for Des Moines, WA Homes.",
    hero_tagline:
      "Residential chimney repair, restoration, brick, stone and block work with 20+ years of hands-on masonry experience.",
    hero_prefer: "Prefer to talk? Call",
    trust_licensed: "Licensed",
    trust_bonded: "Bonded",
    trust_insured: "Insured",
    trust_estimates: "Free Estimates",
    hs_k1: "Specialty",
    hs_v1: "Chimney Repair & Restoration",
    hs_k2: "Experience",
    hs_v2: "20+ Years",
    hs_k3: "WA License",
    hs_k4: "Insured",
    hs_v4: "Up to $1M",
    quote_eyebrow: "Project Intake",
    quote_h2: "What needs to be fixed?",
    tab_chimney: "Chimney",
    tab_brick: "Brick",
    tab_stone: "Stone",
    tab_block: "Block",
    lbl_name: "Name",
    lbl_phone: "Phone",
    lbl_email: "Email",
    lbl_address: "Address",
    lbl_help: "What do you need help with?",
    lbl_seeing: "Tell us what you're seeing",
    ph_name2: "Your name",
    ph_phone2: "(253) 000-0000",
    ph_email: "Email",
    ph_address: "Address",
    request_btn: "Request Free Estimate",
    quote_note_prefix: "Licensed · Bonded · Insured  ·  ",
    form_success: "Thanks — we received your request and will be in touch shortly.",
    see_examples: "See Examples",
    chimney_title: "Chimney Repair & Restoration",
    chimney_intro:
      "Northwest winters are hard on brick and stone chimneys. We repair, rebuild, and weatherproof them so they hold up through the next twenty years.",
    fc1_t: "Chimney Rebuild",
    fc1_d: "Full brick or stone chimney repair and rebuild, brought back to code.",
    fc2_t: "Caps, Crowns & Liners",
    fc2_d: "Rain cap installation, crown repair, and flue liner replacement.",
    fc3_t: "Flashing & Waterproofing",
    fc3_d: "Flashing fixed where the chimney meets the roof — the most common source of leaks.",
    fc4_t: "Firebox & Repointing",
    fc4_d: "Firebox repair and repointing of old, crumbling mortar joints.",
    other_title: "Other Residential Masonry",
    other_intro: "Beyond chimneys, we handle the brick and block work that holds a property together.",
    o1_t: "Posts & Pillars",
    o1_d: "New, repair, or rebuild.",
    o2_t: "Porch Repair",
    o2_d: "Repair, rebuild, or new construction.",
    o3_t: "Brick & Block Walls",
    o3_d: "Repair or new construction.",
    o4_t: "Brick Stairs",
    o4_d: "Repair, rebuild, or new.",
    o5_t: "Pressure Washing",
    o5_d: "Restore the look of brick and stone.",
    o6_t: "Waterproofing",
    o6_d: "Protect masonry from moisture damage.",
    o7_t: "New Brick or Stone Projects",
    o7_d: "Custom masonry built from scratch.",
    o8_t: "Retaining Walls",
    o8_d: "Built to hold, built to last.",
    darkcta_h: "Not sure which service you need?",
    darkcta_p: "Call Zarate Masonry and we'll help you figure out exactly what your property needs.",
    darkcta_btn: "Call (253) 455-8032",
    materials_title: "Materials We Work With",
    mat_brick_t: "Brick",
    mat_brick_d: "Laid course by course.",
    mat_block_t: "Block",
    mat_block_d: "CMU block, built to hold.",
    mat_stone_t: "Stone",
    mat_stone_d: "Natural stone, set by hand.",
    gallery_title: "Real Work, Real Chimneys",
    gallery_intro: "Every photo here is a job Zarate Masonry actually did — no stock photos.",
    filter_all: "All",
    cat_chimney_short: "Chimney",
    cat_firebox: "Firebox & Fireplace",
    cat_brick_short: "Brick",
    cat_block: "Block Walls",
    tag_process: "In progress",
    tag_result: "Finished",
    gallery_cta: "Like what you see? Get your free estimate.",
    gallery_full_link: "View Full Gallery (67 Photos)",
    about_title: "Jose Salas, Zarate Masonry",
    about_p1: "20+ years of hands-on masonry experience.",
    about_p2:
      "When you call Zarate Masonry, you're talking to the person who shows up on the roof — not a call center.",
    license_title: "Licensed, Bonded & Insured",
    license_k1: "WA Contractor License",
    license_v1b: "Construction Contractor",
    license_k2: "License Status",
    license_v2: "Active — verified August 2026",
    license_k3: "Insured",
    license_v3: "Hiscox Insurance Company — up to $1,000,000",
    license_k4: "Bonded",
    license_v4: "Hartford Insurance Co (The Midwest) — $6,000",
    license_verify_link: "Verify this license at secure.lni.wa.gov/verify",
    servicearea_quote: "Based in Des Moines, Washington.",
    contact_title2: "Ready When You Are",
    contact_lead2: "Call, text, or send the form above — we'll get back to you with a free estimate.",
    contact_based: "Based in Des Moines, WA",
    footer_tag: "Chimney Repair & Restoration Specialist — Des Moines, WA.",
    footer_gallery: "Gallery",
    footer_license: "WA License ZARATML791NF — Licensed, Bonded & Insured",
    sticky_label: "Contact Now",
    sticky_call: "Call (253) 455-8032",
    sticky_call_short: "Call Now",
    sticky_wa: "WhatsApp",
    alt_design_kicker: "Something different",
    alt_design_title: "Curious about another look?",
    alt_design_p: "We also put together an alternate design concept for this site — take a look and tell us which one you like more.",
    alt_design_btn: "View The Other Design",
  },
  es: {
    nav_services: "Servicios",
    nav_chimney: "Reparación de Chimeneas",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    nav_cta: "Presupuesto Gratis",
    hero_badge: "DES MOINES, WA",
    hero_h1_pre: "Reparación de Chimeneas y Mampostería ",
    hero_h1_em: "Hecha para Hogares de Des Moines, WA.",
    hero_tagline:
      "Reparación y restauración de chimeneas, trabajo en ladrillo, piedra y block, con 20+ años de experiencia práctica en mampostería.",
    hero_prefer: "¿Prefiere hablar? Llame al",
    trust_licensed: "Con Licencia",
    trust_bonded: "Afianzado",
    trust_insured: "Asegurado",
    trust_estimates: "Presupuestos Gratis",
    hs_k1: "Especialidad",
    hs_v1: "Reparación y Restauración de Chimeneas",
    hs_k2: "Experiencia",
    hs_v2: "20+ Años",
    hs_k3: "Licencia de WA",
    hs_k4: "Asegurado",
    hs_v4: "Hasta $1M",
    quote_eyebrow: "Solicitud de Proyecto",
    quote_h2: "¿Qué necesita reparar?",
    tab_chimney: "Chimenea",
    tab_brick: "Ladrillo",
    tab_stone: "Piedra",
    tab_block: "Block",
    lbl_name: "Nombre",
    lbl_phone: "Teléfono",
    lbl_email: "Correo",
    lbl_address: "Dirección",
    lbl_help: "¿Con qué necesita ayuda?",
    lbl_seeing: "Cuéntenos qué está viendo",
    ph_name2: "Su nombre",
    ph_phone2: "(253) 000-0000",
    ph_email: "Correo",
    ph_address: "Dirección",
    request_btn: "Solicitar Presupuesto Gratis",
    quote_note_prefix: "Con Licencia · Afianzado · Asegurado  ·  ",
    form_success: "Gracias — recibimos su solicitud y nos pondremos en contacto pronto.",
    see_examples: "Ver Ejemplos",
    chimney_title: "Reparación y Restauración de Chimeneas",
    chimney_intro:
      "Los inviernos del noroeste desgastan las chimeneas de ladrillo y piedra. Las reparamos, reconstruimos e impermeabilizamos para que duren veinte años más.",
    fc1_t: "Reconstrucción de Chimenea",
    fc1_d: "Reparación y reconstrucción completa de chimeneas de ladrillo o piedra, conforme al código.",
    fc2_t: "Tapas, Coronas y Flue Liners",
    fc2_d: "Instalación de tapas, reparación de corona y reemplazo de flue liner.",
    fc3_t: "Flashing e Impermeabilización",
    fc3_d: "Reparación del flashing donde la chimenea se une al techo — la fuente más común de filtraciones.",
    fc4_t: "Firebox y Rejunteado",
    fc4_d: "Reparación del firebox y rejunteado de juntas de mortero viejas.",
    other_title: "Otros Trabajos de Mampostería Residencial",
    other_intro: "Además de chimeneas, nos encargamos del trabajo en ladrillo y block que mantiene unida una propiedad.",
    o1_t: "Postes y Pilares",
    o1_d: "Nuevos, reparación o reconstrucción.",
    o2_t: "Reparación de Porches",
    o2_d: "Reparación, reconstrucción o construcción nueva.",
    o3_t: "Muros de Ladrillo y Block",
    o3_d: "Reparación o construcción nueva.",
    o4_t: "Escaleras de Ladrillo",
    o4_d: "Reparación, reconstrucción o nuevas.",
    o5_t: "Lavado a Presión",
    o5_d: "Recupera el aspecto del ladrillo y la piedra.",
    o6_t: "Impermeabilización",
    o6_d: "Protege la mampostería de la humedad.",
    o7_t: "Proyectos Nuevos en Ladrillo o Piedra",
    o7_d: "Mampostería a medida, construida desde cero.",
    o8_t: "Muros de Contención",
    o8_d: "Construidos para sostener y durar.",
    darkcta_h: "¿No está seguro qué servicio necesita?",
    darkcta_p: "Llame a Zarate Masonry y le ayudamos a identificar exactamente qué necesita su propiedad.",
    darkcta_btn: "Llamar (253) 455-8032",
    materials_title: "Materiales con los que Trabajamos",
    mat_brick_t: "Ladrillo",
    mat_brick_d: "Hilada por hilada.",
    mat_block_t: "Block",
    mat_block_d: "Block CMU, construido para sostener.",
    mat_stone_t: "Piedra",
    mat_stone_d: "Piedra natural, colocada a mano.",
    gallery_title: "Trabajo Real, Chimeneas Reales",
    gallery_intro: "Cada foto aquí es un trabajo que Zarate Masonry realmente hizo — sin fotos de stock.",
    filter_all: "Todas",
    cat_chimney_short: "Chimenea",
    cat_firebox: "Firebox y Chimenea",
    cat_brick_short: "Ladrillo",
    cat_block: "Muros de Block",
    tag_process: "En proceso",
    tag_result: "Terminado",
    gallery_cta: "¿Le gusta lo que ve? Solicite su presupuesto gratis.",
    gallery_full_link: "Ver Galería Completa (67 Fotos)",
    about_title: "Jose Salas, Zarate Masonry",
    about_p1: "20+ años de experiencia práctica en mampostería.",
    about_p2:
      "Cuando llama a Zarate Masonry, habla directamente con la persona que sube al techo — no con un call center.",
    license_title: "Con Licencia, Afianzado y Asegurado",
    license_k1: "Licencia de Contratista de WA",
    license_v1b: "Construction Contractor",
    license_k2: "Estado de la Licencia",
    license_v2: "Activa — verificada en agosto de 2026",
    license_k3: "Asegurado",
    license_v3: "Hiscox Insurance Company — hasta $1,000,000",
    license_k4: "Afianzado",
    license_v4: "Hartford Insurance Co (The Midwest) — $6,000",
    license_verify_link: "Verifique esta licencia en secure.lni.wa.gov/verify",
    servicearea_quote: "Con base en Des Moines, Washington.",
    contact_title2: "Cuando Usted Diga",
    contact_lead2: "Llame, escriba o envíe el formulario de arriba — le responderemos con un presupuesto gratis.",
    contact_based: "Con base en Des Moines, WA",
    footer_tag: "Especialista en Reparación y Restauración de Chimeneas — Des Moines, WA.",
    footer_gallery: "Galería",
    footer_license: "Licencia de WA ZARATML791NF — Con Licencia, Afianzado y Asegurado",
    sticky_label: "Contáctenos",
    sticky_call: "Llamar (253) 455-8032",
    sticky_call_short: "Llamar",
    sticky_wa: "WhatsApp",
    alt_design_kicker: "Algo diferente",
    alt_design_title: "¿Quiere ver otro estilo?",
    alt_design_p: "También armamos una propuesta de diseño alterna para este sitio — échele un vistazo y cuéntenos cuál le gusta más.",
    alt_design_btn: "Ver la Otra Propuesta",
  },
} as const;

const CATS: Record<Lang, Record<Cat, { services: string[]; ph: string }>> = {
  en: {
    chimney: {
      services: [
        "Chimney Rebuild",
        "Crown Repair or Rebuild",
        "Rain Cap Installation",
        "Flue Liner Installation",
        "Masonry Flashing",
        "Firebox Repair",
        "Repointing",
      ],
      ph: "Cracked crown, leak, loose mortar, damaged cap...",
    },
    brick: {
      services: ["Brick Wall — Repair or New", "Brick Stairs — Repair, Rebuild or New", "New Brick Project", "Repointing"],
      ph: "Cracked bricks, crumbling mortar, new wall needed...",
    },
    stone: {
      services: ["New Stone Project", "Stone Wall Repair", "Stone Veneer"],
      ph: "Loose stones, new stone wall or veneer...",
    },
    block: {
      services: ["Block Wall — Repair or New", "Retaining Wall", "Posts & Pillars"],
      ph: "Bowing wall, new block wall, retaining wall needed...",
    },
  },
  es: {
    chimney: {
      services: [
        "Reconstrucción de Chimenea",
        "Reparación o Reconstrucción de Corona",
        "Instalación de Tapa (Rain Cap)",
        "Instalación de Flue Liner",
        "Flashing de Mampostería",
        "Reparación de Firebox",
        "Rejunteado",
      ],
      ph: "Corona agrietada, filtración, mortero suelto, tapa dañada...",
    },
    brick: {
      services: [
        "Muro de Ladrillo — Reparación o Nuevo",
        "Escaleras de Ladrillo — Reparación, Reconstrucción o Nuevas",
        "Proyecto Nuevo en Ladrillo",
        "Rejunteado",
      ],
      ph: "Ladrillos agrietados, mortero desmoronado, muro nuevo...",
    },
    stone: {
      services: ["Proyecto Nuevo en Piedra", "Reparación de Muro de Piedra", "Revestimiento de Piedra"],
      ph: "Piedras sueltas, muro o revestimiento de piedra nuevo...",
    },
    block: {
      services: ["Muro de Block — Reparación o Nuevo", "Muro de Contención", "Postes y Pilares"],
      ph: "Muro pandeado, muro de block nuevo, muro de contención...",
    },
  },
};

const GALLERY: { src: string; alt: string; cat: GalFilter; tag: "process" | "result"; size?: "small"; anchor?: string }[] = [
  { src: "/images/gallery-chimney-scaffold.jpg", alt: "Tall brick chimney with scaffolding for repair access", cat: "chimney", tag: "process" },
  { src: "/images/gallery-chimney-caps-finished.jpg", alt: "Chimney with three finished flue caps", cat: "chimney", tag: "result", size: "small" },
  { src: "/images/gallery-chimney-sealant.jpg", alt: "Mason applying sealant to a chimney from scaffolding", cat: "chimney", tag: "process", size: "small" },
  { src: "/images/gallery-firebox-construction.jpg", alt: "Herringbone brick firebox under construction", cat: "firebox", tag: "process", size: "small" },
  { src: "/images/gallery-firebox-arch-finished.jpg", alt: "Brick arch fireplace with firebrick interior", cat: "firebox", tag: "result", anchor: "gal-firebox" },
  { src: "/images/gallery-chimney-ladder.jpg", alt: "Ladder set up for chimney access on a roof", cat: "chimney", tag: "process", size: "small" },
  { src: "/images/gallery-chimney-crown.jpg", alt: "Chimney crown being rebuilt with rebar reinforcement", cat: "chimney", tag: "process", anchor: "gal-chimney" },
  { src: "/images/gallery-brick-gate.jpg", alt: "Brick archway garden gate", cat: "brick", tag: "result", size: "small" },
  { src: "/images/gallery-brick-house-number.jpg", alt: "House number set in a brick arched pediment", cat: "brick", tag: "result", size: "small" },
  { src: "/images/gallery-block-wall.jpg", alt: "Mason building a concrete block wall", cat: "block", tag: "process" },
];

const CATEGORIES: Cat[] = ["chimney", "brick", "stone", "block"];
const FILTERS: GalFilter[] = ["all", "chimney", "firebox", "brick", "block"];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function ZarateMasonrySite() {
  const [lang, setLang] = useState<Lang>("en");
  const [currentCat, setCurrentCat] = useState<Cat>("chimney");
  const [galFilter, setGalFilter] = useState<GalFilter>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyOpen, setStickyOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = TEXT[lang];
  const catData = CATS[lang][currentCat];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: this form does not send data anywhere yet.
    // Connect it to a backend or a form service (e.g. Formspree, Vercel-compatible email API) before going live.
    setFormSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <header className="site-nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            Zarate <span>Masonry</span> LLC
          </a>
          <nav className="links">
            <a href="#services">{t.nav_services}</a>
            <a href="#chimney">{t.nav_chimney}</a>
            <a href="#gallery">{t.footer_gallery}</a>
            <a href="#about">{t.nav_about}</a>
          </nav>
          <div className="nav-right">
            <a className="nav-phone" href="tel:+12534558032">
              (253) 455-8032
            </a>
            <div className="lang-toggle" role="group" aria-label="Language">
              <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
                EN
              </button>
              <button type="button" className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>
                ES
              </button>
            </div>
            <a href="#contact" className="btn nav-cta">
              {t.nav_cta}
            </a>
            <button className="burger" aria-label="Menu" onClick={() => setMobileMenuOpen((v) => !v)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}>
          <a href="#services">{t.nav_services}</a>
          <a href="#chimney">{t.nav_chimney}</a>
          <a href="#gallery">{t.footer_gallery}</a>
          <a href="#about">{t.nav_about}</a>
          <a href="tel:+12534558032" className="m-phone">
            (253) 455-8032
          </a>
        </div>
      </header>

      <div id="top" />

      <div className="hero-shell">
        <div className="hero-card" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
          <div className="hero-inner">
            <span className="badge-pill">
              <span className="d" />
              <span>{t.hero_badge}</span>
            </span>
            <h1>
              {t.hero_h1_pre}
              <em>{t.hero_h1_em}</em>
            </h1>
            <p className="hero-tagline">{t.hero_tagline}</p>
            <div className="hero-divider" />
            <div className="check-row">
              <span className="ci">
                <CheckIcon />
                <span>{t.trust_licensed}</span>
              </span>
              <span className="ci">
                <CheckIcon />
                <span>{t.trust_bonded}</span>
              </span>
              <span className="ci">
                <CheckIcon />
                <span>{t.trust_insured}</span>
              </span>
              <span className="ci">
                <CheckIcon />
                <span>{t.trust_estimates}</span>
              </span>
            </div>
            <a href="tel:+12534558032" className="hero-talk">
              <span className="hero-talk-label">{t.hero_prefer}</span>
              <span className="hero-talk-number">(253) 455-8032</span>
              <ArrowRightIcon />
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hs-k">{t.hs_k1}</div>
              <div className="hs-v">{t.hs_v1}</div>
            </div>
            <div>
              <div className="hs-k">{t.hs_k2}</div>
              <div className="hs-v">{t.hs_v2}</div>
            </div>
            <div>
              <div className="hs-k">{t.hs_k3}</div>
              <div className="hs-v">ZARATML791NF</div>
            </div>
            <div>
              <div className="hs-k">{t.hs_k4}</div>
              <div className="hs-v">{t.hs_v4}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-shell">
        <div className="quote-card" id="contact">
          <div className="quote-top">
            <div>
              <div className="quote-eyebrow">{t.quote_eyebrow}</div>
              <h2>{t.quote_h2}</h2>
            </div>
            <div className="free-tag">
              <span className="d" />
              <span>{t.trust_estimates}</span>
            </div>
          </div>

          <div className="tab-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tab-btn${currentCat === cat ? " active" : ""}`}
                onClick={() => setCurrentCat(cat)}
              >
                {t[`tab_${cat}` as const]}
              </button>
            ))}
          </div>

          <form id="estimateForm" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="box-field">
                <input type="text" id="name" name="name" required placeholder={t.ph_name2} aria-label={t.lbl_name} />
              </div>
              <div className="box-field">
                <input type="tel" id="phone" name="phone" required placeholder={t.ph_phone2} aria-label={t.lbl_phone} />
              </div>
            </div>
            <div className="field-row">
              <div className="box-field">
                <input type="email" id="email" name="email" required placeholder={t.ph_email} aria-label={t.lbl_email} />
              </div>
              <div className="box-field">
                <input type="text" id="address" name="address" placeholder={t.ph_address} aria-label={t.lbl_address} />
              </div>
            </div>
            <div className="box-field">
              <select id="svcSelect" name="service_type" required defaultValue="" aria-label={t.lbl_help} key={currentCat + lang}>
                <option value="" disabled hidden>
                  {t.lbl_help}
                </option>
                {catData.services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="box-field">
              <textarea id="svcDetails" name="details" required placeholder={catData.ph} aria-label={t.lbl_seeing} key={currentCat + lang + "-ph"} />
            </div>
            <button type="submit" className="btn block">
              {t.request_btn}
              <ArrowUpRightIcon />
            </button>
            <p className="quote-note">
              {t.quote_note_prefix}
              <a href="https://wa.me/12534558032" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
            <p id="formMsg" className={formSubmitted ? "show" : undefined}>
              {t.form_success}
            </p>
          </form>
        </div>
      </div>
      <div className="trust-spacer" />

      <section id="chimney">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.chimney_title}</h2>
            <p>{t.chimney_intro}</p>
          </div>
          <div className="card-grid cols-4">
            {[
              { img: "/images/chimney-rebuild.jpg", alt: "Rebuilt brick chimney with concrete crown and flue caps", t: t.fc1_t, d: t.fc1_d, href: "#gal-chimney" },
              { img: "/images/chimney-caps.jpg", alt: "Chimney with rain cap and spark arrestor installed", t: t.fc2_t, d: t.fc2_d, href: "#gal-chimney" },
              { img: "/images/chimney-flashing.jpg", alt: "Chimney flashing repair in progress", t: t.fc3_t, d: t.fc3_d, href: "#gal-chimney" },
              { img: "/images/chimney-firebox.jpg", alt: "Herringbone brick firebox rebuild", t: t.fc4_t, d: t.fc4_d, href: "#gal-firebox" },
            ].map((card) => (
              <div className="svc-card" key={card.t}>
                <div className="thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.img} alt={card.alt} />
                </div>
                <div className="body">
                  <h3>{card.t}</h3>
                  <p>{card.d}</p>
                  <a href={card.href} className="link">
                    {t.see_examples} <ArrowRightIcon size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.other_title}</h2>
            <p>{t.other_intro}</p>
          </div>
          <div className="icon-grid">
            {[
              { t: t.o1_t, d: t.o1_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="21" /><line x1="18" y1="3" x2="18" y2="21" /><line x1="6" y1="8" x2="18" y2="8" /><line x1="6" y1="16" x2="18" y2="16" /></svg> },
              { t: t.o2_t, d: t.o2_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7" /><path d="M5 10v10h14V10" /></svg> },
              { t: t.o3_t, d: t.o3_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" /><rect x="13" y="3" width="8" height="8" /><rect x="3" y="13" width="8" height="8" /><rect x="13" y="13" width="8" height="8" /></svg> },
              { t: t.o4_t, d: t.o4_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h4v-4h4v-4h4v-4h4V5" /></svg> },
              { t: t.o5_t, d: t.o5_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6M6 8l1.5 2M18 8l-1.5 2" /><path d="M5 14a7 7 0 0 0 14 0c0-4-3-6-3-6H8s-3 2-3 6z" /></svg> },
              { t: t.o6_t, d: t.o6_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z" /></svg> },
              { t: t.o7_t, d: t.o7_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l4-3 4 3 4-3 4 3v10" /></svg> },
              { t: t.o8_t, d: t.o8_d, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="16" width="18" height="4" /><rect x="5" y="11" width="14" height="4" /><rect x="7" y="6" width="10" height="4" /></svg> },
            ].map((item) => (
              <div className="icon-card" key={item.t}>
                <div className="dot">{item.icon}</div>
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </div>
            ))}
          </div>

          <div className="dark-cta">
            <div>
              <h3>{t.darkcta_h}</h3>
              <p>{t.darkcta_p}</p>
            </div>
            <a href="tel:+12534558032" className="btn">
              {t.darkcta_btn}
              <PhoneIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="materials">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.materials_title}</h2>
          </div>
          <div className="materials-grid">
            <div className="mat-card" style={{ backgroundImage: "url('/images/materials-brick.jpg')" }}>
              <div className="mat-inner">
                <h3>{t.mat_brick_t}</h3>
                <p>{t.mat_brick_d}</p>
              </div>
            </div>
            <div className="mat-card" style={{ backgroundImage: "url('/images/materials-block.jpg')" }}>
              <div className="mat-inner">
                <h3>{t.mat_block_t}</h3>
                <p>{t.mat_block_d}</p>
              </div>
            </div>
            <div className="mat-card" style={{ backgroundImage: "url('/images/materials-stone.jpg')" }}>
              <div className="mat-inner">
                <h3>{t.mat_stone_t}</h3>
                <p>{t.mat_stone_d}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.gallery_title}</h2>
            <p>{t.gallery_intro}</p>
          </div>

          <div className="gal-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`gal-filter${galFilter === f ? " active" : ""}`}
                onClick={() => setGalFilter(f)}
              >
                {f === "all" && t.filter_all}
                {f === "chimney" && t.cat_chimney_short}
                {f === "firebox" && t.cat_firebox}
                {f === "brick" && t.cat_brick_short}
                {f === "block" && t.cat_block}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {GALLERY.map((item) => (
              <div
                key={item.src}
                id={item.anchor}
                className={`g-item${item.size === "small" ? " small" : ""}${galFilter !== "all" && galFilter !== item.cat ? " hidden" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} />
                <span className="g-tag">{item.tag === "process" ? t.tag_process : t.tag_result}</span>
              </div>
            ))}
          </div>

          <div className="gallery-cta">
            <Link href="/gallery" className="btn ghost">
              {t.gallery_full_link}
            </Link>
            <a href="#contact" className="btn">
              {t.gallery_cta}
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="about-wrap">
            <div className="about-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-jose-salas.jpg" alt="Jose Salas working from scaffolding on a chimney" />
            </div>
            <div className="about-copy">
              <h2>{t.about_title}</h2>
              <p>{t.about_p1}</p>
              <p>{t.about_p2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="license-shell">
        <div className="license-card">
          <h2>{t.license_title}</h2>
          <div className="license-grid">
            <div className="license-fact">
              <div className="k">{t.license_k1}</div>
              <div className="v">ZARATML791NF — {t.license_v1b}</div>
            </div>
            <div className="license-fact">
              <div className="k">{t.license_k2}</div>
              <div className="v">{t.license_v2}</div>
            </div>
            <div className="license-fact">
              <div className="k">{t.license_k3}</div>
              <div className="v">{t.license_v3}</div>
            </div>
            <div className="license-fact">
              <div className="k">{t.license_k4}</div>
              <div className="v">{t.license_v4}</div>
            </div>
          </div>
          <div className="license-verify">
            <a href="https://secure.lni.wa.gov/verify/" target="_blank" rel="noopener noreferrer">
              {t.license_verify_link}
            </a>
          </div>
        </div>
      </section>

      <section id="servicearea">
        <div className="wrap servicearea">
          <p>{t.servicearea_quote}</p>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="close-card">
            <h2>{t.contact_title2}</h2>
            <p style={{ margin: ".8rem auto 1.6rem", color: "var(--charcoal-soft)", maxWidth: "44ch", fontWeight: 400 }}>
              {t.contact_lead2}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "1.6rem", fontWeight: 600 }}>
              <a href="tel:+12534558032">(253) 455-8032</a>
              <a href="mailto:jose1775salas@gmail.com">jose1775salas@gmail.com</a>
              <span>{t.contact_based}</span>
            </div>
            <a href="#contact" className="btn">
              {t.request_btn}
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="alt-design-cta">
        <div className="wrap">
          <div className="alt-design-inner">
            <div className="quote-eyebrow">{t.alt_design_kicker}</div>
            <h2>{t.alt_design_title}</h2>
            <p>{t.alt_design_p}</p>
            <a href="/alt-design.html" className="btn btn-lg">
              {t.alt_design_btn}
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <div className="f-brand">Zarate Masonry LLC</div>
              <p style={{ marginTop: ".5rem", maxWidth: "32ch" }}>{t.footer_tag}</p>
            </div>
            <div className="footer-links">
              <a href="tel:+12534558032">(253) 455-8032</a>
              <a href="mailto:jose1775salas@gmail.com">jose1775salas@gmail.com</a>
              <span>{t.contact_based}</span>
            </div>
            <div className="footer-links">
              <a href="#chimney">{t.nav_chimney}</a>
              <a href="#services">{t.nav_services}</a>
              <a href="#gallery">{t.footer_gallery}</a>
              <a href="#contact">{t.nav_contact}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t.footer_license}</span>
            <span>© 2026 Zarate Masonry LLC</span>
          </div>
        </div>
      </footer>

      <div className={`sticky-desktop${stickyOpen ? " open" : ""}`}>
        <div className="sticky-panel">
          <a href="tel:+12534558032">{t.sticky_call}</a>
          <a href="https://wa.me/12534558032" target="_blank" rel="noopener noreferrer">
            {t.sticky_wa}
          </a>
        </div>
        <button className="sticky-toggle" onClick={() => setStickyOpen((v) => !v)}>
          {t.sticky_label}
        </button>
      </div>

      <div className="sticky-mobile">
        <a href="tel:+12534558032" className="call">
          {t.sticky_call_short}
        </a>
        <a href="https://wa.me/12534558032" target="_blank" rel="noopener noreferrer" className="wa">
          {t.sticky_wa}
        </a>
      </div>
    </>
  );
}
