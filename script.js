document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerIcon.addEventListener("click", function() {
        menuLinks.classList.toggle("responsive");
        hamburgerIcon.classList.toggle("responsive");
    });
});

