document.addEventListener('DOMContentLoaded', function () {
    var typingEffect = new Typed(".typedText", {
        strings: [
            "Back-end dev",
            "Ing. en redes", 
            "Pentester", 
            "Automatizador de tareas"],
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
