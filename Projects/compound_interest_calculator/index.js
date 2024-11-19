// Compound Interest calculator that prompts a user for some inputs, and finally calculates the compounded interest value

let innitAmount = 20000
let monthlyContribution = 400
let numberOfYears = 30
let interestRate = 10

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
    return (innitAmount + monthlyContribution * 12 * numberOfYears).toFixed(2)
}

// Compound interest function is working = console.log(compoundInterest(innitAmount, monthlyContribution, numberOfYears, interestRate) , calculateRegular(innitAmount, monthlyContribution, numberOfYears))


// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

// step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown