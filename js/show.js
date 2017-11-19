// JavaScript Document
$(function(){   
    // css3动画
    $('.spe1-hd').hover(function(){
        $(this).find('.animated').toggleClass('pulse');    
    });
});
$(function(){ 
    colors();
//鼠标移上，换图片
    $('.slider4 ol li').mouseenter(function(e) {
        var index = $(this).index();
        effect(index);
        num = index;
    });
    
//自动换图片
    var num = 0;
    var timer = null;
    var liLength = $('.slider4 ul li').length;
    var myFn = function(){ 
        num++;
        if(num > (liLength - 1)){ 
            num = 0;
        }
        effect(num);
    }
    timer = setInterval(myFn,4000);   
//鼠标移上图片，清除定时器
    $('.slider4').mouseenter(function(e) {
        clearInterval(timer);
    }).mouseleave(function(e) {
        clearInterval(timer);
        timer = setInterval(myFn,4000);
    });   
    //封装----------------------------------   
    var effect = function(canshu){ 
        $('.slider4 ol li').eq(canshu).addClass('on').siblings().removeClass('on');
        $('.slider4 ul li').eq(canshu).stop().fadeIn(200).siblings().stop().fadeOut(200);
    }
})
$(function(){  
    // 鼠标移上盒子的时候才触发事件
    $('.box').mousemove(function(e) {
        $('.handle,.big-box').show();
        // 注意这里的数学关系
        var myX = e.pageX - $('.box').offset().left - $('.handle').width()/2;
        var myY = e.pageY - $('.box').offset().top - $('.handle').height()/2;
        
        // 约束左上
        if(myX<0){myX=0;}
        if(myY<0){myY=0;}
        // 约束右下
        if( myX > $('.box').width()-$('.handle').width() ){
            myX = $('.box').width()-$('.handle').width()    
        }
        if( myY > $('.box').height()-$('.handle').height() ){
            myY = $('.box').height()-$('.handle').height()  
        }
        // 小盒子移动
        $('.handle').css({ left:myX , top:myY });
        // 大图移动
        // 大图和小图的倍数关系
        var beishu = 800/350;       
        $('.big-box img').css({ 
            marginLeft: -myX * beishu ,
            marginTop: -myY *  beishu 
        })
    }).mouseleave(function(){
        $('.handle,.big-box').hide();
    })
    
})

$(function(){
    // 遍历(加工)函数    添加精灵图
    $('.shbox li span').each(function(index, element) {
        var num = -24*index
        $(element).css({ 'background-position':'0  '+num+'px' })
    });
    
   // 交互效果
    $('.shbox li').hover(function(){
        $(this).find('span').stop().animate({ bottom:0 },300)
    },function(){   
        $('.shbox li span').stop().animate({ bottom:-24 },300)
    })
    
    
        
})



