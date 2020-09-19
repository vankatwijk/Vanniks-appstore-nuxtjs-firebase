import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token:null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id)

        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state,token){
        state.token = token
      }
    },
    actions: {
      nuxtServerInit(vuexContext, centext) {
        return axios.get(process.env.baseURL + '/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({
                ...res.data[key],
                id: key
              })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => CanvasRenderingContext2D.error(e));
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }

        return axios.post(process.env.baseURL + '/posts.json?auth='+vuexContext.state.token, createdPost)
          .then(res => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: res.data.name
            })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios.put(process.env.baseURL + '/posts/' +
            editedPost.id +
            '.json?auth='+vuexContext.state.token, editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData) {
        let authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          process.env.fbAPIKey

        if (authData.isLogin) {
          authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
            process.env.fbAPIKey
        }

        return axios.post(authURL, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }).then(result => {
          if(result.status === 200){
            vuexContext.commit('setToken' , result.data.idToken)
          }
        }).catch(e => console.log(e));

      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
