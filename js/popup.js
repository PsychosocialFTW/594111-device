var link = document.querySelector(".js-write-us");
var writeus = document.querySelector(".modal-feedback");
var close = writeus.querySelector(".feedback-close-btn");
var fullname = writeus.querySelector("[name=fullname]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeus.classList.add("feedback-show");
	fullname.focus();
});


close.addEventListener("click", function(evt) {
	evt.preventDefault();
	writeus.classList.remove("feedback-show");
});
