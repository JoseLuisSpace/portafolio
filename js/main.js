document.addEventListener('DOMContentLoaded', function () {
    // Typed.js Initialization
    var typingEffect = new Typed(".typedText", {
        strings: [
            "Ciberseguridad",
            "Automatización",
            "Escalabilidad",
        ],
        loop: true,
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 2000,
        showCursor: true,
        cursorChar: '|'
    });

    // Initial words reveal effect
    const words = document.querySelectorAll(".word-visible");
    const totalDuration = 2000;
    const delayIncrement = totalDuration / words.length;

    words.forEach((word, index) => {
        word.style.animationDelay = `${index * delayIncrement}ms`;
    });

    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it comes into view securely
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Clean sticky header effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(2, 6, 23, 0.85)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.background = 'rgba(2, 6, 23, 0.7)';
            header.style.boxShadow = 'none';
        }
    });
});
