const display = document.querySelector('#display');

const clearOutput=function() {
  display.value = "";
}

const output=function (exp) {
  display.value += exp;
}

const calculate=function() {
  let result = display.value;
  result = eval(result);
  display.value = result;
}
