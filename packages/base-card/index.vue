<template>
  <div :class="['vue-cards',cardThemeClass,cardSideClass]">
    <div class="vue-cards__title" v-if="title">{{title}}</div>
    <div class="vue-cards__content">
      <slot name="content"></slot>
    </div>
    <div class="vue-cards__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import create from '../utils/create-basic'
import VcLoading from '../loading/index.vue'
import VcChatIcon from '../icon/index.vue'
export default create({
  name: 'base',
  props: {
    title: String,
    themeType: {
      type: String,
      default: 'default'
    },
    sideType: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    cardThemeClass () {
      return 'vue-cards--' + this.themeType
    },
    cardSideClass () {
      return 'vue-cards--' + this.sideType
    }
  },
  components: {
    VcLoading,
    VcChatIcon
  }
})
</script>
