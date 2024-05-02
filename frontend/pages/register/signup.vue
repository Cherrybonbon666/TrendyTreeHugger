<template>
    <div class="background">
        <div class="container">
            <h1>Create an account</h1>
            <br>
            <p>Enter your email to Sign up</p>
            <input type="text" v-model="email" class="tab" placeholder="Enter your email">
            <br>
            <input type="password" v-model="password" class="tab" placeholder="Enter your password">
            <br>
            <div id="checkbox">
                <input type="checkbox" id="agree" name="agree" v-model="agree" required>
                <label for="agree">
                    I agree to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
            </div>

            <button :disabled="!agree" @click="signup" class="tab">Sign up</button>
            <div class="login">
                <p>Already have an account? <a href="/register/login">Login</a></p>
            </div>

            <p v-if="successMessage" v-html="successMessage"></p>
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
            agree: false,
            successMessage: '',
            errorMessage: '',
        };
    },
    methods: {
        async signup() {
            if (!this.agree) {
                // Add an error message if the user hasn't agreed to the terms
                this.errorMessage = 'Please agree to the Terms of Service and Privacy Policy';
                return;
            }

            try {
                const response = await axios.post('http://localhost:4000/api/signup', {
                    email: this.email,
                    password: this.password,
                });

                this.successMessage = 'Your account has been created successfully. <a href="/register/login">Click here to login</a>';
                this.errorMessage = ''; // Clear any previous error messages
            } catch (error) {
                console.error(error.response.data);
                this.errorMessage = error.response.data.error; // Set error message
                this.successMessage = ''; // Clear any previous success messages
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

/* Add success message styling */
.success-message {
    color: green;
    margin-top: 10px;
}

/* Add error message styling */
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

#checkbox {
    font-size: 1rem;
    margin: 30px 0px;
    margin-left: -400px;

    & a {
        color: #333;
    }
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

.login a {
    color: #333;
}
</style>