import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import { registerMicroApps, start } from 'qiankun';
import HelloWorld from "./components/HelloWorld.vue";
import _ from "lodash"

registerMicroApps([
  {
    name: 'react-app', // app name registered
    entry: '//localhost:3000/',
    container: '#sub-app',
    activeRule: '/react-app',
  },
  {
    name: 'vue-app', // app name registered
    entry: '//localhost:3001/',
    container: '#sub-app',
    activeRule: '/vue-app',
    props: { msg: 'aaa' }
  },
  {
    name: 'umi-app', // app name registered
    entry: '//localhost:8000/',
    container: '#sub-app',
    activeRule: '/umi-app',
  },
], {
  beforeLoad: [async app => console.log('beforeload:', app)],
  beforeMount: [async app => console.log('beforeMount:', app)],
  afterMount: [async app => console.log('afterMount:', app)]
});


// const state = { count: 1 }

// const actions = initGlobalState(state)
// actions.onGlobalStateChange((state, prev) => {

// })
// actions.setGlobalState(state)

start({ urlRerouteOnly: true })



const routes = [
  {
    path: '/',
    redirect: '/vue-app',
  },
  { path: '/vue-app/:_(.*)*', component: HelloWorld },
  { path: '/umi-app/:_(.*)*', component: HelloWorld },
  { path: '/react-app/:_(.*)*', component: HelloWorld },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


router.beforeEach((to, from, next) => {
  console.log('history:', history);
  if (!history.state.current) {
    Object.assign(history.state, { current: from.fullPath });
  }
  next();
});


createApp(App).use(router).mount('#app')
