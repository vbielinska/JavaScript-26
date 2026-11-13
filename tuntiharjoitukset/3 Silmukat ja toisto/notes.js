//silmukat - loopes - циклы
for (let i = 1; i <=5; i++) {
    console.log(`Kierros ${i}`);
}


// i++

let i = 0;
i++;                    // i = i + 1
console.log(i)          // 1
i--                     // i = i - 1
console.log(i);         // 0

// Цикл for: от 1 до 10

for (let x = 1; x <=10; x++) {
console.log(x);
}

// Цикл for: чётные числа 
for (let y = 2; y <=20; y +=2) {
    console.log(y)
}

//Цикл for с обратным отсчётом
for (let i = 10; i >=1; i--) {
    console.log(i);
}
console.log('Lähtö!')



//Цикл while
let yritykset = 0;
while (yritykset < 3) {
  console.log('Yritys', yritykset + 1);
  yritykset++;
}

// Цикл wfile & for 
console.log('while and for')
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

let y = 1;
while (y <= 3) {
  console.log(y);
  y++;
}

 //Цикл do...while
let valinta = 0;

do {
  console.log('Valikko näytetään');
  valinta++;
} while (valinta < 1);

//Выбирайте do...while, когда действие должно произойти как минимум один раз.

//break — выйти из цикла
for (let i = 1; i <= 100; i++) {
  if (i === 7) {
    console.log('Löytyi!');
    break;
  }
}

//continue — пропустить итерацию 
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); // только нечётные
}

/*i % 2 — остаток при делении на 2.
Если остаток равен 0, число чётное, и continue пропускает console.log.
Поэтому выводятся только нечётные числа.*/

//Остаток % в циклах  
//Оператор % помогает определять чётность
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i, 'parillinen');
  }
}

//Перебор массива с помощью for
const nimet = ['Aino', 'Mika', 'Sara'];

for (let i = 0; i < nimet.length; i++) {
  console.log(nimet[i], i);
}

//Цикл for...of
//for...of проходит по значениям массива по порядку. На каждом шаге переменная цикла получает очередной элемен
const names = ['Aino', 'Mika', 'Sara']
for (const name of names) {
    console.log(name);
}

//for & for..of 
/* Выбирайте цикл в зависимости от того, нужен ли индекс.
Обычный for удобен, когда нужно знать позицию или управлять шагом счётчика.
Если нужны только значения выбиарй for..of */


//Вложенные циклы
for (let rivi = 1; rivi <= 3; rivi++) {
  for (let sarake = 1; sarake <= 4; sarake++) {
    console.log(rivi, sarake);
  }
}

//Цикл вместе с условием
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i, 'jaollinen kolmella');
  }
}

//Подсчёт суммы: накопитель
let summa = 0;

for (let i = 1; i <= 5; i++) {
  summa += i;
}
console.log(summa); // 15