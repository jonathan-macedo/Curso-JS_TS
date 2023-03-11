const NUMBER = document.querySelector("#number");
const RAIZ = document.querySelector("#raiz");
const NUMBER_INT = document.querySelector("#numberInt");
const BOOL = document.querySelector("#bool");
const BOOL_NAN = document.querySelector("#boolNaN");
const NUMBER_DOWN = document.querySelector("#numberDown");
const NUMBER_UP = document.querySelector("#numberUp");
const NUMBER_DECIMAL = document.querySelector("#numberDecimal");

let number = Number(prompt("Digite um número qualquer"));

NUMBER.innerHTML = number;
RAIZ.innerHTML = Math.sqrt(number);
NUMBER_INT.innerHTML = number;
BOOL.innerHTML = Number.isInteger(number);
BOOL_NAN.innerHTML = Number.isNaN(number);
NUMBER_DOWN.innerHTML = Math.floor(number);
NUMBER_UP.innerHTML = Math.ceil(number);
NUMBER_DECIMAL.innerHTML = number.toFixed(2);