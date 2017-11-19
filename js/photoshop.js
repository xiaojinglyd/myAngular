// JavaScript Document
$(function() {
	// css3动画
	$('.ps1-hd').hover(function() {
		$(this).find('.animated').toggleClass('shake');
	})
	if (document.cookie.indexOf("C_2462photo=") == -1) {
		layer.msg('打个酱油', {
			icon: 6,
			end: function() {
				var d = new Date();
				d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toUTCString();
				document.cookie = "C_2462photo=photo;" + expires + ";";
			}
		});
	}



})