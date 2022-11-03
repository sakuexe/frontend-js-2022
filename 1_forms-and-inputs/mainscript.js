// Password visibility toggle functionality
const passwordToggle = document.querySelectorAll('.password-toggle')

passwordToggle.forEach(button => {
    let eyeIcons = button.querySelectorAll('i')

    button.addEventListener('click', () => {
        let currentInput = button.previousElementSibling
        for (let icon of eyeIcons) {
            icon.classList.toggle('hidden')
        }
        // if input type is password, turn it to text and viceversa
        currentInput.type === 'password' ? currentInput.type = 'text': currentInput.type = 'password'
    })
})


// Form functionality
const resultElement = document.querySelector('#results')
const darkBG = document.querySelector('#darkbg')

function showResults() {
    // get needed values and save them in variables
    let userName = document.querySelector('#username').value
    let password = document.querySelector('#password').value
    let passwordRepeat = document.querySelector('#password-repeat').value
    let form = document.querySelector('form')
    let country = form.country.options[form.country.selectedIndex]

    let gender
    for (let genderEl of document.querySelectorAll('[name="gender"]')) genderEl.checked ? gender = genderEl.value : gender
    let hobbies = []
    for (hobby of document.querySelectorAll('[name="hobbies"]')) {
        if (hobby.checked) hobbies.push(hobby.value)
    }
    const height = document.querySelector('#height_output').value

    // assing gotten values into results element
    let results = document.querySelectorAll('.result')
    
    results[0].innerText = userName
    results[1].innerText = password
    results[2].innerText = gender
    if (gender === "Male") results[2].innerText = `${gender} ♂`
    if (gender === "Female") results[2].innerText = `${gender} ♀`
    results[3].innerText = country.text + " " + country.dataset.flag
    
    results[4].innerText = hobbies.join(", ")
    results[5].innerText = height + "cm"

    // turn results element visible
    resultElement.classList.toggle("hidden")
    darkBG.classList.toggle("hidden")
}

const returnButton = document.querySelector('#return-button')

returnButton.addEventListener('click', _ => {
    // turn results element invisible
    resultElement.classList.toggle("hidden")
    darkBG.classList.toggle("hidden")

})