
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (!menuButton || !navigation) return;

  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    navigation.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open", "active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !menuButton.contains(event.target) &&
      !navigation.contains(event.target)
    ) {
      navigation.classList.remove("open", "active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navigation.classList.remove("open", "active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});
