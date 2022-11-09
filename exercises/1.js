
function reverseString(string) {
    let reversedString = string.split('').reverse().join('')
    return reversedString.toLowerCase() === string
}
function analyzeString(event) {
    const text = document.querySelector('#input-text').value
    document.querySelector('#result').innerText = 
    `length: ${text.trim().length} \n` +
    `first character: ${text.charAt(0)} \n` +
    `last character: ${text.charAt(text.length - 1)} \n` + 
    `is palindrome?: ${reverseString(text)} \n`
}

const button = document.querySelector('#abutton')
console.log(button)
button.addEventListener('click', event => {
    analyzeString(event)
})
