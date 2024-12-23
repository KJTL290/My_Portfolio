document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn') as HTMLElement;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
const navbar = document.querySelector('.navbar') as HTMLElement;

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});