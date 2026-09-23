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
