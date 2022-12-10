import { returnValue } from './userinput.js'
export { calculateFunction }

function calculateFunction(values, amplifier = 1) {
	let valuePoints = returnValue
	// replace the 'sin' with 'Math.sin' to make it a valid javascript function
	valuePoints = valuePoints.replace(/sin/gi, 'Math.sin')
	let resultsArray = []
	// loop through the range of functions and calculate the values
	for (let value of values) {
		// first replace the 'x' with the current value
		valuePoints = valuePoints.replace(/x/gi, value)
		// then push it and calculate it with the amplifier
		resultsArray.push(Function(`return ${valuePoints}`)() * amplifier)
		// and then replace the original function's 'x' back to an 'x'
		// so that the next value can be calculated with the same loop
		valuePoints = valuePoints.replaceAll(value, 'x')
	}
	return resultsArray
}
