var link = document.querySelector(".js-write-us");
var writeus = document.querySelector(".modal-feedback");
var close = writeus.querySelector(".feedback-close-btn");
var fullname = writeus.querySelector("[name=fullname]");
var form = writeus.querySelector("form");
var mail = writeus.querySelector("[name=email]");
var info = writeus.querySelector("[name=message]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeus.classList.add("feedback-show");
	fullname.focus();
});


close.addEventListener("click", function(evt) {
	evt.preventDefault();
	writeus.classList.remove("feedback-show");
	writeus.classList.remove("feedback-error");
});

form.addEventListener("submit", function(evt) {
	if (!fullname.value || !mail.value || !info.value) {
		evt.preventDefault();
		writeus.classList.remove("feedback-error");
		writeus.offsetWidth = writeus.offsetWidth;
		writeus.classList.add("feedback-error");
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (writeus.classList.contains("feedback-show")) {
			writeus.classList.remove("feedback-show");
		}
	}
});