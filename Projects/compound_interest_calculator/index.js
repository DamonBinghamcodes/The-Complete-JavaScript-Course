// Compound interest calculator that prompts the user for some inputs, and finally calculates the compounded interest value

let initAmount = 20000
let monthlyContribution = 400
let numberOfYears = 30
let interestRate = 10

// step 1 - define a function that we can use to calculate the final cvalue of the compounded interest

function compoundInterest(initAmount, monthlyContribution, numberOfYears, interestRate) {
    let total = initAmount

    let annualContribution = monthlyContribution * 12

    for (let i = 0; i < numberOfYears; i++) {
        total = total + annualContribution
        total = total * ((100 + interestRate) / 100)
    }

    return total.toFixed(2)
}

function calculateRegular(initAmount, monthlyContribution, numberOfYears) {
    return (initAmount + monthlyContribution * 12 * numberOfYears).toFixed(2)
}

// step 2 - define a function that would calculate the difference (ie the effect that compounding has had)

// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

// step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

// just testing to see if git reads this change.

// test 2