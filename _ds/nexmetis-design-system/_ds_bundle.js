/* @ds-bundle: {"format":3,"namespace":"NexMetisDesignSystem","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f5702042c10a","components/core/Button.jsx":"7d6a526a62d1","components/core/Card.jsx":"2a90ce7fcf00","components/core/ServiceCard.jsx":"dcb945b34ba3","web/js/main.js":"2221ce568f3e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NexMetisDesignSystem = window.NexMetisDesignSystem || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — category label / status chip for FEB.
 * Sharp corners, uppercase, tracked. Used for TABLAO, TALLER, FIESTA, CLASE.
 */
function Badge({
  children,
  variant = 'default',
  size = 'md'
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--font-semibold)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-badge)',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      fontSize: '9px',
      padding: '3px 7px'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '4px 10px'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '6px 14px'
    }
  };
  const variants = {
    default: {
      background: 'var(--color-obsidian)',
      color: 'var(--color-ivory-100)'
    },
    accent: {
      background: 'var(--color-crimson)',
      color: '#ffffff'
    },
    gold: {
      background: 'var(--color-dorado)',
      color: 'var(--color-obsidian)'
    },
    muted: {
      background: 'var(--color-ivory-400)',
      color: 'var(--text-secondary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--color-obsidian)'
    },
    'outline-inverse': {
      background: 'transparent',
      color: 'var(--color-ivory-100)',
      border: '1px solid rgba(255,255,255,0.4)'
    },
    'outline-accent': {
      background: 'transparent',
      color: 'var(--color-crimson)',
      border: '1px solid var(--color-crimson)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button component for Flamenco & Events Barcelona.
 * Sharp corners, uppercase tracked labels, three variants.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  href,
  type = 'button'
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--font-semibold)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-button)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 'var(--opacity-disabled)' : 1,
    transition: 'background var(--transition-base), color var(--transition-base), border-color var(--transition-base)',
    textDecoration: 'none',
    border: '1px solid transparent',
    userSelect: 'none',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: 'var(--button-padding-y-sm) var(--button-padding-x-sm)'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: 'var(--button-padding-y) var(--button-padding-x)'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: 'var(--button-padding-y-lg) var(--button-padding-x-lg)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--action-primary-text)',
      borderColor: 'var(--action-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--color-obsidian)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'transparent'
    },
    accent: {
      background: 'var(--action-accent)',
      color: '#ffffff',
      borderColor: 'var(--action-accent)'
    },
    inverse: {
      background: 'var(--color-ivory-100)',
      color: 'var(--color-obsidian)',
      borderColor: 'var(--color-ivory-100)'
    },
    'inverse-outline': {
      background: 'transparent',
      color: 'var(--color-ivory-100)',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: disabled ? undefined : href,
      style: style
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: disabled ? undefined : onClick,
    style: style,
    disabled: disabled
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Card — content container for FEB.
 * Sharp corners, minimal shadow, supports light and dark variants.
 */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  shadow = true,
  onClick,
  style: styleProp
}) {
  const paddings = {
    none: '0',
    sm: 'var(--card-padding-sm)',
    md: 'var(--card-padding)',
    lg: 'var(--space-12)'
  };
  const variants = {
    default: {
      background: 'var(--bg-card)',
      color: 'var(--text-primary)',
      border: 'var(--border-default)'
    },
    subtle: {
      background: 'var(--bg-subtle)',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--bg-card-dark)',
      color: 'var(--text-inverse)',
      border: 'var(--border-inverse)'
    },
    outlined: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: 'var(--border-strong)'
    },
    'outlined-inverse': {
      background: 'transparent',
      color: 'var(--text-inverse)',
      border: 'var(--border-inverse)'
    }
  };
  const style = {
    borderRadius: 'var(--radius-card)',
    padding: paddings[padding],
    boxShadow: shadow ? 'var(--shadow-sm)' : 'none',
    transition: 'box-shadow var(--transition-base)',
    cursor: onClick ? 'pointer' : undefined,
    overflow: 'hidden',
    ...variants[variant],
    ...styleProp
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
/**
 * ServiceCard — featured card for FEB's 4 main services.
 * Dark variant with category badge, title, description, and CTA.
 */
function ServiceCard({
  category,
  title,
  description,
  ctaLabel = 'SABER MÁS',
  ctaHref,
  onCtaClick,
  theme = 'light',
  badgeVariant = 'default',
  imageUrl
}) {
  const isDark = theme === 'dark';
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--gap-sm)',
    padding: 'var(--card-padding)',
    background: isDark ? 'var(--color-obsidian-100)' : 'var(--color-blanco)',
    color: isDark ? 'var(--color-ivory-100)' : 'var(--text-primary)',
    borderRadius: 'var(--radius-card)',
    boxShadow: isDark ? 'none' : 'var(--shadow-md)',
    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--color-ivory-400)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '280px'
  };
  const overlayStyle = imageUrl ? {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.50) 55%, rgba(10,10,10,0.15) 100%)`,
    zIndex: 0
  } : null;
  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--gap-sm)',
    height: '100%'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...cardStyle,
      backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: imageUrl ? 'var(--color-ivory-100)' : isDark ? 'var(--color-ivory-100)' : 'var(--text-primary)'
    }
  }, imageUrl && /*#__PURE__*/React.createElement("div", {
    style: overlayStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: contentStyle
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: imageUrl ? 'outline-inverse' : badgeVariant,
    size: "md"
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--font-bold)',
      lineHeight: 'var(--leading-snug)',
      marginTop: 'auto'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      opacity: 0.8
    }
  }, description), ctaLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--gap-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: imageUrl || isDark ? 'inverse-outline' : 'secondary',
    size: "sm",
    href: ctaHref,
    onClick: onCtaClick
  }, ctaLabel))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// web/js/main.js
try { (() => {
/* main.js — Flamenco & Events Barcelona */

/* ── Translations ──────────────────────────────────────── */
const i18n = {
  es: {
    'nav.tablao': 'Tablao',
    'nav.talleres': 'Talleres',
    'nav.clases': 'Clases',
    'nav.galeria': 'Galería',
    'nav.about': 'Quiénes somos',
    'nav.contacto': 'Contacto',
    'nav.blog': 'Blog',
    'nav.cta': 'Reservar',
    'footer.services': 'Servicios',
    'footer.company': 'Compañía',
    'footer.contact': 'Contacto',
    'footer.about': 'Sobre nosotros',
    'footer.artists': 'Artistas',
    'footer.gallery': 'Galería',
    'footer.press': 'Prensa',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.desc': 'La experiencia más auténtica del flamenco en Barcelona.',
    'footer.copy': '© 2026 Flamenco & Events Barcelona. Todos los derechos reservados.'
  },
  ca: {
    'nav.tablao': 'Tablao',
    'nav.talleres': 'Tallers',
    'nav.clases': 'Classes',
    'nav.galeria': 'Galeria',
    'nav.about': 'Qui som',
    'nav.contacto': 'Contacte',
    'nav.blog': 'Blog',
    'nav.cta': 'Reservar',
    'footer.services': 'Serveis',
    'footer.company': 'Companyia',
    'footer.contact': 'Contacte',
    'footer.about': 'Qui som',
    'footer.artists': 'Artistes',
    'footer.gallery': 'Galeria',
    'footer.press': 'Premsa',
    'footer.privacy': 'Privadesa',
    'footer.terms': 'Condicions',
    'footer.desc': 'L\'experiència més autèntica del flamenc a Barcelona.',
    'footer.copy': '© 2026 Flamenco & Events Barcelona. Tots els drets reservats.'
  },
  en: {
    'nav.tablao': 'Tablao',
    'nav.talleres': 'Workshops',
    'nav.clases': 'Classes',
    'nav.galeria': 'Gallery',
    'nav.about': 'About us',
    'nav.contacto': 'Contact',
    'nav.blog': 'Blog',
    'nav.cta': 'Book now',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.about': 'About us',
    'footer.artists': 'Artists',
    'footer.gallery': 'Gallery',
    'footer.press': 'Press',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.desc': 'The most authentic flamenco experience in Barcelona.',
    'footer.copy': '© 2026 Flamenco & Events Barcelona. All rights reserved.'
  }
};

/* ── Current page detection ──────────────────────────── */
function getCurrentPage() {
  const p = window.location.pathname.split('/').pop() || 'index.html';
  return p;
}

/* ── Nav HTML ────────────────────────────────────────── */
function buildNav(lang) {
  const t = i18n[lang];
  const page = getCurrentPage();
  const active = href => page === href ? 'active' : '';
  const root = document.querySelector('meta[name="root-path"]')?.content || '';
  return `
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">
      <img src="${root}assets/logo.jpg" alt="FEB">
      <span class="nav-logo-text">Flamenco &amp; Events<em>Barcelona</em></span>
    </a>
    <div class="nav-links">
      <a class="nav-link ${active('tablao.html')}"          href="${root}tablao.html"          data-i18n="nav.tablao">${t['nav.tablao']}</a>
      <a class="nav-link ${active('talleres.html')}"        href="${root}talleres.html"        data-i18n="nav.talleres">${t['nav.talleres']}</a>
      <a class="nav-link ${active('clases.html')}"          href="${root}clases.html"          data-i18n="nav.clases">${t['nav.clases']}</a>
      <a class="nav-link ${active('galeria.html')}"         href="${root}galeria.html"         data-i18n="nav.galeria">${t['nav.galeria']}</a>
      <a class="nav-link ${active('sobre-nosotros.html')}"  href="${root}sobre-nosotros.html"  data-i18n="nav.about">${t['nav.about']}</a>
      <a class="nav-link ${active('blog.html')}"            href="${root}blog.html"            data-i18n="nav.blog">${t['nav.blog']}</a>
    </div>
    <div class="lang-sw">
      <button class="lang-btn ${lang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
      <button class="lang-btn ${lang === 'ca' ? 'active' : ''}" data-lang="ca">CA</button>
      <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    </div>
    <a href="${root}contacto.html" class="btn btn-sm btn-inverse nav-cta" data-i18n="nav.cta">${t['nav.cta']}</a>
    <button class="nav-burger" id="nav-burger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <a class="nav-link" href="${root}index.html">Inicio / Inici / Home</a>
  <a class="nav-link" href="${root}tablao.html" data-i18n="nav.tablao">${t['nav.tablao']}</a>
  <a class="nav-link" href="${root}talleres.html" data-i18n="nav.talleres">${t['nav.talleres']}</a>
  <a class="nav-link" href="${root}clases.html" data-i18n="nav.clases">${t['nav.clases']}</a>
  <a class="nav-link" href="${root}galeria.html" data-i18n="nav.galeria">${t['nav.galeria']}</a>
  <a class="nav-link" href="${root}sobre-nosotros.html" data-i18n="nav.about">${t['nav.about']}</a>
  <a class="nav-link" href="${root}blog.html" data-i18n="nav.blog">${t['nav.blog']}</a>
  <a class="nav-link" href="${root}contacto.html" data-i18n="nav.contacto">${t['nav.contacto']}</a>
  <div class="lang-sw">
    <button class="lang-btn ${lang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
    <button class="lang-btn ${lang === 'ca' ? 'active' : ''}" data-lang="ca">CA</button>
    <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
  </div>
  <a href="${root}contacto.html" class="btn btn-md btn-inverse" data-i18n="nav.cta">${t['nav.cta']}</a>
