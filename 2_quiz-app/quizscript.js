const questionElement = document.querySelector('#quiz-question')
const answers = document.querySelectorAll('.quiz-answer')
const lockAnswer = document.querySelector('#lock-answer')
const quizQuestions = Prompts
let promptCounter = 0 // current question, counted in indexes
let scoreCounter = 0

shuffleArray(quizQuestions) // shuffle the order of questions

// * Give elements eventlisteners
for (let answer of answers) {
	answer.parentElement.addEventListener('click', _ => {
		answers.forEach(answer => {
			answer.parentElement.classList.remove('chosen-answer')
		})
		answer.parentElement.classList.add('chosen-answer')
	})
}

lockAnswer.addEventListener('click', _ => {
    checkAnswer()
    console.log(scoreCounter)
})

// Set up question
function getQuestion() {
	const currentPrompt = quizQuestions[promptCounter]

	console.table(quizQuestions)
	// assign current question into the UI
	questionElement.innerText = currentPrompt.question

	// get current question's answers and assign them to an array
	let currentAnswers = currentPrompt.wrongAnswers
	// also push the correct answer in the array
	currentAnswers.push(currentPrompt.correctAnswer)

	// Shuffle the array
	shuffleArray(currentAnswers)
	console.table(currentAnswers)

	for (let [index, answer] of currentAnswers.entries()) {
		console.log(index, answer)
		answers[index].innerText = answer
	}
}

function checkAnswer() {
	// TODO: check if chosen answer == Prompt.correct
    // search for the element with the class .chosen-answer
    let chosenAnswer = document.querySelector('.chosen-answer')
    if (!chosenAnswer) return
    chosenAnswer = chosenAnswer.querySelector('.quiz-answer').innerText
    console.log(chosenAnswer)

    // check if the answer is the same as correct answer
    const correctAnswer = quizQuestions[promptCounter].correctAnswer
    if (correctAnswer !== chosenAnswer) return
    scoreCounter += 1
}

getQuestion()

function shuffleArray(arr) {
	arr.sort(() => Math.random() - 0.5)
}
