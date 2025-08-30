function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refsEl = {
  bodyEl: document.querySelector('body'),
  widgetEl: document.querySelector('.widget'),
  btnEl: document.querySelector('.change-color'),
};

refsEl.bodyEl.style.backgroundColor = 'red';
const spanEl = refsEl.widgetEl.querySelector('.color');

refsEl.btnEl.addEventListener('click', handleChangeClr);

function handleChangeClr(event) {
  event.preventDefault();
  const randomClr = getRandomHexColor();
  refsEl.bodyEl.style.backgroundColor = randomClr;
  spanEl.textContent = randomClr;
}
