<template>
  <base-card v-bind="$props">
    <div slot="content">
      {{message}}
    </div>
  </base-card>
</template>
<script>
import create from '../utils/create'
export default create({
  name: 'text',
  props: {
    message: String
  }
})
</script>
