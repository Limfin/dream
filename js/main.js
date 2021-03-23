// ibg
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();



// Side-bar menu burger
let menuPageBurger = document.querySelector('.icon-menu');
let menuPageBody = document.querySelector('.menu__body');
menuPageBurger.addEventListener('click', function (e) {
	menuPageBurger.classList.toggle('active');
	menuPageBody.classList.toggle('active');
});

//Swiper Main Slider
var headerSlider = new Swiper('.slider-header', {
	navigation: {
		nextEl: '.header-slider-buttons__btn_next',
		prevEl: '.header-slider-buttons__btn_prev',
	},
});

//Swiper Properties Slider
var propertiesSlider = new Swiper('.slider-properties', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		// when window width is >= 800px
		640: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 992px
		992: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 1200px
		1200: {
			slidesPerView: 4,
			spaceBetween: 30
		},
	}
});


//Swiper Testimonies Slider
var testimoniesSlider = new Swiper('.slider-testimonies__container', {
	navigation: {
		nextEl: '.slider-testimonies__btn_next',
		prevEl: '.slider-testimonies__btn_prev',
	},
});

//Swiper Quotes Slider
var quotesSlider = new Swiper('.quotes-testimonies__container', {
	loop: true,
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	 },
});

