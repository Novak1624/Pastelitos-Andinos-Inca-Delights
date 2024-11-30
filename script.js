// Esperamos a que la página cargue completamente
window.addEventListener('load', function () {
    // Ocultar el loader una vez que la página esté lista
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

// Función para validar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Mostrar mensaje de éxito si todo es válido
    document.getElementById('formMessage').style.display = 'block';

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});

// Mostrar el botón "Volver arriba" cuando se desplace por la página
const backToTopBtn = document.getElementById('backToTopBtn');

// Mostrar el botón cuando el usuario haga scroll
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

// Hacer scroll hacia arriba al hacer clic en el botón
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Agregar comportamiento suave de scroll
    });
});