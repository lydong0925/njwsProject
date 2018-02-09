$(document).ready(function(){
	
	//标签统计 -- js
	$('.list-ul li').click(function(){
		if($(this).hasClass('on')){
			$('.li-detail').hide();
			$('.list-ul li').removeClass('on');
		}else{
			$('.li-detail').hide();
			$(this).find('.li-detail').show();
			$('.list-ul li').removeClass('on');
			$(this).addClass('on');
		}
	});
			
	//标签统计 -- 选项卡切换
	$(".tabs-ul li").click(function(){
		$('.tabs-ul li').removeClass('on');
		$(this).addClass('on');
		var $now = $(".d-select-box-out > .d-select-box").eq($(".tabs-ul li").index(this)); //获取到和被点击选项卡顺序相同的内容容器
		$now.removeClass("hide"); //为这个内容容器添加"now_focus"类 
		$now.siblings().addClass("hide"); //去掉其它内容容器的"now_focus"类  
	});
			
	//标签统计 -- 标签选择与删除
	$(".select-ul li .d-close").click(function(){
		$(this).parent().remove();
	});
	$(".det-list span").click(function(){
		var _text = $(this).text();
//		var _text01 = $('.select-ul li .biaoqian').text();
//		console.log(_text01);
//		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$(this).parents('.d-select-det').siblings('.d-select-out').find('.select-ul').append(
			'<li>'+
				'<span class="biaoqian fl">' + _text + '</span>'+
				'<span class="d-close fr"></span>'+
			'</li>'
		);
		$(".select-ul li .d-close").bind('click',dClose);
	});
	
	
	//标签管理 -- 标签有效性  选择
	$('.c-top-radio').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	
	
	$('.dot-box li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});


})

function dClose(){
	//标签统计 -- 标签删除
	$(this).parent().remove();
}

