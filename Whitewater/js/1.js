$(function(){
	var menu = $('.header_menu ul li');
	menu.on('click', function(e){
		e.preventDefault();
		menu.removeClass('active').filter(this).addClass('active');

	});

	$('.fa').on('click', function () {
		$('ul').slideToggle(300, function () {
			if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
			}
        });
    });
});
