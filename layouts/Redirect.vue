<script setup lang="ts">
import { useFrontmatter } from 'valaxy'
import { onMounted } from 'vue'

const fm = useFrontmatter()
onMounted(() => {
  if (fm.value.redirect)
    window.location.href = fm.value.redirect
})
</script>

<template>
  <div>
    Redirecting to <a :href="fm.redirect">{{ fm.redirect }}</a>...
  </div>
</template>
