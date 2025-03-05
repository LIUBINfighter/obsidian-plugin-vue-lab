import { Plugin } from "obsidian";
import { VueSamplePluginSettingTab } from "./setting-tab";
import { ExampleView, VIEW_TYPE_EXAMPLE } from "./view";

// 注册插件
export default class VueSamplePlugin extends Plugin {
    // 在用户激活插件和插件更新时触发，这将是您设置插件大部分功能的地方
    onload() {
        // 加入插件设置页
        this.addSettingTab(new VueSamplePluginSettingTab(this.app, this));

        // 注册视图
        this.registerView(
            VIEW_TYPE_EXAMPLE,
            (leaf) => new ExampleView(leaf)
        );

        // 添加功能区图标
        this.addRibbonIcon("dice", "激活示例视图", () => {
            this.activateView();
        });
    }
    // 在用户禁用插件时触发，插件所调用的任何资源必须在这里得到释放，以防止 Obsidian 的性能受到影响
    onunload() {
    }

    async activateView() {
        const { workspace } = this.app;
        
        let leaf = workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0];
        if (!leaf) {
            leaf = workspace.getLeaf('split');
            await leaf.setViewState({
                type: VIEW_TYPE_EXAMPLE,
                active: true,
            });
        }
        
        workspace.revealLeaf(leaf);
    }
}
