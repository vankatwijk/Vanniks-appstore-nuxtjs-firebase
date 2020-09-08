<template>
  <div class="posts-page">
    <section class="post-list">
      <PostList
      :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components:{
    PostList
  },
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  },
  created() {
    this.$store.dispatch('setPosts',this.loadedPosts)
  }
}
</script>

<style scoped>
.posts-page{
  display:flex;
  justify-content:center;
  align-items:center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
