<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header class="border-b border-gray-200 bg-white">
    <nav class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold text-gray-900 hover:text-blue-600">
        My Blog
      </NuxtLink>
      <div class="flex gap-6">
        <NuxtLink
          to="/"
          class="text-gray-600 hover:text-blue-600 transition-colors"
          :class="{ 'text-blue-600 font-medium': isHome }"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-gray-600 hover:text-blue-600 transition-colors"
          active-class="text-blue-600 font-medium"
        >
          About
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
