const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

console.log(refs.inputEl);
console.log(refs.outputEl);

refs.inputEl.addEventListener('input', onInput);

function onInput(e) {
  const inputValueEl = e.target;
  const normlzInput = inputValueEl.value.trim();

  if (normlzInput !== '') {
    console.log(normlzInput);
    refs.outputEl.textContent = normlzInput;
  } else {
    refs.outputEl.textContent = 'Anonymous';
  }
}
