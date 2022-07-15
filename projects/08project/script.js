'use strict';

const animation = document.querySelector('.spinning-animation');
const answerCircle = document.querySelector('.answer-cirle');
const answerDisplay = document.querySelector('.answer');
const triangle = document.querySelector('.triangle');

const answers =
	[
		'It is certain.',
		'It is decidedly so.',
		'Without a doubt.',
		'Yes definitely.',
		'You may rely on it.',
		'As I see it, yes.',
		'Most likely.',
		'Outlook good.',
		'Yes.',
		'Signs point to yes.',
		'Reply hazy, try again.',
		'Ask again later.',
		'Better not tell you now.',
		'Cannot predict now.',
		'Concentrate and ask again.',
		"Don't count on it.",
		'My reply is no.',
		'My sources say no.',
		'Outlook not so good.',
		'Very doubtful.'
	];


answerCircle.addEventListener('click', function(){

	const answerNumber = Math.trunc(Math.random()*19)+1;
	answerDisplay.textContent = answers[answerNumber];

	setTimeout(() => {
		animation.style.display='none';
		triangle.style.display='flex';
	},3000);
	document.querySelector('.eight').style.display = 'none';
	animation.style.display = 'flex';

})


triangle.addEventListener('click', () => triangle.style.display = 'none')


/*fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=C Programming Language&limit=3").then(function(resp) {
    console.log(resp);
    return resp.json()
}).then(function(data) {
    console.log(data)
    })*/