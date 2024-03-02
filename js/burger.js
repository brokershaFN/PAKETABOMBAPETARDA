const nav = document.querySelector(".menu__list");
const burger = document.querySelector(".burger");

function burgerClick(){
	console.log("burger")
	nav.classList.toggle("menu__list_active");
	burger.classList.toggle("active");
}
