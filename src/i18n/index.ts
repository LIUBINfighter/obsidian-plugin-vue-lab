import { createI18n } from 'vue-i18n'

export const LANGUAGES = {
    zh: '简体中文',
    en: 'English'
} as const;

const messages = {
    en: {
        message: {
			// ReadmeAbstract
            title: 'Vue Lab Plugin Documentation',
            description: 'This is a sample plugin demonstrating Vue usage in Obsidian',
            selectLang: 'Select Language',
            clickCount: 'Click Count: {count}',
			// ReadmeDocument
            document: {
                introduction: {
                    title: '# 1. Introduction',
                    sections: [
                        {
                            subtitle: '## 1.1 Overview',
                            content: [
                                'Welcome to Vue Lab Plugin, a powerful tool for Obsidian.',
                                'This plugin demonstrates the seamless integration of Vue.js within Obsidian, providing a modern development experience.',
                                'You can use this plugin as a template to build your own Vue-based Obsidian plugins.'
                            ]
                        },
                        {
                            subtitle: '## 1.2 Installation',
                            content: [
                                '1. Download the latest version of this plugin',
                                '2. Extract to your Obsidian plugins directory',
                                '3. Enable the plugin in Obsidian settings'
                            ]
                        },
                        {
                            subtitle: '## 1.3 Configuration',
                            content: [
                                'This plugin provides the following configuration options:',
                                '- Language selection: Switch interface language',
                                '- Theme settings: Customize plugin appearance'
                            ]
                        },
                        {
                            subtitle: '## 1.4 Development Setup',
                            content: [
                                '### Initial Setup',
                                '```bash',
                                'npm i',
                                '```',
                                '',
                                '### Development Mode',
                                '```bash',
                                'npm run dev',
                                '```',
                                '',
                                '### Build for Production',
                                '```bash',
                                'npm run build',
                                '```',
                                '',
                                'The development mode will watch for file changes and automatically rebuild the plugin.'
                            ]
                        }
                    ]
                },
                features: {
                    title: '# 2. Key Features',
                    sections: []
                },
                usage: {
                    title: '# 3. Usage Guide',
                    sections: []
                }
            }
        }
    },
    zh: {
        message: {
            title: 'Vue Lab 插件文档',
            description: '这是一个演示在 Obsidian 中使用 Vue 的示例插件',
            selectLang: '选择语言',
            clickCount: '点击次数：{count}',
            document: {
                introduction: {
                    title: '# 1. 介绍',
                    sections: [
                        {
                            subtitle: '## 1.1 概述',
                            content: [
                                '欢迎使用 Vue Lab 插件，这是一个强大的 Obsidian 工具。',
                                '本插件展示了 Vue.js 在 Obsidian 中的无缝集成，提供现代化的开发体验。',
                                '您可以将此插件作为模板来构建自己的基于 Vue 的 Obsidian 插件。'
                            ]
                        },
                        {
                            subtitle: '## 1.2 安装方法',
                            content: [
                                '1. 下载本插件的最新版本',
                                '2. 解压到 Obsidian 插件目录',
                                '3. 在 Obsidian 设置中启用插件'
                            ]
                        },
                        {
                            subtitle: '## 1.3 配置说明',
                            content: [
                                '本插件提供了以下配置选项：',
                                '- 语言选择：切换界面语言',
                                '- 主题设置：自定义插件外观'
                            ]
                        },
                        {
                            subtitle: '## 1.4 开发设置',
                            content: [
                                '### 初始设置',
                                '```bash',
                                'npm i',
                                '```',
                                '',
                                '### 开发模式',
                                '```bash',
                                'npm run dev',
                                '```',
                                '',
                                '### 生产构建',
                                '```bash',
                                'npm run build',
                                '```',
                                '',
                                '开发模式将监视文件变化并自动重新构建插件。'
                            ]
                        }
                    ]
                },
                features: {
                    title: '# 2. 主要特性',
                    sections: []
                },
                usage: {
                    title: '# 3. 使用指南',
                    sections: []
                }
            }
        }
    }
}

export const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages,
    legacy: false, // 添加这个配置以支持 Composition API
})
