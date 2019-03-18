import Vue from 'vue'
import Router from 'vue-router'
import navConf from '@/nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header])
})

let addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.isMobile === '1') {
        if (route.type === 'pages') {
          route.component = r =>
            require.ensure([], () => r(require(`../pages/${route.name}.vue`)))
          return
        }
        route.component = r =>
          require.ensure([], () => r(require(`../../demos/${route.name}.vue`)))
      }
    }
  })
}
addComponent(routes)
let availableRoutes = routes.filter(item => item.path)
export default new Router({
  routes: availableRoutes
})
