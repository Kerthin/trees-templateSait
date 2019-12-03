"use strict";

let burgerBtn = document.querySelector(".burger");
let menuBlock = document.querySelector(".menu");
let container = document.querySelector('.presentBlock');
let block = document.getElementsByClassName("generation");

burgerBtn.onclick = function() {
	if (menuBlock.classList.contains('active') === false) {
		menuBlock.classList.add('active');
	} else {
		menuBlock.classList.remove('active');
	}
}

for(let el of block) {
	el.addEventListener("click", function() {
		let claas = el.classList[1];
		container.setAttribute('class',`${container.classList[0]} ${claas}`);
		let x = document.getElementsByClassName("generation");
		Array.prototype.forEach.call(x, function(el) {
			el.classList.remove("active");
		});

		this.classList.add('active');
	});
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjaG9zZVRyZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcbmxldCBtZW51QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNlbnRCbG9jaycpO1xubGV0IGJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdlbmVyYXRpb25cIik7XG5cbmJ1cmdlckJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdGlmIChtZW51QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA9PT0gZmFsc2UpIHtcblx0XHRtZW51QmxvY2suY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdH0gZWxzZSB7XG5cdFx0bWVudUJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHR9XG59XG5cbmZvcihsZXQgZWwgb2YgYmxvY2spIHtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdGxldCBjbGFhcyA9IGVsLmNsYXNzTGlzdFsxXTtcblx0XHRjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsYCR7Y29udGFpbmVyLmNsYXNzTGlzdFswXX0gJHtjbGFhc31gKTtcblx0XHRsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5lcmF0aW9uXCIpO1xuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoeCwgZnVuY3Rpb24oZWwpIHtcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHR9KTtcbn0iXSwiZmlsZSI6ImNob3NlVHJlZS5qcyJ9
