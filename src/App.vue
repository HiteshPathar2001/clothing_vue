<template>
  <div>
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"
            ><h2>Sixteen <em>Clothing</em></h2></a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link"
                  >Our Products</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About Us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >Contact Us</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
              <p>
                Copyright &copy; 2020 Sixteen Clothing Co., Ltd. - Design:
                <a
                  rel="nofollow noopener"
                  href="https://templatemo.com"
                  target="_blank"
                  >TemplateMo</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import "./assets/vendor/bootstrap/css/bootstrap.min.css";
@import "./assets/css/fontawesome.css";
@import "./assets/css/templatemo-sixteen.css";
@import "./assets/css/owl.css";
</style>
