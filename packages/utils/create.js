/**
 * Create a component with common options
 */
import createBasic from './create-basic'
import BaseCard from '../base-card/index.vue'
import Icon from '../icon/index.vue'
import VcButton from '../button/index.vue'
export default function(sfc) {
  sfc.props = Object.assign(sfc.props || {}, BaseCard.props)
  sfc.components = Object.assign(sfc.components || {}, {
    BaseCard,
    Icon,
    VcButton
  })
  sfc.inheritAttrs = false
  return createBasic(sfc)
}
