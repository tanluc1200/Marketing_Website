const btnGoToTop = document.querySelector("#scrollTop");
function scrollToTop() {
    btnGoToTop.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}
window.addEventListener("scroll", function () {
    // Khai báo khoảng cách height để hiển thị nút btn goToTop
    const scrollToTopDistance = 500;
    const result =
        document.body.scrollTop > scrollToTopDistance ||
        document.documentElement.scrollTop > scrollToTopDistance;
    if (result) {
        btnGoToTop.classList.add("active");
    } else {
        btnGoToTop.classList.remove("active");
    }
});
function toggleTheme() {
    const btnToggleTheme = document.querySelector("#toggleTheme");
    btnToggleTheme.addEventListener("click", function () {
        document.body.classList.toggle("active");
        const btnThemeIcon = document.querySelector(
            ".header-toggle-theme-icon"
        );
        btnThemeIcon.classList.toggle("active");
        btnThemeIcon.querySelector("i").classList.toggle("fa-moon");
    });
}
function toggleMobileMenu() {
    const btnMenu = document.querySelector(".header-mobile-icon");
    btnMenu.addEventListener("click", function () {
        const menuMobile = document.querySelector(".header-mobile-menu");
        menuMobile.classList.toggle("active");
    });
}
function onLoading() {
    scrollToTop();
    toggleTheme();
    toggleMobileMenu();
}
onLoading();