</div>`;
}

/* ── Footer HTML ─────────────────────────────────────── */
function buildFooter(lang) {
  const t = i18n[lang];
  const root = document.querySelector('meta[name="root-path"]')?.content || '';
  return `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-brand-name">Flamenco &amp; Events Barcelona</div>
      <div class="footer-tagline">Arte con Alma</div>
      <p class="footer-desc" data-i18n="footer.desc">${t['footer.desc']}</p>
    </div>
    <div>
      <div class="footer-heading" data-i18n="footer.services">${t['footer.services']}</div>
      <div class="footer-links">
        <a href="${root}tablao.html"    class="footer-link" data-i18n="nav.tablao">${t['nav.tablao']}</a>
        <a href="${root}talleres.html"  class="footer-link" data-i18n="nav.talleres">${t['nav.talleres']}</a>
        <a href="${root}clases.html"    class="footer-link" data-i18n="nav.clases">${t['nav.clases']}</a>
        <a href="${root}contacto.html"  class="footer-link">Fiestas privadas</a>
      </div>
    </div>
    <div>
      <div class="footer-heading" data-i18n="footer.company">${t['footer.company']}</div>
      <div class="footer-links">
        <a href="${root}sobre-nosotros.html" class="footer-link" data-i18n="footer.about">${t['footer.about']}</a>
        <a href="${root}galeria.html"        class="footer-link" data-i18n="footer.gallery">${t['footer.gallery']}</a>
        <a href="${root}blog.html"           class="footer-link" data-i18n="nav.blog">${t['nav.blog']}</a>
      </div>
    </div>
    <div>
      <div class="footer-heading" data-i18n="footer.contact">${t['footer.contact']}</div>
      <div class="footer-links">
        <span class="footer-link">Barcelona, Catalunya</span>
        <a href="mailto:info@flamencoeventsbarcelona.com" class="footer-link">info@flamencoevents<wbr>barcelona.com</a>
        <a href="https://www.flamencoeventsbarcelona.com" class="footer-link">flamencoeventsbarcelona.com</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span data-i18n="footer.copy">${t['footer.copy']}</span>
    <div style="display:flex;gap:20px">
      <a href="#" class="footer-link" data-i18n="footer.privacy">${t['footer.privacy']}</a>
      <a href="#" class="footer-link" data-i18n="footer.terms">${t['footer.terms']}</a>
    </div>
  </div>
