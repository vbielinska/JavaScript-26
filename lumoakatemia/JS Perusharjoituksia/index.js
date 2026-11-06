//P01 Write a program that converts kilometers to miles.
console.log("Hei maailma!")

//P02 Write a program that adds two numbers and prints their sum.
let a, b;
a = 100;
b = 10;
console.log(`${a} + ${b} = ${a + b}`);

//P03 Write a program that subtracts one number from another and prints the difference.
console.log(`${a} - ${b} = ${a - b}`)

//P04 Write a program that multiplies two numbers and prints the product.
console.log(`${a} * ${b} = ${a * b}`)

//P05 Write a program that divides one number by another and prints the quotient.
console.log(`${a} : ${b} = ${a / b}`)

//P06 P07 Write a programs that converts Celsius degrees to Fahrenheit and Fahrenheit degrees to Celsius.

let celsius, fahrenheit;
celsius = 20;
fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);
fahrenheit = 451;
celsius = (fahrenheit - 32)*5/9;
console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`)

// P08 P09 Write programs that converts miles to kilometers and kilometers to miles.

let miles, kilometers;
const MILES_TO_KILOMETERS = 1.609;
miles = 100;
kilometers = miles * MILES_TO_KILOMETERS
console.log(`${miles} mi is ${kilometers} km`)
kilometers = 100
miles = kilometers / MILES_TO_KILOMETERS
console.log(`${kilometers} km is ${miles.toFixed(2)} mi`)

// P10 P11 Write a programs that converts inches to centimeters and inches to centimeters.

let inches, centimeters;
const INCHES_TO_CENTIMETERS = 2.54;
inches = 100;
centimeters = inches * INCHES_TO_CENTIMETERS
console.log(`${inches} in is ${centimeters} cm`)
centimeters = 100
inches = centimeters / INCHES_TO_CENTIMETERS
console.log(`${centimeters} cm is ${inches.toFixed(2)} in`)

// P12 P13 Write programs that converts yards to meters and meters to yards.

let yards, meters;
const YARDS_TO_METERS = 0.9144;
yards = 100;
meters = yards * YARDS_TO_METERS;
console.log(`${yards} yd is ${meters} m`);
meters = 100;
yards = meters / YARDS_TO_METERS;
console.log(`${meters} m is ${yards.toFixed(2)} yd`);

// P14 Rewrite exercises P02–P05 so that the user can provide both values (a and b). 

function num(a, b) {
   console.log(`${a} + ${b} = ${a + b}`);
   console.log(`${a} - ${b} = ${a - b}`);
   console.log(`${a} * ${b} = ${a * b}`);
   console.log(`${a} : ${b} = ${a / b}`);
}
num(100, 10);

// P15 Calculate the area of a circle when the user provides its radius.

/* let radius = 10;
const pi = 3.14159;
let area;
area = pi * radius * radius;
console.log(`The area of a circle with radius ${radius} is ${area}`);
 */

/* function circleArea(radius) {
    const pi = 3.14159
    let area = pi * radius * radius;
    console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);
}
circleArea(10);
 */

function circleArea(radius) {
    let area = Math.PI * radius ** 2;
    console.log(`The area of a circle with radius ${radius} cm is ${area.toFixed(2)} cm²`);
}
circleArea(10);

// P16 Calculate the area of a square when the user provides the length of its side.

function squareArea(squareSide) {
    let area = squareSide ** 2;
    console.log(`The area of a square with side ${squareSide} cm is ${area.toFixed(2)} cm²`);
}
squareArea(10);

// P17 Calculate the area of a rectangle when the user provides its width and height.

function rectangleArea(length, width) {
    let area = length * width;
    console.log(`The area of a rectangle with length ${length} cm and width ${width} cm is ${area.toFixed(2)} cm²`);
}
rectangleArea(2, 5)

// P18 Write a program that converts a given number of days into years, months, and days.

function convertDays(days) {
    let years = Math.floor(days/365);
    let remainingDays = days % 365; 

    let months = Math.floor(remainingDays / 30);
    let daysLeft = remainingDays % 30;
    
    console.log(
        `${days} days is ${years} years, ${months} months, and ${daysLeft} days.`
    );
}
convertDays(800);

/* 
 / — делит, чтобы узнать, сколько раз помещается 365.
 Math.floor() — убирает дробную часть.
 % — показывает остаток после деления.
*/