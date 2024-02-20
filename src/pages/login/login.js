let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  //TODO: login the user onto the server, retrieve the token and store it in the local storage

  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('token', 'admin');
    window.location.href = '../index.html';
  } else {
    alert("Le nom d'utilisateur ou le mot de passe est incorrect.");
  }
});
