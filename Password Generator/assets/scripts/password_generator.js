const passwordGenerator = document.getElementById('passwordGenerator')
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

passwordGenerator.addEventListener('submit', function (e) {
    e.preventDefault()
})

function generatePassword() {
    let characterAmount = 16
    let charCodes = LOWERCASE_CHAR_CODES.concat(UPPERCASE_CHAR_CODES).concat(SYMBOL_CHAR_CODES).concat(NUMBER_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function viewPassword() {
    const passwordDisplay = document.getElementById('passwordDisplay')
    passwordDisplay.value = generatePassword()
}

