const expand = document.querySelector(".background-div");



const expandBG = () => {
		let scale = 15;
		expand.style.transform = "scale("+scale+")";	
}


const tryMessage = setInterval(function() {
	return document.querySelector('.try-it').style.display = 'none';
},1500);



window.addEventListener('load', expandBG);