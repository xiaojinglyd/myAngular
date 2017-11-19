// JavaScript Document
$(function() {
    if (document.cookie.indexOf("C_2462special=") == -1) {
        layer.msg('其实我会的不止这些', {
            icon: 0,
            anim: 4,
            end: function() {
                var d = new Date();
                d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = "C_2462special=special;" + expires + ";";
            }
        });
    }
    // css3动画
    $('.spe1-hd').hover(function() {
        $(this).find('.animated').toggleClass('pulse');
    });
});
$(function() {
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
    var liLength = $('.slider ul li').length; //获取li长度
    var myFn = function() {
        num++;
        if (num > (liLength - 1)) {
            num = 0;
        }
        effect(num);
        $('.slider ol img').removeClass('on').eq(num).addClass('on');
    }
    timer = setInterval(myFn, speed);

    //鼠标移上图片，清除定时器
    $('.slider').mouseenter(function(e) {
        clearInterval(timer);
    }).mouseleave(function(e) {
        clearInterval(timer);
        timer = setInterval(myFn, speed);
    });

    //封装函数----------------------------------
    var tuCeng = 3;
    var effect = function(canshu) {
        tuCeng++;
        $('.slider ul li').eq(canshu).css({
            zIndex: tuCeng
        }).stop().hide().fadeIn(200).siblings().stop().fadeOut(200);
    }
})
$(function() {
    // 模块1：无缝滚动核心模块
    var num = 0;
    var timer = null;
    var myFn = function() { // 把代码抽离出来，存储到变量里
        num -= 2
        if (num <= -1200) { // 如果播完第四张图片，变回第一张
            num = 0 // 第一张图left坐标值为0
        }
        $('.slider2 ul').css({
                left: num
            }) // 每30毫秒修改left值
    }

    timer = setInterval(myFn, 30) // 调用变量，其实是间接调用了指令  

    // 模块2：清除和重新启动定时器模块
    $('.slider2').mouseenter(function(e) {
        clearInterval(timer) // 鼠标移上，清除定时器，停止播放
    }).mouseleave(function(e) {
        clearInterval(timer)
        timer = setInterval(myFn, 30) // 调用变量，其实是间接调用了指令  
    });

    // 模块3：鼠标移上，让兄弟变成半透明，突出自己
    $('.slider2 ul li').hover(function() {
        $(this).siblings().stop().fadeTo(300, 0.2)
    }, function() {
        $('.slider2 ul li').stop().fadeTo(300, 1)
    })


    // 展示案例
    colors();

})