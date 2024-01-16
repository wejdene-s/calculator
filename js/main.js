import Operation from "./Operation.js";

const operationObj = new Operation();

const init =() => {
    resetResult();
    //listen for keys 
    const clear = document.getElementById("clear");
    clear.addEventListener("click", resetResult);

    const numbers = document.querySelectorAll(".number");
    numbers.forEach(number =>{
        number.addEventListener("click", displayNumber);
    })
}
document.addEventListener("DOMContentLoaded", init);

const resetResult = () =>{
    const result = document.querySelector(".result");
    result.textContent = operationObj.getResult();
    if (operationObj.getStatus()){
        endOperation();
    }
}

const endOperation = function(){
    operationObj.removeOperand1();
    operationObj.removeOperand2();
    operationObj.removeOperand();
    operationObj.removeOperator();
    operationObj.setResult(0);
    operationObj.setStatus(false);
}

const displayNumber = (event) =>{
    if (!(operationObj.getStatus())) {
        operationObj.setStatus(true);
    }
    if (operationObj.getOperand().length < 16){
        operationObj.setOperand(event.target.textContent);
        document.querySelector(".result").textContent = operationObj.getOperand();
    }

}

