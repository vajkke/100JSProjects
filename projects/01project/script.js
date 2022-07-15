const countdown = document.querySelector('.timer-container');
const minutesDisplay = document.querySelector('.timer-minutes');
const secondsDisplay = document.querySelector('.timer-seconds');

const startBtn = document.querySelector('.timer-btn__start');
const stopBtn = document.querySelector('.timer-btn__stop');
const setTimeBtn = document.querySelector('.timer-btn__set-time');
const resetBtn = document.querySelector('.timer-btn__reset');


const minuteInputText = document.querySelector('.min');
const secondsInputText = document.querySelector('.sec');


let interval = null;
let remainingSec = 0;
let time = 0;



const updateControls = () => {
	if(interval === null){
		startBtn.style.display='inline-block';
		stopBtn.style.display='none';
	}
	else{
		startBtn.style.display='none';
		stopBtn.style.display='inline-block';
	}
}


const start = () => {		
	if(remainingSec === 0) return;

	interval = setInterval(() => {
		remainingSec--;
		updateTime();

	if(remainingSec === 0) stop();

	},1000);

	updateControls();
}


startBtn.addEventListener('click', start);


const stop = () => {
	clearInterval(interval);
	interval = null;
	updateControls();
}


stopBtn.addEventListener('click', stop)





const setTime = () => {
	const minuteInput = +minuteInputText.value;
	const secondsInput = +secondsInputText.value;
	time = minuteInput*60 + secondsInput;
	minuteInputText.value ='';
	secondsInputText.value = '';


	remainingSec = minuteInput*60 + secondsInput;
	updateTime();
}

setTimeBtn.addEventListener('click', setTime)


document.addEventListener('keydown', function(e){
	if(e.key === "Enter"){
		setTime();
	}
})





resetBtn.addEventListener('click', function(){
	remainingSec=time;
	updateTime();
	stop();
})



const updateTime = () => {
	const minutes = Math.floor(remainingSec/60);
	const seconds = remainingSec%60;

	minutesDisplay.textContent = minutes.toString().padStart(2, '0');
	secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

updateTime();




// MAX LENGHT SWITCHING


minuteInputText.addEventListener('keyup', function(){
	if(this.value.length === parseInt(this.attributes['maxlength'].value)){
		secondsInputText.focus();
	}
}) 



