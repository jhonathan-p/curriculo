function toggleMode() {
    let styleSheetLink = document.getElementById('styleSheet');
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let toggleButton = document.getElementById('toggleMode');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        styleSheetLink.setAttribute('href', './styles/lightmode.css');
        toggleButton.innerHTML = 'Modo<br>Escuro';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        styleSheetLink.setAttribute('href', './styles/style.css');
        toggleButton.innerHTML = 'Modo<br>Claro';
        localStorage.setItem('theme', 'dark');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        let styleSheetLink = document.getElementById('styleSheet');
        let toggleButton = document.getElementById('toggleMode');
        if (savedTheme === 'light') {
            styleSheetLink.setAttribute('href', './styles/lightmode.css');
            toggleButton.innerHTML = 'Modo<br>Escuro';
        } else {
            styleSheetLink.setAttribute('href', './styles/style.css');
            toggleButton.innerHTML = 'Modo<br>Claro';
        }
    }
});