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

// Password validation
function passwordValidate(element) {
    const password = document.querySelector('#password').value
    const passwordRepeated = document.querySelector('#passwordrepeat').value
    if (password === passwordRepeated) {
        element.setCustomValidity('')
        return
    }
    else {
        element.setCustomValidity('Passwords must match')
    }
}


// Form functionality
const resultElement = document.querySelector('#results')
const darkBG = document.querySelector('#darkbg')

function showResults(event) {

    // prevent the page from refreshing
    event.preventDefault()

    // alternative way of doing it
    let values = []
    // Fullname
    values.push(
        document.querySelector('#fullname').value
    )
    // Password
    let password = document.querySelector('#password').value
    values.push(
        password.slice(0,1) + '*'.repeat(password.length - 4) + password.slice(-2, -1)
        // password
    )
    // Gender
    values.push(
        `${document.querySelector('[name="gender"]:checked').value}`
    )
    // Country
    let country = document.querySelector('option:checked')
    values.push(
        `${country.value} ${country.dataset.flag}`
    )
    // Hobbies
    let hobbies = []
    for (let hobby of document.querySelectorAll('[name="hobbies"]:checked')) {
        hobbies.push(hobby.value)
    }
    console.log(hobbies)
    values.push(
        // if user has chosen no hobbies, push string
        hobbies.length == 0 ? 'No hobbies given' : hobbies.join(', ')
    )
    // birthdate
    values.push(
        document.querySelector('#birthday').value
    )

    // Height
    values.push(
        document.querySelector('#height_slider').value + 'cm'
    )
    // Favourite color
    values.push(
        document.querySelector('#fave-color').value
    )
    // Profession
    values.push(
        document.querySelector('#profession').value
    )
    // Extra information
    values.push(
        `"${document.querySelector('#extra-info').value}"`
    )

    // assign gotten values
    let results = document.querySelectorAll('.result')

    for (let index = 0; index < values.length; index++) {
        results[index].innerText = values[index]
    }

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