let input = document.getElementById("inputfield");
let button = document.getElementById("bttn");
let card = document.getElementById("cardfield");


// function clearInput() {
//     var getValue = document.getElementById('inputfield');
//     if(getValue.value != " "){
//         getValue.value = " ";
//     }
// }

function fcard(){
    card.innerHTML = input.value;
    var getValue = document.getElementById('inputfield');
    if(getValue.value != " "){
        getValue.value = " ";
    }
}

 button.addEventListener('click', fcard);
