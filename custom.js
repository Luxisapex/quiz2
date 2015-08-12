var header = document.getElementById('header');
var content = document.getElementById('content-div');
var footer = document.getElementById('footer');
var qCount = 0;

document.getElementById('begin').onclick = function () {
	initializeQuiz();
}

function initializeQuiz() {
	while(header.hasChildNodes()) {
		header.removeChild(header.lastChild);
	}
	while(content.hasChildNodes()) {
		content.removeChild(content.lastChild);
	}
	loadNextContent();
}

/*Content logic*/

function loadContent() {
	loadQuestion();
	loadButtons();
}

function loadPreviousContent() {
	qCount = qCount - 2;
	loadContent();
	qCount++;
}

function loadNextContent() {
	loadContent();
	qCount++;
}

/*End of content logic*/

/*Question logic*/

function loadQuestion() {
	console.log('question loaded');
}

/*End of question logic*/

/*Button logic*/

function loadButtons() {
	if(qCount > 0 && !document.getElementById('back')) {
		loadButton('back');
	} else if (qCount <= 0 && document.getElementById('back')) {
		removeButton('back');
	}
	if(!document.getElementById('next')) {
		loadButton('next');
	}
}

function loadButton(name) {
	var button = document.createElement('input');
	button.type = 'button';
	button.setAttribute('value', name.toUpperCase());
	button.setAttribute('id', name);
	if(name === 'back') {		
		button.addEventListener('click', loadPreviousContent);
		footer.insertBefore(button, document.getElementById('next'));	
	} else {
		button.addEventListener('click', loadNextContent);
		footer.appendChild(button);
	}
}

function removeButton(name) {
	var button = document.getElementById(name);
	button.parentNode.removeChild(button);
}

/*End of button logic*/


