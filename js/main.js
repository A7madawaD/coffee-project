function coffeeWebsite() {
  /* ================= HERO ================= */

  const landingPage = document.querySelector(".head");

  const imgsArray = [
    "hero1.png",
    "hero2.png",
    "hero3.png",
    "hero4.png",
    "hero5.png",
    "hero6.png",
  ];

  function changeBackground() {
    const randomNumber = Math.floor(Math.random() * imgsArray.length);

    landingPage.style.backgroundImage = `url("image/${imgsArray[randomNumber]}")`;
  }

  changeBackground();

  setInterval(changeBackground, 5000);

  /* ================= SEARCH ================= */

  const searchBtn = document.getElementById("searchBtn");

  const searchWrapper = document.getElementById("searchWrapper");

  const closeSearch = document.getElementById("closeSearch");

  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", function () {
    searchWrapper.classList.add("active");

    searchInput.focus();
  });

  closeSearch.addEventListener("click", function () {
    searchWrapper.classList.remove("active");

    searchInput.value = "";
  });

  /* ================= MOBILE MENU ================= */

  const menuToggle = document.getElementById("menuToggle");

  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  /* ================= NAVIGATION ================= */

  const navItems = document.querySelectorAll(".nav-links a");

  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navItems.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");

      navLinks.classList.remove("show");
    });
  });

  /* ================= ACTIVE SECTION ================= */

  const sections = document.querySelectorAll(
    "#home, #menu, #gallery, #about, #contact",
  );

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navItems.forEach(function (link) {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`,
          );

          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },

    {
      root: null,

      threshold: 0.45,
    },
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  /* ================= MENU FILTER ================= */

  const filterButtons = document.querySelectorAll(".filter-btn");

  const coffeeCards = document.querySelectorAll(".coffee-card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const category = this.dataset.category;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      coffeeCards.forEach(function (card) {
        const cardCategory = card.dataset.category;

        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ================= ESCAPE ================= */

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      searchWrapper.classList.remove("active");

      searchInput.value = "";

      navLinks.classList.remove("show");
    }
  });
}

/* ================= START ================= */

coffeeWebsite();
