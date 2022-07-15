const balloons = document.querySelectorAll('.balloon');

const balloon1 = document.querySelector('.balloon1');
const balloon2 = document.querySelector('.balloon2');
const balloon3 = document.querySelector('.balloon3');
const balloon4 = document.querySelector('.balloon4');
const balloon5 = document.querySelector('.balloon5');
const balloon6 = document.querySelector('.balloon6');
const balloon7 = document.querySelector('.balloon7');
const balloon8 = document.querySelector('.balloon8');
const balloon9 = document.querySelector('.balloon9');
const balloon10 = document.querySelector('.balloon10');
const balloon11 = document.querySelector('.balloon11');
const balloon12 = document.querySelector('.balloon12');
const balloon13 = document.querySelector('.balloon13');
const balloon14 = document.querySelector('.balloon14');
const balloon15 = document.querySelector('.balloon15');
const balloon16 = document.querySelector('.balloon16');
const balloon17 = document.querySelector('.balloon17');
const balloon18 = document.querySelector('.balloon18');
const balloon19 = document.querySelector('.balloon19');
const balloon20 = document.querySelector('.balloon20');


const body = document.querySelector('body');


for(const balloon of balloons){
	balloon.addEventListener('click', function(){
		if(balloon === balloon1) {
			body.style.backgroundColor = "#36213E";
			balloon1.remove();
		}
		if(balloon === balloon2){
			body.style.backgroundColor = "#8D98A7";
			balloon2.remove();
		} 
		if(balloon === balloon3) {
			body.style.backgroundColor = "#77ACA2";
			balloon3.remove();
		}
		if(balloon === balloon4) {
			body.style.backgroundColor = "#9DBEBB";
			balloon4.remove();
		}
		if(balloon === balloon5) {
			body.style.backgroundColor = "#6B0F1A";
			balloon5.remove();
		}
		if(balloon === balloon6){
			body.style.backgroundColor = "#3454D1";
			balloon6.remove();
		}
		if(balloon === balloon7) {
			body.style.backgroundColor = "#DDCA7D";
			balloon7.remove();
		}
		if(balloon === balloon8) {
			body.style.backgroundColor = "#F78764";
			balloon8.remove();
		}
		if(balloon === balloon9) {
			body.style.backgroundColor = "#1F1300";
			balloon9.remove();
		}

		if(balloon === balloon10){ 
			body.style.backgroundColor = "#285943";
			balloon10.remove();
		}

		if(balloon === balloon11) {
			body.style.backgroundColor = "#FFB8D1";
			balloon11.remove();
		}
		
		if(balloon === balloon12){
			body.style.backgroundColor = "#DFF8EB";
			balloon12.remove();
		} 
		if(balloon === balloon13) {
			body.style.backgroundColor = "#361134";
			balloon13.remove();
		}
		if(balloon === balloon14) {
			body.style.backgroundColor = "#2E2532";
			balloon14.remove();
		}
		if(balloon === balloon15) {
			body.style.backgroundColor = "#1F271B";
			balloon15.remove();
		}
		if(balloon === balloon16){
			body.style.backgroundColor = "#4A5899";
			balloon16.remove();
		}
		if(balloon === balloon17) {
			body.style.backgroundColor = "#92374D";
			balloon17.remove();
		}
		if(balloon === balloon18) {
			body.style.backgroundColor = "#F7B538";
			balloon18.remove();
		}
		if(balloon === balloon19) {
			body.style.backgroundColor = "#3F88C5";
			balloon19.remove();
		}

		if(balloon === balloon20){ 
			body.style.backgroundColor = "#050404";
			balloon20.remove();
		}

	})
}


