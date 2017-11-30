$(function(){

	var $navButton = $('#nav-button')
	var $menu = $('#menu')

	$navButton.click((ev) => {
		$menu.slideToggle()
	})

	var $down = $('.down')

	$down.click(function(ev){
		//$(this).children('ul').slideDown()
		$('.down ul').not($('.down ul',this)).slideUp('slow').next();
		$(this).children('ul').slideToggle('slow').end();
	})

});
