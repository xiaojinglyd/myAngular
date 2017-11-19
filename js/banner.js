// JavaScript Document
$(function(){
   
    // css3动画
    $('.spe1-hd').hover(function(){
        $(this).find('.animated').toggleClass('pulse');    
    });
});
$(function(){ 
//鼠标点击图片切换
    $('.slider ol li').click(function(e) {
        var index = $(this).index();
        effect(index);
        num = index;
        $('.slider ol img').removeClass('on').eq(num).addClass('on');
    });
    
//自动换图片
    var num = 0;
    var timer = null;
    var speed = 3000;
    var liLength = $('.slider ul li').length;//获取li长度
    var myFn = function(){ 
        num++;
        if(num > (liLength - 1)){ 
            num = 0;
        }
        effect(num);
        $('.slider ol img').removeClass('on').eq(num).addClass('on');
    }
    timer = setInterval(myFn,speed);
    
//鼠标移上图片，清除定时器
    $('.slider').mouseenter(function(e) {
        clearInterval(timer);
    }).mouseleave(function(e) {
        clearInterval(timer);
        timer = setInterval(myFn,speed);
    });
    
    //封装函数----------------------------------
    var tuCeng = 3;
    var effect = function(canshu){ 
        tuCeng++;   
        $('.slider ul li').eq(canshu).css({ zIndex: tuCeng}).stop().hide().fadeIn(200).siblings().stop().fadeOut(200);
    }
})
$(function(){ 
//实现点击按钮无缝
//创建节点
	var tag = $('.banner-bd ul li').eq(0).clone(true);
	$('.banner-bd ul').append(tag);
	
//点击按钮
	var ulNum = 0;
	var olNum = 0;
	var speed = 200;

	$('.banner-bd .next').click(myFn);
	
	$('.banner-bd .prev').click(function(e) {
		ulNum --;
		if(ulNum < 0){ 
			ulNum = 4;//跳回第二张
			$('.banner-bd ul').css({left:-520*5});
		}
		$('.banner-bd ul').stop().animate({left:-520*ulNum},speed);
		
		olNum --;
		if(olNum < 0){  
			olNum = 4;
		}
		$('.banner-bd ol li').eq(olNum).addClass('current').siblings().removeClass('current');
	});
	
//点击圆点
	$('.banner-bd ol li').click(function(e) {
		var index = $(this).index();
		effect(index);
		//这里注意
		//ulNum = olNum = index;
		olNum = index;
		ulNum = index;
	});
	
//设置定时器
	var timer = null;
	var sliderTime = 5000;
	//方法二
	function myFn(){ 
		ulNum ++;
		if(ulNum > 5){ 
			ulNum = 1;//跳回第二张
			$('.banner-bd ul').css({left:0});//一瞬间切换到第一张
		}
		$('.banner-bd ul').stop().animate({left:-520*ulNum},speed);
		
		olNum ++;
		if(olNum > 4){  
			olNum = 0;
		}
		$('.banner-bd ol li').eq(olNum).addClass('current').siblings().removeClass('current');
	}
	timer = setInterval(myFn,sliderTime);
//鼠标移上图片，清除定时器
	$('.banner-bd').mouseenter(function(e) {
		clearInterval(timer);
	}).mouseleave(function(e) {
		clearInterval(timer);
		timer = setInterval(myFn,sliderTime);
	});
	
//封装函数
	var effect = function(canshu){ 
		$('.banner-bd ol li').eq(canshu).addClass('current').siblings().removeClass('current');
		$('.banner-bd ul').stop().animate({left:-520*canshu},speed);
	}
})
$(function(){
    
    $('.slider3 ol li').mouseenter(function(e) {
        // 1. 指示器模块
        $(this).addClass('on').siblings().removeClass('on');    
        var index = $(this).index()
        $('.slider3 ul').stop().animate({ top: index * (-170)  },500);   
        num = index       
    });
    
    // 3. 自动播放模块,模拟一个索引值
    var num = 0;
    var timer = null;
    var myFn = function(){
        num++;
        if( num > 4 ){
            num = 0
        } 
        $('.slider3 ol li').eq(num).addClass('on').siblings().removeClass('on')
        $('.slider3 ul').stop().animate({ top: num * (-170)  },500)    
    }
    timer = setInterval(myFn,2000)
    
    // 模块7：清除和重新启动定时器模块
    $('.slider3').mouseenter(function(e) {
        clearInterval(timer)            
    }).mouseleave(function(e) {
        clearInterval(timer)
        timer = setInterval(myFn,2000)   
    });    
})








