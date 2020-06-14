
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

        //step 6
        this.clear()
    }

    clear() {
        //clear out our different variable
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    //step 3
    delete() {
        //removing a single number
        //step 21
        //get the very last value from the string and chop it off
        //this is going to take all the different character in the string from the first to second to last
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        //this is what happens everytime a user clicks a number to add to the screen
        
        //step 11 
        //we want the '.' to get added once.
        if (number === '.' && this.currentOperand.includes('.')) return

        //step 10
        //update the currentOperand value and append the number that gets passed to the end of it and convert to a string just incase its a number so that we can easily append to it by using the +sign.
        //also, because javascript will try to add them as actual numbers e.g 1+1=2 instead of 1+1=11 cos we want the numbers appended not added 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        //this is what happens when a user clicks on any one of the operations

        //step 15
        //you would have noticed that if u click an operation, it actually goes thru with the computation.. we have to stop that with a check
        if(this.currentOperand === '') return

        //step 16
        //another thing to note about the current operand is that, if we have 2 values and we click an operation, it will do the computation and also put all of our operand values where they need to be. we need to have another check for that.
        //in essence this is to check if the previous operand already exists before our operand choosing
        if (this.previousOperand !== ''){
            this.compute()
        }

        //step 13
        //clear out the current operand and puts it into the previous operand and allows us to type a new value
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute() {
        //takes our value inside of the calc and compute a single value for what is needed to be displayed on the screen

        //step 18
        let computation //result of our compute fn

        //number version of our prev, current operand
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        //check if for example, the user doesnt enter anything and they click (=), we dont want the code to run
        if (isNaN(prev) || isNaN(current)) return

        //step 19:
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return

        }

        //step 20 with our computation done
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        //updates the value inside of our output
        this.currentOperandTextElement.innerText = this.currentOperand
        //step 14
        //update for step 13
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}





//STEP 1
const numberButtons  = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


//step 7

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

//step 8 and 9

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

//step 12
//choose operation variables

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


//step 17 Comptutation
equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})


//step 21 delete button computation
deleteButton.addEventListener('click', ()=> {
    calculator.delete()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click',() =>{
    calculator.clear()
    calculator.updateDisplay()
})


//step 1:link your elements with a variable (DOM)

//step 2: think about how we are going to store all the information i.e 

//step 3: think about all the operations a calculator can perform clear operation(clear all the operands when u press the button), and also for the rest of the other operations

//step 4: with our operations all defined, lets think about the different properties our calc needs to store....we need to know the previousOperandTextElement, currentOperandTextElement and the operation a user selects

//step 5: we need to remove all the values entered 

//step 6: sets to default value as soon as we reset

//step 7: hooking up all our variable and making them operate on our calculate object.. this allows us instantiate/use the calculator object

//step 8: add an event listener to each button and append the innertext(number) on the button

//step 9: our display values will be constantly updated everytime we click on a button

//step 10: we would want to append numbers to our currentoperand i.e having multiple different numbers added to the current operand.

//step 11: we want to add the '.' button only once

//step 12: set the operators to a variable 

//step 13: clear out the current operand and puts it into the previous operand and allows us to type a new value

//step 14: to put step 13 into effect

//step 15: we need to write a check to stop the computation that is happening in the calculator whenever i type the operation button