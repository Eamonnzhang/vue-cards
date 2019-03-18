<template>
  <span class="vue-cards-icon" @click="onClick" :style="{ fontSize: size +'px'}">
    <svg v-if="symbol" class="vue-cards-icon__symbol" aria-hidden="true">
      <use :xlink:href="`#vc-icon-${name}`"></use>
    </svg>
    <i v-else class="vue-cards-icon__font" :class="'vc-icon-' + name" :style="{ color: color }"></i>
  </span>
</template>
<script>
import './iconfont.js'
import create from '../utils/create-basic'
export default create({
  name: 'icon',
  props: {
    // 是否为多色字体图标symbol模式
    symbol: {
      type: Boolean,
      default: true
    },
    // 字体图标名称
    name: {
      type: String,
      required: true
    },
    // 字体图标尺寸
    size: {
      type: Number
    },
    // 字体图标颜色（针对于非symbol多色字体图标）
    color: {
      type: String
    }
  },
  computed: {
    fontSize () {
      const viewportWidth = 750
      const ratio = viewportWidth / 100

      return this.size / ratio
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
})
</script>
