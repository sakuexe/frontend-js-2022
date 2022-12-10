export { returnValue, getXRange, yScaleFactor, VALUES_FORM }

let returnValue
let xStart
let xEnd
let xSteps
let yScaleFactor

const VALUES_FORM = document.querySelector('form')

// * Get the wanted range of x values
function getXRange() {
	let xRange = []
	// Loop from the given start point to the given end point
	// in steps of the given step size
	for (let value = Number(xStart); value <= Number(xEnd); value += Number(xSteps)) {
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
	returnValue = document.querySelector('#return_value').value
	xStart = document.querySelector('#x_start').value
	xEnd = document.querySelector('#x_end').value
	xSteps = document.querySelector('#x_steps').value
	yScaleFactor = document.querySelector('#y_scale_factor').value

	// check if any of the given values are pi
	// with regex that chcecks for pi or π
	const CHECK_FOR_PI = /pi|π/gi
	xStart = xStart.replace(CHECK_FOR_PI, Math.PI)
	xEnd = xEnd.replace(CHECK_FOR_PI, Math.PI)
	xSteps = xSteps.replace(CHECK_FOR_PI, Math.PI)

	// I used Function to convert the string to a javascript function
	// instead of using the eval() function
	xStart = Function('return ' + xStart)()
	xEnd = Function('return ' + xEnd)()
	xSteps = Function('return ' + xSteps)()
})

console.table(getXRange())
