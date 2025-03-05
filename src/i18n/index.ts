import { createI18n } from 'vue-i18n'

export const LANGUAGES = {
    zh: '简体中文',
    en: 'English'
} as const;

const messages = {
    en: {
        message: {
            title: 'Vue Lab Plugin Documentation',
            description: 'This is a sample plugin demonstrating Vue usage in Obsidian',
            selectLang: 'Select Language',
            clickCount: 'Click Count: {count}'
        }
    },
    zh: {
        message: {
            title: 'Vue Lab 插件文档',
            description: '这是一个演示在 Obsidian 中使用 Vue 的示例插件',
            selectLang: '选择语言',
            clickCount: '点击次数：{count}'
        }
    }
}

export const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages,
    legacy: false, // 添加这个配置以支持 Composition API
})