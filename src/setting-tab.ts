import { App, PluginSettingTab } from "obsidian";
import VueSamplePlugin from "./main";
import { createApp } from "vue";
import SettingTab from "./components/SettingTab.vue";

// 注册插件设置页
export class VueSamplePluginSettingTab extends PluginSettingTab {
    plugin: VueSamplePlugin;
    private vueApp: ReturnType<typeof createApp> | null = null;

    constructor(app: App, plugin: VueSamplePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();
        
        // 确保之前的 Vue 应用实例被卸载
        if (this.vueApp) {
            this.vueApp.unmount();
        }
        
        // 创建并保存新的 Vue 应用实例
        this.vueApp = createApp(SettingTab);
        this.vueApp.mount(containerEl);
    }

    hide() {
        if (this.vueApp) {
            this.vueApp.unmount();
            this.vueApp = null;
        }
    }
}
