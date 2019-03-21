/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import BaseCard from './base-card'
import Button from './button'
import Icon from './icon'
import Loading from './loading'
import TextCard from './text-card'
const version = '0.1.5'
const components = [
  BaseCard,
  Button,
  Icon,
  Loading,
  TextCard
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  BaseCard,
  Button,
  Icon,
  Loading,
  TextCard
}
export default {
  install,
  version
}
