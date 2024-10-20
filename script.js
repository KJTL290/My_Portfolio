function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {
    var topButton = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
