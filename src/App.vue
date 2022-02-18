<template>
    <div>
        <div id="preloader" v-if="seen">
            <div class="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <router-view name="navbar"></router-view>
        <router-view></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
    // import Footer from './components/Footer.vue'
    export default {
        name: "App",
        components : {
            // Footer
        },
};
</script>

<style>
    @import "./assets/vendor/bootstrap/css/bootstrap.min.css";
    @import "./assets/css/fontawesome.css";
    @import "./assets/css/templatemo-sixteen.css";
    @import "./assets/css/owl.css";
</style>
