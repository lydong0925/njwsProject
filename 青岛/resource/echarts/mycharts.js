
$(document).ready(function(){
	echartsLine01();
	getChartsHxt01();
	myChartColumn01();
	
});


function myChartColumn01(){
	//app.title = '堆叠柱状图';
	var _myChartColumn01 = echarts.init(document.getElementById('myChartzzt01'));
	
	//颜色都不同
	var myColor=['red','orange','yellow','green','cyan','blue','purple'];
	var xAxisData=['基础','社会','规律','业务','金融','关联'];
	
	var values = [
	    {
	        value:120,
	        itemStyle: {
	            // normal: {
	            //     color:'#a2f2f2'
	            // }
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#3fe6f6'
	                    },{
	                        offset: 1,
	                        color: '#1eaaff'
	                    }]
	                ) //渐变
	            },
	        }
	    },{
	        value:220,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#7cb7ff'
	                    }, {
	                        offset: 1,
	                        color: '#458cff'
	                    }]
	                ) //渐变 
	            },
	        }
	    },{
	        value:200,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#85fdbd'
	                    }, {
	                        offset: 1,
	                        color: '#3ed6b6'
	                    }]
	                ) //渐变 
	            },
	        }
	    },{
	        value:120,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#fef67a'
	                    }, {
	                        offset: 1,
	                        color: '#ffd631'
	                    }]
	                ) //渐变 
	            },
	        }
	    },{
	        value:30,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#40e1f2'
	                    }, {
	                        offset: 1,
	                        color: '#26b3ff'
	                    }]
	                ) //渐变 
	            },
	        }
	    },{
	        value:180,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#f99e7b'
	                    }, {
	                        offset: 1,
	                        color: '#ff7d4a'
	                    }]
	                ) //渐变 
	            },
	        }
	    }];
	    
	    
	var option = {
	//	backgroundColor: '#404a59',
	    title: {
//	        text: 'Echarts Color引申用法',
	//      subtext:'作者 : 花自飘凌水自流'
	    },
//	    toolbox:{
//	        right:20,
//	        feature:{
//	            saveAsImage: {},
//	            restore: {},
//	            dataView: {},
//	            dataZoom: {},
//	            magicType: {
//	                type:['line','bar']
//	            },
//	            // brush: {},
//	        }
//	    },
	    grid: [
	        {
	            show: false,
	            left: '20',
	            bottom: '10',
	            containLabel: true,
	//          width: '45%',
	//          height:'40%'
	        },
	    ],
//	    legend: {
//	        data:['一级'],
//	        top:28,  //图例组件离顶部的距离
//			x : 'right',   //图例显示在右边		
//		    textStyle:{    //图例文字的样式
//		        color:'#fff',
//		        fontSize:14
//		    }
//	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    xAxis: 
	         {
	            // gridIndex:3,
	            axisTick:{
	                alignWithLabel: true
	            },
	        axisLine: {
	            lineStyle: {
	//              color: '#429aeb'
	                    color: ['rgba(44,113,186,.6)'],
	            }
	        },	
	        axisTick: {
	            show: true
	        },
	        // 改变轴字体颜色和大小
	        axisLabel: {
	//      	margin:2,
//	      		rotate:45,//倾斜度 -90 至 90 默认为0
	            textStyle: {
	                color: '#fff',
	                fontSize:'14'
	            },
	        }, 	           
	        // 控制网格线是否显示
	        splitLine: {
	                show: false,
	                //  改变轴线颜色
	                lineStyle: {
	                    // 使用深浅的间隔色
	                    color: ['rgba(44,113,186,.6)'],
	                    type: 'dotted'
	                }                            
	        },
	            data:xAxisData
	        },
	    yAxis: 
	        {
	        axisLine: {
	            lineStyle: {
	//              color: '#429aeb'
	                    color: ['rgba(44,113,186,0.6)'],
	            }
	        },	
	        axisTick: {
	            show: true
	        },
	        // 改变轴字体颜色和大小
	        axisLabel: {
	//      	margin:2,
	//      	rotate:15,//倾斜度 -90 至 90 默认为0
	            textStyle: {
	                color: '#fff',
	                fontSize:'14'
	            },
	        }, 	           
	        // 控制网格线是否显示
	        splitLine: {
	                show: false,
	                //  改变轴线颜色
	                lineStyle: {
	                    // 使用深浅的间隔色
	                    color: ['rgba(44,113,186,.6)'],
	                    type: 'solid'
	                }                            
	        },
	            // gridIndex:3,
	        },
	    
	   
	    series: [
	        {
	            name:'数量',
	            type:'bar',
	            stack: '级别',
	            barWidth : 25,//柱图宽度
	            itemStyle: {
	                normal: {
	                	// callback,设定每一bar颜色,配置项color顶axis一组bars颜色
	                    color: function(params) {
	                        var num=myColor.length;
	                        return myColor[params.dataIndex%num]
	                    }
	                }
		   		},
	//          data:[220, 182, 191, 234, 290, 330, 310]
	            data: values
	        }
	    ]
	};
	
					
	// 使用刚指定的配置项和数据显示图表。
	_myChartColumn01.setOption(option);
				
}				
	
