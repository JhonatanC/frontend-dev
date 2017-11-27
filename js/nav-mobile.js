var navButton = document.querySelector('#nav-button')
var menu = document.querySelector('#menu')

var items = document.querySelectorAll('li > a');

var ul = document.querySelector('li > ul');

var a = document.querySelectorAll('a')

var body = document.querySelector('body')

items.forEach(function(el,index){
	el.addEventListener('click',function(ev){
		//el.style.background = 'black'
		//body.style.background = 'black'
		//ul.style.display = 'block'
		this.style.display = 'block'
		console.log(el)
	})
})

navButton.addEventListener('click',function(ev){
	menu.classList.toggle('showMenu')
})

/*items.forEach(function(el){
	el.addEventListener('click',function(ev){
		ev.preventDefault()
		console.log(ev)
	})
})*/