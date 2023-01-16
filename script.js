var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var div = document.getElementById('div');
var enter = document.getElementById('enter');
var body = document.querySelector('body');

// check input length
function checkInputLenght() {
	return input.value.length;
}

// check if anyvalue is in the parent div
const checkDiv = () => {
	return div
}

function opendiv () {
	div.classList.add('Opendiv')
}

function CreateListTag() {
	var parentDiv = document.createElement('div');
	var li = document.createElement('li');
	var button_1 = document.createElement('button');
	var button_2 = document.createElement('button');
	button_1.appendChild(document.createTextNode('Delete'));
	button_2.appendChild(document.createTextNode('Done'));
	li.appendChild(document.createTextNode(input.value));
	parentDiv.appendChild(li)
	parentDiv.appendChild(button_1);
	parentDiv.appendChild(button_2);
	div.appendChild(parentDiv);
	input.value = '';


	/** deleting items */
	function deleItem () {
			parentDiv.remove()
			
	}
	button_1.addEventListener('click', deleItem)

function doneItems () {
	var done = li.classList.toggle('done')
	if (done) {
		button_2.innerHTML = 'Undone'
	}else {
		button_2.innerHTML = 'Done'
	}
}
button_2.addEventListener('click', doneItems)

	// styles
	parentDiv.style.display = 'flex'
	parentDiv.style.justifyContent = 'space-between';
	parentDiv.style.width = '90%';
	parentDiv.style.marginTop = '30px';
	parentDiv.style.paddingBottom = '3px';
	parentDiv.style.backgroundColor = '#050227';
	parentDiv.style.borderRadius = '3px';
	parentDiv.style.zIndex = '10'
	parentDiv.style.position = 'relative';
	parentDiv.style.left = '5%'
	parentDiv.style.boxShadow = '0 0 0 10px #050227';


	li.style.color = 'white';
	li.style.listStyleType = 'none';
	li.style.fontSize = '25px';
	li.style.textTransform = 'capitalize';

	button_1.style.padding = '12px 43px';
	button_1.style.backgroundColor = 'red';
	button_1.style.color = 'white';
	button_1.style.borderRadius = '3px';
	button_1.style.borderStyle = 'none';

	button_2.style.padding = '12px 43px';
	button_2.style.backgroundColor = 'green';
	button_2.style.color = 'white';
	button_2.style.borderRadius = '3px';
	button_2.style.borderStyle = 'none';
}

function addValueOnclick() {
	if (checkInputLenght() <= 0) {
		input.classList.add('red')
	} else if (checkInputLenght() > 0) {
		CreateListTag();
		input.classList.remove('green', 'red');
		div.style.opacity = '1'
	}
}

function addValueOnpress(e) {
	if (checkInputLenght() > 0 && e.keyCode === 13) {
		CreateListTag();
		div.style.opacity = '1'
	}
}

function emptydiv () {
	
}

input.addEventListener('click', function () {
	input.classList.add('red');
})

input.addEventListener('keyup', function () {
	input.classList.add('green');
})

button.addEventListener('click', addValueOnclick);
input.addEventListener('keypress', addValueOnpress);


