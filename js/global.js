const display = document.querySelector('#display');

const clearOutput=function() {
  display.value = "";
}

const output=function (exp) {
  display.value += exp;
}

const calculate=function() {
  let result = eval(display.value);
  display.value = result;
}
