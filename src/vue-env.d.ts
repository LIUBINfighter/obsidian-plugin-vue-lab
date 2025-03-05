// 声明 vue 模块，该操作将允许在 ts 文件中使用 import 导入 vue 模块
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
