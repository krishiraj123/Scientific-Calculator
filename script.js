let input = document.getElementById("display");

function btnValue(num) {
  input.innerHTML += num;
}

function btnAC() {
  input.innerHTML = "";
}

function btnBackSpace() {
  input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
}

function sin() {
  var radians = (Math.PI / 180) * input.innerHTML;
  input.innerHTML = Math.sin(radians);
}

function cos() {
  var radians = (Math.PI / 180) * input.innerHTML;
  input.innerHTML = Math.cos(radians);
}

function tan() {
  var radians = (Math.PI / 180) * input.innerHTML;
  input.innerHTML = Math.tan(radians);
}

function pi() {
  input.innerHTML = Math.PI;
}

function log() {
  input.innerHTML = Math.log10(input.innerHTML);
}

function e() {
  input.innerHTML = 2.71828182846;
}

function pow() {
  let x = input.innerHTML;
  input.innerHTML = Math.pow(x, 2);
}

function sqrt() {
  input.innerHTML = Math.sqrt(input.innerHTML);
}

function fact() {
  let i = 1;
  let result = 1;
  while (i <= input.innerHTML) {
    result *= i;
    i++;
  }
  input.innerHTML = result;
}

function btnEqual() {
  try {
    let expression = input.innerHTML.replace("x", "*").replace("÷", "/");
    if (expression.includes("/0")) {
      input.innerHTML = "Error: Division by zero";
      return;
    }
    let result = eval(expression);
    input.innerHTML = result;
  } catch (error) {
    console.error("An error occurred:", error);
    input.innerHTML = "Error";
  }
}
