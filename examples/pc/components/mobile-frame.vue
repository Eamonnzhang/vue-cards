<template>
  <div class="docs-simulator">
    <div class="nav">
      <div class="url" @click="openMobileWindow">{{baseOrigin}}</div>
      <div class="refresh" @click="refreshIFrame"></div>
    </div>
    <div class="iframe-wrap">
      <iframe :src="baseUrl+'mobile.html#/index'" id="mobileIframe" frameborder="0"></iframe>
    </div>
    <vue-cards-icon
      name="close"
      class="docs-simulator__close"
      :size="32"
      @click="$emit('update:show',false)"
    ></vue-cards-icon>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baseUrl: `${window.location.origin}${window.location.pathname}`,
      baseOrigin: `${window.location.origin}`
    }
  },
  props: {
    url: String,
    show: Boolean
  },
  methods: {
    refreshIFrame () {
      document.getElementById('mobileIframe').contentWindow.location.reload()
    },
    openMobileWindow () {
      window.open(this.baseUrl + 'mobile.html#/index')
    }
  }
}
</script>
<style lang="scss" scoped>
.docs-simulator {
  position: fixed;
  top: 10px;
  right: 15px;
  z-index: 999;
  background-color: #fafafa;
  box-shadow: 0px 0px 23px 1px #CCCCCC;
  &__close {
    position: absolute;
    bottom: -40px;
    left: 50%;
    margin-left: -12px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  .nav {
    height: 60px;
    background: url(data:image/png;base64,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)
      no-repeat;
    background-size: 100%;
    position: relative;
    .url {
      position: absolute;
      font-size: 14px;
      left: 50%;
      // margin-left: -80px;
      transform: translateX(-50%);
      top: 23px;
      font-weight: bold;
      cursor: pointer;
    }
    .refresh {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 10px;
      top: 24px;
      cursor: pointer;
    }
  }
  .iframe-wrap {
    width: 320px;
    height: 516px;
    padding-bottom: 20px;
    iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
