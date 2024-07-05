// Light/Dark mode

const LDmodeSwitch = document.querySelector('#LDmode');
const container = document.querySelector('#main');
const pageColor = document.querySelector('#pgBody');
let mode = 'ligth';

LDmodeSwitch.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    pageColor.setAttribute('class', 'dark');
    container.setAttribute('class', 'dark');
    LDmodeSwitch.setAttribute('class', 'dark');
  } else {
    mode = 'light';
    pageColor.setAttribute('class', 'light');
    container.setAttribute('class', 'light');
    LDmodeSwitch.setAttribute('class', 'light');
  };
});
//------------------------------