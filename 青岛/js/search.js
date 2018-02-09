$(function () {
	nowTime();
	setInterval(nowTime, 1000);
	
	var h = $(window).height()
	var pos = h > 900 ? 'absoult' : 'relative';
	$('.g-ft').css('position',pos);
	$(window).resize(function () {
		var h = $(window).height()
		var pos = h > 900 ? 'absoult' : 'relative';
		$('.g-ft').css('position',pos);
	})
	
	$('.nav').click(function () {
		$(this).addClass('current').siblings('.nav').removeClass('current');
		var index = $(this).index();
		switch (index){
			case 0:{
				$('.zz').css('transform','rotateZ(-160deg)')
				break;
			}
			case 1:{
				$('.zz').css('transform','rotateZ(-145deg)')
				break;
			}
			case 2:{
				$('.zz').css('transform','rotateZ(-110deg)')
				break;
			}
			case 3:{
				$('.zz').css('transform','rotateZ(-60deg)')
				break;
			}
			case 4:{
				$('.zz').css('transform','rotateZ(-30deg)')
				break;
			}
			case 5:{
				$('.zz').css('transform','rotateZ(-12deg)')
				break;
			}
		}
	})
	
	$('.checks').click(function() {
		var res = $(this).prev().prop('checked');
		console.log(res);
		if(!res) { 
			$(this).css('background-image', 'url(images/search/checked.png)');
		} else {
			$(this).css('background-image', 'url(images/search/uncheck.png)');
		}
	})
	
	$('.list').click(function () {
		$(this).addClass('current').siblings('.list').removeClass('current');
	})
	
})
function nowTime() {
	var nowTime = new Date();
	var years = nowTime.getFullYear();
	var months = nowTime.getMonth() + 1;
	var datas = nowTime.getDate();
	var days = nowTime.getDay();
	var hours = nowTime.getHours();
	var minutes = nowTime.getMinutes();
	var seconds = nowTime.getSeconds();
	if(months < 10) {
		months = '0' + months;
	}
	if(datas < 10) {
		datas = '0' + datas;
	}
	if(hours < 10) {
		hours = '0' + hours;
	}
	if(minutes < 10) {
		minutes = '0' + minutes;
	}
	if(seconds < 10) {
		seconds = '0' + seconds;
	}
	var arr = ['一', '二', '三', '四', '五', '六', '日'];
	days = arr[days - 1];
	$('.nowTime').html(years + '年' + months + '月' + datas + '日' + ' ' + hours + ':' + minutes + ':' + seconds + ' 星期' + days);
}
		