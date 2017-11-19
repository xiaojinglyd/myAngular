// JavaScript Document
$(function() {
	// css3动画
	$('.proj1-hd').hover(function() {
		$(this).find('.animated').toggleClass('bounce');
	});
	if (document.cookie.indexOf("C_2462project=") == -1) {
		layer.msg('玩命卖萌中', {
			anim: 6,
			time: 3000,
			offset: 0,
			end: function() {
				var d = new Date();
				d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toUTCString();
				document.cookie = "C_2462project=project;" + expires + ";";
			}
		});
	}
	$('.lsqh').click(function() {
		var index = layer.open({
			type: 2,
			content: 'http://dev.lushan.igolf3d.com/',
			area: ['320px', '195px'],
			title: '庐山球会',
			maxmin: true
		});
		layer.full(index);
	})
	$('.gqq').click(function() {
		layer.open({
			type: 2,
			area: ['470px', '580px'],
			skin: 'layui-layer-rim', //加上边框
			content: ['http://dev.mp.igolf3d.com/'],
			closeBtn: 0,
			shadeClose: true,
			scrollbar: false,
			title: ''
		});
	})
	$('.qjt').click(function() {
		layer.open({
			type: 2,
			area: ['470px', '580px'],
			skin: 'layui-layer-rim', //加上边框
			content: ['http://uiqianduan.com/mqjt/index.html'],
			closeBtn: 0,
			shadeClose: true,
			scrollbar: false,
			title: ''
		});
	})
	$('.wbn').click(function() {
		layer.open({
			type: 2,
			area: ['470px', '580px'],
			skin: 'layui-layer-rim', //加上边框
			content: ['http://uiqianduan.com/mwbn/index.html'],
			closeBtn: 0,
			shadeClose: true,
			scrollbar: false,
			title: ''
		});
	})
	$('.ks').click(function() {
		var index = layer.open({
			type: 2,
			content: 'http://uiqianduan.com/ks/index.html',
			area: ['320px', '195px'],
			title: '昆山企业',
			maxmin: true
		});
		layer.full(index);
	})
})