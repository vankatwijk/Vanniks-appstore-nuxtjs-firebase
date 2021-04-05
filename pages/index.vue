<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>


        <li class="nav-item"><a href="category/business">games</a></li>
        <li class="nav-item"><a href="category/business">tools</a></li>
        <li class="nav-item"><a href="category/business">social</a></li>
        <li class="nav-item"><a href="category/business">news</a></li>
        <li class="nav-item"><a href="category/business">shopping</a></li>
        <li class="nav-item"><a href="category/business">food</a></li>
        <li class="nav-item"><a href="category/business">lifestyle</a></li>
        <li class="nav-item"><a href="category/business">business</a></li>
        <li class="nav-item"><a href="category/business">music</a></li>
        <li class="nav-item"><a href="category/business">sports</a></li>
        <li class="nav-item"><a href="category/business">education</a></li>
        <li class="nav-item"><a href="category/business">travel</a></li>
        <li class="nav-item"><a href="category/business">entertainment</a></li>
        <li class="nav-item"><a href="category/business">reference</a></li>

      <!--PostList
      :posts="loadedPosts" /-->
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts
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
