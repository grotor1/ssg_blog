<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>

<template>
  <span class="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
    {{ tag }}
  </span>
</template>
