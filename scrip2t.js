const password = 'souseumelhoramigo'; // defina sua senha aqui
const redirectUrl = 'sitedcp.html'; // defina a URL de redirecionamento aqui

const form = document.querySelector('#login-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const passwordInput = document.querySelector('#password-input');
  const enteredPassword = passwordInput.value;
  if (enteredPassword === password) {
    window.location.href = redirectUrl;
  } else {
    passwordInput.value = '';
    alert('Senha incorreta. Tente novamente.');
  }
});

