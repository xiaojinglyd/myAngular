// JavaScript Document
$(function(){   
    // css3动画
    $('.spe1-hd').hover(function(){
        $(this).find('.animated').toggleClass('pulse');    
    });
});
$(function(){
    $('.mbtn1').click(function(event) {
        $('.music').addClass('run')
        $('.mp3')[0].play();
    });
    $('.mbtn2').click(function(event) {
        $('.music').removeClass('run')
        $('.mp3')[0].pause();
    });
})
$(function(){ 
    $('.pbtn:eq(0)').click(function(e) {
        $('.mp4')[0].play();
    });
    
    $('.pbtn:eq(1)').click(function(e) {
        $('.mp4')[0].pause();
    });
    
    $('.pbtn:eq(2)').click(function(e) {
        $('.mp4')[0].currentTime += 2;
    });
    
    $('.pbtn:eq(3)').click(function(e) {
        $('.mp4')[0].currentTime -= 2;
    });
    
    $('.pbtn:eq(4)').click(function(e) {
        $('.mp4')[0].playbackRate += 0.1;
    });
    
    $('.pbtn:eq(5)').click(function(e) {
        $('.mp4')[0].playbackRate -= 0.1;
    });
    
    $('.pbtn:eq(6)').click(function(e) {
        $('.mp4')[0].playbackRate = 1;
    });
    
    $('.pbtn:eq(7)').click(function(e) {
        if($('.mp4')[0].muted == false){ 
            $('.mp4')[0].muted = true;
        }else{ 
            $('.mp4')[0].muted = false;
        }
    });
    
    $('.pbtn:eq(8)').click(function(e) {
        //alert($('video')[0].volume);
        $('.mp4')[0].volume += 0.1;
    });
    
    $('.pbtn:eq(9)').click(function(e) {
        $('.mp4')[0].volume -= 0.1;
    });
})
 var opts = {            
            lines: 13, // 花瓣数目
            length: 20, // 花瓣长度
            width: 10, // 花瓣宽度
            radius: 30, // 花瓣距中心半径
            corners: 1, // 花瓣圆滑度 (0-1)
            rotate: 0, // 花瓣旋转角度
            direction: 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
            color: '#5882FA', // 花瓣颜色
            speed: 1, // 花瓣旋转速度
            trail: 60, // 花瓣旋转时的拖影(百分比)
            shadow: false, // 花瓣是否显示阴影
            hwaccel: false, //spinner 是否启用硬件加速及高速旋转            
            className: 'spinner', // spinner css 样式名称
            zIndex: 2e9, // spinner的z轴 (默认是2000000000)
            top: '100px', // spinner 相对父容器id="firstDiv"Top定位 单位 px
            left: '100px'// spinner 相对父容器id="firstDiv"Left定位 单位 px
        };

var spinner = new Spinner(opts);

$(document).ready(function () {
    $("#btnRequest").bind("click", function () {
        ajaxRequestData();
    })
})

function ajaxRequestData(){
    $.ajax({
        type: "POST",
        url: "user.php",
        beforeSend: function () {
            //异步请求时spinner出现
            $("#firstDiv").text("");
            var target = $("#firstDiv").get(0);
            spinner.spin(target);                    
        },
        success: function (msg) {
            $("#firstDiv").text(msg);
            //关闭spinner  
            spinner.spin();
        }/*,
        error: function (e, jqxhr, settings, exception) {
            $("#firstDiv").text("请求发生错误...");
            //关闭spinner  
            spinner.spin();
        }*/                   /*注释为了请求失败还继续执行*/
    })
    /*关闭按钮*/
    $('#btnStop').click(function(){ 
        spinner.spin();
    })
}
