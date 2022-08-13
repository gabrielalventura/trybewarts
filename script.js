const email = document.querySelector('.email');
const password = document.querySelector('.password');
const box = document.getElementById('agreement');
const btnEntry = document.querySelector('.entry');
const btnSend = document.getElementById('submit-btn');
const theText = document.querySelector('#textarea');
const counterCha = document.querySelector('#counter');

// eslint-disable-next-line func-names
window.onload = function () {
  function fillForm() {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }
  btnEntry.addEventListener('click', fillForm);

  function enableButton() {
    if (box.checked) {
      btnSend.disabled = false;
    } else {
      btnSend.disabled = true;
    }
  }
  box.addEventListener('change', enableButton);
};

function countingCharacters() {
  const count = theText.value.length;
  counterCha.innerHTML = 500 - count;
}

theText.addEventListener('keyup', countingCharacters);
