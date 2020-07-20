; (function () {
	"use strict";

	$('.cbd-burger-toggle').on("click", function () { $('.cbd-header__mobnav').toggleClass('open') });

	let aboutTabs = $('.cbd-about__item');

	aboutTabs.on('click', function () {
		let currentLi = $(this);
		let divContent = $('.cbd-about__card');
		let indexDiv = divContent.eq($(this).index());
		currentLi.addClass("active").siblings().removeClass("active");
		indexDiv.addClass("active").siblings().removeClass("active");
	})

	let newSlider = $('.cbd-products__slider');

	newSlider.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,

		arrows: true,
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 1000,
		dots: false,
		prevArrow: '[data-left]',
		nextArrow: '[data-right]',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]

	});
})();

