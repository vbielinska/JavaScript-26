//S01. Write a programme that calculates how much you will have to pay back if you borrow €5,000 for two years at an interest rate of 2 per cent.

const calculateLoan = (payment) => {
    let interest = 1.02;
    let years = 2;
    let currentAmount = payment;

    for (let i = 1; i <= years; i++) {
        currentAmount = currentAmount * interest;

    }
    return currentAmount;

}
console.log(calculateLoan(5000))

//S02 Calculate the factorial of a given number.

const calculateFactorial = (num) => {
    let result = 1;

    for (let i = num; i >= 1; i--) {
        result = result * i;
    }
    return result;

}
console.log(calculateFactorial(4))

//S03 Write a programme that finds the first occurrence of the number 3 in the array [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]

const findFirstOccurrence = (num) => {
    const array = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            console.log(`Number ${num} is at index ${i}`);
            break;
        }
    }
};

findFirstOccurrence(3);
/* const array = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
console.log(array.indexOf(3)) //4  */

//S04 Write a programme that reverses the word entered by the user (Hevonen → nenoveH).

const reverseWord = (word) => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
    }
    console.log(reversedWord)
}

reverseWord('hevonen')


const spellWord = (word) => {
    let spelledWord = "";
    for (let i = 0; i < word.length; i++) {
        spelledWord += word[i]
    }
    console.log(spelledWord)
}

spellWord('hevonen')

//S05 Write a programme that finds the maximum value in the array [6, 7, 2, 4, 3, 8, 1].

const findMax = (numbers) => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log(max);
};

findMax([6, 7, 2, 4, 3, 8, 1]);

//* a programme that finds the minimum value in the array
const findMin = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i]< min) {
            min = numbers[i];
        }
    }
    console.log(min);
}
findMin([6, 7, 2, 4, 3, 8, 1])