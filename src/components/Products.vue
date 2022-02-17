<template>
    <div class="latest-products">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>Latest Products</h2>
                        <router-link to="/products">view all products<i class="fa fa-angle-right"/></router-link>
                    </div>
                </div>
                <div class="col-md-4" v-for="(product,key) in products" :key="key">
                    <div class="product-item" v-if="key <= 5">
                        <a href="#"><img :src="require(`@/assets/images/${product.imgPath}`)" alt="image" /></a>

                        <div class="down-content">
                            <a href="#"><h4>{{product.title}}</h4></a>
                            <h6>${{product.price}}</h6>
                            <p>{{product.desc}}</p>
                            <ul class="stars">
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                            </ul>
                            <span>Reviews ({{product.reviews}})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Products",
        data () {
            return {
                products : [
                    {
                        title: "Shoes",
                        imgPath:"product_01.jpg",
                        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                        price:"10",
                        reviews:"22"
                    },
                    {
                        title: "Jacket",
                        imgPath:"product_02.jpg",
                        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                        price:"20",
                        reviews:"25"
                    },
                    {
                        title: "Winter Cloths",
                        imgPath:"product_03.jpg",
                        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                        price:"30",
                        reviews:"35"
                    },
                    {
                        title: "Winter Cloths",
                        imgPath:"product_04.jpg",
                        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                        price:"40",
                        reviews:"45"
                    },
                    {
                        title: "Winter Cloths",
                        imgPath:"product_05.jpg",
                        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                        price:"30",
                        reviews:"25"
                    },
                    {
                        title: "Winter Cloths",
                        imgPath:"product_06.jpg",
                        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                        price:"20",
                        reviews:"15"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>