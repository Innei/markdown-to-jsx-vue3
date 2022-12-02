# markdown-to-jsx-vue3

Fork [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx).

The most lightweight, customizable Vue3 markdown component, using Vue 3 SFC or TSX.

The component props is same as [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx).

## Example

```vue
<template>
  <Markdown># Hello world! </Markdown>
</template>

<script setup>
import Markdown from "markdown-to-jsx-vue3";
</script>
```

```tsx
import Markdown from "markdown-to-jsx-vue3";

defineComponent({
  setup() {
    return () => <Markdown># Hello world! </Markdown>
  }
})
```