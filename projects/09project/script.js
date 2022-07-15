const feetInput = document.querySelector('.feet-input');
const inchesInput = document.querySelector('.inches-input');
const cmInput = document.querySelector('.cm-input');

const feetElement = document.querySelector('.feet');
const inchesElement = document.querySelector('.inches');
const cmElement = document.querySelector('.cm');

const switcherBtn = document.querySelector('.switcher');
const converterBtn = document.querySelector('.converter');

const resultDisplay = document.querySelector('.result');


const appLogic = function(){
	let unit = 0; // 0 - cm , 1 - feet+inches
	let result = 0;
	const feetToCM = 30.48 //cm
	const inchesToCM = 2.54 //cm

	converterBtn.addEventListener('click', e => {
		e.preventDefault();
		let feetValue = +feetInput.value;
		let inchesValue = +inchesInput.value;
		let cmValue = +cmInput.value;

		if(unit === 0){
			result = Math.trunc((feetValue*feetToCM)+(inchesValue*inchesToCM));
			resultDisplay.textContent = result + ' cm';
		}

		if(unit === 1){
			result = new String((cmValue/feetToCM).toFixed(1)).split('.');
			result = `${result[0]}' ${result[1]}"`;
			resultDisplay.textContent = result;
		}
	})


	switcherBtn.addEventListener('click', e => {
		e.preventDefault();
		unit = unit === 0 ? 1 : 0;
		feetElement.classList.toggle('hidden');
		inchesElement.classList.toggle('hidden');
		cmElement.classList.toggle('hidden');
		feetInput.value = '';
		inchesInput.value = '';	 
		cmInput.value = '';
		resultDisplay.textContent = ''	 
	})

}

appLogic()