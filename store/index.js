import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, centext){
        return axios.get('https://nuxt-blog-9ce7f.firebaseio.com/posts.json')
        .then(res => {
          const postsArray = []
          for(const key in res.data){
            postsArray.push({...res.data[key],id:key})
          }
          vuexContext.commit('setPosts', postsArray)
        })
        .catch(e => CanvasRenderingContext2D.error(e));
      },
      setPosts(vuexContext,posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}

export default createStore
