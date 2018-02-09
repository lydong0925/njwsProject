$(document).ready(function(){
	nowTime();
	setInterval(nowTime, 1000);
	
	$("body").css({"height":$(window).height()});
	$('.alertPage .listB').height($(window).height()-$('.top').height()-$('.bottom').height()-60);
	$(window).resize(function(){
		$("body").css({"height":$(window).height()});
		$('.alertPage .listB').height($(window).height()-$('.top').height()-$('.bottom').height()-80);
	})
	
//	$('.wdsc_box .lis_t').click(function () {
//		$('.wdsc_box .content').slideToggle();
//		if ($('.wdsc_box .content').height()<10) {
//			$(this).css('transform','rotateZ(0deg)');
//		} else {
//			$(this).css('transform','rotateZ(180deg)');
//		}
//	})
//	
//	$('.checks').click(function() {
//		var res = $(this).prev().prop('checked');
//		console.log(res);
//		if(!res) { 
//			$(this).css('background-image', 'url(images/checked.png)');
//		} else {
//			$(this).css('background-image', 'url(images/uncheck.png)');
//		}
//	})
//	
//	$(".search_bt_box li").click(function(){
//		var index=$(this).index();
//		if(index==0){
//			$(".search_bt_box li:nth-child(5)").insertBefore($(".search_bt_box li:nth-child(1)"));
//			setTimeout(function(){
//				$(".search_bt_box li:nth-child(5)").insertBefore($(".search_bt_box li:nth-child(1)"));
//			},200)
//		}else if(index==1){
//			$(".search_bt_box li:nth-child(5)").insertBefore($(".search_bt_box li:nth-child(1)"));
//		}else if(index==3){
//			$(".search_bt_box li:nth-child(1)").insertAfter($(".search_bt_box li:nth-child(5)"));
//		}else if(index==4){
//			$(".search_bt_box li:nth-child(1)").insertAfter($(".search_bt_box li:nth-child(5)"));
//			setTimeout(function(){
//				$(".search_bt_box li:nth-child(1)").insertAfter($(".search_bt_box li:nth-child(5)"));
//			},200)
//		}
//
//		$(".search_box").css({"margin-left":"50px","opacity":"0"});
//		$(".search_box").animate({"margin-left":"0","opacity":"1"});
//		$(".box_js").css({"margin-left":"50px","opacity":"0"});
//		$(".box_js").animate({"margin-left":"0","opacity":"1"});
//	})

	var theme_index;
	
	//////////////换肤
	var styleCss; //记录换肤
	getCookie('skin');
	//alert(styleCss);
	if (styleCss == 'theme01') {
		$('.skincsslittle').attr('href','css/skin/skin1.css');
	}else if (styleCss == 'theme02') {
		$('.skincsslittle').attr('href','css/skin/skin2.css');
	}else if (styleCss == 'theme03') {
		$('.skincsslittle').attr('href','css/skin/skin3.css');
	}else if (styleCss == 'theme04') {
		$('.skincsslittle').attr('href','css/skin/skin4.css');
	}else if (styleCss == 'theme05') {
		$('.skincsslittle').attr('href','css/skin/skin5.css');
	}else if (styleCss == 'theme06') {
		$('.skincsslittle').attr('href','css/skin/skin6.css');
	}else if (styleCss == 'theme07') {
		$('.skincsslittle').attr('href','css/skin/skin7.css');
	}else if (styleCss == 'theme08') {
		$('.skincsslittle').attr('href','css/skin/skin8.css');
	}else if (styleCss == 'theme09') {
		$('.skincsslittle').attr('href','css/skin/skin9.css');
	}else if (styleCss == 'theme10') {
		$('.skincsslittle').attr('href','css/skin/skin10.css');
	}else if (styleCss == 'theme11') {
		$('.skincsslittle').attr('href','css/skin/skin11.css');
	}else if (styleCss == 'theme12') {
		$('.skincsslittle').attr('href','css/skin/skin12.css');
	}else{
		$('.skincsslittle').attr('href','css/skin/skin1.css');
	}
	$('.'+styleCss).addClass('active').siblings().removeClass('active');

	$("#theme li").click(function(){
		var index=$(this).index();
		$("body").removeClass();
		$("body").addClass("theme"+(index+1));
		$("#theme li").removeClass("active");
		$(this).addClass("active");
		
		$('.skincsslittle').attr('href','css/skin/skin'+ (index - 0 + 1) +'.css');
		setCookie('skin',$(this).attr('class').substring(0,7));
		getCookie('skin');
	})
	//////////////换肤////////
	
	$("#theme .close").click(function(){
		layer.close(theme_index);
		$("#theme").hide();
	})
	$("#theme_bt").click(function(){
		theme_index=layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			area: '840px',
			skin: 'layui-layer-nobg', //没有背景色
			shadeClose: true,
			content: $('#theme')
		});
	})
	
	//存cookie
	function setCookie(name,value){ 
	    var Days = 30; 
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
	} 
	//取cookie
	function getCookie(name){ 
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	 	
	    if(arr=document.cookie.match(reg)){
	    	return styleCss = unescape(arr[2]); 
	    }else {
	    	return styleCss = null; 
	    }
	} 
	
	
	
	$('#marquee').bxSlider({
        captions: false,//自动控制
        pager: true,//分页
        speed: 1000,
        pause: 5000,
        startingSlide:0,
        slideWidth:1200
    });
    
	
	
	doRquestCharts("charts1",getTjOption001());
	
	$('.pageConB').width($('.pageConB ul').length * 1200);
	$('.pageBox .page').click(function () {
		$(this).addClass('current').siblings('.page').removeClass('current');
		$('.pageConB').animate({
			left:-$(this).index()*1200
		})
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
	$('.nowTime').html(years + '年' + months + '月' + datas + '日' + ' 星期' + days + ' ' + hours + ':' + minutes + ':' + seconds);
}


function doRquestCharts(divBoxId,optionParam){
	require.config({paths:{echarts:'js/echarts/js'}});
	require(
			['echarts','echarts/chart/bar','echarts/chart/pie','echarts/chart/map'],
			function(ec){
				require('echarts/util/mapData/params').params.QD = {
				    getGeoJson: function(callback) {
					    $.getJSON('js/qingdao.json',callback);
				    }
				};
		        var myChart=ec.init(document.getElementById(divBoxId)); 
		        var ecConfig = require('echarts/config');
		        myChart.setTheme("macarons");
		        $(window).resize(function () {
		        	myChart.resize();
		        })
		        $('#bt_yysd').click(function () {
		        	myChart.resize();
				})
		        myChart.setOption(optionParam);
			}
	);
}
function getTjOption001(){
	
	var placeList = [
		    {name:'市南区', geoCoord:[120.38 ,36.10]},
		    {name:'市北区', geoCoord:[120.38 ,36.08]},
		    {name:'李沧区', geoCoord:[120.38 ,36.18]},
		    {name:'崂山区', geoCoord:[120.58 ,36.20]},
		    {name:'黄岛区', geoCoord:[119.90 ,35.96]},
		    {name:'城阳区', geoCoord:[120.37 ,36.30]},
		    {name:'即墨市', geoCoord:[120.45 ,36.48]},
		    {name:'胶州市', geoCoord:[120.03 ,36.27]},
		    {name:'平度市', geoCoord:[119.95 ,36.78]},
		    {name:'莱西市', geoCoord:[120.50 ,36.87]}
		];
	
	return option = {
	    title : {
	        text: '',
	        subtext:'',
	        x:'center',
	        textStyle : {
	            color: '#fff'
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        //formatter: '{b}\n{c}'
	    },
	    dataRange: {
	    	show:false,
	        min : 0,
	        max : 2000,
	        calculable : true,
	        padding:[0,0,40,30],
	        itemHeight:15,
	        color: ['#89ff47','#b5a2ff','#f86464'],
	        textStyle:{
	            color:'#fff'
	        }
	    },
	    
	    series : [
	        {
	            name: '青岛市',
	            type: 'map',
	            roam: true,
//	            width:500,
	            hoverable: false,
	            mapType: 'QD',
	            itemStyle:{
	                normal:{
	                	label:{
	                		show:true,
	                		position:'top',
	                		textStyle:{
	                			color:'#fff',
	                			fontSize:16,
	                			align:'right',
	                			baseline:'bottom'
	                		}
	                		},
	                    borderColor:'#66bcff',
	                    borderWidth:0.5,
	                    areaStyle:{
	                    	color:'#285fca'
	                    }
	                },
	                emphasis:{
	                	areaStyle:{
	                    	color:'#4071ff'
	                    }
	                }
	            },
	            data:[],
	            textFixed : {
	               '崂山区' : [50, 0],
	               '黄岛区' : [40, -50],
	               '市北区' : [-40, 0],
	               '市南区' : [20, 10],
	               '即墨市' : [20, 0]
	            },
	            markPoint : {
	                symbol : 'circle',
	                symbolSize: 9,
	               // large: true,
	                effect : {
					    show: true,
	                },
	                data : (function(){
	                    var data = [];
	                    var len = placeList.length;
	                    while(len--) {
	                        data.push({
	                            name : placeList[len].name,
	                            value : Math.random()*2000,
	                            geoCoord : placeList[len].geoCoord
	                        })
	                    }
	                    return data;
	                })()
	            },
	        }
	    ]
	};
}