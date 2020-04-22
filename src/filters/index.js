import Vue from 'vue';

export const filters = [
    Vue.filter('currency', (value) => {
        return '$' + value.toLocaleString();
    })
];
