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


    // alternative way of doing it
    let values = []
    // Username
    values.push(
        document.querySelector('#username').value
    )
    // Password
    let password = document.querySelector('#password').value
    let passwordRepeated = document.querySelector('#password-repeat').value
    values.push(
        password
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
    values.push(hobbies.join(', '))
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




    // for (let userInput of userInputs) {

    //     let legendText = userInput.querySelector('legend')

    //     if (legendText && legendText.innerText) {
    //         if (legendText.innerHTML === 'Gender') {
    //             values.push(userInput.querySelector('[name="gender"]:checked').value)
    //             continue
    //         }

    //         let hobbies = []
    //         for (let hobby of userInput.querySelectorAll('[name="hobbies"]:checked')) {
    //             hobbies.push(hobby.value)
    //         }
    //         values.push(hobbies.join(', '))
    //         continue
    //     }

    //     // for getting the country
    //     if (userInput.tagName === 'select') {
    //         values.push(userInput.querySelector('option:checked'))
    //         continue
    //     }

    //     values.push(userInput.value)
    //    }
    // console.log(values)