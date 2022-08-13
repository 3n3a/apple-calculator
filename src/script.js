let out = $(".output-field input");
let fields = $(".field");
let calc = [];

fields.on("click", fieldClickHandler);

function fieldClickHandler() {
  let action = $("span", this).text();

  switch (action) {
    case "AC":
      calc = [];
      break;
    case "+/-":
      if (isCalcNumber()) {
        prependToLast("-");
      } else {
        prependToLast("");
      }
      break;
    case "%":
      calc[calc.length - 1] = calc[calc.length - 1] / 100;
      break;
    case "÷":
      calc.push("/");
      break;
    case "⨉":
      calc.push("*");
      break;
    case "-":
      calc.push("-");
      break;
    case "+":
      calc.push("+");
      break;
    case "=":
      let result = eval(calc.join(""));
      calc = [];
      calc.push(result);
      break;
    case ".":
      if (isCalcNumber()) {
        addToLast(action);
      }
      break;
    default:
      if (isCalcNumber()) {
        addToLast(action);
      } else {
        calc.push(action);
      }

      break;
  }

  out.val(calc.at(-1));
}

function addToLast(additive) {
  calc[calc.length - 1] += additive;
}

function prependToLast(additive) {
  calc[calc.length - 1] = additive + calc[calc.length - 1];
}

function isCalcNumber() {
  return calc.at(-1) > 0;
}