const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const reverse = (value) => value.split("").reverse().join("");

const buildEmail = () => {
  const user = reverse("ofni");
  const domain = reverse("ed.elgnujdrohc");
  return `${user}@${domain}`;
};

const buildPhone = () => reverse("8849969710");

const formatGermanMobile = (phone) => phone.replace(/^(\d{4})(\d{3})(\d{2})(\d{2})$/, "$1 $2 $3 $4");

const encodeMailto = (email, subject = "", body = "") => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ""}`;
};

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  const email = buildEmail();
  link.href = encodeMailto(email, link.dataset.contactSubject || "", link.dataset.contactBody || "");
});

document.querySelectorAll("[data-email-user-rev][data-email-domain-rev]").forEach((target) => {
  const email = `${reverse(target.dataset.emailUserRev)}@${reverse(target.dataset.emailDomainRev)}`;
  const anchor = document.createElement("a");
  anchor.href = encodeMailto(email);
  anchor.textContent = email;
  anchor.rel = "nofollow";
  target.replaceChildren(anchor);
});

document.querySelectorAll("[data-phone-rev]").forEach((target) => {
  const phone = reverse(target.dataset.phoneRev);
  const anchor = document.createElement("a");
  anchor.href = `tel:${phone}`;
  anchor.textContent = formatGermanMobile(phone);
  anchor.rel = "nofollow";
  target.replaceChildren(anchor);
});

const details = document.querySelectorAll("details");
details.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      details.forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});

document.querySelectorAll("[data-copy-template]").forEach((button) => {
  button.addEventListener("click", async () => {
    const template = document.getElementById(button.dataset.copyTemplate);
    if (!template) return;
    const text = template.textContent.trim();
    let copied = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        copied = true;
      } catch {
        copied = false;
      }
    }
    if (!copied) {
      const fallback = document.createElement("textarea");
      fallback.value = text;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed";
      fallback.style.opacity = "0";
      document.body.append(fallback);
      fallback.select();
      document.execCommand("copy");
      fallback.remove();
    }
    const originalText = button.textContent;
    button.textContent = "Kopiert";
    setTimeout(() => { button.textContent = originalText; }, 1800);
  });
});
