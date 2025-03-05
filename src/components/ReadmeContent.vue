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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { LANGUAGES } from '../i18n'

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

<style scoped>
.readme-content {
  padding: 20px;
}

.language-selector {
  text-align: right;
  margin-bottom: 20px;
}

select {
  padding: 4px 8px;
  border-radius: 4px;
  min-width: 120px;
}

button {
  margin-top: 16px;
  padding: 6px 12px;
}
</style>