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

    const clearEntry = document.getElementById("clear-entry");
    clearEntry.addEventListener("click", cEntry);

    const backSpace = document.getElementById("back-space");
    backSpace.addEventListener("click", back);

    const point = document.getElementById("point");
    point.addEventListener("click", addPoint);
}
document.addEventListener("DOMContentLoaded", init);

const resetResult = () =>{
    if (operationObj.getStatus()){
        endOperation();
    }
    const result = document.querySelector(".result");
    result.textContent = operationObj.getResult();

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
    if (!(operationObj.getStatus()) && event.target.textContent !== "0") {//handling the 0 at the beginning 
        operationObj.setStatus(true);
    }
    if (operationObj.getOperand().length < 16 && operationObj.getStatus()){
        operationObj.setOperand(event.target.textContent);
        console.log(operationObj.getOperand());
        document.querySelector(".result").textContent = operationObj.getOperand();
    }
}

const cEntry = () =>{
    operationObj.removeOperand();
    document.querySelector(".result").textContent = "0";

}

const back = () =>{
    let newOperand = operationObj.getOperand();
    operationObj.removeOperand();
    operationObj.setOperand(newOperand.slice(0,- 1));
    document.querySelector(".result").textContent = operationObj.getOperand();
    if (operationObj.getOperand() === "" ){
        document.querySelector(".result").textContent = "0";
    }


}

const addPoint = () =>{
    if (operationObj.getOperand().indexOf(".") === -1) {
        if (!(operationObj.getStatus())){
            operationObj.setOperand("0.");
        }else{
            operationObj.setOperand(".");
        }
        console.log(operationObj.getOperand());
        document.querySelector(".result").textContent = operationObj.getOperand();
    }
    

}