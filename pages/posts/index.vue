<template>
  <div class="posts-page">
    <section class="post-list">
      <PostList
      :posts="loadedApps" />
    </section>
  </div>
</template>

<script>
export default {
  computed:{
    loadedApps(){
      return this.$store.getters.loadedApps
    }
  },
  created() {
    this.$store.dispatch('setPosts',this.loadedApps)
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
