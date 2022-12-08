export { getXRange, VALUES_FORM}

let RETURN_VALUE
let X_START
let X_END
let X_STEPS
let Y_SCALE_FACTOR

const VALUES_FORM = document.querySelector('form')

// * Get the wanted range of x values
function getXRange() {
	let xRange = []
    // Loop from the given start point to the given end point
    // in steps of the given step size
    for (let value = Number(X_START); value <= Number(X_END); value += Number(X_STEPS)) {
        // Round the value to 2 decimal places if needed
        // for example 1.23456789 -> 1.23
        // while 1 -> 1 and 1.2 -> 1.2
        let valueFormatted = +parseFloat(value).toFixed(2)
        xRange.push(valueFormatted)
    }
    return xRange
}

// * Update the values of the variables given by the user when submit happens
VALUES_FORM.addEventListener('submit', event => {
    // Prevent the page from refreshing
    event.preventDefault()
    RETURN_VALUE = document.querySelector('#return_value').value
    X_START = document.querySelector('#x_start').value
    X_END = document.querySelector('#x_end').value
    X_STEPS = document.querySelector('#x_steps').value
    Y_SCALE_FACTOR = document.querySelector('#y_scale_factor').value
})

console.table(getXRange())
