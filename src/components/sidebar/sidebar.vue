<template>
  <div class="nav">
      <div class="nav-top">
          <div id="mini" style="border-bottom:1px solid rgba(255,255,255,.1)"><img src="../../assets/img/mini.png" ></div>
      </div>
      <ul>
          <li class="nav-item">
              <a href="javascript:;"><i class="my-icon nav-icon icon_1"></i><span>首页</span><i class="my-icon nav-more"></i></a>
              <ul>
                  <li><router-link :to="{ name: 'Home'}"><span>首页</span></router-link></li>
                  <li><router-link :to="{ name: 'Detail'}"><span>详情页</span></router-link></li>
                  <li><router-link :to="{ name: 'Demo'}"><span>demo</span></router-link></li>
                  <li><a href="javascript:;"><span>分类管理</span></a></li>
                  <li><a href="javascript:;"><span>系统日志</span></a></li>
              </ul>
          </li>
          <li class="nav-item">
              <a href="javascript:;"><i class="my-icon nav-icon icon_2"></i><span>文章管理</span><i class="my-icon nav-more"></i></a>
              <ul>
                  <li><a href="javascript:;"><span>站内新闻</span></a></li>
                  <li><a href="javascript:;"><span>站内公告</span></a></li>
                  <li><a href="javascript:;"><span>登录日志</span></a></li>
              </ul>
          </li>
          <li class="nav-item">
              <a href="javascript:;"><i class="my-icon nav-icon icon_3"></i><span>订单管理</span><i class="my-icon nav-more"></i></a>
              <ul>
                  <li><a href="javascript:;"><span>订单列表</span></a></li>
                  <li><a href="javascript:;"><span>打个酱油</span></a></li>
                  <li><a href="javascript:;"><span>也打酱油</span></a></li>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted() {
    $(function(){
        // nav收缩展开
        $('.nav-item>a').on('click',function(){
            if (!$('.nav').hasClass('nav-mini')) {
                if ($(this).next().css('display') == "none") {
                    //展开未展开
                    $('.nav-item').children('ul').slideUp(300);
                    $(this).next('ul').slideDown(300);
                    $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
                }else{
                    //收缩已展开
                    $(this).next('ul').slideUp(300);
                    $('.nav-item.nav-show').removeClass('nav-show');
                }
            }
        });
        //nav-mini切换
        $('#mini').on('click',function(){
            if (!$('.nav').hasClass('nav-mini')) {
                $('.nav-item.nav-show').removeClass('nav-show');
                $('.nav-item').children('ul').removeAttr('style');
                $('.nav').addClass('nav-mini');
            }else{
                $('.nav').removeClass('nav-mini');
            }
        });
    });
  }
}
</script>

<style>
  @import "../../assets/font/iconfont.css";
  @import "../../assets/css/nav.css";
</style>
