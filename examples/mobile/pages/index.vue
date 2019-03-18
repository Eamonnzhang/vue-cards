<template>
  <div>
    <div class="mobile-demo-menu">
      <div class="mobile-demo-menu__title">
        <p class="mobile-demo-menu__title__main">VueCards</p>
        <p class="mobile-demo-menu__title__meta">移动端预览</p>
      </div>
      <div v-for="title in (Object.keys(navConf))" :key="title">
        <div class="group-container" v-if="title !== '开发指南'">
          <p class="side-nav-title" v-if="title !== '组件'">{{title}}</p>
          <div class="side-nav-items" v-for="nav in navConf[title]" :key="nav.name">
            <template v-if="nav.desc">
              <router-link
                :class="$route.name === nav.name ? 'active' : ''"
                v-if="nav.name"
                :to="{name: nav.name}"
              >{{nav.desc}}</router-link>
              <p v-else class="side-nav-group">{{nav.desc}}</p>
              <div v-for="item in nav.items" :key="item.name" class="side-nav-component-wrap">
                <router-link
                  :to="{name: item.name}"
                  :class="$route.name === item.name ? 'active' : ''"
                  class="side-nav-component"
                >
                  <span class="en-name">{{item.desc}}</span>
                </router-link>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navConf from '@/nav.config.json'
export default {
  data () {
    return {
      navConf
    }
  }
}
</script>
<style lang="scss" scoped>
.mobile-demo-menu {
  background-color: #fafafa;
  min-height: 100vh;
  padding: 10px 10px;
  &__title {
    text-align: center;
    padding-top: 30px;
    &__main {
      font-size: 23px;
      font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial,
        sans-serif;
    }
    &__meta {
      font-size: 14px;
      color: #455a64;
      margin: 0 0 30px;
    }
  }
}
.group-container {
  text-align: center;
  .side-nav-items {
    padding: 20px;
    background-color: #fff;
    margin-bottom: 15px;
    .side-nav-group {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .side-nav-component-wrap {
      padding: 6px 24px 18px 32px;
      &:nth-last-child(1) {
        padding-bottom: 0px;
      }
    }
    .side-nav-component {
      display: block;
      color: #616367;
      font-size: 14px;
      text-decoration: underline;
      color: #2150d8;
    }
  }
}
</style>
