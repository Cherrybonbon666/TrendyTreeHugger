<template>
    <div class="cart">
        <h1>Your Cart</h1>
        <div v-if="cartItems.length === 0">Your cart is empty</div>
        <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <img :src="item.pic" alt="Product Image">
                <div>
                    <h4>{{ item.name }}</h4>
                    <p>Price: ${{ item.price }}</p>
                    <p>Quantity: {{ item.quantity }}</p>
                    <button @click="updateQuantity(item.id, item.quantity - 1)"
                        :disabled="item.quantity <= 1">-</button>
                    <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
                    <button @click="removeFromCart(item.id)">Remove</button>
                </div>
            </div>
            <button @click="checkout">Checkout</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            cartItems: [],
            userId: '1', // You may replace this with the actual user ID
        };
    },
    created() {
        this.fetchCartItems();
    },
    methods: {
        async fetchCartItems() {
            try {
                const response = await axios.get(`http://localhost:4000/api/cart/${this.userId}`);
                this.cartItems = response.data;
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        },
        async updateQuantity(cartId, quantity) {
            try {
                await axios.put(`http://localhost:4000/api/cart/${this.userId}/update/${cartId}`, { quantity });
                this.fetchCartItems(); // Refresh cart items after updating quantity
            } catch (error) {
                console.error('Error updating quantity:', error);
            }
        },
        async removeFromCart(cartId) {
            try {
                await axios.delete(`http://localhost:4000/api/cart/${this.userId}/remove/${cartId}`);
                this.fetchCartItems(); // Refresh cart items after removing product
            } catch (error) {
                console.error('Error removing from cart:', error);
            }
        },
        checkout() {
            // Implement checkout logic
            console.log('Checkout');
        },
    },
};
</script>

<style scoped>
.cart-item {
    display: flex;
    margin-bottom: 20px;
}

.cart-item img {
    width: 150px;
    /* Adjust the width as needed */
    height: auto;
    /* Maintain aspect ratio */
    margin-right: 20px;
}
</style>
