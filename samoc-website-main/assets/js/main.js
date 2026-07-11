/* SAMOC Technology — interactions */
(function () {
  "use strict";

  /* Mobile nav toggle */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.textContent = links.classList.contains("open") ? "✕" : "☰";
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.textContent = "☰";
      })
    );
  }

  /* Reveal on scroll */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* Count-up stats */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const dur = 1400;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent =
              (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          co.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => co.observe(el));
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const ans = item.querySelector(".faq-a");
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!open) {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });

  /* Contact form → Formspree (AJAX submit) */
  const form = document.getElementById("contactForm");
  if (form) {
    const okBox = document.getElementById("formSuccess");
    const errBox = document.getElementById("formError");
    const btn = document.getElementById("submitBtn");
    const btnHtml = btn ? btn.innerHTML : "";
    const endpoint = form.getAttribute("action") || "";
    const configured = endpoint && endpoint.indexOf("YOUR_FORM_ID") === -1;

    const show = (box) => {
      if (!box) return;
      box.style.display = "flex";
      box.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      // Honeypot: nếu bot điền trường ẩn thì bỏ qua
      const trap = form.querySelector('[name="_gotcha"]');
      if (trap && trap.value) return;
      if (okBox) okBox.style.display = "none";
      if (errBox) errBox.style.display = "none";

      // Chưa cấu hình Formspree → hiển thị demo (chưa gửi mail thật)
      if (!configured) {
        show(okBox);
        form.reset();
        console.warn(
          "[SAMOC] Form đang ở chế độ demo. Thay YOUR_FORM_ID trong contact.html bằng mã form Formspree để gửi mail thật."
        );
        return;
      }

      if (btn) {
        btn.disabled = true;
        btn.dataset.loading = "1";
        btn.textContent = "Đang gửi...";
      }
      try {
        const data = new FormData(form);
        const emailField = form.querySelector('[name="email"]');
        if (emailField) data.append("_replyto", emailField.value);
        const res = await fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          show(okBox);
          form.reset();
        } else {
          show(errBox);
        }
      } catch (err) {
        show(errBox);
      } finally {
        if (btn) {
          btn.disabled = false;
          delete btn.dataset.loading;
          btn.innerHTML = btnHtml;
        }
      }
    });
  }

  /* Sticky header shadow on scroll */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Bento spotlight follow cursor */
  document.querySelectorAll(".bento-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  });

  /* If arriving at the contact form via "Tư vấn miễn phí", focus the first field */
  if (window.location.hash === "#contactForm") {
    const first = document.getElementById("name");
    if (first) setTimeout(() => first.focus({ preventScroll: true }), 500);
  }

  /* Footer year */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
