<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, async () => {
  return await queryCollection('pages').path(route.path).first()
    || await queryCollection('pages').path('/pages' + route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: route.path === '/' ? 'Home' : route.path.slice(1),
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <ContentRenderer
      v-if="page"
      :value="page"
      class="prose prose-lg max-w-none"
    />
  </div>
</template>
