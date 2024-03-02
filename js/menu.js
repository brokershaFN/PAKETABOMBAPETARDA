let menu = document.getElementById('menu');
let list = document.getElementById('list');

menu.addEventListener('click', open )

function open(){
	list.classList.toggle('menu__active');
};

