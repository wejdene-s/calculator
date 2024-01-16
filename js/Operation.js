export default class Operation{
    constructor(){
        this.operand= "";
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = "";
        this.result = 0;
        this.status = false;
    }

    getStatus(){
        return this.status;
    }

    setStatus(status){
        this.status = status;
    }


    getOperand(){
        return this.operand;
    }
    
    setOperand(operand){
        this.operand += operand; 
    }

    removeOperand() {
        this.operand = "";
    }

    getOperand1(){
        return this.operand1;
    }

    setOperand1(operand){
        this.operand1 = operand;
    }

    removeOperand1(){
        this.operand1 = 0;
    }

    getOperand2(){
        return this.operand2;
    }

    setOperand2(operand){
        this.operand2 = operand;
    }

    removeOperand2(){
        this.operand2 = 0;
    }

    getOperator(){
        return this.operator;
    }

    setOperator(operator){
        this.operator = operator

    }

    removeOperator(){
        this.operator = "";
    }

    getResult(){
        return this.result;
    }

    setResult(result){
        this.result = result;
    }




}