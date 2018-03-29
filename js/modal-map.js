var mapLink = document.querySelector(".static-map");
var mapOpen = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-close-btn");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapOpen.classList.add("map-show");
}); 

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapOpen.classList.remove("map-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (mapOpen.classList.contains("map-show")) {
			mapOpen.classList.remove("map-show");
		}
	}
});