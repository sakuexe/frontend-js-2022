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

//

// Form functionality
function showResults() {
    let fullname = document.querySelector('#id-fullname').value
    let password = document.querySelector('#id-password').value
    let genderText
    for (let gender of document.getElementsByName('gender')) {
    if (gender.checked) genderText = gender.value
    }
    let hobbies = []
    for(let hobby of document.getElementsByName('hobbies')) {
    if (hobby.checked) hobbies.push(hobby.value)
    }

    let form = document.querySelector('form')
    let country = form.country.options[form.country.selectedIndex].text

    let height = document.querySelector('#id_height').value

    document.querySelector('#id-result').innerText = 
    `Welcome ${fullname} \n
    Your passowrd is: ${password} \n
    Your gender is: ${genderText} \n
    Your hobbies include: ${hobbies.join(', ')} \n
    You are from ${country} \n
    Your height is ${height}`
}