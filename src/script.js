function performCalculation(event) {
  event.preventDefault();
  const operation = document.getElementById("operation").value;
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
  let result;

  switch (operation) {
    case "add":
      result = `${firstNumber} + ${secondNumber} = ${
        firstNumber + secondNumber
      }`;
      break;
    case "sub":
      result = `${firstNumber} - ${secondNumber} = ${
        firstNumber - secondNumber
      }`;
      break;
    case "mult":
      result = `${firstNumber} * ${secondNumber} = ${
        firstNumber * secondNumber
      }`;
      break;
    case "div":
      if (secondNumber === 0) {
        result = "На нуль ділити не можна";
        break;
      }
      result = `${firstNumber} / ${secondNumber} = ${
        firstNumber / secondNumber
      }`;
      break;
    default:
      result = "Невідома операція";
  }

  document.getElementById("calculationResult").textContent = result;
}
