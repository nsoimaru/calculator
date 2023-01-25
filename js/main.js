class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
       this.currentOperandTextElement = currentOperandTextElement;
       this.previousOperandTextElement = previousOperandTextElement;
       this.clear();
    }

    allClear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    clear() {
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    changeSign(number) {
        let current = parseFloat(this.currentOperand);
        if(!current) {
            return;
        }
        else if(current < 0) {
            current = -current;
            this.currentOperand = current.toString();
        } else {
            current = -current;
            this.currentOperand = current.toString();
        }
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    choseOperation(operation) {
        if(this.currentOperand === '') return;
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.compute();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current))return;
        switch(this.operation) {
            case '+':
                console.log(prev)
                console.log(current)
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if(current === 0) return;
                computation = prev / current;
                break;
            default:
                return;
        } 
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-function]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const allClearButton = document.querySelector('[data-all-clear');
const clearButton = document.querySelector('[data-clear');
const deleteButton = document.querySelector('[data-delete');
const signChangeButton = document.querySelector('[data-sign-change');
const equalsButton = document.querySelector('[data-equals');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.allClear();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

signChangeButton.addEventListener('click', button => {
    calculator.changeSign();
    calculator.updateDisplay();
})