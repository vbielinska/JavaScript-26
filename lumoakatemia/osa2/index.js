//IE 01 Tee ohjelma, joka etsii kahdesta luvusta suuremman.

function findLarger(a, b) {
    if (a > b) {
        console.log(`The larger number is ${a}`)
    }

    else if (b > a) {
        console.log(`The larger number is ${b}`)
    }

    else {
        console.log('Numbers are equal')
    }
};
findLarger(1, 2);

// IE 02 Tee ohjelma, joka etsii kolmesta luvusta suurimman.

function findLargerOfThree(x, y, z) {
    if (x === y && y === z) {
        console.log("All numbers are equal");
    }
    else if (x > y && x > z) {
        console.log(`The larger number is ${x}`)
    }

    else if (y > x && y > z) {
        console.log(`THe larger number is ${y}`)
    }

    else if (z > x && z > y) {
        console.log(`The larger number is ${z} `)
    }

    else {
        console.log("The largest number appears more than once");
    }
}

findLargerOfThree(5, 1, -5)