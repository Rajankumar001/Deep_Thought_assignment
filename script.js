// script.js
document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const majorSidebar = document.querySelector('.left-side-bar-major');
    const minorSidebar = document.querySelector('.left-side-bar-minor');

    leftArrow.addEventListener('click', () => {
        majorSidebar.style.display = 'none';
        minorSidebar.style.display = 'flex';
    });

    rightArrow.addEventListener('click', () => {
        minorSidebar.style.display = 'none';
        majorSidebar.style.display = 'flex';
    });
});
