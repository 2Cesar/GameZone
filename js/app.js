/* SCROLL SUAVE SOLO PARA ENLACES INTERNOS */
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener('click', function(e) {
        const destino = document.querySelector(this.getAttribute('href'));
        if(destino){
            e.preventDefault();
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
/* EFECTO NAVBAR AL HACER SCROLL */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
        navbar.style.boxShadow = '0 0 10px #00f7ff';
    }else{
        navbar.style.boxShadow = 'none';
    }
});
/* MENSAJE DE CONSOLA */
console.log('🎮 Bienvenido a GameZone');