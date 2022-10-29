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