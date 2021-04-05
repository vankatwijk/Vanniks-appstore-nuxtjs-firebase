<template>
  <div class="single-post-page">
    <section>
      <h1 class="post-title"></h1>

      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4" 
            v-for="(app, key) in loadedApps" 
            :key="key"
          >

          <a :href="'/category/'+ category +'/'+app.reference">
          <v-row class="app-card">
            <v-col cols="4">
              <img :src="app.img" height="50px"/>
            </v-col>
            <v-col cols="8">
              <div class="post-title">{{ app.title}}</div>
              <div class="post-detail">{{app.description}}</div>
            </v-col>
          </v-row>
          </a>

          </v-col>
        </v-row>
      </v-container>

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
    return axios.get(process.env.baseURL + '/apps/' + context.params.category + '.json')
    .then(res => {
      return {
        loadedApps : res.data,
        category : context.params.category
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
  justify-content: left;
  align-items: left;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: left;
  align-items: left;
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
.app-card{
  border:1px solid black
}
</style>
