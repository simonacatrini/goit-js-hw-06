document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (!email || !password) {
    alert('All fields must be filled!');
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  event.target.reset();
});
