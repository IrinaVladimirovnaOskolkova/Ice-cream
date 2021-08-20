let iceTop = document.getElementById('top');
let modalTop = document.getElementsByClassName("top")[0];

let iceSorbet = document.getElementById('sorbet');
let modalSorbet = document.getElementsByClassName("sorbet")[0];

let iceSause = document.getElementById('sause');
let modalSause = document.getElementsByClassName("sause")[0];

let iceDiv = document.getElementById('ice-modal');
let modalIce = document.getElementsByClassName("ice-modal")[0];

let iceSmoothies = document.getElementById('smoothies');
let modalSmoothies = document.getElementsByClassName("smoothies")[0];

let iceBeverages = document.getElementById('beverages');
let modalBeverages = document.getElementsByClassName("beverages")[0];


let close = document.getElementsByClassName('close')[0];

iceTop.onclick = function(){
	modalTop.style.display = 'block';
}
iceSorbet.onclick = function(){
	modalSorbet.style.display = 'block';
}
iceSause.onclick = function(){
	modalSause.style.display = 'block';
}
iceDiv.onclick = function(){
	modalIce.style.display = 'block';
}
iceSmoothies.onclick = function(){
	modalSmoothies.style.display = 'block';
}
iceBeverages.onclick = function(){
	modalBeverages.style.display = 'block';
}

function closeModal(event){
	let typeObj = event.target.classList[0]
	if (typeObj === 'modal')
		event.target.attributes.style.nodeValue = 'display: none;';

	if (typeObj === 'close')
		event.target.offsetParent.style.display = 'none';		
}

window.onclick = closeModal;

