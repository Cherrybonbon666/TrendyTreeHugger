<template>
    <div class="background">
        <div class="hero-con">
            <img class="hero"
                src="https://media.glamour.com/photos/6463c21bdbe04fdff89f85a6/master/w_1920,c_limit/1414681431">
            <div class="hero-text">
                <p>Spring 2024<br></p>
            </div>
        </div>

        <div class="category-con">
            <div class="cards-con">
                <NuxtLink to="/products/men"><img class="cards"
                        src="https://i.pinimg.com/564x/a8/34/04/a83404b7a240ffee0753d4e872c4bcf5.jpg"></NuxtLink>
                <NuxtLink to="/products/men">
                    <div class="text">Men</div>
                </NuxtLink>
            </div>

            <div class="cards-con">
                <NuxtLink to="/products/women"><img class="cards"
                        src="https://i.pinimg.com/564x/86/e4/a7/86e4a7ff5f161de954c2caae44641c15.jpg"></NuxtLink>
                <NuxtLink to="/products/women">
                    <div class="text">Women</div>
                </NuxtLink>
            </div>

            <div class="cards-con">
                <NuxtLink to="/products/kid"><img class="cards"
                        src="https://i.pinimg.com/564x/52/6f/bd/526fbdc49a7b568fb42377612e3557b3.jpg"></NuxtLink>
                <NuxtLink to="/products/kid">
                    <div class="text">Kid</div>
                </NuxtLink>

            </div>

        </div>

        <div class="hero-con">
            <NuxtLink to="/info-pages/carbon">
                <img class="hero"
                    src="https://apparelmagic.com/wp-content/uploads/Fashion-ERP-sustainable-materials-2048x1366.jpg">
                <div class="hero-text">
                    <p>Carbon Footprint Tracking

                    </p>
                </div>
            </NuxtLink>

        </div>

        <!-- <div class="topic-content">New Arrivals</div>

        <div class="container">
            <div v-for="product in data.products">
                <img class="product-img" :src=product.thumbnail>
                <NuxtLink :to="`/products/${product.id}`">
                    <h4 class="title">{{ product.title }}</h4>
                    <h4 class="price">${{ product.price }}</h4>
                </NuxtLink>
            </div>
        </div> -->

        <div class="community-con">
            <img class="community-img"
                src="https://www.fairchangeimpact.com/wp-content/uploads/2020/01/SDGs-Rubbish-Cleaners-in-Park_FairChange-Blog-2048x1367.jpg">
            <div class="community-info">
                <h1>Our Community</h1>
                <br>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, error labore similique
                    impedit
                    iste eum quo, ullam voluptate, ab saepe magni. Vel quam optio, neque eligendi officiis in nostrum
                    aspernatur dolorem doloribus nihil, eveniet pariatur culpa illo inventore? Sequi perspiciatis natus
                    doloremque similique illo labore quis sit non eius dicta.
                </p>
                <br>
                <NuxtLink to="/info-pages/community">Join Us</NuxtLink>
            </div>
        </div>

        <div class="content-con">
            <div class="a-content-con">
                <img class="content-img" src="https://i.pinimg.com/564x/91/38/55/913855f67faa51eacc4fd55c29a10ce8.jpg">
                <div class="content-info">
                    <h3>Education Resources</h3>
                    <br>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, error labore similique
                        impedit
                        iste eum quo, ullam voluptate, ab saepe magni. Vel quam optio, neque eligendi officiis in
                        nostrum
                        aspernatur dolorem doloribus nihil, eveniet pariatur culpa illo inventore? Sequi perspiciatis
                        natus
                        doloremque similique illo labore quis sit non eius dicta.
                    </p>
                    <br>
                    <NuxtLink to="/info-pages/education" class="explore">Explore</NuxtLink>
                </div>
            </div>
            <div class="a-content-con">
                <img class="content-img" src="https://i.pinimg.com/564x/80/85/96/808596a01688ad1617b79c776a5d31ae.jpg">
                <div class="content-info">
                    <h3>Event</h3>
                    <br>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, error labore similique
                        impedit
                        iste eum quo, ullam voluptate, ab saepe magni. Vel quam optio, neque eligendi officiis in
                        nostrum
                        aspernatur dolorem doloribus nihil, eveniet pariatur culpa illo inventore? Sequi perspiciatis
                        natus
                        doloremque similique illo labore quis sit non eius dicta.
                    </p>
                    <br>
                    <NuxtLink to="/info-pages/event" class="explore">Explore</NuxtLink>
                </div>
            </div>
            <!--<div class="a-content-con">
                <img class="content-img" src="https://i.pinimg.com/564x/0f/15/13/0f1513b5c4ee0681042656566e618d50.jpg">
                <div class="content-info">
                    <h3>Campaign & Coupon</h3>
                    <br>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, error labore similique
                        impedit
                        iste eum quo, ullam voluptate, ab saepe magni. Vel quam optio, neque eligendi officiis in
                        nostrum
                        aspernatur dolorem doloribus nihil, eveniet pariatur culpa illo inventore? Sequi perspiciatis
                        natus
                        doloremque similique illo labore quis sit non eius dicta.
                    </p>
                    <br>
                    <NuxtLink to="/info-pages/campaign" class="explore">Explore</NuxtLink>
                </div>
            </div>-->
        </div>
    </div>

