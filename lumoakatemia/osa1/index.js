//P01
console.log("Hei maailma!")

//P02
let a, b;
a = 100;
b = 10;
console.log(`${a} + ${b} = ${a + b}`);

//P03
console.log(`${a} - ${b} = ${a - b}`)

//P04
console.log(`${a} * ${b} = ${a * b}`)

//P05
console.log(`${a} : ${b} = ${a / b}`)

//P06 P07 

let celsius, fahrenheit;
celsius = 20;
fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);
fahrenheit = 451;
celsius = (fahrenheit - 32)*5/9;
console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`)

// P08 P09
let miles, kilometers;
const MILES_TO_KILOMETERS = 1.609;
miles = 100;
kilometers = miles * MILES_TO_KILOMETERS
console.log(`${miles} mi is ${kilometers} km`)
kilometers = 100
miles = kilometers / MILES_TO_KILOMETERS
console.log(`${kilometers} km is ${miles.toFixed(2)} mi`)

// P10 P11
let inches, centimeters;
const INCHES_TO_CENTIMETERS = 2.54;
inches = 100;
centimeters = inches * INCHES_TO_CENTIMETERS
console.log(`${inches} in is ${centimeters} cm`)
centimeters = 100
inches = centimeters / INCHES_TO_CENTIMETERS
console.log(`${centimeters} cm is ${inches.toFixed(2)} in`)

// P12 P13
let yards, meters;
const YARDS_TO_METERS = 0.9144;
yards = 100;
meters = yards * YARDS_TO_METERS;
console.log(`${yards} yd is ${meters} m`);
meters = 100;
yards = meters / YARDS_TO_METERS;
console.log(`${meters} m is ${yards.toFixed(2)} yd`);

//




