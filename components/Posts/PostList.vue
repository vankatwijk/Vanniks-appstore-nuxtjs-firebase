<template>
    <section class="post-list">
      <PostPreview
      id="1"
      thumbnail="http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg"
      title="Hello there"
      previewText="This is my first post!"
      />
      <PostPreview
      id="2"
      thumbnail="http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg"
      title="Hello there second"
      previewText="This is my second post!"
      />
      <PostPreview
      id="3"
      thumbnail="http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg"
      title="Hello there third"
      previewText="This is my third post!"
      />

    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components:{
    PostPreview
  }
}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>