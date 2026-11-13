//Kertausprojekti: tekstianalysaatori

const text = ' Vincent    van Gogh oli hollantilainen taidemaalari. Hän maalasi Tähtikirkkaan yön.';
const searchWord = "Taidemaalari";

function analyzeText(inputText
) {
    const cleanText = inputText.trim();
    const textLength = cleanText.length;
    console.log(`Text length: ${textLength}`)

    const words = cleanText.split(/\s+/);
    const wordCount = words.length;
    console.log(`Word count: ${wordCount}`)
    console.log(`Text in lowercase: ${cleanText.toLowerCase()}`)
    console.log(`Text in uppercase: ${cleanText.toUpperCase()}`)
    console.log(`First 20 characters: ${cleanText.slice(0, 20)}`)
}

function searchWordInText(inputText, searchWord) {
    const textInLowerCase = inputText.trim().toLowerCase();
    const searchWordInLowerCase = searchWord.trim().toLowerCase();
    textInLowerCase.includes(searchWordInLowerCase) ? console.log(`The text includes the word: ${searchWordInLowerCase}`) : console.log(`The text does not include the word: ${searchWordInLowerCase}`)
}

function createSlug(inputText) {
    return inputText
        .trim()
        .toLocaleLowerCase('fi')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
}

function countWordAppearsInText(inputText, searchWord) {
    const words = inputText.toLocaleLowerCase('fi').match(/[\p{L}\p{N}]+/gu) || [];
    const searchWordInLowerCase = searchWord.trim().toLocaleLowerCase('fi');

    return words.filter(word => word === searchWordInLowerCase).length;
}

analyzeText(text)   
searchWordInText(text, searchWord)
console.log(createSlug(text))
console.log(`The word "${searchWord}" appears ${countWordAppearsInText(text, searchWord)} times in the text.`);

/* .normalize('NFD') — разделяет буквы с диакритическими знаками на основную букву и знак. Например, ä становится a и отдельным знаком.
.replace(/[\u0300-\u036f]/g, '') — удаляет эти отдельные диакритические знаки. Например, ä превращается в a, а ö — в o.
.replace(/\s+/g, '-') — заменяет один или несколько пробелов дефисом. \s означает пробельный символ, + — «один или больше», g — искать все совпадения.
.replace(/[^\w-]+/g, '') — удаляет остальные символы, кроме букв английского алфавита, цифр, _ и -. ^ внутри квадратных скобок означает «всё, кроме».
} — завершает функцию. */

/* const words = ... — создаёт массив слов из текста:- toLocaleLowerCase('fi') переводит текст в нижний регистр;
- match(/[\p{L}\p{N}]+/gu) находит последовательности букв и цифр. Поэтому точка после слова не попадёт в результат;
- \p{L} означает букву любого алфавита, в том числе финские ä и ö;
- \p{N} означает цифру;
- g ищет все совпадения, u включает поддержку Unicode;
- || [] подставляет пустой массив, если в тексте вообще нет слов и match() вернул null. */