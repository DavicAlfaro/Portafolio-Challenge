// Seleccionar el formulario y los campos
const formulario = document.querySelector('.contacto__formulario');
const nombreCampo = document.querySelector('input[type="text"]');
const emailCampo = document.querySelector('input[type="email"]');
const mensajeCampo = document.querySelector('textarea');

// Función para validar el formulario
function validarFormulario(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Limpiar mensajes de error previos
    const mensajesError = document.querySelectorAll('.error');
    mensajesError.forEach(mensaje => mensaje.remove());

    // Validar campos
    let esValido = true;

    // Validar nombre
    if (nombreCampo.value.trim() === '') {
        mostrarError(nombreCampo, 'El nombre es obligatorio');
        esValido = false;
    }

    // Validar correo electrónico
    if (emailCampo.value.trim() === '') {
        mostrarError(emailCampo, 'El correo electrónico es obligatorio');
        esValido = false;
    } else if (!validarEmail(emailCampo.value)) {
        mostrarError(emailCampo, 'Ingrese un correo electrónico válido');
        esValido = false;
    }

    // Validar mensaje (no obligatorio)
    // No se requiere validación para el campo de mensaje

    // Si el formulario es válido, puedes proceder a enviarlo o mostrar un mensaje de éxito
    if (esValido) {
        alert('Formulario enviado con éxito');
        // Aquí puedes enviar el formulario o realizar otra acción
        formulario.reset(); // Limpiar el formulario
    }
}

// Función para mostrar mensajes de error
function mostrarError(campo, mensaje) {
    const error = document.createElement('div');
    error.classList.add('error');
    error.style.color = 'red'; // Estilo del mensaje de error
    error.textContent = mensaje;
    campo.parentElement.insertBefore(error, campo.nextSibling);
}

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Agregar el evento de envío al formulario
formulario.addEventListener('submit', validarFormulario);