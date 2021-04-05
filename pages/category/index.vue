<template>
  <div class="posts-page">
    <section class="post-list">
    in category
    </section>
  </div>
</template>

<script>
export default {
  computed:{
  },
  created() {
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
