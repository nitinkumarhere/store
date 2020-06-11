<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>
                <cart-summary />
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <CategoryControls/>
                <button class="btn btn-block btn-warning mt-5"
                        v-on:click="setShowSearch(true)">
                    Search
                </button>
            </div>
            <div class="col-9 p-2 ">
                <Search />
                <ProductList />
            </div> 
        </div>       
    </div>
</template>

<script>
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls"
import CartSummary from "./CartSummary"
import Search from "./Search"
import {mapMutations} from "vuex"

export default {
    components: { CategoryControls, ProductList, CartSummary , Search},
    methods: {
        ...mapMutations(["setShowSearch"])

    }
}
</script>