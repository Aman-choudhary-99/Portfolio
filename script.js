// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for internal links (Home / About / Skills / Projects / Contact)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
