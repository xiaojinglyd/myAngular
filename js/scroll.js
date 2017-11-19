// JavaScript Document
 $(function(){   
    // css3动画
    $('.spe1-hd').hover(function(){
        $(this).find('.animated').toggleClass('pulse');    
    });
});
$(function(){
    // 模块1：无缝滚动核心模块
    var num = 0;
    var timer = null;
    var myFn = function(){          // 把代码抽离出来，存储到变量里
        num-=2;                      
        if( num <= -1200 ){         // 如果播完第四张图片，变回第一张
            num = 0;                 // 第一张图left坐标值为0
        }
        $('.slider2 ul').css({ left:num });   // 每30毫秒修改left值
    };
    
    timer = setInterval(myFn,30);        // 调用变量，其实是间接调用了指令  
    
    // 模块2：清除和重新启动定时器模块
    $('.slider2').mouseenter(function(e) {
        clearInterval(timer);            // 鼠标移上，清除定时器，停止播放
    }).mouseleave(function(e) {
        clearInterval(timer);
        timer = setInterval(myFn,30);    // 调用变量，其实是间接调用了指令  
    });
    
    // 模块3：鼠标移上，让兄弟变成半透明，突出自己
    $('.slider2 ul li').hover(function(){
        $(this).siblings().stop().fadeTo(300,0.2);   
    },function(){   
        $('.slider2 ul li').stop().fadeTo(300,1);
    });   
});
$(function(){ 
	var ulHeight=$('.scroll-txt-mn ul').height();
	//克隆5个，因为显示长度5个li 
	for(i=0;i<5;i++){
		 $('.scroll-txt-mn ul').append($('.scroll-txt-mn ul li').eq(i).clone(true));
	}
	//自动播放
	var timer=null;
	var num=0;
	var speedTime = 60;//播放速度，越大越慢 
	var scrollFn =function(){
		num+=1;
		if(num<ulHeight){
			$('.scroll-txt-mn ul').css({'top':-num}); 

		}else{
			num=0
			$('.scroll-txt-mn ul').css({'top':0});
		}
	}   
	timer=setInterval(scrollFn,speedTime);
	//鼠标移入停止
	$('.scroll-txt').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function() {
		clearInterval(timer);
		timer=setInterval(scrollFn,speedTime);            
	});
});
$(function(){
	$('.slibox li').hover(function(){	
		$(this).stop().animate({width: 500 },500)
		.siblings().stop().animate({width : 140 }, 500 )
	},function(){	
		$('.slibox li').stop().animate({width:200},500)
	})	
})

