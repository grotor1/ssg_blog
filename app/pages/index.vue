<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
    <div v-if="posts?.length" class="grid gap-6">
      <BlogCard
        v-for="post in posts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :tags="post.tags"
        :to="post.path.replace('/blog/', '/blog/')"
      />
    </div>
    <p v-else class="text-gray-500">No posts yet.</p>
  </div>
</template>
