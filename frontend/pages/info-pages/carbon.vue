<template>
    <div class="background">
        <div class="hero1">

            <div class="text1">
                <h1>Track Your Footprint</h1>
                <br>
                <h3>Your Carbon Footprint Today:Number</h3>
            </div>

            <img src="/public/image/foot.png">
        </div>

        <div class="hero2">
            <div class="text2">
                <h1>Track product's carbon footprint</h1>
            </div>
            <div class="input-con">

                <div class="input">
                    <h1>Input</h1>
                    <p>Product Name</p>
                </div>
                <div class="input">
                    <h1>Input</h1>
                    <p>Category</p>
                </div>
                <div class="input">
                    <h1>Input</h1>
                    <p>Carbon Footprint</p>
                </div>
                <div class="input">
                    <h1>Input</h1>
                    <p>Description</p>
                </div>

            </div>
            <a id="submit" href="#">Submit</a>

        </div>

        <div class="hero3">
            <div class="text3">
                <h1>Carbon Footprint History</h1>

                <div class="column-top">
                    <p>Product</p>
                    <p id="carbon">Carbon Footprint</p>
                    <p>Date</p>
                </div>

                <div class="his-con">
                    <div class="name">
                        <p>Name</p>
                        <p>description</p>
                    </div>
                    <p>Kg.</p>
                    <p>DD/MM/YYYY</p>
                    <label><a href="#"><i class="fa-solid fa-trash"></i></a></label>
                </div>

                <div class="his-con">
                    <div class="name">
                        <p>Name</p>
                        <p>description</p>
                    </div>
                    <p>Kg.</p>
                    <p>DD/MM/YYYY</p>
                    <label><a href="#"><i class="fa-solid fa-trash"></i></a></label>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | คาร์บอน ฟูทปริ้น เเทรกกิ้ง",
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

.hero1 {
    display: flex;
    padding: 120px 176px;
    justify-content: space-between;
    background-color: #E4E8CC;

    & img {
        width: 512px;
        height: 512px;
    }
}

.text1 {
    margin-top: 100px;
    font-size: 2rem;
}

.hero2 {
    height: 567px;
    background-color: #FFF6CF;
    text-align: center;
    padding-top: 100px;

}

.text2 {
    text-align: center;
    padding: 40px;
}

.input-con {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
}

.input {
    text-align: center;
    margin: 0 50px;
}

#submit {
    color: #333;
    background-color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 20px;
    border: #333 2px solid;

}

.hero3 {
    height: 567px;
    background-color: #fff9ed;
    padding: 0 60px;
}

.text3 {
    padding: 40px;
}

.column-top {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    width: 62%;
    padding-left: 20px;
    padding-right: 10px;
}

.his-con {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    border: 2px solid #333;
    margin: 20px 0;

    & a {
        color: #333;
        margin-right: 60px;
        border: 1px solid #333;
        padding: 5px;
        border-radius: 5px;
    }
}

.name {
    justify-content: left;
}

#carbon {
    margin-left: 110px;
}
</style>