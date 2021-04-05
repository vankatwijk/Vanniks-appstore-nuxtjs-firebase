const bodyParser = require('body-parser')

module.exports = {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: 'HPVK' || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans' }
        ]
    },

    /*
     ** custom progress bar color
     */
    loading: { color: '#fa923f', height: '4px', duration: 5000 },


    /*
     ** Global CSS
     */
    css: [
        '~/assets/styles/main.css'
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        '~/plugins/core-components.js',
        '~/plugins/date-filter.js'
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',

        // With options
        ['@nuxtjs/vuetify', { /* module options */ }]
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        extractCSS: true,
        babel: {
            presets: ({ isServer }) => [
                [
                    '@nuxt/babel-preset-app',
                    {
                        targets: isServer ? { node: '8.11.1' } : { browsers: ['defaults'] },
                    }
                ]
            ]
        }
    },
    env: {
        baseURL: 'https://vanniks-9c9d8-default-rtdb.europe-west1.firebasedatabase.app',
        fbAPIKey: 'AIzaSyBsW-DppuHYEIrIPhsl3IooFro_ui5IsVM'
    },
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    router: {
        middleware: 'log'
    }
    // serverMiddleware: [
    //   bodyParser.json(),
    //   '~/api'
    // ]
    // if your app is in a sub directory
    // rootDir: '/sub-folder/',
    // router:{
    //   base: '/sub-folder/',
    //   middleware: 'log'
    // }
}