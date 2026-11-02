//harjoitus 1: ikäraja

let ika = 8; // 13, 17, 18 25
let taso;

if (ika < 13) {
    taso = "lapsi";
} else if (ika < 18) {
    taso = "nuori";
} else {
    taso = "aikuinen";
}

console.log("Henkilö on " + taso + ".");

// Harjoitus 2: kirjautuminen

let kirjautunut = true; 
let admin = false;
let opettaja = true;

if (!kirjautunut) {
    console.log("Kirjaudu sisään."); // Попросить войти
} else if (admin || opettaja) {
    console.log("Voit muokata."); // Разрешить редактирование
} else {
    console.log("Sinulla ei ole muokkausoikeutta."); // Нет прав на редактирование
}

// Harjoitus 3: virheenetsintä

const age = 18;       // Число, не текст
const lupa = true;    // Разрешение: true или false

if (age >= 18 && lupa === true) {
  console.log("Pääsy sallittu");
} else {
  console.log("Tarkista ehdot");
}