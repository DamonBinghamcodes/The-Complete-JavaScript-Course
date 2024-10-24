// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

// To initlise a variable we use Let or Const

let name = 'Damon'

name = 'Damon Bingham'

// 2. How would you compare two variables, a and b, to check equal?

let a = 5
let b = 7

console.log(a == b)

// 3. Write an if...else statement in Javascript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; Otherwise, it should log"minor".

let age = 29

if (age > 18) {
    console.log('adult')
} else {
    console.log('minor')
}

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

let numbersToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayLength = numbersToTen. length
// i = index
for (let i = 0; i < arrayLength; i++) {
    let currentValue = numbersToTen [i]
    let isEven = currentValue % 2 === 0
    if (isEven) {
        console.log(currentValue)
    }
}

// 5. Given an array numbers, write a while loop that continues to sub the numbers until the sum is greater than 100, then exits the loop.

let arrayOfNumbers = [20, 4, 5, 8, 13, 25, 442, 56, 39, 12]

let sum = 0
let i = 0
//sum is the calculation and i is the index as the runtime reads through the array
while (sum < 100) {
    let newCurrentValue = arrayOfNumbers[i]
    sum = sum + newCurrentValue
// i++ = the indec plus 1, it will move up one idex e.g. 28 then 4 then 5 etc
    i++
}

console.log(sum)

// 6. Define a function names calculateArea that takes two parameters, width and height, and returns the area of a rectangle. // width * height
// use the Function declaration then the name of the function, it takes two parameters they go inside the ()
function calculateArea(width, height) {
    let area = width * height
    return area
}
// invoke the function by using the ()
let areaOne = calculateArea(9, 10)
let areaTwo = calculateArea(9, 14)
console.log('The calculated area is; ', areaOne)
console.log('The calculated area is; ', areaTwo)