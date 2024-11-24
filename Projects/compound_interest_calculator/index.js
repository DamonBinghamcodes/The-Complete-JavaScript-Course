const prompt = require('prompt-sync')()
// Compound Interest calculator that prompts a user for some inputs, and finally calculates the compounded interest value

// let innitAmount = 20000
// let monthlyContribution = 400
// let numberOfYears = 30
// let interestRate = 10

// step 1 - define a function that we can use to calculate the final value of the compounded interest

function compoundInterest (innitAmount, monthlyContribution, numberOfYears, interestRate) {
    let total = innitAmount
    let annualContribution = monthlyContribution * 12

    for (let i = 0; i < numberOfYears; i++) {
        total = total + annualContribution
        total = total * ((100 + interestRate) / 100)
    }

    return total.toFixed(2)
}

// step 2 - define a function that would calculate the difference (ie the effect that compounding has had)

function calculateRegular(innitAmount, monthlyContribution, numberOfYears) {
    let regularValue = innitAmount + monthlyContribution * 12 * numberOfYears
    console.log(regularValue)
    // return (innitAmount + monthlyContribution * 12 * numberOfYears).toFixed(2)
}



// Compound interest function is working = console.log(compoundInterest(innitAmount, monthlyContribution, numberOfYears, interestRate) , calculateRegular(innitAmount, monthlyContribution, numberOfYears))


// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

function run() {
    let initAmount = parseInt(prompt('What is your initial investment ($) ?'))
    let monthlyContribution=parseInt(prompt('What is your monthly contribution ($) ?'))
    let numberOfYears = parseInt(prompt('For how many years would you like to compound your investmet?'))
    let interestRate = parseInt(prompt('What is your expected interest rate (%) over these years?'))

    printOutput(initAmount, monthlyContribution, numberOfYears, interestRate)
}

// step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

function printOutput(innitAmount, monthlyContribution, numberOfYears, interestRate) {
    let finalValue = compoundInterest(innitAmount, monthlyContribution, numberOfYears, interestRate)

    let valueWithoutCompounding = calculateRegular(innitAmount, monthlyContribution, numberOfYears)

    let summary = 'INIT_AMOUNT: ${initAmount}\nMONTHLY_CONTRIBUTION: ${monthlyContribution}\nNUMBER_OF_YEARS: ${numberOfYears}\nINTEREST_RATE: ${interestRate}\n\nFINAL_COMPOUNDED_VALUE: ${finalValue}\nREGULAR_AMOUNT: $${valueWithoutCompounding}\nDIFFERENCE: $${finalValue - valueWithoutCompounding}'
    console.log(summary)
}

run()