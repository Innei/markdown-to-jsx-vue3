// /* @jsx h */

import { createApp, defineComponent, h } from 'vue'

import Markdown from './index'

const MyComponent = defineComponent({
  props: {},
  setup() {
    return () => h('h3', '---------MyComponent-------')
  },
})

const options = {
  overrides: {
    MyComponent: {
      component: MyComponent,
    },
  },
}

const content = document.getElementById('sample-content')!.textContent!.trim()

// @ts-ignore
createApp(h(Markdown, { options }, content)).mount('#root')
