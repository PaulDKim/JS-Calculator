// Gives each button an event listener. 
let button = document.getElementsByTagName('button');

Array.from(button).forEach(x => {
    return x.addEventListener('click', buttonClick);
})

// Should determine what kind of button it is, when you clicked on it. 
function buttonClick(event) {
    let buttonValue = event.target.textContent;
    let prevOp = document.querySelectorAll(".previousOp")[0];
    let currentOp = document.querySelectorAll(".currentOp")[0];

    // Checks if the button is a number 
    if (Number.isInteger(parseInt(buttonValue))) {
        currentOp.textContent += buttonValue;
    }

    // Checks if the button clicked is "C"
    if (buttonValue == "C") {
        currentOp.textContent = "";
        prevOp.textContent = "";
    }

    // Checks if the button clicked is an operator
    if (buttonValue == "+") {
        let content = document.getElementsByClassName('currentOp')[0].textContent

        prevOp.textContent = content + "+"
        currentOp.textContent = "";
    }

    if (buttonValue == "=") {
        let calcString = prevOp.textContent + currentOp.textContent;
        let calculation = eval(calcString);

        prevOp.textContent = "";
        currentOp.textContent = calculation;
    }
}
