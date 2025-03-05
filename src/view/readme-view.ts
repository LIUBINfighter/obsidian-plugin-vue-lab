import { ItemView, WorkspaceLeaf } from "obsidian";
import { createApp } from "vue";
import ReadmeContent from "../components/ReadmeContent.vue";

export const VIEW_TYPE_EXAMPLE = "readme-view";

export class ReadMeView extends ItemView {
    private vueApp: any; // Vue 应用实例

    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType() {
        return VIEW_TYPE_EXAMPLE;
    }

    getDisplayText() {
        return "Vue Lab Readme View";
    }

    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();
        container.addClass('readme-view-container');
        
        // 创建 Vue 应用挂载点
        const mountPoint = container.createDiv('vue-root');
        
        // 创建并挂载 Vue 应用
        this.vueApp = createApp(ReadmeContent);
        this.vueApp.mount(mountPoint);
    }

    async onClose() {
        // 清理 Vue 应用
        if (this.vueApp) {
            this.vueApp.unmount();
            this.vueApp = null;
        }
        this.containerEl.empty();
    }
}
