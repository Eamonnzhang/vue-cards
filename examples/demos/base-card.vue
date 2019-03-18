<template>
  <div class="demo-block">
    <vue-cards-base class="demo-card">
      <div slot="content">这是卡片内容</div>
      <div slot="footer">
        <div class="vue-cards__footer-content">这是底部内容</div>
      </div>
    </vue-cards-base>
    <vue-cards-base class="demo-card" theme-type="primary">
      <div slot="content">这是卡片内容</div>
    </vue-cards-base>
  </div>
</template>
<script>
export default {
  name: 'base-demo'
}
</script>
