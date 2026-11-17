// Harjoitus 1: Tuotelista

const products = [
    { name: "Hiiri", price: 25, stock: 4 },
    { name: "Näyttö", price: 240, stock: 0 },
    { name: "Kaapeli", price: 12, stock: 7 }
];

// выбери товары у которых остаток больше 0 
const availableProducts = products.filter(product => product.stock > 0);
console.log(availableProducts);
/* [
  { name: 'Hiiri', price: 25, stock: 4 },
  { name: 'Kaapeli', price: 12, stock: 7 }
] */

// получи массив тольео из названий доступных имен
const availableNames = availableProducts.map(product => product.name);
console.log(availableNames) // [ 'Hiiri', 'Kaapeli' ]

// Увеличь их цены на 25,5%
const increasedPrices = availableProducts.map(product => (product.price * 1.255).toFixed(2));
console.log(increasedPrices)// [ '31.37', '15.06' ]

//Harjoitus 2: Pisteanalyysi

const scores = [60, 80, 95, 70, 85, 90];
if (scores.length === 0) {
    console.log('No scores')
}
else {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const hasAtLeast95 = scores.some(score => score >= 95);
    const areInRange = scores.every(score => score >= 0 && score <= 100);
    const average = total / scores.length
    const scoresSorted = scores.toSorted((a, b) => a - b);
    const countAbove70 = scores.filter(score => score >= 70).length;

    console.log("Sum:", total);                       //Sum: 480
    console.log("Has score at least 95:", hasAtLeast95); //Has score at least 95: true
    console.log("All scores in range:", areInRange);  //All scores in range: true
    console.log("Average:", average);                 // Average: 80
    console.log("Sorted:", scoresSorted) // Sorted: [ 60, 70, 80, 85, 90, 95 ]
    console.log("Scores at least 70:", countAbove70); // Scores at least 70: 5

}




//harjoitus 3: Opiskelijarekisteri

const students = [
    { id: 1, name: "Aino", score: 82, active: true },
    { id: 2, name: "Mika", score: 64, active: false },
    { id: 3, name: "Sara", score: 78, active: true }
];

// выбирать активных студентов
const activeStudents = students.filter(student => student.active);
console.log(activeStudents)

// преобразовать массив в строку
const activeNames = activeStudents.map(student => `${student.name} – ${student.score} p`);
console.log(activeNames.join(', '))

// сложить баллы активных студентов , разделить сумму на их количество, если оно больше нуля
const scoreSum = activeStudents.reduce((sum, student) => sum + student.score, 0);
console.log(scoreSum) //160
if (activeStudents.length > 0) {
    const scoreAverage = scoreSum / activeStudents.length
    console.log(scoreAverage); //80
}

//поиск студентов по id 
function findStudentByID(inputId) {
    const student = students.find(student => student.id === inputId);

    if (student) {
        console.log(student.name);
    }
    else {
        console.log(`Student with id ${inputId} not found`)
    }
}

findStudentByID(2); // Mika
findStudentByID(99); // Student with id 99 not found