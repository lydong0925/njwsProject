$(function () {
	var h = $(window).height()
	var pos = h > 960 ? 'absoult' : 'relative';
	$('.g-ft').css('position',pos);
	$(window).resize(function () {
		var h = $(window).height()
		var pos = h > 960 ? 'absoult' : 'relative';
		$('.g-ft').css('position',pos);
	})
	
	$('.g-hd .checks').click(function() {
		var res = $(this).prev().prop('checked');
		//console.log(res);
		if(!res) { 
			$(this).css('background-image', 'url(images/page1/checked.png)');
		} else {
			$(this).css('background-image', 'url(images/page1/uncheck.png)');
		}
	})
	$('.alert .checks').click(function() {
		var res = $(this).prev().prop('checked');
		//console.log(res);
		if(!res) { 
			$(this).css('background-image', 'url(images/page1/checked2.png)');
			$(this).parent().addClass('hover');
		} else {
			$(this).css('background-image', 'url(images/page1/uncheck2.png)');
			$(this).parent().removeClass('hover');
		}
	})
	
	
	
	
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
	
	$('.nav').click(function () {
		$(this).addClass('current').siblings('.nav').removeClass('current');
		$(this).find('.round').attr('src','images/page1/round-h.png')
		$(this).siblings('.nav').find('.round').attr('src','images/page1/round.png')
		
		//显示弹窗
		$('.alert-check').show();
	})
	
	
	//弹出显示更多
	var showFlag = true;
	$('.alert .show-more').click(function () {
		if (showFlag) {
			$(this).css('background-image','url(images/page1/list_more2.png)')
			showFlag = false;
			$(this).html('显示更多');
		}else {
			$(this).css('background-image','url(images/page1/list_more.png)')
			showFlag = true;
			$(this).html('隐藏更多');
		}
		$('.alert .check-wrap').toggleClass('hide-more');
	})
	//弹窗确认
	$('.alert .alert-ensure').click(function () {
		$(this).parents('.alert').hide();
	})
	//全选
	$('.alert .alert-checkAll').click(function () {
		$('.alert .check-box .check-inp').attr('checked',true);
		$('.alert .check-box .checks').css('background-image', 'url(images/page1/checked2.png)');
		$('.alert .check-box .checks').parent().addClass('hover');
	})
	//取消
	$('.alert .alert-cancel').click(function () {
		$('.alert .check-box .check-inp').attr('checked',false);
		$('.alert .check-box .checks').css('background-image', 'url(images/page1/uncheck2.png)');
		$(this).parents('.alert').hide();
	})
})
