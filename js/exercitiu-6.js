const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', () => {
  const requiredLength = Number(inputElement.getAttribute('data-length'));
  const inputLength = inputElement.value.length;

  if (inputLength === requiredLength) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});
