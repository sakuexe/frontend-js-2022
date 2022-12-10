import { getXRange, yScaleFactor, VALUES_FORM } from './userinput.js'
import { calculateFunction } from './calculations.js'

const RESULTS_LIST = document.querySelector('output ul')

// default range
let xRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const options = {
	type: 'line',
	data: {
		labels: xRange,
		datasets: [
			{
				label: 'sin(x)',
				data: [12, 19, 3, 5, 2, 3],
				borderWidth: 2,
				// line color options
				borderColor: 'rgba(139, 92, 246, 1)',
				backgroundColor: 'rgba(139, 92, 246, .3)',
			},
		],
	},
	options: {
		// the 'smoothing option' strength
		tension: 0.3,
		scales: {
			x: {
				grid: {
					// x axis grid color
					color: 'rgba(115, 115, 115, 1)',
				},
			},
			y: {
				grid: {
					// y axis grid color
					color: 'rgba(115, 115, 115, 1)',
				},
			},
		},
	},
}

// draw the chart
const ctx = document.getElementById('calculator_chart')
const calculationChart = new Chart(ctx, options)

VALUES_FORM.addEventListener('submit', event => {
	// Prevent the page from refreshing
	event.preventDefault()
	xRange = getXRange()
	let valueData = calculateFunction(xRange, yScaleFactor)
	calculationChart.data.labels = xRange
	calculationChart.data.datasets[0].data = valueData

	// update the graph to show it's new values
	calculationChart.update()

	// clear the results list, before updating new values
	RESULTS_LIST.innerHTML = ''

	// show calulation results at the bottom of the page
	for (let [index, value] of valueData.entries()) {
		console.log(xRange[index], value)

		let positionXValue = document.createElement('li')
		positionXValue.classList.add('opacity-75')
		positionXValue.innerText = `f(${xRange[index]}) =`

		let valueY = document.createElement('li')
		valueY.classList.add('opacity-75')
		valueY.innerText = +parseFloat(value).toFixed(5)

		RESULTS_LIST.appendChild(positionXValue)
		RESULTS_LIST.appendChild(valueY)
		RESULTS_LIST.classList.remove('opacity-0')
	}
})

// when writing in the return value input field, update the graph's title everytime
// you change the value of the input field
document.querySelector('#return_value').addEventListener('input', event => {
	calculationChart.data.datasets[0].label = event.target.value
	calculationChart.update()
})
