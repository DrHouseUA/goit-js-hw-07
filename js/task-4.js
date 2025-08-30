const refsEl = {
  formEl: document.querySelector('.login-form'),
};

console.log(refsEl.formEl);

refsEl.formEl.addEventListener('submit', handleOnSubmitForm);

function handleOnSubmitForm(event) {
  event.preventDefault();
  console.log('Login was clicked');
  const formElement = event.target;
  const emailEl = formElement.elements.email;
  const passwordEl = formElement.elements.password;

  const validData = {};

  if (emailEl.value.length === 0 || passwordEl.value.length === 0) {
    alert('All form fields must be filled in');
  } else {
    validData.email = emailEl.value.trim();
    validData.password = passwordEl.value.trim();
    console.log(validData);
  }
  formElement.reset();
}
