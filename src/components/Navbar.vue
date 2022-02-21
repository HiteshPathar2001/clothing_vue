<template>
    <div>
        <div id="preloader" v-if="seen">
            <div class="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <header :class="{ 'background-header': scrollPosition > 50 }">
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
                            <li class="nav-item">
                                <router-link :to="{name:'home'}" class="nav-link" active-link="active">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'products'}" class="nav-link">Our Products</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'about'}" class="nav-link">About Us</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'contact'}" class="nav-link">Contact Us
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                scrollPosition: null,
                seen: true
            }
        },
        methods: {
            updateScroll()
            {
                this.scrollPosition = window.scrollY;
            },
        },
        mounted()
        {
            window.addEventListener("scroll", this.updateScroll);

        },
        created() {
            setTimeout(() => this.seen = !this.seen, 300)
        },
    }
</script>

<style scoped>

</style>