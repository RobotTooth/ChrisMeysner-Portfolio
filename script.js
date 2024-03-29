document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelector('.menu-links');
    const menuLinksList = document.querySelectorAll('.menu-links a');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const openCvBtn = document.getElementById("openCvBtn");
    const linkedInBtn = document.getElementById("LinkedIn");
    const gitHubBtn = document.getElementById("GitHub");
    const openContacts = document.getElementById("openContacts");
    const arrowIcons = document.querySelectorAll('.arrow');

    hamburgerIcon.addEventListener("click", function() {
        menuLinks.classList.toggle("responsive");
        hamburgerIcon.classList.toggle("responsive");
    });

    menuLinksList.forEach(function(link) {
        link.addEventListener('click', function() {
            menuLinks.classList.remove('responsive');
            hamburgerIcon.classList.remove('responsive');
        });
    });

    openCvBtn.addEventListener("click", function() {
        const cvFilePath = './assets/Chris_Meysner-Frontend_Web_Developer.pdf';
        window.open(cvFilePath, '_blank');
    });

    openContacts.addEventListener("click", function() {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
            contactSection.scrollIntoView();
        }
    });

    linkedInBtn.addEventListener("click", function() {
        const linkedInLink = 'https://www.linkedin.com/in/chris-meysner-3856ba166/';
        window.open(linkedInLink, '_blank');
    });

    gitHubBtn.addEventListener("click", function() {
        const gitHubLink = 'https://github.com/RobotTooth';
        window.open(gitHubLink, '_blank');
    });

    function scrollToNextSection() {
        const currentSection = this.closest('section');
        const nextSection = currentSection.nextElementSibling;

        if (nextSection) {
            nextSection.scrollIntoView();
        }
    };

    arrowIcons.forEach(function(arrow) {
        arrow.addEventListener('click', scrollToNextSection);
    });
});