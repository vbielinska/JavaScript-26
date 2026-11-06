//harjoitus 1
/*Создайте объект Аино. Ей 20 лет, направление обучения — Ohjelmistokehitys, статус aktiivinen — true. Контактные данные придумайте самостоятельно.
1. Создайте объект со свойствами nimi, возраст, направление обучения и aktiivinen.
2. Измените возраст на 21 и добавьте pisteet со значением 82.
3. Добавьте метод esittele(), который выводит сведения о студентке.
4. Challenge: добавьте вложенный объект yhteystiedot и прочитайте из него электронную почту безопасно с optional chaining. */

const opiskelija = {
    nimi: 'Aino',
    ika: 20,
    ala: 'Ohjelmistokehitys',
    aktiivinen: true,
    esittele() {
        console.log(`Nimi ${this.nimi}, ikä:${this.ika}, ala: ${this.ala}, aktiivinen:${this.aktiivinen}, pisteet: ${this.pisteet}`);
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

const tuotteet = [
    {
        id: 1,
        nimi: 'näyttö',
        hinta: 300,
        saldo: 5
    },
    {
        id: 2,
        nimi: 'näppäimistö',
        hinta: 50,
        saldo: 15
    },
    {
        id: 3,
        nimi: 'hiiri',
        hinta: 10,
        saldo: 20
    },
    {
        id: 4,
        nimi: 'kuulokkeet',
        hinta: 120,
        saldo: 0
    }
];

const löytynyt = tuotteet.find(t => t.id === 2);
console.log(löytynyt?.nimi);

const tuote99 = tuotteet.find(t => t.id === 99);
if (tuote99) {
    console.log(tuote99.nimi);
}
else {
    console.log("Tuotetta ei läydy");
}


console.table(tuotteet)

