<template>
    <div>
    <!-- Page Content -->
    <div class="page-heading products-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h4>new arrivals</h4>
              <h2>sixteen products</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="products">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="filters">
              <ul>
                  <li class="active" data-filter="*">All Products</li>
                  <li data-filter=".des">Featured</li>
                  <li data-filter=".dev">Flash Deals</li>
                  <li data-filter=".gra">Last Minute</li>
              </ul>
            </div>
          </div>
          <div class="col-md-12">
            <div class="filters-content">
                <div class="row grid">
                    <div class="col-lg-4 col-md-4 all des" v-for="(product,key) in products" :key="key">
                      <div class="product-item">
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
          <div class="col-md-12">
            <ul class="pages">
              <li><a href="#">1</a></li>
              <li class="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
            </ul>
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
