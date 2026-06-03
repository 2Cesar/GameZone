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
    }
    else{
        navbar.style.boxShadow = 'none';
    }
});
/* MENSAJE DE CONSOLA */
const gato = document.querySelector("#gato-asistente img");
const mensaje = document.querySelector(".mensaje-gato");
const frases = [
    "🔥 Revisa las últimas noticias",
    "🏆 Mira los próximos torneos",
    "🚗 GTA VI está increíble",
    "🎯 ¿Ya viste Valorant?",
    "⛏️ Minecraft sigue siendo un clásico",
    "👾 Explora todas las secciones",
    "🚀 Gracias por visitar GameZone",
    "🏅 Revisa la tabla de torneos",
    "🎮 ¿Cuál es tu juego favorito?"
];
gato.addEventListener("click", () => {
    const aleatoria =
        frases[Math.floor(Math.random() * frases.length)];
    mensaje.innerHTML = aleatoria;
    if(mensaje.style.display === "block"){
        mensaje.style.display = "none";
    }
    else{
        mensaje.style.display = "block";
    }
    setTimeout(()=>{
        mensaje.style.display="none";
    }, 2500);
});
window.addEventListener("load", () => {
    mensaje.style.display = "block";
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 3000);
});