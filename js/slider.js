var toggle1 = document.querySelector('#js-toggle-1');
var toggle2 = document.querySelector('#js-toggle-2');
var toggle3 = document.querySelector('#js-toggle-3');

var switchSlide = function (slide) {
	var activeToggle = slide.getAttribute('id').slice(10);

	document.querySelector('.service-btn.active').classList.remove('active');
	document.querySelector('.services-slider-item.js-show-slide').classList.remove('js-show-slide');
	slide.classList.add('active');
	document.querySelector('#js-slider-' + activeToggle).classList.add('js-show-slide');
};

toggle1.addEventListener('click', function() {
	switchSlide(this);
});

toggle2.addEventListener('click', function() {
	switchSlide(this);
});

toggle3.addEventListener('click', function() {
	switchSlide(this);
});
