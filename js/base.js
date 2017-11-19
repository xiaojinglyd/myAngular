// JavaScript Document
var client=function(){

   var engine={    //呈现引擎
      trident:0,
      gecko:0,
      webkit:0,
      khtml:0,
      presto:0,
      ver:null     //具体的版本号
   };
   var browser={   //浏览器
      ie:0,
      firefox:0,
      safari:0,
      konq:0,
      opera:0,
      chrome:0,
      ver:null     //具体的版本号
   };
   var system={    //操作系统
      win:false,
      mac:false,
      x11:false
   };

   var ua=navigator.userAgent;
   if(/AppleWebKit\/(\S+)/.test(ua)){        //匹配Webkit内核浏览器（Chrome、Safari、新Opera）
      engine.ver=RegExp["$1"];
      engine.webkit=parseFloat(engine.ver);
      if(/OPR\/(\S+)/.test(ua)){             //确定是不是引用了Webkit内核的Opera
         browser.ver=RegExp["$1"];
         browser.opera=parseFloat(browser.ver);
      }else if(/Chrome\/(\S+)/.test(ua)){    //确定是不是Chrome
         browser.ver=RegExp["$1"];
         browser.chrome=parseFloat(browser.ver);
      }else if(/Version\/(\S+)/.test(ua)){   //确定是不是高版本（3+）的Safari
         browser.ver=RegExp["$1"];
         browser.safari=parseFloat(browser.ver);
      }else{                                 //近似地确定低版本Safafi版本号
         var SafariVersion=1;
         if(engine.webkit<100){
            SafariVersion=1;
         }else if(engine.webkit<312){
            SafariVersion=1.2;
         }else if(engine.webkit<412){
            SafariVersion=1.3;
         }else{
            SafariVersion=2;
         }
            browser.safari=browser.ver=SafariVersion;
      }
   }else if(window.opera){                 //只匹配拥有Presto内核的老版本Opera 5+(12.15-)
      engine.ver=browser.ver=window.opera.version();
      engine.presto=browser.opera=parseFloat(engine.ver);
   }else if(/Opera[\/\s](\S+)/.test(ua)){  //匹配不支持window.opera的Opera 5-或伪装的Opera
      engine.ver=browser.ver=RegExp["$1"];
      engine.presto=browser.opera=parseFloat(engine.ver);
   }else if(/KHTML\/(\S+)/.test(ua)||/Konqueror\/([^;]+)/.test(ua)){
      engine.ver=browser.ver=RegExp["$1"];
      engine.khtml=browser.konq=parseFloat(engine.ver);
   }else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){ //判断是不是基于Gecko内核
      engine.ver=RegExp["$1"];
      engine.gecko=parseFloat(engine.ver);
      if(/Firefox\/(\S+)/.test(ua)){                //确定是不是Firefox
         browser.ver=RegExp["$1"];
         browser.firefox=parseFloat(browser.ver);
      }
   }else if(/Trident\/([\d\.]+)/.test(ua)){         //确定是否是Trident内核的浏览器（IE8+）
      engine.ver=RegExp["$1"];
      engine.trident=parseFloat(engine.ver);
      if(/rv\:([\d\.]+)/.test(ua)||/MSIE ([^;]+)/.test(ua)){   //匹配IE8-11+
         browser.ver=RegExp["$1"];
         browser.ie=parseFloat(browser.ver);
      }
   }else if(/MSIE ([^;]+)/.test(ua)){               //匹配IE6、IE7
      browser.ver=RegExp["$1"];
      browser.ie=parseFloat(browser.ver);
      engine.ver=browser.ie-4.0;                    //模拟IE6、IE7中的Trident值
      engine.trident=parseFloat(engine.ver);
   }

   var p=navigator.platform;                        //判断操作系统
   system.win=p.indexOf("Win")==0;
   system.mac=p.indexOf("Mac")==0;
   system.x11=(p.indexOf("X11")==0)||(p.indexOf("Linux")==0);
   if(system.win){
      if(/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
         if(RegExp["$1"]=="NT"){
            system.win = ({
               "5.0" : "2000",
               "5.1" : "XP",
               "6.0" : "Vista",
               "6.1" : "7",
               "6.2" : "8",
               "6.3" : "8.1",
               "10" : "10"
            })[RegExp["$2"]] || "NT";
         }else if(RegExp["$1"]=="9x"){
            system.win="ME";
         }else{
            system.win=RegExp["$1"];
         }
      }
   }

   return {
      ua:ua,          //用户浏览器Ua原文
      engine:engine,  //包含着用户浏览器引擎（内核）信息
      browser:browser,//包括用户浏览器品牌与版本信息
      system:system   //用户所用操作系统及版本信息
   };

}();

if(client.engine.webkit){ //如果是基于Webkit内核的浏览器
   if(client.browser.chrome){    //若是Google Chrome浏览器
      //执行针对Chrome的代码
   } else if (client.browser.safari){
      //执行针对Safari的代码
   }
} else if (client.engine.gecko){ //若是基于Cecko内核的浏览器
   if(client.browser.firefox){
      //执行针对Firefox的代码
   } else {
      //执行针对其他基于Gecko内核的浏览器的代码
   }
}
var browserName="";             //保存当前使用的浏览器品牌信息
var browserVer=0;               //保存当前使用的浏览器版本信息
for(var i in client.browser){
   if(client.browser[i]){
      browserName=i;
      browserVer=client.browser[i];
      break;
   }
}

