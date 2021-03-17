var clearBut = document.getElementById('clear');
var answer = document.getElementById('disp');
var eqnString = '';
var finalAnswer = 0;
clearBut.onclick = function() {
    answer.innerText = '';
    finalAnswer = 0;
    eqnString = '';
}
var numbers = document.getElementsByClassName("numbers");
// for(var element in numbers) {
//     element.onclick = function (params) {
//         answer.innerText = element.innerText;
//     }
// }
[...numbers].forEach(i => {
    i.onclick = function (params) {
        answer.innerText += i.innerText;
        eqnString += i.innerText;
    }
});

var operators = document.getElementsByClassName('operator');
[...operators].forEach(i => {
    i.onclick = function (){
        eqnString +=  i.innerText;
        answer.innerText = ''
    }
})

var evalu = document.getElementById('equal');
evalu.onclick = function (params) {
    //eqnString = answer.innerText;
    finalAnswer = eval(eqnString);
    answer.innerText = finalAnswer;
    eqnString = ''+finalAnswer;
    console.log(eqnString);
}

var sign = document.getElementById('sign-alter');
sign.onclick = function (params) {
    answer.innerText = ( 0 - parseInt( answer.innerText));
}