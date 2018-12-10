var bars = document.querySelector('header .fa-bars');

bars.onclick = function(){
	document.querySelector('header nav').classList.toggle('open');
};



$('.brands').owlCarousel({
	loop:true,
	margin:80,
	nav:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:6
		}
	}
});


