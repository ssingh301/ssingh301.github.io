const clickButton = document.querySelector('.menu-icon');

clickButton.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});