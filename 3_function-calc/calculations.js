import { returnValue } from './userinput.js'
export { calculateFunction }

function calculateFunction(values, amplifier = 1) {
	let valuePoints = returnValue
	valuePoints = valuePoints.replace(/sin/gi, 'Math.sin')
	let resultsArray = []
	for (let value of values) {
		valuePoints = valuePoints.replace(/x/gi, value)
		resultsArray.push(Function(`return ${valuePoints}`)() * amplifier)
		valuePoints = valuePoints.replaceAll(value, 'x')
	}
	return resultsArray
}
