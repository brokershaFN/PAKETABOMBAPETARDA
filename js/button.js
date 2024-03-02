let button1 =document.getElementById('btn1')
let buttons = document.querySelectorAll('.btn')

for(let i=0; buttons.length>i; i++){



let flag = true



function btnCLICK(){
  if (flag){
buttons[i].style.background = 'yellow'
buttons[i].style.color ='black'
buttons[i].innerHTML ='в корзине'
flag = false;
} else {
buttons[i].style.background = 'green'
buttons[i].style.color ='black'
buttons[i].innerHTML ='купить'  
flag = true
     }

   }
   
 }buttons[i].addEventListener('click', btnCLICK);
