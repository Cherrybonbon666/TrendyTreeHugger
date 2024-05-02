<template>
    <div class="search-wrapper">
        <input id="search" v-model="searchTerm" type="search" placeholder="Search..." @keyup.enter="searchProducts" />
        <ul v-if="searchResults.length > 0">
            <li v-for="result in searchResults" :key="result.id">
                {{ result.name }}
            </li>
        </ul>
    </div>
    <div class="result-cards">
        <div v-for="result in searchResults" :key="result.id" class="card">
            <div class="product-name">{{ result.name }}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchTerm: '',
            searchResults: [],
        };
    },
    methods: {
        searchProducts() {
            axios.get(`/api/search?q=${this.searchTerm}`)
                .then((response) => {
                    this.searchResults = response.data;
                })
                .catch((error) => {
                    console.error(error);
                    this.searchResults = [];
                });
        },
    },
};
</script>

<style scoped>
.search-wrapper {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: .25rem;
    background-color: #fff;
    padding: 10px;
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0 2px 4px #82828267;
    transition: box-shadow 0.3s ease;
}

.result-cards {
    display: flex;
    top: 100%;
    left: 0;
    width: 100%;
    gap: .25rem;
    background-color: #fff;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 2px 4px #00000025;
    position: absolute;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    z-index: 1;
}

.card {
    width: 100%;
    font-size: .9rem;
    padding: .5rem 0;
    gap: .5rem;
}

.product-name {
    padding: .25rem;
}

#search {
    display: flex;
    height: 35px;
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 15px;
    outline: none;
    width: 500px;
    align-items: center;
}

#search:focus {
    border: 1px solid #8a8a8a;
}

/* Uncommented CSS rules */
/*
.search-result {
    padding: 0.25rem;
    cursor: pointer;
}

.search-result:hover {
    background-color: #f5f5f5;
}

.hide {
    display: none;
}
*/
</style>
