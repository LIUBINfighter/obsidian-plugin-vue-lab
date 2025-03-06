

<template>
  <div class="document-content">
    <!-- 介绍部分 -->
    <div class="document-section">
      <div v-html="markdownToHtml(t('message.document.introduction.title'))"></div>
      
      <!-- 概述 -->
      <div class="section">
        <div v-html="markdownToHtml(t('message.document.introduction.sections.0.subtitle'))"></div>
        <div class="content">
			<div v-html="markdownToHtml(t('message.document.introduction.sections.0.content.0'))"></div>
			<div v-html="markdownToHtml(t('message.document.introduction.sections.0.content.1'))"></div>
			<div v-html="markdownToHtml(t('message.document.introduction.sections.0.content.2'))"></div>
			<!-- <p v-for="(paragraph, index) in introContent" :key="index">
            {{ paragraph }}
          </p> -->
          <!-- <p v-if="introContent.length === 0">暂无内容</p> -->
        </div>
      </div>
      
      <!-- 安装方法 -->
      <div class="section">
        <div v-html="markdownToHtml(t('message.document.introduction.sections.1.subtitle'))"></div>
        <div class="content">
			<div v-html="markdownToHtml(t('message.document.introduction.sections.1.content.0'))"></div>
			<div v-html="markdownToHtml(t('message.document.introduction.sections.1.content.1'))"></div>
			<div v-html="markdownToHtml(t('message.document.introduction.sections.1.content.2'))"></div>
        </div>
      </div>
      
      <!-- 配置说明 -->
      <div class="section">
        <div v-html="markdownToHtml(t('message.document.introduction.sections.2.subtitle'))"></div>
        <div class="content">
			<div v-html="markdownToHtml(t('message.document.introduction.sections.2.content.0'))"></div>
			<div v-html="markdownToHtml(t('message.document.introduction.sections.2.content.1'))"></div>
			<div v-html="markdownToHtml(t('message.document.introduction.sections.2.content.2'))"></div>
        </div>
      </div>
    </div>
    
    <!-- 特性部分 -->
    <div class="document-section">
      <div v-html="markdownToHtml(t('message.document.features.title'))"></div>
    </div>
    
    <!-- 使用指南部分 -->
    <div class="document-section">
      <div v-html="markdownToHtml(t('message.document.usage.title'))"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import { computed } from 'vue'

const { t, locale } = useI18n()

// 将Markdown转换为HTML的函数
function markdownToHtml(markdown: string): string {
  return marked(markdown)
}

// 使用计算属性获取内容
const introContent = computed(() => {
  const content = t('message.document.introduction.sections.0.content')
  return Array.isArray(content) ? content : []
})

const installContent = computed(() => {
  const content = t('message.document.introduction.sections.1.content')
  return Array.isArray(content) ? content : []
})

const configContent = computed(() => {
  const content = t('message.document.introduction.sections.2.content')
  return Array.isArray(content) ? content : []
})
</script>

<!-- 不使用<style scoped> 样式添加在根目录的style.css 使用obsidian原生样式 -->
