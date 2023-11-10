// /* @jsx h */

import { createApp, defineComponent, h } from 'vue'

import { parseCaptureInline, Priority, simpleInlineRegex, Rule } from './index'

import Markdown, { Options } from './index'

const MyComponent = defineComponent({
  props: {},
  setup() {
    return () => h('h3', '---------MyComponent-------')
  },
})

//  ==Mark==
const MarkRule: Rule = {
  match: simpleInlineRegex(/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/),
  order: Priority.LOW,
  parse: parseCaptureInline,
  react(node, output, state?) {
    return h(
      'mark',
      {
        class: 'rounded-md bg-always-yellow-400 bg-opacity-80 px-1 text-black',
      },
      output(node.content, state!)
    )
  },
}

const options: Options = {
  overrides: {
    MyComponent: {
      component: MyComponent,
    },
  },
  additionalParserRules: {
    mark: MarkRule,
  },
}

const content = document.getElementById('sample-content')!.textContent!.trim()

// @ts-ignore
createApp(h(Markdown, { options }, content)).mount('#root')

///
