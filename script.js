var display = document.getElementById('disp');
var num = document.getElementsByClassName("numbers");
var ope = document.getElementsByClassName("operator");
var eq = document.getElementById('equal');
var operator1=0,operator2,operand = '+';
var clear = document.getElementById('clear');
var per = document.getElementById('percentage');
for (let index = 0; index < num.length; index++) {
    num[index].addEventListener('click',function (params) {
        display.innerText += this.getAttribute('data-value');
    })
}
// clearing the display
clear.onclick = function (params) {
    display.innerText = '';
    operand1 = 0;
    operator = '+';
    operator2 = 0;
}

// performing the operations
for (let index = 0; index < ope.length; index++) {
    ope[index].addEventListener('click',function (params) {
        operator1 = display.innerText ;
        operand = this.getAttribute('data-value');
        display.innerText = '';
    })
}

//Calculating the result
eq.onclick = function (params) {
    operator2 = display.innerText;
    console.log(operator1,operand,operator2);
    let ans = eval(operator1 + operand + operator2);
    if(ans == Infinity){
        display.innerText = "Error";
    }
    else {
        display.innerText = ans;
        operator1 = 0;
        operand = "+";
    }
}

//calc the % 
per.onclick = function (params) {
    display.innerText /= 100;
}

//altering the sign
var signAlter = document.getElementById('sign-alter');
signAlter.onclick = function (params) {
    display.innerText = 0 - display.innerText;
}