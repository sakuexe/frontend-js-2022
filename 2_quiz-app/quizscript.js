const questionElement = document.querySelector('#quiz-question')
const answers = document.querySelectorAll('.quiz-answer')

for (let answer of answers) {
    answer.parentElement.addEventListener('click', event => {
        answers.forEach(answer => {answer.parentElement.classList.remove('chosen-answer')})
        answer.parentElement.classList.add('chosen-answer')
    })
}

// Set up question
function getQuestion() {
    questionElement.innerText = Prompt1.question
    let currentQuestions = Prompt1.wrongAnswers
    currentQuestions.push(Prompt1.correct)
    console.log(currentQuestions)
    shuffleArray(currentQuestions)

    console.log(currentQuestions)
    for (let index = 0; index < currentQuestions.length; index++) {
        answers[index].innerText = currentQuestions[index]
    }
}

function checkAnswer() {
    // TODO: check if chosen answer == Prompt.correct
}

getQuestion()

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}