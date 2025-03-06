import { Plugin } from "obsidian";
import { VueSamplePluginSettingTab } from "./setting-tab";
import { ReadMeView } from "./view/readme-view";
import { GalleryView } from "./view/gallery-view";
import { VIEW_TYPES } from "./constants";
// 注册插件
export default class VueSamplePlugin extends Plugin {
    // 在用户激活插件和插件更新时触发，这将是您设置插件大部分功能的地方
    onload() {
        // 加入插件设置页
        this.addSettingTab(new VueSamplePluginSettingTab(this.app, this));

        // 注册 ReadMe 视图
        this.registerView(
            VIEW_TYPES.README,
            (leaf) => new ReadMeView(leaf, this)
        );

        // 注册 Gallery 视图
        this.registerView(
            VIEW_TYPES.GALLERY,
            (leaf) => new GalleryView(leaf, this)
        );

// 添加 ribbon icon
this.addRibbonIcon(
    'dice',
    'Vue Lab',
    (evt: MouseEvent) => {
        // 激活视图
        this.activateView();
    }
);

// 添加 Gallery ribbon icon
this.addRibbonIcon(
    'image-file',
    'Vue Lab Gallery',
    (evt: MouseEvent) => {
        // 激活图库视图
        this.activateGalleryView();
    }
);

// 注册命令
this.addCommand({
    id: 'open-vue-lab-readme',
    name: '打开 Vue Lab ReadMe 视图',
    callback: () => {
        this.activateView();
    }
});

this.addCommand({
    id: 'open-vue-lab-gallery',
    name: '打开 Vue Lab Gallery 视图',
    callback: () => {
        this.activateGalleryView();
    }
});

    }
    // 在用户禁用插件时触发，插件所调用的任何资源必须在这里得到释放，以防止 Obsidian 的性能受到影响
    onunload() {
    }

    // 修改 activateView 方法
    async activateView() {
        const { workspace } = this.app;
        
        let leaf = workspace.getLeavesOfType(VIEW_TYPES.README)[0];
        if (!leaf) {
            leaf = workspace.getLeaf(true);
            await leaf.setViewState({
                type: VIEW_TYPES.README,
                active: true,
            });
        }
        // 监听视图状态变化
        // 注册视图状态变化监听
        this.registerEvent(
            this.app.workspace.on('active-leaf-change', (leaf) => {
                if (leaf?.view instanceof ReadMeView) {
                    // 获取 status bar
                    const statusBarEl = this.app.workspace.containerEl.querySelector('.status-bar');
                    if (statusBarEl) {
                        statusBarEl.empty();
                        
                        // 创建通知按钮
                        const noticeBtn = statusBarEl.createEl('button', {
                            text: '显示通知',
                            cls: 'status-bar-item'
                        });
                        
                        noticeBtn.addEventListener('click', () => {
                            this.app.notices.show('这是一条来自 Vue Lab 的通知！', 3000);
                        });
                    }
                }
            })
        );
        workspace.revealLeaf(leaf);
    }
    // 添加 activateGalleryView 方法
    async activateGalleryView() {
        const { workspace } = this.app;
        
        let leaf = workspace.getLeavesOfType(VIEW_TYPES.GALLERY)[0];
        if (!leaf) {
            leaf = workspace.getLeaf(true);
            await leaf.setViewState({
                type: VIEW_TYPES.GALLERY,
                active: true,
            });
        }
        workspace.revealLeaf(leaf);
    }
}
