// const b7=document.getElementById("b7").textContent

// document.getElementById("display").innerHTML= b7

let currentNum="";
let PreNum="";

function addNumber(num){
    currentNum+=num;
    document.getElementById("display").value=currentNum;
}

function clearDisplay(){
    currentNum="0";
    document.getElementById("display").value =currentNum;
}