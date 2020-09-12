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
      },
      addPost(state, post){
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id)

        state.loadedPosts[postIndex] = editedPost
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
      addPost(vuexContext,post) {
        const createdPost = {...post, updatedDate: new Date()}

        return axios.post('https://nuxt-blog-9ce7f.firebaseio.com/posts.json',createdPost)
        .then(res => {
          vuexContext.commit('addPost',{...createdPost,id: res.data.name})
        })
        .catch(e => console.log(e))
      },
      editPost(vuexContext,editedPosts) {

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
