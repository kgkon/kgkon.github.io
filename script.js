const helloButton = document.getElementById("helloButton");

if (helloButton) {
    helloButton.addEventListener("click", function () {
        alert("Hello!");
    });
}

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.getElementById("site-navigation");

function setMenuOpen(isOpen) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    siteNavigation.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", function () {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNavigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});

const themeToggle = document.getElementById("themeToggle");
const themeStorageKey = "greg-site-theme";

function updateThemeToggle() {
    const isDark = document.documentElement.dataset.theme === "dark";
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

updateThemeToggle();

themeToggle.addEventListener("click", function () {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    updateThemeToggle();

    try {
        localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
        // The selected theme remains active for this page if storage is unavailable.
    }
});

const technologyFilter = document.getElementById("technology-filter");

if (technologyFilter) {
    const projectCards = Array.from(document.querySelectorAll(".project-card"));
    const filterStatus = document.getElementById("filter-status");

    technologyFilter.addEventListener("change", function () {
        const selectedTechnology = technologyFilter.value;
        let visibleCount = 0;

        projectCards.forEach(function (card) {
            const technologies = card.dataset.technologies.split(/\s+/);
            const isVisible = selectedTechnology === "all" || technologies.includes(selectedTechnology);

            card.hidden = !isVisible;
            if (isVisible) {
                visibleCount += 1;
            }
        });

        filterStatus.textContent = visibleCount === 0
            ? "No projects found for this technology."
            : `Showing ${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
    });
}
