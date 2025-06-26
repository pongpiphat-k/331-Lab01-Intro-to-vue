const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks')
        const description = ref('A pair of warm, fuzzy socks.')
        const image = ref('./assets/images/socks_green.jpg')
        const CAMT = ref('https://www.camt.cmu.ac.th/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onsale = ref(true)
        const details = ref(['50% cotton', '30% wool', '20% polyester'])
        const variants = ref([ 
            { id: 2234, color: 'green'},
            { id: 2235, color: 'blue'},
        ])
        const sizes = ref(['S ', 'M ', 'L '])
        return {
            product,
            description,
            image,
            CAMT,
            inStock,
            inventory,
            onsale,
            details,
            variants,
            sizes
        }
    }

}).mount('#app')