const refsEl = {
  formEl: document.querySelector('.login-form'),
};

refsEl.formEl.addEventListener('submit', handleOnSubmitForm);

function handleOnSubmitForm(event) {
  event.preventDefault();
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
