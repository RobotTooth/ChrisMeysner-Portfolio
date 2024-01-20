document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const openCvBtn = document.getElementById("openCvBtn");
    const linkedInBtn = document.getElementById("LinkedIn");
    const gitHubBtn = document.getElementById("GitHub");

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

    openCvBtn.addEventListener("click", function() {
        const cvFilePath = './assets/Chris_Meysner_-_Front-end_Web_Developer.pdf';
        window.open(cvFilePath, '_blank');
    });

    linkedInBtn.addEventListener("click", function() {
        const linkedInLink = 'https://www.linkedin.com/in/chris-meysner-3856ba166/';
        window.open(linkedInLink, '_blank');
    });

    gitHubBtn.addEventListener("click", function() {
        const gitHubLink = 'https://github.com/RobotTooth';
        window.open(gitHubLink, '_blank');
    });
});