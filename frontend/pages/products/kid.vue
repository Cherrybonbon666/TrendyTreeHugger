<template>
    <div class="background">
        <div class="head-con"></div>
        <div class="container">
            <div v-for="product in products" :key="product.id">
                <img :src="product.pic" alt="Product Image">
                <h4 class="title">{{ product.name }}</h4>
                <h4 class="price">${{ product.price }}</h4>
                <button type="button" @click="addToCart(product)">Add to cart</button>
                <button type="button" @click="addToFavorites(product)">Add to favorites</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const products = ref([]);
        const favorites = ref([]); // Add a new ref for favorites
        const userId = 1; // Set the user ID to 1

        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/kid');
                products.value = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        });

        const addToCart = async (product) => {
            try {
                await axios.post(`http://localhost:4000/api/cart/${userId}/add`, {
                    productId: product.id,
                    quantity: 1 // Assuming quantity is 1 when adding to cart
                });
                console.log('Product added to cart:', product);
            } catch (error) {
                console.error('Error adding product to cart:', error);
            }
        };

        const addToFavorites = async (product) => {
            try {
                await axios.post(`http://localhost:4000/api/fav/${userId}/add`, {
                    productId: product.id
                });
                // Update favorites list
                favorites.value.push(product);
                console.log('Adding product to favorites:', product);
            } catch (error) {
                console.error('Error adding product to favorites:', error);
            }
        };

        return { products, addToCart, addToFavorites, favorites };
    }
};
</script>


<style scoped>
.background {
    background-color: #FFF9ED;
}

.head-con {
    text-align: center;
    padding: 2rem;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* Adjust the spacing between items */
    margin: 0px 20px;
}

.container div {
    width: calc(33.33% - 20px);
    /* Set the width to one-third of the container width minus some margin */
    margin-bottom: 20px;
    /* Add some margin between items */
    background: #FFF9ED;
    box-sizing: border-box;
    /* Include padding and border in the width */
    padding: 10px;
    /* Add some padding to the items */
}

.container div img {
    width: 100%;
    /* Make the images fill the entire width of the container */
    height: auto;
    /* Maintain the aspect ratio */
}

.title {
    color: #333;
    margin-top: 10px;
    /* Adjust the spacing */
}

.price {
    color: #333;
}

.container div:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

a {
    text-decoration: none;
}
</style>