<template>
    <div class="background">
        <div class="head-con"></div>
        <div class="container">
            <div v-for="product in products" :key="product.id" class="product-card">
                <div class="sale-badge" v-if="product.onSale">Sale</div>
                <!-- New: Display Sale badge if product is on sale -->
                <img :src="product.pic" alt="Product Image">
                <h4 class="title">{{ product.name }}</h4>
                <h4 class="price">{{ product.price }}</h4> <!-- Display only the sale price -->
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
        const favorites = ref([]);
        const userId = 1; // Set the user ID to 1

        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/sale');
                products.value = response.data.map(product => ({
                    ...product,
                    onSale: true, // Assuming all products fetched from the sale endpoint are on sale
                }));
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
    },
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
    margin: 0px 20px;
}

.product-card {
    position: relative;
    /* Added: Position relative for badge positioning */
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
    background: #FFF9ED;
    box-sizing: border-box;
    padding: 10px;
}

.product-card img {
    width: 100%;
    height: auto;
}

.title {
    color: #333;
    margin-top: 10px;
}

.price {
    color: #333;
}

.old-price {
    text-decoration: line-through;
    margin-right: 10px;
}

.sale-price {
    color: red;
}

.sale-badge {
    position: absolute;
    /* Added: Position absolute for badge positioning */
    top: 10px;
    /* Adjust as needed */
    right: 10px;
    /* Adjust as needed */
    background-color: red;
    /* Adjust background color as needed */
    color: white;
    /* Adjust text color as needed */
    padding: 5px;
    /* Adjust padding as needed */
    border-radius: 5px;
    /* Adjust border radius as needed */
}

.product-card:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
</style>
