let getLessons = (obj) => {
	let currentDiv = document.getElementById("lessons"); 
	let parentNode = currentDiv.parentNode
	let newTitle = document.createElement('div')
	newTitle.setAttribute('class','title')
	let newContent = document.createTextNode('今日课程：')
	newTitle.appendChild(newContent)	
	parentNode.insertBefore(newTitle,currentDiv)
	for(i in obj){
		let newP = document.createElement('li')
		let newContent = document.createTextNode(obj[i].classname)
		newP.appendChild(newContent)	
		currentDiv.appendChild(newP)	
	}
}


module.exports ={
	getLessons
}


