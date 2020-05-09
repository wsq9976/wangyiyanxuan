<template>
  <div id="wrap">
    <!-- 首页头部 -->
      <div class="wrap_header">
      <!-- logo -->
        <h1 class="wrapLogo">
          <a href="https://m.you.163.com/"><img src="../../common/images/logo.png" alt=""></a>
        </h1>
        <form class="search_form" action="#">
          <input type="search" name="search" placeholder="搜索商品, 共26451款好物" class="wrap_input iconfont">
        </form>
        <button class="wrap-button">登录</button>
      </div>
    <!-- 首页导航 -->
      <div id="wrap-NavOut">
        <div class="navleft">
          <Navleft/>
        </div>
      </div>
    <!-- 首页轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/bdf62c937dfdf6090b1fc611b9081ce8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a16ac18c02bb26755dbcac1911631aa0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/2bf4fadc1c718c3456aecee6e094bb9c.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/440b0131a659eba44deaa6ce73b1a5d4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/ee856ce5b451dbdeab78abffce195957.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a12c510b428bbcc4fdf1eb4bdfd86ae4.png?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/e7faa23b843641c871f34aff7960e43e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/3ebbdfa48590946eba80297c9a4a66c4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="wrap-lineText">
      <div class="lineText-item"><i class="iconfont icon-wangyi"></i> <span>网易自营品牌</span></div>
      <div class="lineText-item"><i class="iconfont icon-dunpai"></i> <span >30天无忧退货</span></div>
      <div class="lineText-item"><i class="iconfont icon-caifu"></i> <span >48小时快速退款</span></div>
    </div>

    <div class="wrap-goods">
      <ul class="wrap-goodsList">
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown1.png" alt=""></div>
          <div class="goodsdown"><span>居家生活</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown2.png" alt=""></div>
          <div class="goodsdown"><span>服饰鞋包</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown3.png" alt=""></div>
          <div class="goodsdown"><span>美食酒水</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown4.png" alt=""></div>
          <div class="goodsdown"><span>个护清洁</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown5.png" alt=""></div>
          <div class="goodsdown"><span>母婴亲子</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown6.png" alt=""></div>
          <div class="goodsdown"><span>运动旅行</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown7.png" alt=""></div>
          <div class="goodsdown"><span>数码家电</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown8.png" alt=""></div>
          <div class="goodsdown"><span>全球特色</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown9.gif" alt=""></div>
          <div class="goodsdown"><span>好货抄底</span></div>
        </li>
      </ul>
    </div>

      <div class="back-img">
          <div class="in-back">
              <img src="../../common/images/in-back.png" alt="">
              <span>$9.9</span>
          </div>
      </div>


    <!-- 新人专享礼 -->
    <div class="newp">
      <h2 class="new-title">— 新人专享礼 —</h2>
      <div class="newp-main">
        <div class="main1 newp-left">
            <h3>新人专享礼包</h3>
            <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
        </div>
        <div class="main1 newp-right">
            <div class="up">
              <h3>福利社</h3>
              <span>今日特价</span>
              <img src="https://yanxuan-item.nosdn.127.net/967cc4d8140d27299cc1bc4d20294df7.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="down">
              <h3>新人拼团</h3>
              <span>1元起包邮</span>
              <img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <h2 class="hot-title">类目热销榜</h2>
    <div class="hot-goods">
        <div class="hot hot-left">
            <h3>热销榜</h3>
            <i>——</i>
            <img src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot hot-right">
            <h3>好评榜</h3>
            <i>——</i>
            <img src="https://yanxuan-item.nosdn.127.net/f820d3a7417bbaf1bedf47fec4ed9d0b.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <!-- 八个盒 -->
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/967cc4d8140d27299cc1bc4d20294df7.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot-itme">
          <h3>美食酒水榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot-itme">
          <h3>个护清洁榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/ecef155d279e1a485b4f31f87daa3698.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot-itme">
          <h3>数码家电榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/51348ec7731f5ed5c4bb9e0bed88717c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot-itme">
          <h3>服饰鞋包榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot-itme">
          <h3>严选全球榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/7bb60cd94cb436726b8db296fda698fc.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot-itme">
          <h3>母婴亲子榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="hot-itme">
          <h3>运动旅行榜</h3>
          <img src="https://yanxuan-item.nosdn.127.net/ac8b7ca33bf55692cd10778a6bf39609.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
    </div>
    <!-- 限时购 -->
    <div class="buy-header">
      <h2 class="buy-h buy-title">限时购</h2>
          <!-- 倒计时 -->
      <div class="buy-h time-container">
        <div class="h">02</div>
        <div>:</div>
        <div class="m">34</div>
        <div>:</div>
        <div class="s">12</div>
      </div>
      <div class="many">更多 ></div>
    </div>
        <!-- 六个盒 -->
    <div class="buy-goods">
        <div class="buy-itme">
          <img src="https://yanxuan-item.nosdn.127.net/f4cccc00bf214181daa940a415e7006f.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <h3>¥48</h3>
        </div>
        <div class="buy-itme">
          <img src="https://yanxuan-item.nosdn.127.net/b389beb64f7c07343ef75953926cfe0a.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <h3>¥659</h3>
        </div>
        <div class="buy-itme">
          <img src="https://yanxuan-item.nosdn.127.net/4717ea0609e155f7743a332ea9690824.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <h3>¥479</h3>
        </div>
        <div class="buy-itme">
          <img src="https://yanxuan-item.nosdn.127.net/3eca7b34cd80ce4128c98233e3809ece.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <h3>¥58.2</h3>
        </div>
        <div class="buy-itme">
          <img src="https://yanxuan-item.nosdn.127.net/e290e08fca0e9d2cf9605272a2b07aa6.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <h3>¥55</h3>
        </div>
        <div class="buy-itme">
          <img src="https://yanxuan-item.nosdn.127.net/797a29814fea9f623efb204d96fd3e3e.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <h3>¥649</h3>
        </div>
    </div>
    <!-- 新品首发 -->
    <div class="new-header">
      <h2 class="new-title">新品首发</h2>
      <div class="new-many">更多 ></div>
    </div>
    <div class="new-goods">
        <div class="new-itme">
          <img src="https://yanxuan-item.nosdn.127.net/5670c74ec20eaa75e9a1b6b02328e03c.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
          <h3>春风魂系列黑洞伸缩飞机杯</h3>
          <div class="price"><span class="price">¥449</span></div>
          <div class="price-down"><span>新品尝鲜价</span></div>
        </div>
        <div class="new-itme">
          <img src="https://yanxuan-item.nosdn.127.net/a3217d58d7b7fe9289b3fc70c6ee8c3b.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
          <h3>现榨现喝果饮随行 无线充电便携式榨汁杯</h3>
          <div class="price"><span class="price">¥169</span></div>
        </div>
        <div class="new-itme">
          <img src="https://yanxuan-item.nosdn.127.net/3696155daac775d532f58485c4f5b1d2.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
          <h3>零耗材长效保鲜食材 迷你冰箱除菌净化机</h3>
          <div class="price"><span class="price">¥90</span></div>
        </div>
        <div class="new-itme">
          <img src="https://yanxuan-item.nosdn.127.net/5f860f5cc06bdb7f34435424a957491a.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
          <h3>苹果+安卓+Type-C通用，三合一快充数据线</h3>
          <div class="price"><span class="price">¥32</span></div>
        </div>
        <div class="new-itme">
          <img src="https://yanxuan-item.nosdn.127.net/956db5ffe5e6509e3104ad210a59bb44.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
          <h3>人字型家用折叠梯</h3>
          <div class="price"><span class="price">¥288</span></div>
        </div>
        <div class="new-itme">
          <img src="https://yanxuan-item.nosdn.127.net/555ae085c9ef07540fd620c32b82d588.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
          <h3>男式自由弹力轻薄休闲裤</h3>
          <div class="price"><span>¥199</span></div>
        </div>
    </div>
    <!-- 断货补单 -->
    <div class="king-container">
        <div class="king">
          <h3>严选超市</h3>
          <div class="k"><span>10元凑好物</span></div>
          <img src="https://yanxuan-item.nosdn.127.net/5191271233a26fb5b30708cb27625816.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/758b098102d7b82ccabcfd95b25b02c3.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
        </div>
        <div class="king">
          <h3>口罩购买</h3>
          <div class="k"><span>保供1.4/只</span></div>
          <img src="https://yanxuan-item.nosdn.127.net/967cc4d8140d27299cc1bc4d20294df7.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/aa436fa42dc09938c7f985c071503569.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
        </div>
        <div class="king">
          <h3>员工精选</h3>
          <div class="k"><span>天天内部价</span></div>
          <img src="https://yanxuan-item.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/3c201fe2257a7b3b8951e66bf3b1430f.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
        </div>
        <div class="king">
          <h3>回购榜单</h3>
          <div class="k"><span>口碑超值价</span></div>
          <img src="https://yanxuan-item.nosdn.127.net/cfd0fec5e70ca09d4c0b7492dba26f2e.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
        </div>
    </div>
    <!-- 首页底部 -->
    <div class="first-footer">
      <div class="footer-container">
        <span class="app">下载APP</span>
        <span class="com">电脑版</span>
      </div>
      <div class="text-container">
        <span class="text-up">网易公司版权所有 © 1997-2020</span><br>
        <span class="text-down">食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import  Navleft from '../../components/Navleft/Navleft'

  export default {
    async mounted(){
       new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
       pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 2
        },

    })

    new BScroll('.wrap-Nav',{
      scrollX:true,
      click:true
    })
    },
     components:{
      Navleft
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  #wrap
    background #eee
    // 头部样式
    .wrap_header
      width 100%
      height 88px
      padding 16px 30px
      display flex
      box-sizing border-box
      position fixed
      left 0
      top 0
      z-index 99
      background #fff
      .wrapLogo
        width 138px
        height 40px
        margin-right 20px
        margin-top 10px
        img
          width 100%
          height 100%
      .wrap_input
        width 442px
        height 56px
        font-size 28px
        margin-right 20px
        text-align left
        line-height 56px
        background #ededed
        border-radius 7px
        outline none
      .wrap-button
        width 74px
        height 40px
        font-size 23px
        padding 0
        background #fff
        border 1px #dd1a21 solid
        color #dd1a21
        margin-top 10px


    //导航
    #wrap-NavOut
      width 750px
      height 60px
      position fixed
      left 0
      top 88px
      z-index 99
      background #fff
      display flex
      .navleft
        width 750px
        height 60px
        background #ffffff
      .navright
        width 650px
        height 60px
        /*background yellow*/
    //轮播图
    .swiper-container
      margin-top 148px
      width 100%
      height 370px
      img
        width 100%
        height 100%


    .wrap-lineText
      width 750px
      height 72px
      background #fff
      line-height 72px
      display flex
      justify-content space-around
      .lineText-item
        span
          font-size 24px
        .iconfont
          color #dd1a21

    .wrap-goods
      width 750px
      height 372px
      background #fff
      .goodsItem
        width 110px
        height 156px
        float left
        background #fff
        margin 10px 20px 9px
        box-sizing border-box
        .goodsup
          width 100%
          height 110px
          img
            width 100%
            height 100%
        .goodsdown
          width 100%
          height 36px
          text-align center
          line-height 36px
          margin-top 10px

  //首页背景图及动态图片滚动显示
    .back-img
      position relative
      width 750px
      height 240px
      background-image url("https://yanxuan.nosdn.127.net/770f00c5d787d19d1acc8ae943362d07.jpg?quality=75&type=webp&imageView&thumbnail=750x0")
      background-size 100%
      background-repeat no-repeat
      .in-back
        width 168px
        height 168px
        position absolute
        left 75px
        top 35px
        img
          width 100%
          height 100%
        span
          position absolute
          bottom 10px
          left 8px
          width 152px
          height 32px
          background #f48f18
          text-align center
          line-height 32px
          border-radius 20px
          color #fff
    //商品列表
    .back-down
      width 750px
      height 588px
      background #1674e3
      .long-img
        width 710px
        height 160px
        background-image url("https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75")
        background-size 100%
        background-repeat no-repeat
        margin 0 auto
      .img
        width 710px
        height 400px
        margin 5px auto 0
        .img-item
          width 351px
          height 186px
          background-image url("https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0")
          background-size 100%
          background-repeat no-repeat
          float left
          margin-top 10px
        .img-item2,.img-item4
          margin-left 7px
    //新人专享礼
    .newp
      width 750px
      height 558px
      background #fff
      margin 20px 0
      .new-title
        background #fff
        width 750px
        height 90px
        box-sizing border-box
        padding 0 30px
        text-align center
        line-height 90px
        font-size 32px
        color #333
      .newp-main
        width 691px
        height 434px
        margin 0 auto
        .main1
          float left
        .newp-left
          width 343px
          height 434px
          background #f9e9cf
          h3
            font-size 32px
            color #333
            padding 30px 0 0 30px
          img
            width 258px
            height 257px
            display block
            margin 50px auto
        .newp-right
          width 343px
          height 434px
          margin-left 4px
          .up
            position relative
            width 323px
            height 215px
            padding 20px 0 0 30px
            box-sizing border-box
            margin-bottom 4px
            background #f9f3e4
          .down
                position relative
                width 323px
                height 215px
                padding 20px 0 0 30px
                box-sizing border-box
                margin-bottom 4px
                background #f9f3e4
            h3
              font-size 32px
              color #333
              line-height 50px
            span
              font-size 24px
              color #7f7f7f
            img
              position absolute
              right 0
              bottom 0
              width 200px
              height 200px
          .down
            width 343px
            height 215px
            background #f9e9cf
            padding 20px 0 0 30px
            box-sizing border-box
            h3
              font-size 32px
              color #333
              line-height 50px
            span
              font-size 24px
              color #fff
              background #cbb693


  //类目热销榜
    .hot-title
      background #fff
      width 750px
      height 90px
      box-sizing border-box
      padding 0 30px
      line-height 90px
      font-size 32px
      color #333
    .hot-goods
      width 750px
      height 610px
      background #fff
      padding 0 20px 20px 30px
      box-sizing border-box
      margin-bottom 20px

      .hot-left
        background #f9f3e4
      .hot-right
        background #ebeff6
      .hot
        position relative
        float left
        width 340px
        height 200px
        margin 0 10px 10px 0
        h3
          line-height 150px
          margin-left 35px
          font-size 28px
          color #333
        i
          position absolute
          top 96px
          left 35px

        img
          position absolute
          right 0
          bottom 0
          width 200px
          height 200px
      .hot-itme
        width 165px
        height 180px
        background #f5f5f5
        float left
        margin 0 10px 10px 0
        position relative
        h3
          text-align center
          margin-top 10px
        img
          width 120px
          height 120px
          position absolute;
          top 50%;
          left 50%;
          transform translate(-50%, -50%)
          margin-top 15px
  //限时购
    .buy-header
      background #fff
      width 750px
      height 90px
      box-sizing border-box
      padding 0 30px
      font-size 32px
      color #333
      .buy-title
        line-height 90px
      .buy-h
        float left
      .time-container
        width 181px
        height 90px
        background #fff
        margin-left 16px
        padding-top 30px
        box-sizing border-box
        .h
          width 36px
          height 36px
          background #333
          color #fff
          font-size 24px
          text-align center
          border-radius 5px
          margin-right 10px
          line-height 33px
        .m
          width 36px
          height 36px
          background #333
          color #fff
          font-size 24px
          text-align center
          border-radius 5px
          margin 0 10px
          line-height 33px
        .s
          width 36px
          height 36px
          background #333
          color #fff
          font-size 24px
          text-align center
          border-radius 5px
          margin-left  10px
          line-height 33px
        div
          float left
      .many
        float right
        line-height 90px
    .buy-goods
      width 750px
      height 600px
      padding 0 30px
      box-sizing border-box
      background #fff
      margin-bottom 20px
      .buy-itme
        width 216px
        height 260px
        float left
        margin 0 10px 10px 0
        padding-bottom 30px
        box-sizing border-box
        background #f5f5f5
        h3
          text-align center
          color red
        img
          width 216px
          height 216px

  //新品发布
    .new-header
      background #fff
      width 750px
      height 90px
      box-sizing border-box
      padding 0 30px
      font-size 32px
      color #333
      .new-title
        float left
        line-height 90px
      .new-many
        float right
        line-height 90px
    .new-goods
      width 750px
      height 796px
      padding 0 30px
      box-sizing border-box
      background #fff
      margin-bottom 20px
      .new-itme
        width 216px
        height 376px
        float left
        margin 0 14px 0 0
        padding-bottom 30px
        box-sizing border-box
        background #f5f5f5
        margin 10px 6px
        h3
          width 200px
          height 72px
          text-align center
          font-size 24px
          color #333
          overflow hidden
          line-height 35px
          text-overflow ellipsis
        .price
          width 26px
          height 48px
          color red
          font-size 30px
          margin 3px 2px
        .price-down
          width 128px
          height 30px
          color red
          border 1px solid red
          line-height 30px
          text-align center
        img
          width 216px
          height 216px
    //
       .king-container
          width 750px
          height 576px
          background #fff
          margin-bottom 20px
          padding 10px 30px 30px 26px
          box-sizing border-box
          .king
            width 343px
            height 264px
            background #eee
            float left
            margin 4px 0 0 4px
            padding 20px 0 0 20px
            box-sizing border-box
            h3
              width 323px
              height 48px
              font-size 32px
              color #333
            .k
              width 323px
              height 36px
              font-size 24px
              color #7f7f7f
            img
              width 150px
              height 150px

      .first-footer
        width 750px
        height 244px
        background #333
        padding 54px 20px 28px
        box-sizing border-box
        margin-bottom 100px
        .footer-container
          width 710px
          height 62px
          margin 0 0 36px
          padding 0 155px 0
          box-sizing border-box
          .app,.com
            width 172px
            height 62px
            color #fff
            float left
            text-align center
            line-height 62px
            border 0.5px #ccc solid
          .app
            margin-right 45px
        .text-container
          width 710px
          height 64px
          text-align center
          line-height 30px
          color #ccc

</style>
