//IE 01 Write a program that finds the larger of two numbers.

function findLarger(a, b) {
    if (a > b) {
        console.log(`The larger number is ${a}`)
    }

    else if (b > a) {
        console.log(`The larger number is ${b}`)
    }

    else {
        console.log('Numbers are equal')
    }
};
findLarger(1, 2);

//IE 02 Write a program that finds the largest of three numbers.

function findLargerOfThree(x, y, z) {
    if (x === y && y === z) {
        console.log("All numbers are equal");
    }
    else if (x > y && x > z) {
        console.log(`The larger number is ${x}`)
    }

    else if (y > x && y > z) {
        console.log(`THe larger number is ${y}`)
    }

    else if (z > x && z > y) {
        console.log(`The larger number is ${z} `)
    }

    else {
        console.log("The largest number appears more than once");
    }
}

findLargerOfThree(5, 1, -5)

//IO 03 Write a program that checks whether a number is negative, zero, or positive.

const findDigit = (number) => {
    if (number < 0) {
        return 'The number is negative';
    }

    else if (number === 0) {
        return 'The number is zero';
    }

    else (number > 0); {
        return 'Thr number is positive';
    }
}

console.log(findDigit(100))

//IO 4 Write a program that asks the user for a number and checks whether it is divisible by 5 or 11

const isDivisible = (num) => {
    if (num % 5 === 0 && num % 11 === 0) {
        return 'the number is divisible by 5 and 11'
    }

    else if (num % 5 === 0 || num % 11 === 0) {
        return 'the number is devisible by 5 or 11'
    }

    else { return 'the number is not devisible by 5 or 11' }
}

console.log(isDivisible(55))

//