function echartsLine01(){	// 基于准备好的dom，初始化echarts实例
	var _myChartLine = echarts.init(document.getElementById('myChartLine01'));
	
	// 指定图表的配置项和数据	
	option = {
	//  backgroundColor: '#fff',
	    title: {
	//      text: '请求数',
	        textStyle: {
	            fontWeight: 'normal',
	            fontSize: 16,
	            color: '#f0a016'
	        },
	        left: '6%'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            lineStyle: {
	                color: 'rgba(255,255,255,.5)'
	            }
	        }
	    },
//	    legend: {
//	        icon: 'rect',
//	        itemWidth: 14,
//	        itemHeight: 5,
//	        itemGap: 13,
//	        data: ['数量'],
//			top: 0 ,  //图例组件离顶部的距离
//	        right: '3%',
//	        textStyle: {
//	            fontSize: 14,
//	            color: '#fff'
//	        }
//	    },
	    grid: {
	        left: '1%',
	        right: '1%',
	        bottom: '8%',
	        top:'12%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        boundaryGap: false,
	        axisLine: {
	            lineStyle: {
	//              color: '#429aeb'
	                    color: ['rgba(44,113,186,.6)'],
	            }
	        },	
	        axisTick: {
	            show: true
	        },
	        // 改变轴字体颜色和大小
	        axisLabel: {
	//      	margin:2,
	//      	rotate:15,//倾斜度 -90 至 90 默认为0
	            textStyle: {
	                color: '#fff',
	                fontSize:'14'
	            },
	        }, 	           
	        // 控制网格线是否显示
	        splitLine: {
	                show: false,
	                //  改变轴线颜色
	                lineStyle: {
	                    // 使用深浅的间隔色
	                    color: ['rgba(44,113,186,.6)'],
	                    type: 'dotted'
	                }                            
	        },
	        data: ['12/11','12/12','12/13','12/14','12/15','12/16','12/17','12/18','12/19','12/20' ]                                      
	
	    }],
	    yAxis: [{
	        type: 'value',
	//      name: '单位（%）',
	        min: 0,
			max: 5000,
			interval:1000,
	        axisTick: {
	            show: true
	        },
	        axisLine: {
	            lineStyle: {
	//              color: '#429aeb'
	                    color: ['rgba(44,113,186,0.6)'],
	            }
	        },
	        axisLabel: {
	            margin: 10,
	            textStyle: {
	                fontSize: 14
	            }
	        },	
	        // 改变轴字体颜色和大小
	        axisLabel: {
	            textStyle: {
	                color: '#fff',
	                fontSize:'14'
	            },
	        }, 			           
	        // 控制网格线是否显示
	        splitLine: {
	                show: false,
	                //  改变轴线颜色
	                lineStyle: {
	                    // 使用深浅的间隔色
	                    color: ['rgba(44,113,186,.6)'],
	                    type: 'solid'
	                }                            
	        },
	    }],
	    series: [{
	        name: '数量',
	        type: 'line',
	        smooth: true,
	        symbol: 'circle',
	//      symbolSize: 5,
	//      showSymbol: false,
	        lineStyle: {
	            normal: {
	                width: 2
	            }
	        },
	      areaStyle: {
	          normal: {
	              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                  offset: 0,
	                  color: 'rgba(156,255,60, 0.4)'
	              }, {
	                  offset: 1,
	                  color: 'rgba(156,255,60, 0)'
	              }], false),
	              shadowColor: 'rgba(0, 0, 0, 0.1)',
	              shadowBlur: 10
	          }
	      },
	      itemStyle: {
	          normal: {
	              color: '#9cff3c',
	              borderColor: '#9cff3c',
	              borderWidth: 1
	
	          }
	      },
