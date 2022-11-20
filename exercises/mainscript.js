function reverseString(string) {
	let reversedString = string.split('').reverse().join('')
	return `${reversedString.toLowerCase() === string}, "${reversedString}"`
}

function checkString(event) {
	event.preventDefault()

	const text = document.querySelector('#input-text').value.trim()
	const listElements = document.querySelector('#string-info').querySelectorAll('span')
	let resultElement = document.createElement('span')

	listElements[0].innerText = text.charAt(0)
	listElements[1].innerHTML = text.charAt(text.length - 1)
	listElements[2].innerHTML = text.length
	listElements[3].innerHTML = reverseString(text)
}

// #2 Age calculator

function calculate(event) {
	// format of input string is "year-month-day"
	const birth = document.querySelector('#birth').value
	let [year, month, day] = birth.split('-')
	const birthDate = new Date(year - 1, month - 1, day - 0)
	const currentDate = new Date()
	const diff = currentDate - birthDate
	const days = diff / 86400 / 1000
	const years = days / 365.25
	document.querySelector('#output-2').innerText =
		`days alive: ${days.toFixed(2)} \n` + `years alive: ${years.toFixed(2)} \n`
}

// #6 HTML Stripper
function stripHTML(event) {
	let htmlInput = document.querySelector('#html-input').value
	let innerText = htmlInput.replace(/<.*?>/g, '')
	document.querySelector('#output-6').innerText = innerText
}