</template>

<script setup>
useHead({
    title: "TrendyTreehugger | หน้าเเรกของเว็บไซต์",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
const { data: data } = await useFetch('http://localhost:4000/api/new')
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background {
    background-color: #FFF9ED;
    padding: 0;
}

.header-con,
footer {
    width: 100%;
    max-width: 100%;
}

header {
    padding: 10px;
}

footer {
    padding: 20px;
}

.hero-con {
    position: relative;
}

.hero {
    width: 100%;
    height: auto;
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 5rem;

}

.category-con {
    padding: 30px 100px;
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
}

.category-con NuxtLink {
    margin: 0;
}

@media screen and (max-width: 1120px) {
    .category-con {
        flex-direction: column;
        padding: 20px;
        align-items: center;
    }

    .cards-con {
        margin-bottom: 20px;
    }

    .cards {
        width: 400px;
        height: 600px;
    }

    .text {
        font-size: 2rem;
    }

    .community-con {
        flex-direction: column;
        padding: 20px;
        align-items: center;
    }

    .community-img {
        width: 100%;
        height: auto;
    }

    .community-info {
        font-size: 1.2rem;
        text-align: center;
        margin-top: 20px;
    }
}

@media screen and (min-width: 1121px) {
    .category-con {
        padding: 30px 100px 30px 100px;
        flex-direction: row;
    }

    .category-con .cards {
        width: 400px;
        height: 600px;
    }

    .category-con .text {
        font-size: 3rem;
    }
}

.cards-con {
    position: relative;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;

}

.cards-con:hover .cards {
    filter: brightness(0.5);
    transition: filter 0.3s;
}

.text:hover.text {
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.topic-content {
    text-align: center;
    font-size: 2rem;
    margin: 30px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 20px;
}

.container div {
    width: 300px;
    height: 350px;
    margin-bottom: 10px;
    background: #FFF9ED;

}

.title {
    color: #333;
    margin-left: 10px;
    margin-top: -10px;
}

.price {
    color: #333;
    margin-left: 10px;
}

.container div:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.product-img {
    padding: 10px;
    width: 300px;
    height: 300px;
}

a {
    text-decoration: none;
}

.community-con {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    object-fit: cover;
    align-items: center;

    & .community-info {
        font-size: 1.5rem;
        padding: 1rem;
        margin-left: 20px;
    }

    & .community-img {
        height: 500px;
        width: auto;
    }

    & a {
        color: #333;
        text-decoration: underline;
    }

}

.content-con {
    display: flex;
    justify-content: space-between;
    padding: 0px 40px 40px 40px;
}

.a-content-con {
    justify-content: center;
    align-items: center;
    margin: 10px;

    & .content-img {
        width: 100%;
        height: 500px;
        justify-self: center;
        object-fit: cover;
    }

    & .content-info {
        padding: 0px;
        margin-top: 10px;
    }
}

.explore {
    color: #333;
    text-decoration: underline;
}
</style>