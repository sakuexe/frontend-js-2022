import { getXRange, VALUES_FORM } from './userinput.js';

const ctx = document.getElementById('calculator_chart');
// default range
let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calculationChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: range,
    datasets: [{
        label: 'Graphical Function for Calculator',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2
    }]
    },
    options: {
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
    calculationChart.data.labels = getXRange()
    calculationChart.update()
})