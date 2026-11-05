// harjoitus 1 laskinfunktiot

//summa
function summa(a, b) {
    return a + b;
};
console.log(summa(1, 10));

const arrowSumma = (a, b) => a + b;
console.log(arrowSumma(1, 10));


//erotus
function erotus(a, b) {
    return a - b;
};
console.log(erotus(10, 1));

const arrowErotus = (a, b) => a - b;
console.log(arrowErotus(10, 1));


//tulo
function tulo(a, b) {
    return (a * b);
};
console.log(tulo(5, 5));

const arrowTulo = (a, b) => a * b;
console.log(arrowTulo(5, 5));


//jako
function jako(a, b) {
    if (b === 0) {
        return 'Nollalla ei voi jakaa'
    }
    else {
        return a / b;
    }
};
console.log(jako(0, 5));
console.log(jako(5, 0))

const arrowJako = (a, b) => {
    if (b === 0) {
        return 'Nollalla ei voi jakaa';
    }

    return a / b;
}
console.log(jako(0, 5));
console.log(jako(5, 0))


//Harjoitus 2 Arvosana
const arvosana = (pisteet) => {
    if (pisteet >= 0 && pisteet <= 49) {
        return 'Hylätty'
    }

    else if (pisteet >= 50 && pisteet <= 69) {
        return 'Tyydyttävä'
    }

    else if (pisteet >= 70 && pisteet <= 89) {
        return 'Hyvä'
    }

    else if (pisteet >= 90 && pisteet <= 100) {
        return 'Kiitettävä'
    }

    else {
        return 'Virheelliset pisteet'
    }
}
console.log(arvosana(0));
console.log(arvosana(49));
console.log(arvosana(50));
console.log(arvosana(69));
console.log(arvosana(70));
console.log(arvosana(89));
console.log(arvosana(90));
console.log(arvosana(100));
console.log(arvosana(-1));
console.log(arvosana(1000));

//toinen ratkaisu 
const arvosanaB = (pisteet) => {
    if (pisteet < 0 || pisteet > 100) {
        return 'Virheelliset pisteet';
    }
    else if (pisteet < 50) {
        return 'Hylätty';
    }
    else if (pisteet < 70) {
        return 'Tyydyttävä';
    }
    else if (pisteet < 90) {
        return 'Hyvä'
    }
    else {
        return 'Kiitettävä';
    }


}
console.log(arvosanaB(0));
console.log(arvosanaB(49));
console.log(arvosanaB(50));
console.log(arvosanaB(69));
console.log(arvosanaB(70));
console.log(arvosanaB(89));
console.log(arvosanaB(90));
console.log(arvosanaB(100));
console.log(arvosanaB(-1));
console.log(arvosanaB(1000));

//harjoitus 3: kertotaulufunktio

const kertotaulu = (luku, raja = 10) => {
    for (let i = 1; i <= raja; i++) {
        console.log(luku + ' × ' + i + ' = ' + luku * i)
    }
}
console.log(kertotaulu(8))