(function () {
  const DEFAULT_LANG = "en";
  let currentLang = DEFAULT_LANG;

  // Figure out which language to show on first load:
  // 1) a language the visitor picked before (localStorage)
  // 2) their browser's language, if we support it
  // 3) English
  function getInitialLang() {
    const saved = localStorage.getItem("preferredLanguage");
    if (saved && translations[saved]) return saved;
    const browserLang = (navigator.language || "").slice(0, 2);
    if (translations[browserLang]) return browserLang;
    return DEFAULT_LANG;
  }

  // Look up "contact.form.errors.email" style keys inside translations[lang].
  // Falls back to English, then to the raw key, so the UI never shows
  // "undefined" if a translation is missing.
  function getText(lang, key) {
    const value = key
      .split(".")
      .reduce((node, part) => (node ? node[part] : undefined), translations[lang]);
    if (value === undefined) {
      return lang !== DEFAULT_LANG ? getText(DEFAULT_LANG, key) : key;
    }
    return value;
  }

  function formatStats(lang) {
    document.querySelectorAll(".stat-num").forEach((el) => {
      const raw = Number(el.getAttribute("data-num"));
      el.textContent = new Intl.NumberFormat(lang).format(raw);
    });
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = getText(lang, el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", getText(lang, el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    formatStats(lang);
    localStorage.setItem("preferredLanguage", lang);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // Contact form: client-side validation with messages in the active language
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  // This can only confirm the FORMAT looks right (something@something.tld) —
  // it can't know whether the address is real or receives mail. Addresses
  // like "test@test.com" pass on purpose: they ARE validly formatted.
  // Confirming an address actually exists needs a server (e.g. sending a
  // verification link), which this static front-end doesn't have.
  const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const HAS_LETTER_RE = /\p{L}/u; // at least one real letter, any language
  const MIN_MESSAGE_LENGTH = 10;
  // "test@test.com" IS validly formatted — no regex can tell it apart from a
  // real address shaped the same way. To actually reject it, we block
  // specific known placeholder/example domains instead of trying to make
  // the regex "smarter."
  const BLOCKED_EMAIL_DOMAINS = new Set([
    "example.com", "example.net", "example.org", "example.edu",
    "test.com", "test.test", "domain.com", "yourdomain.com", "company.com",
    "mailinator.com", "guerrillamail.com", "yopmail.com"
  ]);

  function isBlockedEmailDomain(email) {
    const domain = email.split("@")[1]?.toLowerCase();
    return BLOCKED_EMAIL_DOMAINS.has(domain);
  }

  function setError(field, key) {
    const el = form.querySelector(`[data-error-for="${field}"]`);
    if (el) el.textContent = key ? getText(currentLang, key) : "";
  }

  // Clear a field's error as soon as the visitor edits it again, instead of
  // making them re-submit just to see the message go away.
  ["name", "email", "message"].forEach((field) => {
    form[field].addEventListener("input", () => setError(field, null));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    let valid = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    setError("name", null);
    setError("email", null);
    setError("message", null);

    if (!name) {
      setError("name", "contact.form.errors.required");
      valid = false;
    } else if (name.length < 2 || !HAS_LETTER_RE.test(name)) {
      setError("name", "contact.form.errors.nameInvalid");
      valid = false;
    }

    if (!email) {
      setError("email", "contact.form.errors.required");
      valid = false;
    } else if (!EMAIL_RE.test(email) || isBlockedEmailDomain(email)) {
      setError("email", "contact.form.errors.email");
      valid = false;
    }

    if (!message) {
      setError("message", "contact.form.errors.required");
      valid = false;
    } else if (message.length < MIN_MESSAGE_LENGTH) {
      setError("message", "contact.form.errors.messageTooShort");
      valid = false;
    }

    if (!valid) return;

    // Honeypot: real visitors never see this field (it's positioned
    // off-screen). If it has a value, a bot filled it in — quietly drop
    // the submission instead of showing the success message.
    if (form.website.value) {
      form.reset();
      return;
    }

    status.textContent = getText(currentLang, "contact.form.success");
    form.reset();
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  applyLanguage(getInitialLang());
})();