function convertCurrency() {
    let amount = prompt("Enter Amount:", 1);
    let fromCurrency = prompt("Enter From Currency (VND/USD):", "VND");
    let toCurrency = prompt("Enter To Currency (VND/USD):", "USD");

    let numAmount = Number(amount);
    let rateUSDToVND = 26000;
    let result = 0;

    if (fromCurrency.toUpperCase() === "VND" && toCurrency.toUpperCase() === "USD") {
    result = numAmount / rateUSDToVND;
    } else if (fromCurrency.toUpperCase() === "USD" && toCurrency.toUpperCase() === "VND") {
    result = numAmount * rateUSDToVND;
    } else {
    result = numAmount;
    }

    console.log("Amount:", numAmount);
    console.log("Result:", result);

    document.getElementById("ab").innerHTML = 
    "<h3>Result: " + result.toFixed(8) + " " + toCurrency.toUpperCase() + "</h3>";
}