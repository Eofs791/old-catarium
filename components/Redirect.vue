<script setup lang="ts">
import { onMounted } from 'vue'

// 从 frontmatter 或 props 获取目标路径
const props = defineProps<{
  to: string
}>()

onMounted(() => {
  if (props.to) {
    // 页面加载后立即跳转
    window.location.replace(props.to)
  }
})
</script>

<template>
  <div>
    <p>Redirecting to <a :href="props.to">{{ props.to }}</a>...</p>
  </div>
</template>
