document.addEventListener('DOMContentLoaded', function() {
    const estaLogged = localStorage.getItem('logged'); //autenticación

    //si no esta autenticado, muestra el login
    if (!estaLogged) {
        //guarda la URL de la pagina actual antes de redirigir
        localStorage.setItem('PaginaPrevia', window.location.href);

        //redirige a login.html
        window.location.href = 'login.html';
    }

    //añade un event listener al botón de login (sólo se ejecuta si estamos en login.html)
    const botonLogin = document.getElementById('submit');
    if (botonLogin) { // Verifica que el botón de login exista (es decir, que estamos en login.html)
        botonLogin.addEventListener('click', function() {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            //verifica que ambos campos no estén vacíos
            if (user && pass) {
                // Simulación de autenticación exitosa
                localStorage.setItem('logged', 'true'); //guarda el estado de autenticación

                //redirige a la pagina anterior, la pqgina principal
                const PaginaPrevia = localStorage.getItem('PaginaPrevia') || 'index.html';
                window.location.href = PaginaPrevia;
            } else {
                alert('Falta completar el campo usuario o contraseña');
            }
        });
    }
});
