window.onload = function() {
const email = document.querySelector('.email');
const password = document.querySelector('.password');

function fillForm() {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

const btnEntry = document.querySelector('.entry');
btnEntry.addEventListener('click', fillForm);

}