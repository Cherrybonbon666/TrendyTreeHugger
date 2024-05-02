<template>

    <header class="header-con">

        <nav>
            <NuxtLink to="/" class="logo"><i class="fa-brands fa-pagelines"></i><b> TrendyTreehugger</b></NuxtLink>
            <div class="search-container">
                <SearchBar />
            </div>
            <div id="product-list"></div>
            <menu>
                <NuxtLink to="/menu-pages/account" class="menu"><i class="fa-solid fa-user" style="color: #544238;"></i>
                </NuxtLink>
                <NuxtLink to="/menu-pages/cart" class="menu"><i class="fa-solid fa-cart-shopping"
                        style="color: #544238;"></i></NuxtLink>
                <NuxtLink to="/menu-pages/favor" class="menu"><i class="fa-solid fa-heart" style="color: #544238;"></i>
                </NuxtLink>
                <NuxtLink to="/menu-pages/customer-service" class="menu"><i class="fa-solid fa-headset"
                        style="color: #544238;"></i></NuxtLink>
            </menu>
        </nav>

        <div class="optimize-category">

            <NuxtLink to="/products/new-product">New Arrivals</NuxtLink>
            <NuxtLink to="/products/sale">Sales</NuxtLink>
            <NuxtLink to="/products/women">Women</NuxtLink>
            <NuxtLink to="/products/men">Men</NuxtLink>
            <NuxtLink to="/products/kid">Kid</NuxtLink>
        </div>

    </header>

    <div>
        <slot />
    </div>

    <footer>
        <div class="info-con">
            <div class="topic">Information</div>
            <div class="info">
                <NuxtLink to="/info-pages/about">About Us</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/community">Community</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/carbon">Carbon Footprint Tracking</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/education">Education Resources</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/event">Fashion Event</NuxtLink>
                <br>

            </div>
        </div>

        <div class="contact-con">
            <div class="topic">Follow Us</div>
            <div class="contact">
                <a href="https://www.facebook.com/profile.php?id=100011635591689&locale=th_TH"><i
                        class="fa-brands fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/peach_prp/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/?lang=th"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="https://www.tiktok.com/foryou"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://line.me/th/"><i class="fa-brands fa-line"></i></a>
                <a href="https://youtu.be/_61CRQotOHw?si=kuQIs5aMgrV8mMT9"><i class="fa-brands fa-youtube"></i></a>
            </div>

        </div>

    </footer>

</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";

import SearchBar from '~/components/SearchBar.vue';

export default {
    components: {
        SearchBar
    }
}
</script>

<style scoped>
* {
    margin: 0;
}

nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFF9ED;
    padding: 20px 0;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #dbd8d2;
    flex-wrap: wrap;
}

nav a {
    color: #333;
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;
}

.search-container {
    position: relative;
}

@media screen and (max-width: 768px) {
    nav {
        flex-direction: column;
    }

    .logo {
        font-size: 1.5rem;
    }

    .menu {
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }

    .menu a {
        margin-bottom: 10px;
        /* Add some space between menu items */
    }
}

@media screen and (min-width: 769px) and (max-width: 1104px) {
    nav {
        padding: 20px 0px 35px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .logo {
        flex-basis: auto;
    }

    menu {
        flex-basis: auto;
        justify-content: center;
    }
}

menu {
    margin-right: 12px;
    display: flex;
    align-items: center;
}

.logo {
    font-size: 2rem;
    color: #544238;
    text-decoration: none;
    white-space: nowrap;
}

.logo i {
    margin-right: 5px;
}

.optimize-category {
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    background: #FFF9ED;

    & a {
        text-decoration: none;
        color: #544238;
    }

    & a:hover {
        text-decoration: underline;
    }
}

.header-con {
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #544238;
}

header,
footer {
    margin: 0;
}

footer {
    background-color: #FFF9ED;
    border-top: 1px solid #544238;
    display: flex;
    padding: 20px;
    justify-content: center;
}

.topic {
    color: #544238;
    font-weight: bold;
}

.info-con {
    margin: 20px 50px;
}

.info-con a {
    color: #544238;
    text-decoration: none;
}

.info a:hover {
    text-decoration: underline;
}

.info {
    margin-top: 1rem;
}

.contact-con {
    margin: 20px 50px;
}

.contact {
    display: flex;
}

.contact a {
    color: #828282;
    margin-right: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
}
</style>