<template>
  <div class="app">
    <div id="footer">
      <slot>
        <FooterItem path="/home" activeColor="pink">
          <img slot="item-icon" src="~assets/images/tabbar/home.svg"  alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg"  alt="">
          
          <div slot="item-text">首页</div>
        </FooterItem>
        <FooterItem path="/category" activeColor="pink">
          <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
          
          <div slot="item-text">分类</div>
        </FooterItem>
        <FooterItem path="/cart" activeColor="pink">
          <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
          
          <div slot="item-text">购物车</div>
        </FooterItem>
        <FooterItem path="/profile" activeColor="deepPink">
          <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
          
          <div slot="item-text">我的</div>
        </FooterItem>
      </slot>
    </div>
  </div>
</template>

<script>
import FooterItem from "./FooterItem"
export default {
name:'Footer',
  data() {
    return {
    }
  },
  components: {
    FooterItem
  }
}
</script>

<style scoped>
#footer{
  width: 100%;
  height:49px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 0px rgba(100,100,100,0.2); 
  display: flex;
}
</style>
