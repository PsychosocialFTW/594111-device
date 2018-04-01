var slideOne = document.querySelector(".js-delivery-btn");
var slideTwo = document.querySelector(".js-guarantee-btn");
var slideThree = document.querySelector(".js-credit-btn");
var slideOneDelivery = document.querySelector(".delivery-slide");
var slideTwoGuarantee = document.querySelector(".guarantee-slide");
var slideThreeCredit = document.querySelector(".credit-slide");

slideTwo.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideOne.classList.remove("active");
	slideThree.classList.remove("active");
	slideOneDelivery.classList.remove("js-show-slide");
	slideThreeCredit.classList.remove("js-show-slide");
	slideTwo.classList.add("active");
	slideTwoGuarantee.classList.add("js-show-slide");
});

slideOne.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideTwo.classList.remove("active");
	slideThree.classList.remove("active");
	slideTwoGuarantee.classList.remove("js-show-slide");
	slideThreeCredit.classList.remove("js-show-slide");
	slideOne.classList.add("active");
	slideOneDelivery.classList.add("js-show-slide");
});

slideThree.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideOne.classList.remove("active");
	slideTwo.classList.remove("active");
	slideOneDelivery.classList.remove("js-show-slide");
	slideTwoGuarantee.classList.remove("js-show-slide");
	slideThree.classList.add("active");
	slideThreeCredit.classList.add("js-show-slide");
});