//	        areaStyle: {
//	            normal: {
//	                // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
//	                color: {
//	                    type: 'linear',
//	                    x: 0,
//	                    y: 1,
//	                    x2: 1,
//	                    y2: 1,
//	                    colorStops: [{
//	                        offset: 0, color: 'rgba(216, 134,67, 0.7)' // 0% 处的颜色
//	                    }, {
//	                        offset: 0.3, color: 'rgba(220, 225, 74, 0.6)' // 30% 处的颜色
//	                    }, {
//	                        offset: 0.7, color: 'rgba(220, 225, 74, 0.6)' // 70% 处的颜色
//	                    }, {
//	                        offset: 1, color: 'rgba(216, 134,67, 0.7)' // 100% 处的颜色
//	                    }],
//	                    globalCoord: false // 缺省为 false
//	                },
//	                shadowColor: 'rgba(0, 0, 0, 0.1)',
//	                shadowBlur: 10
//	            }
//	        },
//	        itemStyle: {
//	            normal: {
//	                // color: 'rgb(137,189,27)',
//	                // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
//	                color: {
//	                    type: 'linear',
//	                    x: 0,
//	                    y: 1,
//	                    x2: 1,
//	                    y2: 1,
//	                    colorStops: [{
//	                        offset: 0, color: 'rgba(216, 134,67, 1)' // 0% 处的颜色
//	                    }, {
//	                        offset: 0.3, color: 'rgba(220, 225, 74, 1)' // 30% 处的颜色
//	                    }, {
//	                        offset: 0.7, color: 'rgba(220, 225, 74, 1)' // 70% 处的颜色
//	                    }, {
//	                        offset: 1, color: 'rgba(216, 134,67, 1)' // 100% 处的颜色
//	                    }],
//	                    globalCoord: false // 缺省为 false
//	                },
//	                borderColor: '#fdcb3c',
//	                borderWidth: 4
//	
//	            }
//	        },
	        data: [1450,800,3200,2150,4180,1180,2100,1140,3220,1180 ]
	    } ]
	};
	
	// 使用刚指定的配置项和数据显示图表。
	_myChartLine.setOption(option);
	
}
	
function getChartsHxt01() {
	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:['#43c9ff','#ff936a','#ffe559','#58f4a0'],
	    legend: {
	        x : 'center',
	        y : 'bottom',
	        itemWidth:20,
            itemHeight:12,
	        textStyle:{
	        	color:'#fff',
	            fontSize: 14,
	        },
	        data: ['人工','事实','统计','研判']     
	    },
	    calculable : true,
	    series : [
	        {
	            name:'数据总量',
	            type:'pie',
	            radius : [60, 100],
	            center : ['50%', '45%'],
	            label: {
	                normal: {
	                    formatter: '{b}{c}',
	            		fontSize: 14,
	                }
	            },
	            labelLine:{
	            	normal: {
	                    length: 15,
//	                    length2: 40,
	                }
	            },
	            roseType : 'area',
	            data:[
	                {value:65, name:'人工'},
	                {value:60, name:'事实'},
	                {value:70, name:'统计'},
	                {value:50, name:'研判'},
	            ]
	        }
	    ]
	};
	var myChart6 = echarts.init(document.getElementById('myChartHxt01'));
	myChart6.clear();
    myChart6.setOption(option);
}

