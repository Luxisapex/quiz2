/*Quiz2 by Luxis*/

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
	if(qCount < 5) {
		loadQuestion();
		loadButtons();
	} else {
		console.log('finished');
	}
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

function submitAnswers() {
	loadContent();
}

/*End of content logic*/

/*Question logic*/

function loadQuestion() {
	var headline = document.createElement('h1');
	headline.appendChild(document.createTextNode('Question' + (qCount+1)));
	var question = document.createTextNode('This question JSON blabla' + qCount);
	removeChildren(header);
	removeChildren(content);
	header.appendChild(headline);
	content.appendChild(question);
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
	if(qCount < 4 && !document.getElementById('next')) {
		if(document.getElementById('submit')) {
			removeButton('submit');
		}
		loadButton('next');
	} else if (qCount >= 4) {
		removeButton('next');
		loadButton('submit');
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
	} else if (name === 'next') {
		button.addEventListener('click', loadNextContent);
		footer.appendChild(button);
	} else if (name === 'submit') {
		button.addEventListener('click', submitAnswers);
		footer.appendChild(button);
	}
}

function removeButton(name) {
	var button = document.getElementById(name);
	button.parentNode.removeChild(button);
}

/*End of button logic*/

/*Misc functions*/

function removeChildren(node) {
	while(node.hasChildNodes()) {
		node.removeChild(node.lastChild);
	}
}

/*End of misc functions*/