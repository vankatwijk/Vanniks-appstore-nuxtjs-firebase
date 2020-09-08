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
  fetch(context) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts:[
            {
              id:'1',
              title:'first Post',
              previewText:'this is our first post',
              thumbnail:'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
            },
            {
              id:'2',
              title:'second Post',
              previewText:'this is our second post',
              thumbnail:'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
            },
            {
              id:'3',
              title:'third Post',
              previewText:'this is our third post',
              thumbnail:'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
            }
          ]
        })
      }, 1000);
    })
    .then(data => {
      context.store.commit('setPosts', data.loadedPosts)
    })
    .catch(e =>{
      context.error(new Error())
    })

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
