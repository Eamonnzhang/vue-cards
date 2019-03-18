<style lang="scss">
.demo-card {
  margin-right: 45px;
}
</style>
<script>
export default {
  name: 'text-demo'
}
</script>

<template>
  <div class="demo-block">
    <vue-cards-text class="demo-card" message="这是卡片内容"></vue-cards-text>
    <vue-cards-text class="demo-card" theme-type="primary" message="这是卡片内容"></vue-cards-text>
  </div>
</template>
