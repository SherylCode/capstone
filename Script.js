$(document).ready(function () {
  // Smooth scrolling for links
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 100,
          },
          1000
        );
    }
  });

  // Update the current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Toggle menu
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    const isHidden = menu.classList.contains("hidden");

    // Toggle menu visibility
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    // Toggle hamburger menu to "X"
    menuToggle.innerHTML = isHidden ? "&times;" : "&#9776;";

    // Update ARIA attributes for accessibility
    menuToggle.setAttribute("aria-expanded", !isHidden);
  });

  // Close menu when a link is clicked (mobile)
  $("#menu a").on("click", function () {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      menuToggle.innerHTML = "&#9776;";
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
