document.getElementById("registroForm").addEventListener("submit", function(e){

    e.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value;
    let confirmarPassword = document.getElementById("confirmarPassword").value;
    let terminos = document.getElementById("terminos").checked;

    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "";
    mensaje.className = "";

    // Validar campos vacíos
    if(
        usuario === "" ||
        correo === "" ||
        password === "" ||
        confirmarPassword === ""
    ){
        mensaje.innerHTML = "Todos los campos son obligatorios.";
        mensaje.classList.add("error");
        return;
    }

    // Validar correo
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexCorreo.test(correo)){
        mensaje.innerHTML = "Ingrese un correo electrónico válido.";
        mensaje.classList.add("error");
        return;
    }

    // Validar longitud de contraseña
    if(password.length < 6){
        mensaje.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        mensaje.classList.add("error");
        return;
    }

    // Validar coincidencia
    if(password !== confirmarPassword){
        mensaje.innerHTML = "Las contraseñas no coinciden.";
        mensaje.classList.add("error");
        return;
    }

    // Validar términos
    if(!terminos){
        mensaje.innerHTML = "Debe aceptar los términos y condiciones.";
        mensaje.classList.add("error");
        return;
    }

    mensaje.innerHTML = "✅ Registro exitoso. Bienvenido a GameZone.";
    mensaje.classList.add("success");

    document.getElementById("registroForm").reset();

    if(!terminos){
        mensaje.innerHTML =
        "<p class='error'>Debe aceptar los términos y condiciones.</p>";
        return;}

});
