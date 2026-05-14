const registerForm = document.getElementById('register-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('register-btn');

const birthDay = document.getElementById('birth-day');
const birthYear = document.getElementById('birth-year');

/* BOTÃO COMEÇA DESABILITADO */
submitButton.disabled = true;

/* POPULAR DIAS */
for (let day = 1; day <= 31; day++) {
  const option = document.createElement('option');
  option.value = day;
  option.textContent = day;
  birthDay.appendChild(option);
}

/* POPULAR ANOS */
const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 1900; year--) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  birthYear.appendChild(option);
}

/* VALIDAÇÃO SENHA FORTE */
function validatePassword(password) {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecial
  );
}

/* LIBERA BOTÃO */
passwordInput.addEventListener('input', () => {
  submitButton.disabled = !validatePassword(passwordInput.value);
});

/* SUBMIT FINAL */
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value;

  localStorage.setItem('vault_logged', 'true');
  localStorage.setItem('vault_user', username);

  window.location.href = 'index.html';
});