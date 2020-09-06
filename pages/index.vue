<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>

      <PostList
      posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components:{
    PostList
  },
  data() {
    return {
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
    }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
