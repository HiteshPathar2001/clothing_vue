<template>
    <div class="NotFound">
        <div class="page-heading about-heading header-text">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-content">
                            <h2>Page Not Found</h2>
                            <a class="filled-button" @click.prevent="onButtonClick()" style="color:white">Go To Home Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        methods : {
            onButtonClick() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>