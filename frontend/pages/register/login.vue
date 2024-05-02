<template>
    <div class="background">

        <div class="container">
            <h1>Log in to your account</h1>
            <br>
            <p>Enter your email to Log in</p>
            <input type="text" v-model="email" id="email" class="tab" placeholder="enter your email">
            <br>
            <input type="text" v-model="password" id="password" class="tab" placeholder="enter your password">
            <br>
            <button @click="login" class="tab">Log in</button>
            <br>
            <div id="signup" class="tab"><a href="/register/signup">Sign up</a></div>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            successMessage: '',
            errorMessage: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:4000/api/login', {
                    email: this.email,
                    password: this.password,
                });

                // Extract user ID and cart data from the response
                const { userId, cart, message } = response.data;
                this.successMessage = message;

                // Update cartItems with the cart data received from the backend
                this.cartItems = cart;

                // Redirect to the account page if login is successful
                if (this.successMessage) {
                    this.$router.push('/menu-pages/account');
                }
            } catch (error) {
                console.error(error.response.data);
                this.errorMessage = error.response.data.error;
                this.successMessage = '';
            }
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.success-message {
    color: green;
    margin-top: 10px;
}

.error-message {
    color: red;
    margin-top: 10px;
}

.background {
    background-color: #fff9ed;
    padding: 100px 0px;

}

.container {
    padding-top: 40px;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: 1px solid #544238;
    border-radius: 40px;
    background-color: #E8DDCC;
    width: 874px;
    height: 572px;
}

.tab {
    width: 719px;
    height: 56px;
}

#email {
    font-size: 1.2rem;
    padding-left: 20px;
    margin-top: 30px;
    border-radius: 10px;
}

#password {
    font-size: 1.2rem;
    padding-left: 20px;
    margin-top: 30px;
    border-radius: 10px;
}

#login {
    font-size: 1.2rem;
    margin-top: 30px;
    border-radius: 10px;
}

#signup {
    font-size: 1.2rem;
    margin: 30px 77.5px;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid #544238;
    padding-top: 13px;

    & a {
        text-decoration: none;
        color: #333;

    }

}
</style>