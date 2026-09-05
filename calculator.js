function Add() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1) + Number(number2); //16
    document.getElementById("result").innerHTML = result;
}

function Sub() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1) - Number(number2); //16
    document.getElementById("result").innerHTML = result;
}

function Multi() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1) * Number(number2); //16
    document.getElementById("result").innerHTML = result;
}

function Div() {
    let number1 = document.getElementById("num1").value; //"7"
    let number2 = document.getElementById("num2").value; //"9"
    let result = Number(number1) / Number(number2); //16
    document.getElementById("result").innerHTML = result;
}