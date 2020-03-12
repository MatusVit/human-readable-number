module.exports = function toReadable(number) {
    const readNum = {
        ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundred: 'hundred',
    }
    if (number === 0) return 'zero';
    const toNumbTens = (num) => {
        if (num < 20) return readNum.ones[num];
        const numString = num.toString();
        return `${readNum.tens[numString[0]]} ${readNum.ones[numString[1]]}`.trim();
    }

    if (number < 100) {
        return toNumbTens(number);
    }

    const numString = number.toString();
    if (numString.length === 3) {
        const tens = toNumbTens(number % 100);
        return `${readNum.ones[numString[0]]} ${readNum.hundred} ${tens}`.trim();
    }
}
