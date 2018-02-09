$(function () {
	$('.list-box .show').click(function (e) {
		var even = e || event; 
		window.event ? event.cancelBubble = true : even.stopPropagation();
		$(this).next('.list').slideToggle();
	})
	$('.list li').click(function (e) {
		var even = e || event; 
		window.event ? event.cancelBubble = true : even.stopPropagation();
		$(this).parent().prev('.show').html($(this).html());
		$(this).parent().slideUp();
	})
	$(document).click(function () {
		$('.list').slideUp();
	})
	
	
})