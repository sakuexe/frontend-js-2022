const nav = document.querySelector('nav')
const navButton = document.querySelector('#navButton')
const navButtonImages = navButton.querySelectorAll('img')
const infoText = document.querySelector('#infoText')
const navLinks = document.querySelector('#navMenu').querySelectorAll('a')

// await function for adding delay
function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms))
}

// function for the menu button
navButton.addEventListener('click', async() => {

	navButtonImages.forEach(image => {
		image.classList.toggle('hidden')
	})

	if (nav.classList.contains('hidden')) {
		nav.classList.toggle('hidden')
		await delay(10)
		nav.classList.toggle('-translate-x-full')
		return
	}

	nav.classList.toggle('-translate-x-full')
	await delay(500)
	nav.classList.toggle('hidden')


})

document.addEventListener('click', async(event) => {
	if (event.target.closest('button') === navButton) return
	if (event.target.closest('nav') === null) {
		nav.classList.add('-translate-x-full')
		await delay(500)
		nav.classList.add('hidden')
	}
})

// navButton.addEventListener('keypress')

// Functions for each nav element
navLinks.forEach(link => {
	// when hovering over the nav element
	link.addEventListener('mouseover', element => {
		// if element is one with dataset pass it as parent element, if not check next parentelement
		let hoveredElement = element.target.closest('a')
		try {
			infoText.innerHTML = hoveredElement.dataset.info
		} catch {
			console.log('no dataset for ' + hoveredElement)
		}
	})

	// when exiting the hover of an element
	link.addEventListener('mouseleave', element => {
		infoText.innerHTML = 'Frontend Javascript 2022'
	})

	// when hovering over elements with tab (focus)
	link.addEventListener('focus', element => {
		let hoveredElement = element.target.closest('a')
		try {
			infoText.innerHTML = hoveredElement.dataset.info
		} catch {
			console.log('no dataset for ' + hoveredElement)
		}
	})

	// when exiting hovering with tab (blur)
	link.addEventListener('blur', element => {
		infoText.innerHTML = 'Frontend Javascript 2022'
	})
})
