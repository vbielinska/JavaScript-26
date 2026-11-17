// using of js desrtucturing

// swap the value of two variables
let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a);
console.log(b);

// swap 2 elements in an array
const colours = ['red', 'green', 'blue', 'black', 'white'];
[colours[0], colours[4]] = [colours[4], colours[0]]
console.log(colours)

// assign array elements to variables 
const colors = ['red', 'green', 'blue', 'black', 'white']
const [firstcolor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstcolor)
console.log(extraColors)

// extract values from objects
const persone1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const persone2 = {
    firstName: "Papric",
    lastName: "Star",
    age: 34,

}

// const { firstName, lastName, age, job } = persone1;
const { firstName, lastName, age, job = "Unemployend" } = persone2

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// destructuring in function parameters 
function displayPerson ({firstName, lastName, age, job}) {
    console.log(`name: ${firstName} ${lastName} `)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
}

displayPerson(persone1)
displayPerson(persone2)

