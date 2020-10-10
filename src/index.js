const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let tempArr = [];
    let arr = expr.match(/.{1,10}/g);
    let temp;
    let result = ""

    for (let item of arr) {
        temp = item.substr(item.indexOf('1'));
        temp = temp.replace(/10/g, '.').replace(/11/g, '-');
        tempArr.push(temp);
    }
    for (let item of tempArr) {
        if (item === "*") {
            result += " "
        }
        else {
            result += MORSE_TABLE[item]
        }
    }

    return result
}


module.exports = {
    decode
}