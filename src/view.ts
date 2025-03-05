import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType() {
        return VIEW_TYPE_EXAMPLE;
    }

    getDisplayText() {
        return "Example View";
    }

    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();

        // 添加一些基本样式
 		container.addClass('example-view-container');
        
 		// 添加更丰富的内容
 		const header = container.createEl("h4", { text: "示例视图" });
 		header.addClass('example-view-header');
 
 		// 添加一些示例内容
 		const content = container.createDiv('example-view-content');
 		content.createEl('p', { text: '这是一个自定义视图示例' });
		
    }

    async onClose() {
        // 清理工作
		this.containerEl.empty();
    }
}
