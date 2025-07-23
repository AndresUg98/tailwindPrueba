const toggleBtn = document.getElementById('menu-toggle');
const openIcon = document.getElementById('menuIcon-open');
const closeIcon = document.getElementById('menuIcon-close');

const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    const isMenuOpen = closeIcon.classList.contains('hidden'); //true

    openIcon.classList.toggle('hidden', isMenuOpen); // true
    closeIcon.classList.toggle('hidden', !isMenuOpen); // false

});