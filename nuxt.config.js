const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/pg-nuxt/'
    }
} : {}

export default {
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    watchers: {
        webpack: {
            poll: true
        }
    },
    ...routerBase,
    head: {
        title: 'Nuxt.js Test Site',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'nuxtjs test site'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
    },
    target: 'static'
}
