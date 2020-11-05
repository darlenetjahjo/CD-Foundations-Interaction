// global variables
let selection = 0

function update() {
	// local variables
	let options = document.querySelectorAll('.option')
	let title = document.querySelector('h1')
	console.log(options)
	options.forEach(item => item.onclick=function() {
		selection = item.id
		console.log(selection)
		title.innerHTML= "I am feeling " + selection
	})
}


update();


function updatepls() {
	// local variables
	let second = document.querySelectorAll('.second')
	console.log(second)
	second.forEach(item => item.onmouseover=function() {
	angry.innerHTML='Very'
	confused.innerHTML='Extremely'
	hopeless.innerHTML='Unfortunately'

	})

	second.forEach(item => item.onmouseout=function() {
	angry.innerHTML='Angry'
	confused.innerHTML='Confused'
	hopeless.innerHTML='Hopeless'
		
	})
}

updatepls ();