const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks')
        const description = ref('A pair of warm, fuzzy socks.')
        const image = ref('./assets/images/socks_green.jpg')
        const CAMT = ref('https://www.camt.cmu.ac.th/')
        return {
            product,
            description,
            image,
            CAMT
        }
    }

}).mount('#app')