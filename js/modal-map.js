var mapLink = document.querySelector(".static-map");
var mapOpen = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close-btn");

mapLink.addEventListener("click", function (evt) {
 evt.preventDefault();
 mapOpen.classList.add("map-show");
}); 