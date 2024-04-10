let currentNum="";
let PreviousNum="";
let operator="";

function addNumber(num){
    currentNum+=num;
    document.getElementById("display").value=currentNum;
}

function clearDisplay(){
    currentNum="";
    PreviousNum=""
    operator="";
    document.getElementById("display").value =currentNum;
}


function setOp(op){
    if(currentNum==="") return;
    PreviousNum=currentNum;
    currentNum="";
    operator=op;
    const display_value =document.getElementById("display").value
    if(display_value.value !== "" || display_value.includes(op)){
    document.getElementById("display").value = display_value+op;
    }
}

function cal(){
    if(operator==="") return;

    let a =0;
    switch(operator){
        
        case '+':
        a= parseFloat(PreviousNum)+parseFloat(currentNum);
        break;

        case '-':
        a= parseFloat(PreviousNum)-parseFloat(currentNum);
        break;

        case '*':
        a= parseFloat(PreviousNum)*parseFloat(currentNum);
        break;

        case '/':
        if(currentNum === "0"){
            alert("Error Division by 0");
            return;
        }
        a= parseFloat(PreviousNum)/parseFloat(currentNum);
        break;
    }

    PreviousNum = a.toString();
    currentNum="";
    document.getElementById("display").value =a;
}

function onebyone(){
    if(currentNum == ""){ return;}
    currentNum = currentNum.slice(0,-1);
    document.getElementById("display").value = currentNum
}