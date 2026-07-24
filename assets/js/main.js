/* Formosa International — small vanilla JS (no dependencies) */
(function () {
  "use strict";

  // --- Mobile navigation toggle ---
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    // close menu when a link is tapped
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Header shadow on scroll ---
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // --- Reveal on scroll ---
  var revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("in"); });
  }

  // --- Footer year ---
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // --- Hero slideshow ---
  var slider = document.querySelector(".hero-slider");
  if (slider) {
    var slides = slider.querySelectorAll(".hero-slide");
    var dots = slider.querySelectorAll(".hero-dots button");
    var idx = 0, timer;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var go = function (n) {
      slides[idx].classList.remove("is-active");
      if (dots[idx]) dots[idx].classList.remove("is-active");
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("is-active");
      if (dots[idx]) dots[idx].classList.add("is-active");
    };
    var start = function () { if (!reduce && slides.length > 1) { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 4500); } };
    dots.forEach(function (d, i) { d.addEventListener("click", function () { go(i); start(); }); });
    slider.addEventListener("mouseenter", function () { clearInterval(timer); });
    slider.addEventListener("mouseleave", start);
    start();
  }

  // --- Enquiry form (client-side demo handling) ---
  var form = document.getElementById("enquiry-form");
  var success = document.getElementById("form-success");
  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // In production this posts to a mail handler or form service.
      success.classList.add("show");
      form.reset();
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
})();
