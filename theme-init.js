try {
    if (localStorage.getItem("greg-site-theme") === "dark") {
        document.documentElement.dataset.theme = "dark";
    }
} catch (error) {
    // Keep the default light theme when storage is unavailable.
}
