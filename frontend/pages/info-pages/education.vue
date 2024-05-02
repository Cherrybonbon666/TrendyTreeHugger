<template>
    <div class="background">

        <div class="head">
            <h1>Learning Hub</h1>
            <label><a id="get" href="#">Get Article</a></label>
        </div>

        <div class="section">

            <div class="info-con">
                <br>
                <br>
                <p id="topic">
                    Submit your article<br>
                    and join our network!
                </p>
                <br>
                <br>
                <p>"Hey there, eco-warriors! Ready to make a difference? Join our vibrant community of<br> authors and
                    share
                    your eco-savvy knowledge and experiences with our awesome<br> readers. Plus, seize the chance to
                    become
                    a key player in our dynamic and eco-chic team!<br> Let's collaborate and make sustainable fashion
                    the
                    new trend!"
                </p>
                <br>
                <br>
                <a id="submit" href="#"><i class="fa-solid fa-arrow-right"></i> Submit Article
                </a>
            </div>

            <div class="img-con">
                <img src="/public/image/1.png">
                <img id="middle-img" src="/public/image/2.png">
                <img src="/public/image/3.png">
            </div>
        </div>

    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | ทรัพยากรทางการศึกษา",
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
    padding: 100px 60px;
}

.head {
    display: flex;
    justify-content: space-between;
}

.section {
    display: flex;
    justify-content: space-between;
}

h1 {
    font-size: 3rem;
}

#topic {
    font-size: 3rem;
}

.img-con {
    width: 50%;
    display: flex;
    justify-content: space-between;
}

#middle-img {
    margin-bottom: -60px;
    margin-top: 60px;
}

#submit {
    text-decoration: none;
    color: #333;
    background-color: #fff;
    padding: 10px 20px;
    border-left: 4px solid #333;
}

#get {
    text-decoration: none;
    color: #333;
    background-color: #FBF3EB;
    padding: 10px 20px;
}
</style>