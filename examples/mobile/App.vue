<template>
  <div id="mobile">
    <div class="demo-nav" v-show="showNav">
      <router-link to="/index">返回首页</router-link>
    </div>
    <router-view class="demo-view" :class="{'is-inner':showNav}"></router-view>
  </div>
</template>

<script>
export default {
  name: 'mobile-app',
  data () {
    return {
      showNav: false
    }
  },
  watch: {
    $route (to, from) {
      this.showNav = to.name !== 'index'
      if (to.name !== 'index') {
        window.parent.location.hash = to.name
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/index';
.demo-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 998;
  font-size: 14px;
  padding: 0 12px;
  border-bottom: 1px solid #eee;
  a {
    color: #2150d8;
  }
}
.demo-view {
  &.is-inner {
    padding-top: 55px;
  }
}
</style>
