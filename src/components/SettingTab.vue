<template>
    <div>
        <button>native-ui</button>
    </div>
    <br />
    <div>
        <n-button>naive-ui</n-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NButton } from "naive-ui";

export default defineComponent({
    components: {
        NButton
    }
})
</script>

<!-- 不使用scoped 样式添加在根目录的style.css 使用obsidian原生样式 -->
