'use strict';

const switcher = document.querySelector('.switcher');


const body = document.querySelector('body');
const switchContainer = document.querySelector('.switch-container')
const text = document.querySelector('.random-text');

let mode = 0; // 0-light 1-dark


const lightMode = () => {
	body.style.cssText = "background-position: left bottom;";
	switchContainer.style.cssText = `
									background-position: left bottom; 
									color: #2D2C2D;
									`;


	switcher.style.cssText = `
						background: #2D2C2D;
						left:calc(100% - 130px);
						`;

	text.style.color = '#ffffff';
}



const darkMode = () => {
	body.style.cssText=`background: linear-gradient(to left, #ffff 50%, #2D2C2D 50%);
						background-size: 200% 100%; 
						background-position: left bottom; 
						transition: all 1.5s ease-out;
						background-position:right bottom;
						`;

	switchContainer.style.cssText = `
						background: linear-gradient(to left, #2D2C2D 50%, #ffff 50%);
						background-size: 200% 100%; 
						background-position: left bottom; 
						transition: all 1.5s ease-out;
						background-position: right bottom;

						`;					
	switcher.style.cssText = `
						background: #fffff;
						position: absolute;
						transition: 1.5s;
						-webkit-transition:1.5s;
    					-moz-transition:1.5s;
    					left:0;
						`;

    text.style.color = '#2D2C2D';
}




const switchingModes = () => {
	if(mode === 0){
		setTimeout(function(){
			mode++;
		},10)
	}else{
	 	setTimeout(function(){
			mode--;
		},10)
	}
	
}

switchContainer.addEventListener('click', function(){
	if(mode === 0){
		lightMode();
		switchingModes();
	}
	if(mode === 1){
		darkMode();
		switchingModes();					
	}

});


