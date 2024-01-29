document.addEventListener('DOMContentLoaded', function () {
    let styleSheetLink = document.getElementById('styleSheet');
    let toggleButton = document.getElementById('toggleMode');

    function toggleMode() {
        let currentHref = styleSheetLink.getAttribute('href');

        if (currentHref === './styles/style.css') {
            styleSheetLink.setAttribute('href', './styles/lightmode.css');
            toggleButton.innerHTML = 'Modo<br>Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            styleSheetLink.setAttribute('href', './styles/style.css');
            toggleButton.innerHTML = 'Modo<br>Claro';
            localStorage.setItem('theme', 'dark');
        }
    }

    toggleButton.addEventListener('click', toggleMode);

    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);

        if (savedTheme === 'light') {
            styleSheetLink.setAttribute('href', './styles/lightmode.css');
            toggleButton.innerHTML = 'Modo<br>Escuro';
        } else {
            styleSheetLink.setAttribute('href', './styles/style.css');
            toggleButton.innerHTML = 'Modo<br>Claro';
        }
    }
});