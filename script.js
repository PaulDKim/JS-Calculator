// Select buttons and display elements
let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]')
let clearButton = document.querySelector('[data-clear]');
let equalButton = document.querySelector('[data-equals]');
let previousOperandDisplay = document.querySelector('[data-previous-operand]');
let currentOperandDisplay = document.querySelector('[data-current-operand]');

// Define calculator class
class Calculator {
    constructor(previousOperandDisplay, currentOperandDisplay) {
        this.previousOperandDisplay = previousOperandDisplay;
        this.currentOperandDisplay = currentOperandDisplay;
        this.currentOperand = '';
        this.previousOperand = '';
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
    }

    delete() {
        let numArray = this.currentOperand.split('');
    }

    append(number) {
        this.currentOperand += number;
    }

    operation(operator) {
        this.previousOperand = this.currentOperand + operator;
        this.currentOperandDisplay.innerText = '';
        this.currentOperand = '';
    }

    compute() {
        this.result = this.previousOperand + this.currentOperand;
        this.previousOperand = '';
        this.currentOperand = eval(this.result);
    }

    updateScreen() {
        this.currentOperandDisplay.innerText = this.currentOperand;
        this.previousOperandDisplay.innerText = this.previousOperand;
    }

}

// Declare calculator object
const myCalculator = new Calculator(previousOperandDisplay, currentOperandDisplay);

// Mapping the number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        myCalculator.append(button.innerText);
        myCalculator.updateScreen();
    })
});

// Mapping the clear button 
clearButton.addEventListener('click', () => {
    myCalculator.clear();
    myCalculator.updateScreen();
})

// Mapping the operation buttons 
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        myCalculator.operation(button.innerText);
        myCalculator.updateScreen();
    })
})

// Mapping the equals button 
equalButton.addEventListener('click', () => {
    myCalculator.compute();
    myCalculator.updateScreen();
})
