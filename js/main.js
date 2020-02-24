class Slider {
	constructor() {
		this.header = document.querySelector('header')
		this.prev = document.querySelector('.prev')
		this.next = document.querySelector('.next')
		this.index = 0
		this.img = ['url(img/background.jpg)', 'url(img/background2.jpg)', 'url(img/background3.jpg)']
	}
	prevClick() {
		if (this.index === 0) {
			this.index = this.img.length - 1
			this.header.style.backgroundImage = this.img[this.index]
		} else {
			this.index--
			this.header.style.backgroundImage = this.img[this.index]
		} 
	}
	nextClick() {
		if (this.index === this.img.length - 1) {
			this.index = 0
			this.header.style.backgroundImage = this.img[this.index]
		} else {
			this.index++
			this.header.style.backgroundImage = this.img[this.index]
		} 
	}
}

let slider = new Slider()
slider.prev.addEventListener('click', function() {
	slider.prevClick()
})
slider.next.addEventListener('click', function() {
	slider.nextClick()
})

class Viev {
	constructor() {
		this.vievBlock = document.querySelectorAll('.viev__block')
		this.title = document.querySelector('.viev__title')
		this.round = document.querySelectorAll('.round')
		this.titleArr = ['Browse projects, like booking a hotel online !', 'Like booking a hotel online, Browse Transparent', "My name is Nurullakh Akhmedov"]
	}
	simple() {
		this.title.innerText = this.titleArr[0]
		this.round[0].style.backgroundColor = '#add136'
		this.round[1].style.backgroundColor = '#656565'
		this.round[2].style.backgroundColor = '#656565'

	}
	transparent() {
		this.title.innerText = this.titleArr[1]
		this.round[1].style.backgroundColor = '#add136'
		this.round[0].style.backgroundColor = '#656565'
		this.round[2].style.backgroundColor = '#656565'

	}
	collaborative() {
		this.title.innerText = this.titleArr[2]
		this.round[2].style.backgroundColor = '#add136'
		this.round[0].style.backgroundColor = '#656565'
		this.round[1].style.backgroundColor = '#656565'

	}
}

let viev = new Viev()

viev.vievBlock.forEach((arr, i) => {
	viev.vievBlock[i].addEventListener('click', function(e) {
		if (i == 0) {
			viev.simple()
		} else if (i == 1) {
			viev.transparent()

		} else if (i == 2) {
			viev.collaborative()
		}
	})
})

let loginBtn = document.querySelector('.login__btn')
let loginOn = document.querySelector('.login__inner')
let inpuText = document.querySelector('.input__text')
let close = document.querySelector('.login__close')
let reset = document.querySelector('.input__reset')



loginBtn.addEventListener('click', function() {
	loginOn.style.display = 'block'

	reset.addEventListener('click', function() {
		loginOn.style.display = 'none'
	})
	close.addEventListener('click', function() {
		loginOn.style.display = 'none'
		inpuText.value = ''
	})
	// if (loginOn.style.display === 'block') {
	// 	loginOn.style.display = 'none'
	// } else {
	// 	loginOn.style.display = 'block'
	// }
})


let hamburger = document.querySelector('.hamburger')
let onactive = document.querySelector('.hamburger__onactive')
let active = document.querySelector('.active')
hamburger.addEventListener('click', function() {
	if (active.style.display === 'block') {
		onactive.classList.toggle('hamburger__active')
		active.style.display = 'none'
	} else {
		onactive.classList.toggle('hamburger__active')
		active.style.display = 'block'
	}
		
})