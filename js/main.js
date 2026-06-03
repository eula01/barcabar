function initNewsletter() {
  const openBtn = document.getElementById("newsletter-open");
  const overlay = document.getElementById("newsletter-modal");
  const closeBtn = document.getElementById("newsletter-close");
  const form = document.getElementById("newsletter-form");
  const successEl = document.getElementById("form-success");

  if (!overlay || !form) return;

  const open = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    const first = form.querySelector("input");
    if (first) first.focus();
  };

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  };

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = window.barcabarI18n?.getStoredLang?.() || "en";
    const msg =
      window.barcabarI18n?.T?.[lang]?.["newsletter.success"] ||
      "Thank you — you're on the list.";
    successEl.textContent = msg;
    form.reset();
    setTimeout(() => {
      successEl.textContent = "";
    }, 5000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initNewsletter();
});
