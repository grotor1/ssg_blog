<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-200 bg-gray-50 mt-auto">
    <div class="max-w-4xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
      <p>&copy; {{ year }} My Blog. Built with Nuxt & deployed on GitHub Pages.</p>
    </div>
  </footer>
</template>
