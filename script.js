// eslint-disable-next-line func-names
window.onload = function () {
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
};

const theText = document.querySelector('#textarea');
const counterCha = document.querySelector('#counter');

function countingCharacters() {
  const count = theText.value.length;
  counterCha.innerHTML = 500 - count;
}

theText.addEventListener('keyup', countingCharacters);
