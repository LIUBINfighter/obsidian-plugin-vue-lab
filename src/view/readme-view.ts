import { ItemView, WorkspaceLeaf } from "obsidian";
import { VIEW_TYPES } from "../constants";
import { createApp } from "vue";
import ReadmeContent from "../components/ReadmeContent.vue";
import { i18n } from '../i18n';

// 删除这行，因为我们现在使用 constants.ts 中的定义
// export const VIEW_TYPE_EXAMPLE = "readme-view";

export class ReadMeView extends ItemView {
    private vueApp: any;
    private plugin: any; // 插件实例

    constructor(leaf: WorkspaceLeaf, plugin: any) {
        super(leaf);
        this.plugin = plugin;
    }

    getViewType() {
        return VIEW_TYPES.README;
    }
    
    getDisplayText() {
        return "Vue Lab Readme View";
    }

    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();
        container.addClass('readme-view-container');
        
        const mountPoint = container.createDiv('vue-root');
        
        // 从设置中读取语言
        const savedData = await this.plugin.loadData() || {};
        if (savedData.locale) {
            i18n.global.locale.value = savedData.locale;
        }
        
        this.vueApp = createApp(ReadmeContent, {
            onLocaleChange: async (locale: string) => {
                await this.plugin.saveData({ ...savedData, locale });
            }
        });
        this.vueApp.use(i18n);
        this.vueApp.mount(mountPoint);
    }

    async onClose() {
        if (this.vueApp) {
            this.vueApp.unmount();
            this.vueApp = null;
        }
        this.containerEl.empty();
    }
}
