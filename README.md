
# **Frontend Web-Programming 2022**

*a.k.a "Asiakaspuolen web-ohjelmointi 2022"*

**By Saku Karttunen**



### About

This was repository includes exercises, assignments and notes from HAMK Riihimäki's
"Frontend Web-Programming" -course.

* Teacher and course organizer: **Petri Kuittinen**
* Course duration: **24/10/ - 16/12/2022**
* Editors used: **Visual Studio Code and Neovim**
* Frameworks and libraries used: **[Tailwind CSS](https://tailwindcss.com/) & [Chart.js](https://www.chartjs.org/)**
## **Assignments**

#### **1) HTML5 Forms and Handling Form Input in JavaScript**

This assignment was all about HTML5 forms and handling the data from them.
The following elements were required:

* **Full Name**, a required text field with autofocus and placeholder 60 characters size, max 80 characters
* **Password**, a required password field, accepts 8-20 characters: a-z, A-Z, 0-9 and following punctuation characters _,.-:;?!
* **Password again**, same specification as above, must match the above field in value
* **Gender**, required, radio selections, choices: male, female, other
* **Hobbies**, a checkbox selection (can select zero to many): games, music, sports, TV
* **Birth Date**, date field
* **Height**, a range input from 40 to 300 cm. A linked number field showing the numerical value and allow to input exact number. In other words both the number field and range field show the same value, changing one will automatically change the other.
* **Favorite color**, standard 24-bit RGB color selector
* **Home Country**, 'select' and 'option' selectors with Finland as default choice, also include Russia and other Scandinavian countries and Baltic countries as possible choices.
* **Profession**, datalist, with at least 4 predetermined choice e.g. teacher, nurse, plumber and bureaucrat
* **Message**, a text area, which is required and is by default 6 rows high and 60 columns wide. With placeholder and max length for input set to 1000 characters.

#### **2) Multiple Choice Quiz App with JSON and JavaScript**

This assignment's plan was to make a quiz app using JSON fetching in JavaScript.
This was a great help to understanding how asynchronous code works in JavaScript.

It was also important to make this assingment responsive for all screens.
It was recomended to use a CSS framework for this job. I used Tailwind, 
that I had already started using in the first assignment.

The questions are stored in a seperate **questions.json** file and the main
Page uses AJAJ (AJAX) call to fetch this JSON file. The questions also get shuffled
before they are assigned to the DOM elements.

```javascript
  async function getJSON() {
    const response = await fetch('./questions.json')
    const jsonData = await response.json()
    // shuffle JSON array before returning it
    // this randomizes the order of the questions
    shuffleArray(jsonData)
    // console.table(jsonData)
    return jsonData
    }
```
*Example snippet of the fetch function*

#### **3) Function Calculator and Plotter**

The plan for this assignment was to make a web page that will calculate values
of any single variable function using JavaScript. And then visualizing this data

Required fields:

* function, text field e.g. x*x or sin(x)/x
* start of x range or the smallest x value, number field e.g. 0
* end of x range or the highest x value, number field e.g. 100
* x step, number field e.g. 1
* y scale factor, number field e.g. 1

For visualizing the calculations, I used the [chart.js](https://www.chartjs.org/)
library. This library works on top of the <canvas> element

```javascript
    // draw the chart
    const ctx = document.getElementById('calculator_chart')
    const calculationChart = new Chart(ctx, options)
```
*The two lines that initiate the Chart.js chart.*
## **Self review**

* #1 -  [Forms-and-inputs](https://github.com/hamk-js-intip21a6/sakuk-assignments/tree/main/1_forms-and-inputs) 1

* #2 - [quiz-app](https://github.com/hamk-js-intip21a6/sakuk-assignments/tree/main/2_quiz-app) 1

* #3 - [function-calulator](https://github.com/hamk-js-intip21a6/sakuk-assignments/tree/main/3_function-calculator) 1*

*decided to use text inputs instead of number inputs, so I could use pi or π as values, this was an interesting practice for regex usage

*1 = Assignment was finished without any major issues*

### About this course

This was highly likely my favorite course at HAMK university of applied sciences so far. 
I learned a lot about JavaScript during this course and it had a lot of important
topics that I didn't know about at all before enrolling on this course, even though
I had a little bit of JavaScript experience from my own projects.

I am very thankful for this course and I am hoping that there would be an even more 
comprehensive course, since JavaScript is such a huge and important topic for
web development.

I also took a lot of notes when watching the *(about 18.6h)* of videos and I am
sure that they will be helpful to me in the future, when I need a quick reminder!
## 

![HAMK logo](./img/readme/hamk-logo.png)
![JS, HTML5 and CSS -logos](./img/readme/js-html-css-logos.png)
![TailwindCSS and ChartJS -logos](./img/readme/tailwind-chart-logos.png)