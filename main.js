var buy = document.querySelector("#buy");
var quantity = document.querySelector("#quantity");
var sell = document.querySelector("#sell");
var btn = document.querySelector("#btn-calculate");
var output = document.querySelector("#output");

btn.addEventListener("click", checkBookings);

function validateNumber(str) {
  return !isNaN(str) && str.trim().length > 0;
}

function checkNotZero(buyPrice, quantity, sellPrice) {
    return Number(buyPrice) > 0 && Number(quantity) > 0 && Number(sellPrice) > 0;
  }

function checkValidity(buyPrice, quantity, sellPrice) {
  return (
    validateNumber(buyPrice) &&
    validateNumber(quantity) &&
    validateNumber(sellPrice)
  );
}

function checkBookings() {
  output.style.display = "block";
  var buyPrice = buy.value;
  var quantityNumber = quantity.value;
  var sellPrice = sell.value;
  if (
    checkValidity(buyPrice, quantityNumber, sellPrice) &&
    checkNotZero(buyPrice, quantityNumber, sellPrice)
  ) {
    buyPrice = Number(buyPrice);
    quantityNumber = Number(quantityNumber);
    sellPrice = Number(sellPrice);

    if (buyPrice > sellPrice) {
      var loss = (buyPrice - sellPrice) * quantityNumber;
      var lossPercentage = ((loss)/(buyPrice*quantityNumber))*100;
      showOutput(`Oops! it's a loss of ${loss} and loss percentage is ${lossPercentage}%`,"red");
    } else if (buyPrice < sellPrice) {
      var profit = Math.round((sellPrice - buyPrice) * quantityNumber);
      var profitPercentage = Math.round(((profit)/(buyPrice*quantityNumber))*100);
      showOutput(`Yayy! it's a profit of ${profit} and profit percentage is ${profitPercentage}%`,"green");
    } else {
        showOutput("NO pain NO gain , NO gain NO pain !","orange")
    }
  } else {
    showOutput("INVALID INPUT","red");
  }
}

function showOutput(str, color) {
    output.innerText = str;
    output.style.color = color;
}