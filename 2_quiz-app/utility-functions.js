// get JSON data and return it
async function getJSON() {
    const response = await fetch('./questions.json')
    const jsonData = await response.json()
    // shuffle JSON array before returning it
    // this randomizes the order of the questions
    shuffleArray(jsonData)
    console.table(jsonData)
    return jsonData
}

// closure for counting the user's score
// check closures from ../notes/11-closures-and-modules.js
let scoreCounter = {
	userScore: 0,
	addScore: function() {
		console.log(this.userScore)
		this.userScore += 1
	}
}

// checks for the answer
function checkAnswer(currentQuestion) {
	// search for the element with the class .chosen-answer
	let chosenAnswer = document.querySelector('.chosen-answer')
	if (!chosenAnswer) return
	chosenAnswer = chosenAnswer.querySelector('.quiz-answer').innerText

	// check if the answer is the same as correct answer
	const correctAnswer = currentQuestion.correctAnswer
	if (correctAnswer === chosenAnswer) return true

	return false

}

// shuffles an array to a random order
function shuffleArray(givenArray) {
	givenArray.sort(() => Math.random() - 0.5)
}

// clears current selected element
function clearSelection() {
	// clears current selection
	let chosenAnswer = document.querySelector('.chosen-answer')
	// guard clause to check if an answer is chosen
	if (!chosenAnswer) return
	chosenAnswer.classList.remove('chosen-answer')
}

// shows results
async function showResult(questionCount) {
	let resultElement = document.querySelector('#results')
	// set the user's score to the correct element
	resultElement.querySelector('#userScore').innerText = `${scoreCounter.userScore}/${questionCount}`
	// show result element
	resultElement.classList.remove('hidden')
}
