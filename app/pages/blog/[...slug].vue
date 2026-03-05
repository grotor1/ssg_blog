<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string[]

const { data: post } = await useAsyncData(
  'post-' + slug.join('/'),
  () => queryCollection('blog').path('/blog/' + slug.join('/')).first(),
  {
    getCachedData(key) {
      return useNuxtApp().payload.data[key]
    },
  }
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  return new Date(post.value.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.description },
  ],
})
</script>

<template>
  <article class="max-w-4xl mx-auto px-4 py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ post?.title }}</h1>
      <div class="flex items-center gap-4 text-gray-500">
        <time>{{ formattedDate }}</time>
        <div v-if="post?.tags?.length" class="flex gap-2">
          <TagBadge v-for="tag in post.tags" :key="tag" :tag="tag" />
        </div>
      </div>
    </header>
    <ContentRenderer
      v-if="post"
      :value="post"
      class="prose prose-lg max-w-none"
    />
    <NuxtLink to="/" class="inline-block mt-8 text-blue-600 hover:text-blue-800">
      ← Back to all posts
    </NuxtLink>
  </article>
</template>
