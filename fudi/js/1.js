window.onload = function(){
	var div = document.querySelector('header');

	function parallax(){
		var scroll = window.pageYOffset;
		// console.log(scroll);
		// console.log(scroll * 0.2);
		div.style = 'background-position-y:' + (scroll * 0.3) + 'px';
	}

	window.onscroll = function(){
		parallax();
	}
}

$('.slider').owlCarousel({
	loop:true,
	margin: 68,
	responsive:{
		0:{
			items:1,
		},
		600:{
			items:3,
		},
		1000:{
			items:5,
		}
	}
});
