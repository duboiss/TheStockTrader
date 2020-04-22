<template>
    <div class="col-sm-6 col-md-4 mb-3">
        <div class="card">
            <h5 class="card-header">{{ stock.name}} <small>(${{ stock.price }})</small></h5>
            <div class="card-body">
                <div class="float-left">
                    <input
                            type="number"
                            class="form-control"
                            :class="{'is-valid': !insufficientFunds && quantity > 0 && Number.isInteger(quantity)}"
                            placeholder="Quantity"
                            v-model.number="quantity"
                    >
                </div>
                <div class="float-right">
                    <button
                            class="btn"
                            :class="{'btn-success': !insufficientFunds, 'btn-danger': insufficientFunds}"
                            @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>
