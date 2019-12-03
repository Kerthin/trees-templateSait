"use strict";

var burgerBtn = document.querySelector(".burger__input");
var menuBlock = document.querySelector(".menu");
let containerVar = document.querySelector('.container');
let menuItemVar = document.getElementsByClassName("menu__item");

burgerBtn.onclick = function() {
	if (menuBlock.classList.contains('popup') === false) {
		this.classList.add('checked');
		menuBlock.classList.add('popup');
		containerVar.classList.add('popup');
	} else {
		this.classList.remove('checked');
		menuBlock.classList.remove('popup');
		containerVar.classList.remove('popup');
	}
}

for(let el of menuItemVar) {
	el.addEventListener("click", function() {
		let claas = el.classList[1];
		containerVar.setAttribute('class',`${containerVar.classList[0]} ${claas}`);
		let x = document.getElementsByClassName("menu__item");
		Array.prototype.forEach.call(x, function(el) {
			el.classList.remove("active");
			menuBlock.classList.remove('popup');
			burgerBtn.classList.remove('checked');
		});

		this.classList.add('active');
	});
}