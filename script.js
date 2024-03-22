// script.js

// Animación para resaltar el título al pasar el cursor sobre él
const headerTitle = document.querySelector('header h1');

headerTitle.addEventListener('mouseover', () => {
    headerTitle.style.color = 'orange';
});

headerTitle.addEventListener('mouseout', () => {
    headerTitle.style.color = '#fff';
});

// Animación para resaltar secciones al hacer clic en ellas
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    section.addEventListener('click', () => {
        section.style.backgroundColor = 'lightgray';
        setTimeout(() => {
            section.style.backgroundColor = 'transparent';
        }, 1000);
    });
});
