import Vue from 'vue'

export default function (Component, options = {}) {
  return (new (Vue.extend(Component))(options)).$options.props
}
