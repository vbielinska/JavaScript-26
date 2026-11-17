//harjoitus 1
/*Создайте объект Аино. Ей 20 лет, направление обучения — Ohjelmistokehitys, статус aktiivinen — true. Контактные данные придумайте самостоятельно.
1. Создайте объект со свойствами nimi, возраст, направление обучения и aktiivinen.
2. Измените возраст на 21 и добавьте pisteet со значением 82.
3. Добавьте метод esittele(), который выводит сведения о студентке.
4. Challenge: добавьте вложенный объект yhteystiedot и прочитайте из него электронную почту безопасно с optional chaining. */
console.log('Harjoitus 1')
const opiskelija = {
    nimi: 'Aino',
    ika: 20,
    ala: 'Ohjelmistokehitys',
    aktiivinen: true,
    esittele() {
        console.log(`Nimi: ${this.nimi}, ikä:${this.ika}, ala: ${this.ala}, aktiivinen:${this.aktiivinen}, pisteet: ${this.pisteet}`);
    },
    yhteystiedot: {
        sahkoposti: "aino@example.com",
        puhelin: "0401234567"
    }
};

opiskelija.ika = 21
opiskelija['pisteet'] = 82;

opiskelija.esittele();

const sahkoposti = opiskelija.yhteystiedot?.sahkoposti;
console.log(sahkoposti);


//harjoitus 2 tuoterekisteri 

/* Создайте четыре товара. У каждого должны быть уникальный id, имя, цена как число и остаток как целое число.
1. Используйте id от 1 до 4. Установите остаток как минимум одного товара в 0.
2. Найдите товар с id 2 и id 99. Сообщите, если товар не найден.
3. Создайте новый массив, где цена товара с id 2 равна 19.90. Исходные данные сохраните.
4. Challenge: отфильтруйте товары с saldo > 0 и составьте текстовые строки с названиями. toFixed(2) превращает цену в строку с двумя знаками после запятой. */

console.log('Harjoitus 2')
const products = [
    {
        id: 1,
        name: 'näyttö',
        price: 300,
        saldo: 5
    },
    {
        id: 2,
        name: 'näppäimistö',
        price: 50,
        saldo: 15
    },
    {
        id: 3,
        name: 'hiiri',
        price: 10,
        saldo: 20
    },
    {
        id: 4,
        name: 'kuulokkeet',
        price: 120,
        saldo: 0
    }
];
console.table(products)

function findProduct(input) {
   const product = products.find(product => product.id === input);
    if (product) {
        console.log(`Product with id ${input} is ${product.name}.`)
    }
    else {
        console.log(`Product with id ${input} is not found.`)
    }
}
findProduct(2); //Product with id 2 is näppäimistö.
findProduct(99); //Product with id 99 is not found.

const update = products.map(p => p.id === 2 ? {...p, price: 19.90} : p);
console.table(update)
/*  
    products.map(...) проходит по каждому товару и создаёт новый массив.
    p — текущий товар на очередном шаге.
    p.id === 2 проверяет, товар ли это с id 2.
    Знак ? начинает сокращённую запись условия:
   - если условие истинно, выполняется часть до :;
   - если ложно — часть после :.
    { ...p, price: 19.90 } создаёт копию товара p. ...p копирует его свойства, а price: 19.90 задаёт копии новую цену.
    Последнее p означает: если это не товар с id 2, добавить в новый массив текущий товар без изменений.
    const update = сохраняет новый массив в переменную update.
*/

const availableProducts = products.filter(p => p.saldo > 0);
const availableNames = availableProducts.map (p => `${p.name} — ${p.price.toFixed(2)}`
);
console.log(availableNames.join("\n"))

/* 
"\n" — символ переноса строки.
*/

//harjoitus 3

/* Создайте объект;
1. Извлеките `teema` и `kieli` в отдельные переменные с помощью деструктуризации.
2. Извлеките размер шрифта с значением по умолчанию `16`. Проверьте также варианты `20` и `null`.
3. Извлеките `id` отдельно, а остальные настройки соберите в новый объект с помощью rest.
4. **Challenge:** создайте функцию, которая получает объект настроек и применяет деструктуризацию прямо в списке параметров.
*/

console.log('harjoitus 3')
const settings = {
    id: 1,
    theme: 'dark',
    language: 'fi'

}


// 1. Extract theme and language
const { theme, language } = settings;
console.log(theme);
console.log(language);

// 2. Extract fontSize with a default value
const { fontSize: defaultFontSize = 16 } = settings;
console.log(defaultFontSize); // 16

const settingsWith20 = { ...settings, fontSize: 20 };
const { fontSize: size20 = 16 } = settingsWith20;
console.log(size20); // 20

const settingsWithNull = { ...settings, fontSize: null };
const { fontSize: sizeNull = 16 } = settingsWithNull;
console.log(sizeNull); // null

// 3. Extract id and collect the remaining properties
const { id, ...otherSettings } = settings;
console.log(id);            // 1
console.log(otherSettings); // { theme: "dark", language: "fi" }

// 4. Destructure the settings object in the function parameters
function displaySettings({ id, theme, language, fontSize = 16 }) {
  console.log({ id, theme, language, fontSize });
}

displaySettings(settings);