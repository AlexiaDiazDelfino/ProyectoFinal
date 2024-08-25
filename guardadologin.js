document.addEventListener('DOMContentLoaded', function() {
    const estaLogged = localStorage.getItem('logged'); // Obtener el estado de autenticación

    if (estaLogged === 'true') {
        // Si el usuario ya está autenticado, redirigir a principal.html
        window.location.href = 'principal.html';
    }
});
