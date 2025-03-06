# Obsidian Plugin Vue Lab

[开发日记](./dairy.md)

开发遵循：
- css只使用原生obsidian css 类名进行定义，不使用vue的scop

## Feature

解决痛点：

- 设置页面，模态框和边栏操作繁琐，压缩空间和思考
- 插件下载安装后直接使用，导致不能查看详细的设置和readme不能兼得的问题

设计思维：

- vue3 + naive-ui
- 以Workspace为主要开发内容。避免过多使用边栏以及SettingTab。
- 提供方便的 i18n 支持

已有内容：

- 插件通用readme-view, robbin icon/command呼出，固定唯一的视图（无论怎么呼出都会跳转到唯一界面）

## Kanban

### todo

- ChatView

### wip

- ReadMeView

### Done

- SettingTab

## Tech stack

vue3 + naive-ui

## View

以Workspace为主要开发内容。避免过多使用边栏以及SettingTab。

### SettingTab 设置页面

最早的vue组件挂载实验。暂时不维护

### ReadMeView (workspace-leaf)

单一视图，用于显示ReadMe。同时也是挂载各类视图进行测试的容器

#### ReadMe

静态内容。

显示测试：

- [ ] markdown
- [ ] mermaid
- [ ] base64

#### 设置页面（操作data.json）

### ChatView (workspace-leaf)

和一个带有合适yaml的文件相绑定

## 样式管理 styles.css

不使用Vue 组件 scoped
使用 类名css

在 Obsidian 插件开发中的建议：

- 推荐使用类名 CSS，因为：
  1. 更容易使用 Obsidian 的主题变量
  2. 更好的性能表现
  3. 便于统一管理样式
  4. 更容易与 Obsidian 的现有样式系统集成

如果您担心样式冲突，可以采用 BEM 命名规范。

## Reference

https://luhaifeng666.github.io/obsidian-plugin-docs-zh/zh2.0/getting-started/vue.html#vue
