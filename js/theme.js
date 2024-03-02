const header = document.querySelector('.shop__header')
//переменная-это коробочка в которой может что-то хранится(кнопка строчка цифра и другой элемент)
//у каждой переменной есть имя и каждая переменная чему-либо равна
//пример переменной: let/const number = 10

const themeDark = document.querySelector('.theme_dark')
const themeWhite= document.querySelector('.theme_white')
const themeTitle = document.querySelector('.theme__title')
const itemTitle = document.querySelectorAll('.item_title')
const shopBody = document.querySelector('.shop_body')
const btn = document.querySelectorAll('.btn')
const yandexMAP = document.querySelector('.yandex_map')
const googleMAP = document.querySelector('.google_map')
const footerSHOP = document.querySelector('.footer__shop')
const shopTITLE = document.querySelector('.shop__title')


function choseDark(){

	console.log('ghbdtn')
	header.style.background = 'black'
	themeTitle.style.color = 'yellow'
	shopBody.style.background ='black'
	yandexMAP.style.color ='yellow'
	googleMAP.style.color ='yellow'
	footerSHOP.style.background ='black'
	shopTITLE.style.color = 'yellow'


	

	for (let i =0; i < itemTitle.length; i++){
    itemTitle[i].style.color = 'yellow'
	}
	for (let i =0; i < btn.length; i++){
    btn[i].style.color = 'yellow'
	}
}
function choseWhite(){

	console.log('ghbdtn')
	header.style.background = 'black'
	themeTitle.style.color = 'yellow'
	shopBody.style.background ='#FF8C00'
	yandexMAP.style.color ='yellow'
	googleMAP.style.color ='yellow'
	footerSHOP.style.background ='#FF8C00'
	shopTITLE.style.color = 'yellow'


	

	for (let i =0; i < itemTitle.length; i++){
    itemTitle[i].style.color = 'blue'
	}
	for (let i =0; i < btn.length; i++){
    btn[i].style.color = 'pink'
	}
}

