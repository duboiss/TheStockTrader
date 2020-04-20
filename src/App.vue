<template>
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header'

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
            this.updateTitle(this.$route);
        },
        watch: {
            '$route'(to) {
                this.updateTitle(to);
            }
        },
        methods: {
            updateTitle(route) {
                route.meta.title ? document.title = route.meta.title + ' - The Stock Trader' : 'The Stock Trader';
            }
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
