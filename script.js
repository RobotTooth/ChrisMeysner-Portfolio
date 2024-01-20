document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerIcon.addEventListener("click", function() {
        menuLinks.classList.toggle("responsive");
        hamburgerIcon.classList.toggle("responsive");
    });

const menuLinksList = document.querySelectorAll('.menu-links a');
    menuLinksList.forEach(function(link) {
        link.addEventListener('click', function() {
            menuLinks.classList.remove('responsive');
            hamburgerIcon.classList.remove('responsive');
        });
    });
});