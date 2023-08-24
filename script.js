const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
  let isValid = true;

  if (username.value.trim() === '') {
    document.getElementById('usernameError').textContent = 'Username is required.';
    isValid = false;
  } else {
    document.getElementById('usernameError').textContent = '';
  }

  if (email.value.trim() === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  if (password.value.trim() === '') {
    document.getElementById('passwordError').textContent = 'Password is required.';
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  if (!isValid) {
    event.preventDefault();
  }
});
