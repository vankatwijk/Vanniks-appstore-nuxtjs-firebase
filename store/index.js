import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedApps: [],
            token: null
        },
        mutations: {
            setApps(state, posts) {
                state.loadedApps = posts
            },
            addApp(state, post) {
                state.loadedApps.push(post)
            },
            editApp(state, editedPost) {
                const postIndex = state.loadedApps.findIndex(post => post.id)

                state.loadedApps[postIndex] = editedPost
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, centext) {
                return axios.get(process.env.baseURL + '/apps.json')
                    .then(res => {
                        const appsArray = []
                        for (const key in res.data) {
                            appsArray.push({
                                ...res.data[key],
                                id: key
                            })
                        }
                        vuexContext.commit('setApps', appsArray)
                    })
                    .catch(e => CanvasRenderingContext2D.error(e));
            },
            addApp(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                }

                return axios.post(process.env.baseURL + '/posts.json?auth=' + vuexContext.state.token, createdPost)
                    .then(res => {
                        vuexContext.commit('addApp', {
                            ...createdPost,
                            id: res.data.name
                        })
                    })
                    .catch(e => console.log(e))
            },
            editApp(vuexContext, editedPost) {
                return axios.put(process.env.baseURL + '/posts/' +
                        editedPost.id +
                        '.json?auth=' + vuexContext.state.token, editedPost)
                    .then(res => {
                        vuexContext.commit('editApp', editedPost)
                    })
                    .catch(e => console.log(e));
            },
            setApps(vuexContext, posts) {
                vuexContext.commit('setApps', posts)
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
                    if (result.status === 200) {
                        vuexContext.commit('setToken', result.data.idToken);
                        localStorage.setItem('token', result.data.idToken);
                        localStorage.setItem('tokenExpiration', new Date().getTime() + +result.data.expiresIn * 1000);

                        Cookie.set('jwt', result.data.idToken);
                        Cookie.set('expirationDate', new Date().getTime() + +result.data.expiresIn * 1000)
                    }
                }).catch(e => console.log(e));

            },
            initAuth(vuexContext, req) {

                let token;
                let expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
                    if (!jwtCookie) {
                        return;
                    }
                    token = jwtCookie.split('=')[1];
                    expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1];
                } else {
                    token = localStorage.getItem("token");
                    expirationDate = localStorage.getItem("tokenExpiration");
                }
                if (new Date().getTime() > +expirationDate || !token) {
                    console.log('No token or invalid token')
                    vuexContext.dispatch('logout')
                    return;
                }
                vuexContext.commit("setToken", token)
            },
            logout(vuexContext) {
                vuexContext.commit("clearToken")
                Cookie.remove('jwt');
                Cookie.remove('expirationDate');

                if (process.client) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('tokenExpiration')
                }

            }
        },
        getters: {
            loadedApps(state) {
                return state.loadedApps
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore