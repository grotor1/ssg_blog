<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  date: string
  tags?: string[]
  to: string
}>()

const formattedDate = computed(() => {
  return new Date(props.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>

<template>
  <article class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
    <NuxtLink :to="to" class="block">
      <h2 class="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
        {{ title }}
      </h2>
    </NuxtLink>
    <time class="text-sm text-gray-500 mb-3 block">{{ formattedDate }}</time>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div v-if="tags?.length" class="flex flex-wrap gap-2">
      <TagBadge v-for="tag in tags" :key="tag" :tag="tag" />
    </div>
  </article>
</template>
