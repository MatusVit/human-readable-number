module.exports = function toReadable(number) {
    const readNum = {
        ones: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens: ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundred: 'hundred',
    }

    const toNumbTens = (num) => {
        if (num < 20) return readNum.ones[number];
        const numString = number.toString();
        return `${readNum.tens[numString[0]]} ${readNum.ones[numString[1]]}`;
    }

    if (number < 100) {
        return toNumbTens(number);
    }
    
    const numString = number.toString();
    if (numString.length === 3) {
        return `${readNum.ones[numString[0]]} ${readNum.hundred} ${toNumbTens(+numString.slice(-2))}`;
    }
}
