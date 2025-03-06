<template>
	<div class="dnd-container">
	  <div class="dropzone" 
		   @dragover.prevent 
		   @drop.prevent="onDrop">
		<div v-if="items.length === 0" class="placeholder">
		  拖放文件到此处
		</div>
		<div v-else class="items-grid">
		  <div v-for="(item, index) in items" 
			   :key="index" 
			   class="item"
			   draggable="true"
			   @dragstart="onDragStart($event, index)">
			<div class="item-content">{{ item.name }}</div>
			<button class="remove-btn" @click="removeItem(index)">×</button>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'DndGallery',
	data() {
	  return {
		items: []
	  }
	},
	methods: {
	  onDrop(event) {
		const files = event.dataTransfer.files;
		if (files.length) {
		  for (let i = 0; i < files.length; i++) {
			this.items.push({
			  name: files[i].name,
			  file: files[i]
			});
		  }
		} else {
		  // 处理从内部拖拽的情况
		  const data = event.dataTransfer.getData('text/plain');
		  if (data) {
			try {
			  const { index } = JSON.parse(data);
			  // 这里可以实现重新排序逻辑
			} catch (e) {
			  console.error('拖拽数据解析错误', e);
			}
		  }
		}
	  },
	  onDragStart(event, index) {
		event.dataTransfer.setData('text/plain', JSON.stringify({ index }));
	  },
	  removeItem(index) {
		this.items.splice(index, 1);
	  }
	}
  }
  </script>
  
  
  <!-- 不使用<style scoped> 样式添加在根目录的style.css 使用obsidian原生样式 -->
  