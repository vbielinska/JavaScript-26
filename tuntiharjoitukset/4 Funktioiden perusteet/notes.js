function greeting(nimi) {
    console.log(`Hei, ${nimi}`) //Hei, Violetta
}

greeting('Violetta');

//

function esittele(nimi, ika) {
  console.log(`${nimi} on ${ika}-vuotias.`);
}

esittele('Vetochka', 24); // Vetochka on 24-vuotias.

// return 
function summa(a, b) {
    return a + b;
}

const tulos = summa(4, 7);
console.log(tulos); // 11
 
//

function tarkistaIka(ika) {
    if (ika < 0){
        return 'Virheelinen ikä';
    }
    return ika >= 18 ? 'Täysi-ikäinen' : 'Alaikäinen';
}

/* return ika >= 18 ? 'Täysi-ikäinen' : 'Alaikäinen';
тоже самое что 
if (ika >= 18) {
  return 'Täysi-ikäinen';
} else {
  return 'Alaikäinen';
}
*/
console.log(tarkistaIka(-12)); //Virheelinen ikä
console.log(tarkistaIka(10));  //Alaikäinen
console.log(tarkistaIka(18)); //Täysi-ikäinen

//OLETUSPARAMETRIT - параметры по умолчанию
function tervehdi(nimi = 'vieras')
 {
    return `Hei ${nimi}!`;
 }
 console.log(tervehdi()); //Hei vieras!
 console.log(tervehdi('Vetta')) //Hei Vetta!

 //Использование возвращённого значения
 function sum (a, b) {
    return a + b;
 }
 const yhteensa = summa(10, 100);
 console.log(yhteensa); //110
 console.log(summa(50, 5)) //55
 console.log(yhteensa * 3) 

 //arrow function

 const newSumma = (a, b) => {
    return a + b;
 };

console.log(newSumma(20,46));

//Краткая запись стрелочной функции
const tuplaa = luku => luku * 2;
console.log(tuplaa(5));



//callback
function suorita(toiminto) {
  toiminto();
}

const tervehdys = () => console.log('Hei!');

suorita(tervehdys);

//Функции и условия
function onTaysiIkainen(ika) {
  return ika >= 18;
}

if (onTaysiIkainen(20)) {
  console.log('Pääsy sallittu');
}

 //Функции и циклы
 function tulostaNimi(nimi) {
  console.log(`Opiskelija: ${nimi}`);
}

const nimet = ['Aino', 'Mika', 'Sara'];

for (const nimi of nimet) {
  tulostaNimi(nimi);
}

