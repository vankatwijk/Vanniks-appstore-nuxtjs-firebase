<template>
  <div class="single-app-page">
    <section>
      <h1 class="app-title"></h1>

      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4" 
            v-for="(app, key) in loadedApps" 
            :key="key"
          >

          <NuxtLink :to="'/category/'+ category +'/'+app.reference">

          <v-card class="ma-5" max-width="300" outlined :go="'/category/'+ category +'/'+app.reference">
            <v-list-item three-line>

              <v-list-item-avatar tile size="80" color="yellow">
                <img :src="app.img"
                  height="50px" />
              </v-list-item-avatar>

              <v-list-item-content>
                <div class="overline mb-4">
                  {{category}}
                </div>
                <v-list-item-title class="headline mb-1">
                  {{ app.title}}
                </v-list-item-title>
                <v-list-item-subtitle>{{app.description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>
                View
              </v-btn>
            </v-card-actions>
          </v-card>



          </NuxtLink>
          </v-col>
        </v-row>
      </v-container>

    </section>
    <section class="app-feedback">
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
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
.single-app-page {
  padding: 30px;
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
  justify-content: left;
  align-items: left;
  font-size: 16;
}

.app-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  font-size: 12;
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
