

<template>
<div>
      <div class="header-container">
        <header class="the-header">
          <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
          <div class="logo">
            <nuxt-link to="/">Vanniks - Appstore</nuxt-link>
          </div>
          <div class="spacer"></div>
          <div class="navigation-items">
            <ul class="nav-list">
              <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
            </ul>
          </div>

        </header>

          
      </div>

      <div class="navigation-items lowlist">
      <ul class="nav-list">
        <li class="nav-item"><a href="/category/games">games</a></li>
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
      </ul>
    </div>
    </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.lowlist {
  overflow: auto;
  color: black;
  background: #009688;
}
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
