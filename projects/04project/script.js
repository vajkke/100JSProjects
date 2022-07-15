const addBtn = document.querySelector('.add-icon');
const expendLess = document.querySelector('.expend-less');
const addMobileBtn= document.querySelector('.circle');


const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const addInput = document.querySelector('.add-input');

expendLess.style.display='none';




// heading

const heading = document.querySelector('.todos-heading');
let todosArray = [];


const switchingHeading = () => {
	 heading.innerHTML = todosArray.length === 0 ? 'no tasks yet, add some' : 'your tasks';
}

switchingHeading();



// BUTTONS

addBtn.addEventListener('click', () => {
	document.querySelector('.new-todo').style.display ='flex';
	expendLess.style.display='block';
	addBtn.style.display='none';

	addInput.focus();
});

expendLess.addEventListener('click', () => {
	document.querySelector('.new-todo').style.display ='none';
	expendLess.style.display='none';
	addBtn.style.display='block';
});


todos.addEventListener('click', e => {
	if(e.target.classList.contains('delete')){
		todosArray.length = 0;
		switchingHeading();
		e.target.parentElement.remove();

	}

	if(e.target.classList.contains('todo-text')){
		e.target.parentElement.style.cssText = 
		`
			text-decoration: line-through;

		`
	}
})


// input hours and minutes


const timeForm = document.querySelector('.add-time');
const hInput = document.querySelector('.hour');
const mInput = document.querySelector('.min');

let h=0;
let m=0;

// adding todo


const addTodoFun = () => {

	h=hInput.value.toString().padStart(2, '0');
	m=mInput.value.toString().padStart(2, '0');;


	const todo = addForm.add.value.toLowerCase().trim();
	todosArray.push(todo);


	if(todo.length){
		htmlTemplate(todo,h,m);
		addForm.reset();
	}

	document.querySelector('.new-todo').style.display ='none';
	expendLess.style.display='none';
	addBtn.style.display='block';
	hInput.selectedIndex = 23;
	mInput.selectedIndex = 12;	
	switchingHeading();

}






const htmlTemplate = (todo,h,m) => {

	const html = 
	`
		<li class="todo">
			<p class="time">
				<span class="hours">${h}</span>
					:
				<span class="minutes">${m}</span>
			</p>
				<p class="todo-text">${todo}</p>
				<span class="material-icons delete">delete </span>
			</li>

	`
	todos.innerHTML +=html
};


// messages

const wrongInput = () => {
		hInput.style.border ='2px solid red';
		hInput.value = '';
		mInput.value = '';

}


const check = function(e){
	e.preventDefault();
	if(hInput.value === '' && mInput.value === '') wrongInput()
	else if(hInput.value > 24 || mInput.value > 60) wrongInput()
	if(hInput.value !== '' || mInput.value !== '') addTodoFun();
}



addForm.addEventListener('submit', check);

timeForm.addEventListener('keypress',function (event) {
	if(event.keyCode === 13) addTodoFun(); 
	
});

hInput.addEventListener('keypress',function (event) {
	if(event.keyCode === 13) addTodoFun(); 


	if(event.keyCode === 9){
		mInput.focus();
	}
	
});

mInput.addEventListener('keypress',function (event) {
	event.preventDefault()
	if(event.keyCode === 13) addTodoFun();

	
});


addMobileBtn.addEventListener('click', check);






// shortcuts

window.addEventListener('keyup', function(event){
	if(event.code === 'Space'){
		
		document.querySelector('.new-todo').style.display ='flex';
		expendLess.style.display='block';
		addBtn.style.display='none';
		addInput.focus();
		
	}

	if(event.code === 'Escape'){
		document.querySelector('.new-todo').style.display ='none';
		expendLess.style.display='none';
		addBtn.style.display='block';

		
	}
	
})









