/********************
	choseTree.js
********************/
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKlxuXHRjaG9zZVRyZWUuanNcbioqKioqKioqKioqKioqKioqKioqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlcl9faW5wdXRcIik7XG52YXIgbWVudUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xubGV0IGNvbnRhaW5lclZhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmxldCBtZW51SXRlbVZhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZW51X19pdGVtXCIpO1xuXG5idXJnZXJCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRpZiAobWVudUJsb2NrLmNsYXNzTGlzdC5jb250YWlucygncG9wdXAnKSA9PT0gZmFsc2UpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblx0XHRtZW51QmxvY2suY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcblx0XHRjb250YWluZXJWYXIuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcblx0XHRtZW51QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcblx0XHRjb250YWluZXJWYXIuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcblx0fVxufVxuXG5mb3IobGV0IGVsIG9mIG1lbnVJdGVtVmFyKSB7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRsZXQgY2xhYXMgPSBlbC5jbGFzc0xpc3RbMV07XG5cdFx0Y29udGFpbmVyVmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLGAke2NvbnRhaW5lclZhci5jbGFzc0xpc3RbMF19ICR7Y2xhYXN9YCk7XG5cdFx0bGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWVudV9faXRlbVwiKTtcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHgsIGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdFx0bWVudUJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwJyk7XG5cdFx0XHRidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0fSk7XG59Il0sImZpbGUiOiJtYWluLmpzIn0=
