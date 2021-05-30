function readText(){
    let text = document.getElementById("readInput").value;
    document.getElementById("displayText").innerHTML = text;
}

function loadInput(){
    let numberInput = document.getElementById("numberInput").value;
    let total = 0;
    
    if (!isNaN(numberInput)){        
        for (i = 0; i <= numberInput; i++){
            total += i;
        }
    }
    
    document.getElementById("display").innerHTML = total;
}

function addNumbers() {
    let numberOne = parseInt(document.getElementById("addInput1").value);
    let numberTwo = parseInt(document.getElementById("addInput2").value);
    let total;

    if (!isNaN(numberOne) && !isNaN(numberTwo)){
        total = (numberOne + numberTwo);
    }   
    
    document.getElementById("totalNumber").innerHTML = total;
}