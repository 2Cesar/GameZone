/* MENSAJE BOTONES */
const botones = document.querySelectorAll('.btn');
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        console.log('Botón presionado');
    });
});
/* SCROLL SUAVE */
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener('click', function(e){
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/* EFECTO NAVBAR AL HACER SCROLL */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
        navbar.style.backgroundColor = '#000';
        navbar.style.boxShadow = '0px 0px 10px #00f7ff';
    }
    else{
        navbar.style.backgroundColor = '#111';
        navbar.style.boxShadow = 'none';
    }
});
/* ANIMACIÓN AL CARGAR */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
/* EFECTO HOVER EN CARDS */
const cards = document.querySelectorAll('.game-card');
cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px) scale(1)';
    });
});
/* MENSAJE GAMER */
console.log('🎮 Bienvenido a GameZone');