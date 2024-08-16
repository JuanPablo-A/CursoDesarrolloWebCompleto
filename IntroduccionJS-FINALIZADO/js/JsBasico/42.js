// Eventos del DOM - Incluide
const inputNombre = document.querySelector('#nombre');
inputNombre.addEventListener('input', e => {
    console.log(e.target.value);
});

const inputPassword = document.querySelector('#password');
inputPassword.addEventListener('input', e => {
    inputPassword.type = 'text';

    setTimeout(() => {
        inputPassword.type = 'password';
    }, 500);
});