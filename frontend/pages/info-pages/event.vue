<template>
    <div class="background">
        <div class="head">
            <h1>Events</h1>
            <br>
            <a href="#"><b>Join Us!</b></a>
        </div>


        <div class="row">

            <div class="container">
                <img src="/public/image/card1.png">
                <div class="info">
                    <div class="text">
                        <h3>Helsinki Fashion Week 2024</h3>

                        <p>
                            12 may-18 may 2024 at helsinki
                        </p>
                    </div>
                    <a href="#"><i class="fa-solid fa-ticket"></i></a>
                </div>
            </div>

            <div class="container">
                <img src="/public/image/card2.png">
                <div class="info">
                    <div class="text">
                        <h3>Trash to Treasure</h3>
                        <p>
                            In this fun and creative sewing workshop in Fairfield
                        </p>
                    </div>
                    <a href="#"><i class="fa-solid fa-ticket"></i></a>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="container">
                <img src="/public/image/card4.png">
                <div class="info">
                    <div class="text">
                        <h3>Helsinki Fashion Week 2024</h3>
                        <p>
                            12 may-18 may 2024 at helsinki
                        </p>
                    </div>
                    <a href="#"><i class="fa-solid fa-ticket"></i></a>
                </div>
            </div>

            <div class="container">
                <img src="/public/image/card3.png">
                <div class="info">
                    <div class="text">
                        <h3>Trash to Treasure</h3>
                        <p>
                            In this fun and creative sewing workshop in Fairfield
                        </p>
                    </div>
                    <a href="#"><i class="fa-solid fa-ticket"></i></a>
                </div>
            </div>

        </div>

    </div>

</template>

<script setup>
useHead({
    title: "TrendyTreehugger | การเข้าร่วมอีเวนท์",
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

.background {
    background-color: #fff9ed;
    padding: 40px 120px;
}

.row {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
}

.info {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    & a {
        font-size: 1.5rem;
    }
}

a {
    text-decoration: none;
    color: #333;
}
</style>