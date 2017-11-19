// JavaScript Document
$(function() {
	//克隆第一张焦点图
	var bannerL = $('.slider ul li').length;
	var tag = $('.slider ul li').eq(0).clone(true);
	$('.slider ul').append(tag);
	//左翻页无缝
	var speed = 300;
	var sliderTime = 5000;
	var ulNum = 0;
	var olNum = 0;
	$('.slider .next').click(function(e) {
		ulNum++;
		if (ulNum > bannerL) {
			ulNum = 1;
			$('.slider  ul').css({
				left: 0
			});
		}
		$('.slider  ul').stop().animate({
			left: ulNum * (-100) + '%'
		}, speed);
		olNum++;
		if (olNum > (bannerL - 1)) {
			olNum = 0;
		}
		$('.slider ol li').eq(olNum).addClass('current').siblings().removeClass('current');
	});
	//右翻页无缝
	$('.slider  .prev').click(function(e) {
		ulNum--;
		if (ulNum < 0) {
			ulNum = bannerL - 1;
			$('.slider ul').css({
				left: (-100) * bannerL + '%'
			});
		}
		$('.slider ul').stop().animate({
			left: ulNum * (-100) + '%'
		}, speed);
		olNum--;
		if (olNum < 0) {
			olNum = bannerL - 1;
		}
		$('.slider ol li').eq(olNum).addClass('current').siblings().removeClass('current');
	});
	//点击圆点
	$('.slider ol li').click(function(e) {
		var index = $(this).index();
		$('.slider  ul').stop().animate({
			left: index * (-100) + '%'
		}, speed);
		$('.slider ol li').eq(index).addClass('current').siblings().removeClass('current');
		olNum = index;
		ulNum = index;
	});
	//自动播放
	var timer = null;
	var sliderFn = function() {
		$('.slider .next').click();
	};
	timer = setInterval(sliderFn, sliderTime);
	//清除定时器
	$('.slider ').hover(function() {
		clearInterval(timer);
		$('.slider .next,.slider .prev').show();
	}, function() {
		clearInterval(timer);
		timer = setInterval(sliderFn, sliderTime);
		$('.slider .next,.slider .prev').hide();
	});
	// 加颜色
	// var colors = ['#0e091d','#0e091d','#680420','#e28015','#0e091d'];
	// $('.slider ul li').each(function(index, el) {
	// 	$(el).css({ backgroundColor:colors[index] });
	// });
	// 弹窗
	if (document.cookie.indexOf("C_2462home=") == -1) {
		var alertTip = layer.alert('欢迎来到我的地盘！', {
			icon: 6,
			title: false,
			closeBtn: 0,
			yes: function() {
				var d = new Date();
				d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toUTCString();
				document.cookie = "C_2462home=home;" + expires + ";";
				layer.close(alertTip);
			}
		});
	}



});