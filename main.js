const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks')
        const description = ref('This is description.')
        const image = ref('./assets/images/socks_green.jpg')
        const CAMT = ref('https://www.camt.cmu.ac.th/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onsale = ref(true)
        const details = ref(['50% cotton', '30% wool', '20% polyester'])
        const variants = ref([ 
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
        ])
        const sizes = ref(['S ', 'M ', 'L '])
        const cart = ref(0)

        function addToCart() {
            cart.value += 1
        }

        function updateImage(variantsImage) {
            image.value = variantsImage
        }

        function buyNow() {
            inStock.value = false
            inventory.value = 0
        }
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
            sizes,
            cart,
            addToCart,
            updateImage,
            buyNow
        }
    }

}).mount('#app')