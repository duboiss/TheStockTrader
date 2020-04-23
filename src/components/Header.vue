<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" class="nav-item" active-class="active" tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link to="/stocks" class="nav-item" active-class="active" tag="li">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="endDay">End Day</a>
                </li>
                <li class="nav-item dropdown" @click="isDropdownOpen = !isDropdownOpen">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </a>
                    <div
                            class="dropdown-menu"
                            :class="{show: isDropdownOpen}"
                            aria-labelledby="navbarDropdown"
                    >
                        <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                        <a class="dropdown-item" href="#">Load Data</a>
                    </div>
                </li>
            </ul>
            <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions([
               'randomizeStocks'
            ]),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            }
        }
    }
</script>
