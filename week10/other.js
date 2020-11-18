let food = document.querySelector('input[name="food"]')

food.onchange=function(){
	food.innerHTML='i also like ' + food.value
	console.log(food)
	Output >> i also like
}

