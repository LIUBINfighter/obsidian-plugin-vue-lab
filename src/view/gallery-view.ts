import { ItemView, WorkspaceLeaf} from "obsidian";
import { createApp } from "vue";
import Gallery from "../components/gallery.vue";
import { i18n } from '../i18n';

export const GALLERY_VIEW_TYPE = "gallery-view";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class GalleryView extends ItemView {
  private vueApp: any;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType(): string {
    return GALLERY_VIEW_TYPE;
  }

  getDisplayText(): string {
    return "Gallery View";
  }

  async onOpen() {
    // 创建容器元素
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl("div", { cls: "gallery-container" });

    // 创建Vue应用
    this.vueApp = createApp({
      components: {
        Gallery
      },
      template: `
        <div class="gallery-wrapper">
          <Gallery />
        </div>
      `
    });

    // 使用i18n插件
    this.vueApp.use(i18n);
    
    // 挂载Vue应用
    this.vueApp.mount(container.querySelector('.gallery-container'));
  }

  async onClose() {
    // 卸载Vue应用
    if (this.vueApp) {
      this.vueApp.unmount();
    }
  }
}
