let input = document.querySelector('input');
let button = document.querySelector('button'); 
let result = document.getElementsByClassName('result');

function calculateKw(){
    let calcoloKw = input.value * 0.233;
    let roundedKw = Math.round(calcoloKw * 100) / 100;
    result[0].innerHTML = roundedKw;
}