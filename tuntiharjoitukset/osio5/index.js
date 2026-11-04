//harjoitus 1

/* Создайте массив покупок и потренируйтесь добавлять, удалять и искать элементы.
1. Создайте массив как минимум из пяти товаров.
2. Добавьте элемент с помощью push() и удалите элемент через pop() или shift().
3. Проверьте наличие одного товара с помощью includes().
Проверьте: удалённый товар больше не находится. Что возвращает pop() для пустого массива?

подскажи */


let ostoslista = ['maito', 'leipä', 'voi', 'juusto', 'liha'];

ostoslista.push ('omenat', 'kahvi'); // Добавляем товары в конец списка
let poistettu = ostoslista.pop(); // Удаляем последний элемент из списка и 

console.log(ostoslista);
console.log(ostoslista.includes('leipä')); // Проверяем, есть ли элемент в списке
console.log(ostoslista.includes(poistettu)); // Проверяем, есть ли элемент в списке
console.log(poistettu);

console.log(ostoslista);
let tyhjaLista = [];
console.log(tyhjaLista.pop()); // undefined: в пустом массиве нечего удалять

//harjoitus 2 

/* */
const pisteet = [60, 80, 95, 70, 85, 90];
let summa = 0;
/* for (const piste of pisteet) {
    summa = summa + piste;
} */

for (let i = 0; i < pisteet.length; i++) {
    summa += pisteet[i]
}

if (pisteet.length > 0) {
    const keskiarvo = summa / pisteet.length;
    console.log(`Summa: ${summa}`);
    console.log(`Keskiarvo: ${keskiarvo}`);
}
else {
    console.log('Ei pisteitä')
}

const yli90 = pisteet.find(function (piste) {
  return piste > 90;
});

console.log("First score over 90: " + yli90);

//harjoitus 3

/**
 Создайте список имён, добавьте новое имя, выполните поиск, отсортируйте копию и выведите результаты.
1. Начните с массива:['Sara', 'Aino', 'Mika']
   Добавьте 'Oskari' методом push().
2. Найдите 'Aino' и 'Leevi', используя includes() и indexOf().
3. Скопируйте массив через spread-синтаксис, отсортируйте копию с помощью sort() и выведите оба массива методом join().
 */
let nimet = ['Sara', 'Aino', 'Mika',];
nimet.push ('Oskari')
console.log(nimet.includes('Aino')); //true
console.log(nimet.indexOf('Aino')); //1


console.log(nimet.includes('Leevi')); //false
console.log(nimet.indexOf('Leevi')); //-1

let sortedNimet = [...nimet];
sortedNimet.sort();

console.log(`Sorted: ${sortedNimet.join(', ')}`); 

//harjoitus 4

const names = ["Aino", "Mika", "Sara"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const uusiPituus = names.push("Oskari");
console.log(uusiPituus);