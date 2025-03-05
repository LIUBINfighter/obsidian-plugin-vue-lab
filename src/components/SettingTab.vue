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
