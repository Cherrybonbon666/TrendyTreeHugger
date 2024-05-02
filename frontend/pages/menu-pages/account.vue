<template>
    <div class="background">

        <div class="left-bar">

            <div class="top-con">
                <img id="profile" src="/public/image/Frame.png">
                <p>Username</p>
            </div>

            <div class="bottom-con">
                <a href="#">Account Details</a>
                <br>
                <a href="#">Order History</a>
                <br>
                <a href="#">ooo wee ooo wee</a>
                <br>
                <a href="#">im on the next</a>
                <br>
                <a href="#">LEVEL</a>
                <br>
                <a href="#">Next level</a>
                <br>
                <a href="#">OOOLLLLL</a>
                <br>
                <a href="#">LPPOLO</a>
            </div>

        </div>

        <div class="main-bar">
            <h1>Account Details</h1>
        </div>



    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | จัดการบัญชี",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background {
    background-color: #fff9ed;
    display: flex;
}

.left-bar {
    width: 25%;
    border-right: 1px solid #544238;
    text-align: center;
    padding: 40px;
}

.top-con {
    border-bottom: #544238 1px solid;

    & p {
        margin: 40px;
        font-size: 1rem;
    }
}

#profile {
    margin-right: 25px;
}

.bottom-con {
    padding: 40px;
}

.bottom-con a {

    text-decoration: none;
    color: #333;
    line-height: 3rem;
    font-size: 1rem;
}



.main-bar {
    width: 75%;
    text-align: center;
    padding: 60px;
}
</style>