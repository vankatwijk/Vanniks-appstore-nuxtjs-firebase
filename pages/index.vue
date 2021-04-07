<template>
  <div class="home-page">
    <v-container>

      <section class="intro">
        <h1>Get the Best PWAs currently out</h1>
      </section>

      <h1>Games</h1>
      <v-slide-group class="pa-4 pr-0 pl-0" active-class="success" show-arrows>

        <v-slide-item cols="12" sm="12" md="6" lg="4" v-for="i of 5" class="slider-item ma-5">

          <v-card class="ma-5" max-width="250" outlined>
            <v-list-item three-line>

              <v-list-item-avatar tile size="80" color="yellow">
                <img src="https://d3frsattnbx5l6.cloudfront.net/1534925770460-aispy-android-chrome-512x512.png"
                  height="50px" />
              </v-list-item-avatar>

              <v-list-item-content>
                <div class="overline mb-4">
                  Games
                </div>
                <v-list-item-title class="headline mb-1">
                  Title {{i}}
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>
                View
              </v-btn>
            </v-card-actions>
          </v-card>


        </v-slide-item>
      </v-slide-group>

      <h1>Music</h1>
      <v-slide-group class="pa-4 pr-0 pl-0" active-class="success" show-arrows>

        <v-slide-item cols="12" sm="12" md="6" lg="4" v-for="i of 5" class="slider-item pa-5">

          <v-card class="ma-5" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  OVERLINE
                </div>
                <v-list-item-title class="headline mb-1">
                  Headline {{i}}
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="yellow">
                <img src="https://d3frsattnbx5l6.cloudfront.net/1534925770460-aispy-android-chrome-512x512.png"
                  height="50px" />
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>
                View
              </v-btn>
            </v-card-actions>
          </v-card>


        </v-slide-item>
      </v-slide-group>

      <h1>Social</h1>
      <v-slide-group class="pa-4 pr-0 pl-0" active-class="success" show-arrows>

        <v-slide-item cols="12" sm="12" md="6" lg="4" v-for="i of 5" class="slider-item pa-5">

          <v-card class="ma-5" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  OVERLINE
                </div>
                <v-list-item-title class="headline mb-1">
                  Headline {{i}}
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="yellow">
                <img src="https://d3frsattnbx5l6.cloudfront.net/1534925770460-aispy-android-chrome-512x512.png"
                  height="50px" />
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>
                View
              </v-btn>
            </v-card-actions>
          </v-card>


        </v-slide-item>
      </v-slide-group>

      <!--PostList
        :posts="loadedApps" /-->
    </v-container>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      loadedApps() {
        return this.$store.getters.loadedApps
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
    color: rgb(255, 255, 255);
    padding: 10px;
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
