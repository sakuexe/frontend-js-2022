const questionElement = document.querySelector('#quiz-question')
const answers = document.querySelectorAll('.quiz-answer')
const lockAnswer = document.querySelector('#lock-answer')
let promptCounter = 0 // current question, counted in indexes
let scoreCounter = 0
let quizQuestions

async function initializeGame() {
	quizQuestions = await getJSON()
	setUpRound()
}

initializeGame()

// * Give answer elements eventlisteners
for (let answer of answers) {
	answer.parentElement.parentElement.addEventListener('click', _ => {
		// clears previous selection before assigning a new one
		clearSelection()
		answer.closest('.quiz-select').classList.add('chosen-answer')
	})
}

// * Give 'lock answer' -element an eventlistener
lockAnswer.addEventListener('click', _ => {
	if (!quizQuestions) return
	if (!document.querySelector('.chosen-answer')) return

	if (checkAnswer(quizQuestions[promptCounter])) scoreCounter += 1
	promptCounter += 1

	clearSelection()

	if (promptCounter < quizQuestions.length) {
		setUpRound()
		return
	}
	showResult(scoreCounter, quizQuestions.length)
})

// Sets up the round
function setUpRound() {

	// chooses the current prompt and adds it's order to the question header
	const currentPrompt = quizQuestions[promptCounter]
	document.querySelector('#questionNumber').innerText = promptCounter + 1

	// assign the question's image
	let imageElement = document.querySelector("#question-image")
	imageElement.src = currentPrompt.imagePath
	imageElement.alt = currentPrompt.imageAlt
	// assign current question into the UI
	questionElement.innerText = currentPrompt.question

	// get current question's answers and assign them to an array
	let currentAnswers = currentPrompt.wrongAnswers
	// also push the correct answer in the array
	currentAnswers.push(currentPrompt.correctAnswer)

	// Shuffle the array
	shuffleArray(currentAnswers)

	// set answers to the UI
	for (let [index, answer] of currentAnswers.entries()) {
		answers[index].innerText = answer
	}
}