</footer>`;
}

/* ── Apply translations ──────────────────────────────── */
function applyLang(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'ca' ? 'ca' : lang === 'en' ? 'en' : 'es';
  localStorage.setItem('feb-lang', lang);
}

/* ── Fade-in on scroll ───────────────────────────────── */
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {
    threshold: 0.1
  });
  els.forEach(el => obs.observe(el));
}

/* ── Init ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('feb-lang') || 'es';

  /* Inject nav */
  const navPh = document.getElementById('nav-placeholder');
  if (navPh) navPh.outerHTML = buildNav(lang);

  /* Inject footer */
  const ftPh = document.getElementById('footer-placeholder');
  if (ftPh) ftPh.outerHTML = buildFooter(lang);

  /* Language buttons */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    applyLang(btn.dataset.lang);
    /* Rebuild nav/footer in new lang */
    const nav = document.getElementById('main-nav');
    if (nav) {
      nav.outerHTML = buildNav(btn.dataset.lang) + (document.getElementById('nav-mobile')?.outerHTML || '');
    }
  });

  /* Burger menu */
  document.addEventListener('click', e => {
    if (e.target.closest('#nav-burger')) {
      document.getElementById('nav-burger')?.classList.toggle('open');
      document.getElementById('nav-mobile')?.classList.toggle('open');
    } else if (!e.target.closest('.nav-mobile')) {
      document.getElementById('nav-burger')?.classList.remove('open');
      document.getElementById('nav-mobile')?.classList.remove('open');
    }
  });

  // Hide broken photo placeholders silently — shows gradient bg instead
  document.querySelectorAll('.photo-slot img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });
  initFadeUp();
  if (lang !== 'es') applyLang(lang);
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "web/js/main.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
