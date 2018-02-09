$(function () {
	$('.box .top').mouseenter(function () {
		$(this).parents('.box').removeClass('hover');
	})
	$('.box .top').mouseleave(function () {
		$(this).parents('.box').addClass('hover');
	})
	
	$('.btn').click(function () {
		$('.btn').removeClass('current');
		$(this).addClass('current');
	})
	
})