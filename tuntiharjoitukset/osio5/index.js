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