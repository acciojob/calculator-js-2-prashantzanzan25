//your JS code here. If required.
const display = document.getElementById('display');

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'C') {
      display.value = '';
    } else if (button.id === 'back') {
      display.value = display.value.slice(0, -1);
    } else if (button.id === 'equal') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += button.id;
    }
  });
});
