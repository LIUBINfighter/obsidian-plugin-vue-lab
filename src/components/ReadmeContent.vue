<template>
  <div class="readme-content">
    <h1>{{ title }}</h1>
    <div class="description">
      <p>{{ description }}</p>
    </div>
    <button @click="count++">点击次数: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ReadmeContent',
  setup() {
    const title = ref('Vue Lab 插件说明')
    const description = ref('这是一个在 Obsidian 中使用 Vue 的示例插件')
    const count = ref(0)

    return {
      title,
      description,
      count
    }
  }
})
</script>

<style scoped>
.readme-content {
  padding: 20px;
}

button {
  margin-top: 16px;
}
</style>