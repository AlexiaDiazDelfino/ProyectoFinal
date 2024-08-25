document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario ya ha iniciado sesión
    const estaLogged = localStorage.getItem('logged');

    if (estaLogged) {
        // Si el usuario ya está autenticado, redirigir a principal.html
        window.location.href = 'principal.html';
        return; // Termina la ejecución del script si ya está autenticado
    }

    // Si el usuario no ha iniciado sesión, configurar el formulario de login
    const form = document.getElementById('login-form'); // Selecciona el formulario de login

    form.addEventListener('submit', function(event) { 
        event.preventDefault(); // Prevenir que el formulario se envíe antes de validarlo
        const username = document.getElementById('username').value.trim(); // Obtiene el valor del campo de usuario
        const password = document.getElementById('password').value.trim(); // Obtiene el valor del campo de contraseña

        if (username === '' || password === '') { // Si el usuario o la contraseña están vacíos
            alert('Por favor, complete todos los campos.'); // Muestra un mensaje de alerta
        } else {
            // Simulación de autenticación exitosa
            localStorage.setItem('logged', 'true'); // Guarda el estado de autenticación

            // Redirigir a la página principal
            window.location.href = 'principal.html'; 
        }
    });
});
