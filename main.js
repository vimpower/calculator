
const number0 = document.querySelector('.num0');
const number1 = document.querySelector('.num1');
const number2 = document.querySelector('.num2');
const number3 = document.querySelector('.num3');
const number4 = document.querySelector('.num4');
const number5 = document.querySelector('.num5');
const number6 = document.querySelector('.num6');
const number7 = document.querySelector('.num7');
const number8 = document.querySelector('.num8');
const number9 = document.querySelector('.num9');

const clear = document.querySelector('.clear');
const divide_op = document.querySelector('.divide');
const multiply_op = document.querySelector('.multiply');
const substract_op = document.querySelector('.subtraction');
const addition_op = document.querySelector('.addition');
const equal_op = document.querySelector('.equal');

const display = document.querySelector('.display');
const result = document.querySelector('.result');

let displayValue = "1+1"
let resultValue = "2"

function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return substract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return 'ERROR'
    }
}
function displayBuffer(){
    display.textContent = displayValue;
}
function clearBuffer(){
    displayValue = "";
    display.textContent = "";
    result.textContent = "";
}
function enterBuffer(character){
    displayValue = displayValue + character;
    displayBuffer();
}
function showResult(){
    result.textContent = resultValue;
}
function equal(){
    operation_list = ['+', '-', '*', '/'];
    for(let i = 0; i < operation_list.length; i++){
        num_list = displayValue.split(operation_list[i]);
        if(num_list.length === 2){
            console.log(num_list);
            console.log(operation_list[i])
            resultValue = operate(operation_list[i], parseInt(num_list[0]),  parseInt(num_list[1]));
            showResult();
            break;
        }
    }
}

enterBuffer("");
showResult();

number0.addEventListener('mousedown', e => {enterBuffer(0);});
number1.addEventListener('mousedown', e => {enterBuffer(1);});
number2.addEventListener('mousedown', e => {enterBuffer(2);});
number3.addEventListener('mousedown', e => {enterBuffer(3);});
number4.addEventListener('mousedown', e => {enterBuffer(4);});
number5.addEventListener('mousedown', e => {enterBuffer(5);});
number6.addEventListener('mousedown', e => {enterBuffer(6);});
number7.addEventListener('mousedown', e => {enterBuffer(7);});
number8.addEventListener('mousedown', e => {enterBuffer(8);});
number9.addEventListener('mousedown', e => {enterBuffer(9);});

multiply_op.addEventListener('mousedown', e => {enterBuffer("*");});
divide_op.addEventListener('mousedown', e => {enterBuffer("/");});
addition_op.addEventListener('mousedown', e => {enterBuffer("+");});
substract_op.addEventListener('mousedown', e => {enterBuffer("-");});
clear.addEventListener('mousedown', e => {clearBuffer();});
equal_op.addEventListener('mousedown', e => {equal();});
