"use strict"

// capturing the display function
const display = document.getElementById('display');

function appendtoDisplay(input){
    display.value += input;
}

function clearInput(){
    display.value = '';
}
document.getElementById('del').addEventListener('click', () => clearInput());


function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'Syntax error!'
        if(display.value == '+' || '-' || '*' || '/'){
            display.value = 'operands error!';
        }
    }
}
document.getElementById('calc').addEventListener('click', () => calculate());

