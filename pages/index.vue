<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the Best PWAs currently out</h1>
    </section>


        <li class="nav-item"><a href="/category/business">games</a></li>
        <li class="nav-item"><a href="/category/tools">tools</a></li>
        <li class="nav-item"><a href="/category/social">social</a></li>
        <li class="nav-item"><a href="/category/news">news</a></li>
        <li class="nav-item"><a href="/category/shopping">shopping</a></li>
        <li class="nav-item"><a href="/category/food">food</a></li>
        <li class="nav-item"><a href="/category/lifestyle">lifestyle</a></li>
        <li class="nav-item"><a href="/category/business">business</a></li>
        <li class="nav-item"><a href="/category/music">music</a></li>
        <li class="nav-item"><a href="/category/sports">sports</a></li>
        <li class="nav-item"><a href="/category/education">education</a></li>
        <li class="nav-item"><a href="/category/travel">travel</a></li>
        <li class="nav-item"><a href="/category/entertainment">entertainment</a></li>
        <li class="nav-item"><a href="/category/reference">reference</a></li>

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
