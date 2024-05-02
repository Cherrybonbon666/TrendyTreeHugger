<template>
    <div>
        <h1>Favorite Products</h1>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div v-if="favoriteProducts.length === 0">
                No favorite products found for this user.
            </div>
            <div v-else>
                <div v-for="product in favoriteProducts" :key="product.id">
                    <div class="product-item">
                        <img :src="product.pic" alt="Product Image" class="product-image">
                        <div class="product-details">
                            <h2>{{ product.name }}</h2>
                            <p>Price: {{ product.price }}</p>
                        </div>
                        <div class="product-actions">
                            <button @click="removeFromFavorites(product.id)">Remove from Favorites</button>
                            <button @click="addToCart(product)">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            favoriteProducts: [],
            isLoading: false,
            userId: 1, // Hardcoded user ID for demo purposes
        };
    },
    mounted() {
        this.loadFavoriteProducts();
    },
    methods: {
        loadFavoriteProducts() {
            this.isLoading = true;
            fetch(`http://localhost:4000/api/fav/${this.userId}`)
                .then(response => response.json())
                .then(data => {
                    this.favoriteProducts = data;
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error('Error fetching favorite products:', error);
                    this.isLoading = false;
                });
        },
        removeFromFavorites(favoriteId) {
            if (!confirm('Are you sure you want to remove this product from favorites?')) {
                return;
            }
            fetch(`http://localhost:4000/api/fav/${this.userId}/remove/${favoriteId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (response.ok) {
                        alert('Product removed from favorites successfully!');
                        this.loadFavoriteProducts();
                    } else {
                        console.error('Failed to remove product from favorites:', response.statusText);
                    }
                })
                .catch(error => {
                    console.error('Error removing product from favorites:', error);
                });
        },
        addToCart(product) {
            fetch(`http://localhost:4000/api/cart/${this.userId}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product.product_id, // Using product.product_id as productId
                    quantity: 1, // Assuming quantity is 1 when adding to cart
                }),
            })
                .then(response => {
                    if (response.ok) {
                        alert('Product added to cart successfully!');
                        // Optionally, you can navigate to the cart page or update cart state
                    } else {
                        console.error('Failed to add product to cart:', response.statusText);
                    }
                })
                .catch(error => {
                    console.error('Error adding product to cart:', error);
                });
        },

    },
};
</script>

<style scoped>
.product-item {
    display: flex;
    margin-bottom: 20px;
}

.product-image {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.product-details {
    flex: 1;
}

.product-actions button {
    margin-right: 10px;
}
</style>
