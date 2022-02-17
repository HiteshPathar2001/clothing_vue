<template>
    <div class="banner header-text">
        <carousel :perPage="1" :autoPlay="true">
            <slide>
                <div class="banner-item-01">
                    <div class="text-content">
                        <h4>Best Offer</h4>
                        <h2>New Arrivals On Sale</h2>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="banner-item-02">
                    <div class="text-content">
                        <h4>Flash Deals</h4>
                        <h2>Get your best products</h2>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="banner-item-03">
                    <div class="text-content">
                        <h4>Last Minute</h4>
                        <h2>Grab last minute deals</h2>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import {Carousel, Slide} from "vue-carousel";

    export default {
        name: "Slider",
        components: {
            Carousel,
            Slide,
        },
    }
</script>

<style scoped>

</style>