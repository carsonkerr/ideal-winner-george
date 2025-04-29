
const button = document.getElementById('loginButton');

  button.addEventListener('click', () => {
    button.innerText = button.innerText === 'Login Here!' ? 'Logout' : 'Login Here!';
  });