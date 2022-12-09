import { getXRange, yScaleFactor, VALUES_FORM } from './userinput.js';
import { calculateFunction } from './calculations.js';

const RESULTS_LIST = document.querySelector('output ul')
const ctx = document.getElementById('calculator_chart');
// default range
let xRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calculationChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: xRange,
    datasets: [{
        label: 'sin(x)',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
    }]
    },
    options: {
        tension: 0.3,
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

VALUES_FORM.addEventListener('submit', event => {
    // Prevent the page from refreshing
    event.preventDefault()
    xRange = getXRange()
    let valueData = calculateFunction(xRange, yScaleFactor)
    calculationChart.data.labels = xRange
    calculationChart.data.datasets[0].data = valueData

    // update the graph to show it's new values
    calculationChart.update()

    // show calulation results at the bottom of the page
    for (let [index, value] of valueData.entries()) {

        console.log(xRange[index], value)

        let listResultItem = document.createElement('li')
        listResultItem.innerText = xRange[index]

        let listResultValue = document.createElement('li')
        listResultValue.innerText = +parseFloat(value).toFixed(5)
        
        RESULTS_LIST.appendChild(listResultItem)
        RESULTS_LIST.appendChild(listResultValue)
    }
})

document.querySelector('#return_value').addEventListener('input', event => {
    calculationChart.data.datasets[0].label = event.target.value
    calculationChart.update()
})