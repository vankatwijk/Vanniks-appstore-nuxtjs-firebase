<template>
  <div class="single-app-page">
    <v-container>
        <section>

    <!-- <div class="slider-container">
        <div class="scrollmenu">
            <slot name="content"></slot>
        </div>
    </div> -->

      <v-slide-group
        class="pa-4 pr-0 pl-0"
        active-class="success"
        show-arrows
      >
                              
          <v-slide-item
          cols="12" 
          sm="12" 
          md="6" 
          lg="4" 
          v-for="screenshot in loadedApp.screenshots"
          :key="screenshot"
          class="slider-item pa-5">

            <span>
              <img height="200px" :src='screenshot'>
            </span>

          </v-slide-item>
      </v-slide-group>


      <h1 class="app-title">{{ loadedApp.title}}</h1>
      <div class="app-details" >
          <a :href="loadedApp.url"><div>Go To App</div></a>
          <div class="app-detail">{{ loadedApp.title}}</div>
          <div class="app-detail">{{loadedApp.description}}</div>
          <div class="app-detail">{{loadedApp.keywords}}</div>
              <iframe height="200px" :src='loadedApp.report'></iframe>
      </div>
    </section>
    <section class="app-feedback">
      <p>Do you need an App or custom CRM / CMS build, contact us <a href="mailto:hendrikus@vanniks.com">info@vanniks.com</a></p>
    </section>
    </v-container>

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
.single-app-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.app {
  width: 100%;
}

@media (min-width: 768px) {
  .app {
    width: 600px;
    margin: auto;
  }
}

.app-title {
  margin: 0;
}

.app-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .app-details {
    flex-direction: row;
  }
}

.app-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.app-feedback a {
  color: red;
  text-decoration: none;
}

.app-feedback a:hover,
.app-feedback a:active {
  color: salmon;
}
</style>
