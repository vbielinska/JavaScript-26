//harjoitus 1 kertotaulu

const luku = 2;
for (let i = 1; i <= 10; i++) {
    console.log(luku + " × " + i + " = " + luku * i);
}

//harjoitus 2 summa ja keskiarvo

/* const pisteet = [8, 7, 10, 6, 9];
let summa = 0;
for (const piste of pisteet) {
    summa = summa + piste;
}
console.log(summa) */

const pisteet = [8, 7, 10, 6, 9];
let summa = 0;
if (pisteet.length === 0) {
    console.log('Ei pisteitä')
}
else {
    for (let i = 0; i < pisteet.length; i++) {
        summa += pisteet[i]
    }
    console.log(summa)
    const meanNumber = summa / pisteet.length;
    console.log(meanNumber);
}

//harjoitus 3 FizzBuzz

let limit = 100;
limit = 30;
for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        continue;
    } 

    else if (i % 5 === 0) {
        console.log('Buzz');
        continue;
    }

    else if (i % 3 === 0) {
        console.log('Fizz');
        continue;
    }

    console.log(i)
}

