import Vuex from 'vuex'

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

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                  id:'1',
                  title:'first Post',
                  previewText:'this is our first post',
                  thumbnail:'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
                },
                {
                  id:'2',
                  title:'second Post',
                  previewText:'this is our second post',
                  thumbnail:'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
                },
                {
                  id:'3',
                  title:'third Post',
                  previewText:'this is our third post',
                  thumbnail:'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
                }
              ])
              resolve();
          }, 1000);
        })
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
