document.addEventListener('DOMContentLoaded', function () {
    var typingEffect = new Typed(".typedText", {
        strings: [
            "José Luis",
            "Back-end dev",
            "Network Engineer", 
            "Pentester", 
            "Automation Engineer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        showCursor: false
    });

    const words = document.querySelectorAll(".word-visible");
    const totalDuration = 4000;
    const delayIncrement = totalDuration / words.length;

    words.forEach((word, index) => {
        word.style.animationDelay = `${index * delayIncrement}ms`;
    });

});
