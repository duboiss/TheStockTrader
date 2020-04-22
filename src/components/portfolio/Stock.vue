<template>
    <div class="col-sm-6 col-md-4 mb-3">
        <div class="card">
            <h5 class="card-header">{{ stock.name}} <small>(${{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </h5>
            <div class="card-body">
                <div class="float-left">
                    <input
                            type="number"
                            class="form-control"
                            :class="{'is-valid': !invalidQuantity && quantity > 0 && Number.isInteger(quantity)}"
                            placeholder="Quantity"
                            v-model.number="quantity"
                    >
                </div>
                <div class="float-right">
                    <button
                            class="btn"
                            :class="{'btn-success': !invalidQuantity, 'btn-danger': invalidQuantity}"
                            @click="sellStock"
                            :disabled="invalidQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    >{{ invalidQuantity ? 'Not enough Stocks' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            invalidQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>
