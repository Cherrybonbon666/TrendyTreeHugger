<template>
    <div class="container">
        <h1>FAQ</h1>
        <br>
        <h3>When will I get my order?</h3>
        <br>
        <p>Order with standard delivery should still arrive within 1-5 business days except you're in
            the Boondocks area.Your order will arrive within 7-14 days.
        </p>
        <br>
        <h3>What payment methods are accepted?</h3>
        <br>
        <p>We accept payment by ATM,Mastercard,PromptPay and Paypal</p>
        <br>
        <h3>Can I cancel my order?</h3>
        <br>
        <p>when you submit and order through the checkout page.The process will begin and cannot canceled</p>
        <br>
        <br>
        <a href="#">Learn More</a>

        <div class="contact">
            <h1>Contact Us</h1>
            <br>
            <p><b>Opening Hours</b></p>
            <br>
            <p>9:00am - 7:00pm</p>
            <br>
            <p><b>By Email</b></p>
            <br>
            <p>TrendyTreehugger@lalala.ac.th</p>
            <br>
            <p><b>By Phone</b></p>
            <br>
            <p>+99 8456 5645 xxx</p>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | ศูนย์บริการลูกค้า",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.container {
    padding: 40px 30%;
    background-color: #fff9ed;

    & a {
        text-decoration: none;
        border: 1px solid;
        border-radius: 3px;
        padding: 5px;
        color: #333;
    }
}

.contact {
    padding: 40px 0;

    & p {
        text-align: center;
    }
}
</style>