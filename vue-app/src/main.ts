import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './public-path'
import router from "./router";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app: any


if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(App)
  app.use(router)
  app.mount('#app')
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App)
      app.use(router)
      app.mount(props.container?.querySelector('#app'))
      console.log('props.container:', props.container);
    },
    bootstrap() {
      console.log('vue app bootstrap');
    },
    update() {
      console.log('vue app update');
    },
    unmount() {
      console.log('vue app unmount');
      app.unmount()
    }
  })
}
