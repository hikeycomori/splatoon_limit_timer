// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: "stylesheet", href: "https://unpkg.com/modern-css-reset/dist/reset.min.css" },
                {
                    rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
                },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
            ]
        }
    }
})