<template>
  <div class="single-post-page">
    <section>
      <h1 class="post-title"></h1>
      <div class="post-details" >
          <div class="post-detail">{{ loadedApp.title}}</div>
          <div class="post-detail">{{loadedApp.description}}</div>
      </div>
    </section>
    <section class="post-feedback">
      <p>Do you need an App or custom CRM / CMS build, contact us <a href="mailto:hendrikus@vanniks.com">info@vanniks.com</a></p>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  asyncData(context) {
    return axios.get(process.env.baseURL + '/apps/' +context.params.category+'/'+ context.params.appname + '.json')
    .then(res => {
      return {
        loadedApp : res.data
      }
    })
    .catch(e => CanvasRenderingContext2D.error(e));
  }

}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
