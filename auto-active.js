//创建自定义指令
(function(angular) {
  // 1.创建模块
  var app = angular.module('auto-active', [])
    // 2.创建自定义指令
  app.directive('autoActive', ['$location', function($location) {
    return {
      link: function(scope, element, attributes) {
        element.on('click', function() {
          // 让当前元素的兄弟元素失去样式
          element.parents('#navBox').find('a').removeClass('on')
            // 让当前元素添加样式
          element.addClass('on')
        })
        scope.loca = $location
          // 监视锚点值变化
        scope.$watch('loca.url()', function(now, old) {
          var hash = element.attr('href').substr(1)
            // startsWith表示一个字符是否以另一个字符开始
          if (now.startsWith(hash)) {
            // 让当前元素的兄弟元素失去样式
            element.parents('#navBox').find('a').removeClass('on')

            // 让当前元素添加样式
            element.addClass('on')
            SetDivHoverWidthAndLeft(element)
            $(".h-width").val(aWidth);
            $(".h-left").val(divHoverLeft);

            function SetDivHoverWidthAndLeft(element) {
              divHoverLeft = GetLeft(element);
              aWidth = GetWidth(element);
            }
            //获得Li宽度
            function GetWidth(ele) {
              return ele.parent().offsetWidth;
            }

            //获得nav-hover左边距
            function GetLeft(element) {
              //获得li之前的同级li元素
              var menuList = element.parent().prevAll();
              var left = 0;
              //计算背景遮罩左边距
              $.each(menuList, function(index, ele) {
                left += ele.offsetWidth;
              });
              return left;
            }
            // 点击导航下拉时获取宽和左距离
            function SettwoHoverWidthAndLeft(element) {
              divHoverLeft = GetLeft(element);
              aWidth = GetWidth(element);
            }
          }
        })
      }
    }
  }])
})(angular)