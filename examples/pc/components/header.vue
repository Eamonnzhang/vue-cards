
<template>
  <header
    class="page-header"
    :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'"
  >
    <div class="header-container">
      <a href="https://github.com/Eamonnzhang/vue-cards" target="__blank">
        <vue-cards-icon name="cards" :size="50"></vue-cards-icon>
        <span class="name">VueCards</span>
      </a>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../assets/scss/index';
.page-header {
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 90%;
    margin: 0 auto;
    a {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .name {
      color: #628cf5;
      font-size: 20px;
      margin-left: 5px;
    }
    .icon {
      width: 100px;
    }
  }
}
</style>
