$(function(){
	var menu = $('.header_menu ul li');
	menu.on('click', function(e){
		e.preventDefault();
		menu.removeClass('active').filter(this).addClass('active');

	})

	// var img = $('.slider');
	// 	for(img of imgs){
	// 		img.removeClass('active').filter(this).addClass('active');

	// 	}
});
