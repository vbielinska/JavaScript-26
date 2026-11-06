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

// Calculate the factorial of a given number.

const calculateFactorial = (num) => {
    let result = 1;

    for (let i = num; i >= 1; i--) {
        result = result *i ;
    }
    return result;
   
}
console.log(calculateFactorial(4))