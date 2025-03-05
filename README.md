# Obsidian Plugin Vue Lab

## Kanban

todo: ChatView

wip: ReadMeView

Done: SettingTab

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
