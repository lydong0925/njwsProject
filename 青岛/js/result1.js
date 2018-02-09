$(function () {
	var h = $(window).height()
	var pos = h > 960 ? 'absoult' : 'relative';
	$('.g-ft').css('position',pos);
	$(window).resize(function () {
		var h = $(window).height()
		var pos = h > 960 ? 'absoult' : 'relative';
		$('.g-ft').css('position',pos);
	})
	
	$('.back').click(function () {
		self.history.back();
	})
	$('.content .nav').click(function () {
		$(this).addClass('current').siblings('.nav').removeClass('current');
		$('.currentPath').html($(this).children('.name').text());
	})
	
	
	
	
})