//Harjoitus 1
const name = '   aino virtanen   ';
const cleanName = name
.trim().toLowerCase()

console.log(cleanName) //aino virtanen
console.log(cleanName.length) //13
console.log(cleanName.at(0)) //a
console.log(cleanName.at(-1)) //n

const userName = cleanName
.split(' ')
.join('.')
console.log(userName) //aino.virtanen

// Harjoitus 2
const tiedosto = 'raportti.PDF';
const cleanTiedosto = tiedosto
.toLowerCase()

console.log(cleanTiedosto) //raportti.pdf
console.log(cleanTiedosto.endsWith('.pdf')) //true
console.log(cleanTiedosto.slice(0, 8)) //raportti

// Harjoitus 3

const data = ' HTML, CSS , JavaScript, React ';
const dataArray = data
.split(',')
.map(language => language.trim())
const withoutReact = dataArray.filter(language => language !== 'React');


console.log(withoutReact.join(' | '))

// Kertausprojekti: tekstianalysaattori