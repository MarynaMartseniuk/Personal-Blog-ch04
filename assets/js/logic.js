// light/Dark mode

const LDmodeSwitch = document.querySelector('#LDmode');
const container = document.querySelector('#main');
const topFormContainer = document.querySelector('#topContainer');
const leftFormContainer = document.querySelector('#left-appTitle');
const rightFormContainer = document.querySelector('#right-form');
const pageColor = document.querySelector('#pgBody');
let mode = 'ligth';

LDmodeSwitch.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    LDmodeSwitch.setAttribute('class', 'dark');
    topFormContainer.setAttribute('class', 'dark');
    leftFormContainer.setAttribute('class', 'dark');
    rightFormContainer.setAttribute('class', 'dark');
    pageColor.setAttribute('class', 'dark');
  } else {
    mode = 'light';
    container.setAttribute('class', 'light');
    LDmodeSwitch.setAttribute('class', 'light');
    topFormContainer.setAttribute('class', 'light');
    leftFormContainer.setAttribute('class', 'light');
    rightFormContainer.setAttribute('class', 'light');
    pageColor.setAttribute('class', 'light');
  };
});