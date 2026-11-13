// Harjoitus 1: Tuotelista

/*Используйте массив товаров со слайда: мышь (Hiiri, цена 25, остаток 4), монитор (Näyttö, цена 240, остаток 0), кабель (Kaapeli, цена 12, остаток 7).
1. Отфильтруйте: выберите товары, у которых остаток больше 0.
2. Преобразуйте: составьте массив только из названий доступных товаров.
3. Challenge: получите цены доступных товаров с увеличением на 25,5%. Это процент для упражнения. */

const products = [
    { name: "Hiiri", price: 25, stock: 4 },
    { name: "Näyttö", price: 240, stock: 0 },
    { name: "Kaapeli", price: 12, stock: 7 }
];

// Выбираем товары, которые есть в наличии
const availableProducts = products.filter(product => product.stock > 0);
console.log(availableProducts);
// Получаем только их названия
const availableNames = availableProducts.map(product => product.name);
console.log(availableNames)
// Увеличиваем их цены на 25,5%
const increasedPrices = availableProducts.map(product => (product.price * 1.255).toFixed(2));
console.log(increasedPrices)

//Harjoitus 2: Pisteanalyysi

/* Используйте массив:
[60, 80, 95, 70, 85, 90]
В задании входные значения — целые числа.
1. Сумма: сложите баллы с помощью reduce().
2. Boolean: с помощью some() проверьте, набрал ли кто-нибудь не меньше 95.
3. Проверка диапазона: с помощью every() проверьте, находятся ли все баллы между 0 и 100.
4. Challenge: найдите среднее значение и посчитайте результаты не ниже 70.*/


//сумма баллов
const scores = [60, 80., 95, 70, 85, 90];
const total = scores.reduce((sum, score) => sum + score, 0);
console.log(total)

// Есть ли результат не ниже 95
const hasAtLeast95 = scores.some(score => score >= 95)
console.log(hasAtLeast95)

// Все ли баллы в диапазоне от 0 до 100
const areInRange = scores.every(score => score >= 0 && score <= 100);
console.log(areInRange)

//harjoitus 3: Opiskelijarekisteri

/* 
Используйте массив студентов со слайда: Аино (`82`, активна), Мика (`64`, не активен), Сара (`78`, активна).
1. **`filter`:** выберите активных студентов.
2. **`map`:** сформируйте для них строки вида `Имя – баллы p`.
3. **`reduce`:** сложите баллы активных студентов. Разделите сумму на их количество, если оно больше нуля.
4. **Challenge:** найдите студентов с `id` 2 и `id` 99 методом `find()`. Сообщите, если студент не найден.
**Проверьте:** среднее активных студентов — `80`. */

