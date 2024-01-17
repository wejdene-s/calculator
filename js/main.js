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

    const sign = document.getElementById("toggle-sign");
    sign.addEventListener("click", changeSign );

    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => {
        operator.addEventListener("click", displayOperator);
    })

    const equal = document.getElementById("equal");
    equal.addEventListener("click", displayResult);
}
document.addEventListener("DOMContentLoaded", init);

const resetResult = () =>{
    if (operationObj.getStatus()){
        endOperation();
    }
    const result = document.querySelector(".result");
    result.textContent = operationObj.getResult();
    const operation = document.querySelector(".operation");
    operation.textContent = "";

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

    if (operationObj.getOperand() === "" || operationObj.getOperand() === "-" ){
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
        document.querySelector(".result").textContent = operationObj.getOperand();
        operationObj.setStatus(true);
    }
    
}

const changeSign = () => {
    if (operationObj.getOperand() !== ""){
        const currentOperand = operationObj.getOperand();
        operationObj.removeOperand();
        if(currentOperand.charAt(0) === "-"){
            operationObj.setOperand(currentOperand.slice(1));
        }else{
            operationObj.setOperand("-"+ currentOperand);
        }
        document.querySelector(".result").textContent = operationObj.getOperand();
        
    }
    
}

const displayOperator = (event) => {
    if (operationObj.getStatus()) {
        if (operationObj.getOperand() && operationObj.getOperator() && operationObj.getOperand1() && !(operationObj.getResult())){
            operationObj.setOperand2(Number(operationObj.getOperand()));
            const result = calculateResult();
            operationObj.setOperand1(result);

            document.querySelector(".result").textContent = result;
        }
        if (!(operationObj.getOperand1())){
                operationObj.setOperand1(Number(operationObj.getOperand()));
        }
        operationObj.setOperator(event.target.textContent);
        document.querySelector(".operation").textContent = `${operationObj.getOperand1()} ${operationObj.getOperator()} `;
        operationObj.removeOperand();

    }
} 

const calculateResult = () => {
        const operator = operationObj.getOperator();
    let result;
    switch (operator){
        case ("+"):
            result = operationObj.getOperand1() + operationObj.getOperand2();
            break;
        case ("-"):
            result = operationObj.getOperand1() - operationObj.getOperand2();
            break;
        case ("*"):
            result = operationObj.getOperand1() * operationObj.getOperand2();
            break;
        case ("/"):
            result = operationObj.getOperand1() / operationObj.getOperand2();
            break;
    }
    return result;
}

const displayResult = () => {
    if (operationObj.getStatus()){
        if (operationObj.getOperand1() && operationObj.getOperand()){
            operationObj.setOperand2(Number(operationObj.getOperand()));
                const result = calculateResult();
                operationObj.setResult(result);
                document.querySelector(".result").textContent = result;
                document.querySelector(".operation").textContent = `${operationObj.getOperand1()} ${operationObj.getOperator()} ${operationObj.getOperand2()} = `;
                operationObj.setOperand1(result);

            }

        }
}
