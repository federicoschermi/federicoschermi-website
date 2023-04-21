document.addEventListener('DOMContentLoaded', function () {
    var helloWorldElement = document.getElementById('hello-world');
    var siteContentElement = document.getElementById('site-content');

    helloWorldElement.style.display = 'flex';
    helloWorldElement.classList.add('animated', 'fadeIn', 'one');

    setTimeout(function () {
        helloWorldElement.classList.remove('fadeIn');
        helloWorldElement.classList.add('fadeOut'); // Utilizza fadeOut della stessa durata di fadeIn

        setTimeout(function () {
            helloWorldElement.style.display = 'none';
            siteContentElement.style.display = 'block';
        }, 1460); // Durata dell'animazione fadeOut
    }, 3000); // Durata dell'animazione fadeIn
});