var useEngine="";               //保存当前浏览器引擎（内核）名称
var engineVer=0;                //保存当前使用的浏览器引擎版本
for(var i in client.engine){
   if(client.engine[i]){
      useEngine=i;
      engineVer=client.engine[i];
      break;
   }
}

var useSystem="";               //保存当前操作系统信息
for(var i in client.system){
   if(client.system[i]){
      i== "win"?useSystem = "Windows "+client.system[i]:useSystem=i;
      break;
   }
}
  var broNUm=parseInt(browserVer);
  $(function(){
if(browserName="ie"){ 
    if(broNUm<10){  
        window.location.href="http://lydxwj.com/browser.html";
    }
}else if(browserName="firefox"){ 
    if(broNUm<40){  
        window.location.href="http://lydxwj.com/browser.html";
    }
}else if(browserName="chrome"){
    if(broNUm<45){  
        window.location.href="http://lydxwj.com/browser.html";
    }
}else if(browserName="opera"){
    if(broNUm<32){  
        window.location.href="http://lydxwj.com/browser.html";
    }
}else if(browserName="safari"){
    if(broNUm<5){  
        window.location.href="http://lydxwj.com/browser.html";
    }
} 
})   
$(function(){	
	// 导航菜单
	$('.nav-menu .tab').hover(function(){	
		$(this).children('.list-two').stop().slideToggle(300);
	});
	var divHoverLeft = 0;
	var aWidth = 0;
	//菜单滑动动画
	$(".nav-menu .tab .tab-list").on({
		'mouseenter': function () {
			SetDivHoverWidthAndLeft(this);
			//设置滑动动画
			$(".nav-hover").stop().animate({ width: aWidth, left: divHoverLeft }, 150);
		},
		'click': function () {
			SetDivHoverWidthAndLeft(this);
			//清除所有a标签class
			$('.nav-menu a').removeClass('on');
			//设置当前点击菜单为激活状态
			$(this).addClass('on');

			$(".h-width").val(aWidth);
			$(".h-left").val(divHoverLeft);
		}
	});
	// 点击导航下拉时，设置当前点击菜单为激活状态
	$(".list-two a").on({
		'click': function () {
			SettwoHoverWidthAndLeft(this);
			//清除所有a标签class
			$('.nav-menu a').removeClass('on');
			//设置当前点击菜单为激活状态
			$(this).parents('.list-two').siblings('.tab-list').addClass('on');

			$(".h-width").val(aWidth);
			$(".h-left").val(divHoverLeft);
		}
	});
	/*鼠标滑出UL或者div-nav背景nav-hover自动定位到激活菜单处*/
	$(".nav-menu").on({
		'mouseleave': function (event) {
			$(".nav-hover").stop().animate({ width: $(".h-width").val(), left: $(".h-left").val() }, 150);
		}
	});
	function SetDivHoverWidthAndLeft(element) {
		divHoverLeft = GetLeft(element);
		aWidth = GetWidth(element);
	}
	//获得Li宽度
	function GetWidth(ele) {
		return $(ele).parent().width();
	}

	//获得nav-hover左边距
	function GetLeft(element) {
		//获得li之前的同级li元素
		var menuList = $(element).parent().prevAll();
		var left = 0;
		//计算背景遮罩左边距
		$.each(menuList, function (index, ele) {
			left += $(ele).width();
	  });
	  return left;
	}
	// 点击导航下拉时获取宽和左距离
	function SettwoHoverWidthAndLeft(element) {
		divHoverLeft = GetLeft(element);
		aWidth = GetWidth(element);
	}
	//获得Li宽度
	function GetWidth(ele) {
		return $(ele).parents('.tab').width();
	}

	//获得nav-hover左边距
	function GetLeft(element) {
		//获得li之前的同级li元素
		var menuList = $(element).parents('.tab').prevAll();
		var left = 0;
		//计算背景遮罩左边距
		$.each(menuList, function (index, ele) {
			left += $(ele).width();
	  });
	  return left;
	}
	//联系
	$('.contacts li a').hover(function(){
		$(this).find('.num').stop().toggle(300);
	});
	//返回顶部
	var winH=$(window).height();
	$(window).scroll(function(e) {
		var winT=$(window).scrollTop()
		if(winT>winH){	
			$('.toTop').show();
		}else{
			$('.toTop').hide();	
		}
	});
	$('.toTop').click(function(e) {
		$('html,body').animate({scrollTop:0},500);
	});
	$('.toTop').mouseenter(function(){	
		$(this).css({'background-image':'none'}).html('返回顶部');
	}).mouseleave(function(){	
		$(this).css({'background-image':'url(img/toTop.png)'}).html('');
	})
  //layer
  $('.contact-me .tab-list').click(function(event) {
    
    layer.tips('点击这里并没有什么用', '.contact-me', {
        tips: [2, '#D80F22'],//还可配置颜色
        time:3000
      });
  });
	
});
// 百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?da0e52301fbb97226aaa363f6ee1eff0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();





















