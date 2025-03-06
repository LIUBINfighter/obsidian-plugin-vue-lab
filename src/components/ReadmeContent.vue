<template>
  <div class="readme-content">
    <div class="language-selector">
      <select :value="locale" @change="handleLocaleChange">
        <option v-for="(name, code) in LANGUAGES" :key="code" :value="code">
          {{ name }}
        </option>
      </select>
    </div>
    <h1>{{ t('message.title') }}</h1>
    <div class="description">
      <p>{{ t('message.description') }}</p>
    </div>
    <button @click="count++">{{ t('message.clickCount', { count }) }}</button>
    
    <!-- 添加新的文档内容组件 -->
    <DocumentContent />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { LANGUAGES } from '../i18n'
import DocumentContent from './DocumentContent.vue'

const props = defineProps<{
  onLocaleChange?: (locale: string) => void
}>()

const { t, locale } = useI18n()
const count = ref(0)

const handleLocaleChange = (event: Event) => {
  const newLocale = (event.target as HTMLSelectElement).value
  locale.value = newLocale
  props.onLocaleChange?.(newLocale)
}
</script>
