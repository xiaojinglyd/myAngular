// JavaScript Document
$(function() {
  if (document.cookie.indexOf("C_2462special=") == -1) {
    layer.confirm('看完之后记得联系我哦！', {
      btn: ['好的！', '想想？'], //按钮
      title: '',
      closeBtn: 0,
      anim: 4,
      yes: function() {
        layer.msg('我在等你呦！', {
          icon: 6
        });
      },
      btn2: function() {
        layer.msg('让我一个人静静。。。', {
          icon: 5,
          time: 2000
        })
      },
      end: function() {
        var d = new Date();
        d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "C_2462special=special;" + expires + ";";
      }
    });
  }



})