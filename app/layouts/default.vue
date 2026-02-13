<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <TheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
