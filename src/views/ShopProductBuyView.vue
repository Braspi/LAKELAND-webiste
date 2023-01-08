<template>
    <section v-if="product">
        <div class="title">
            <div>
                <span class="shop-title">Sklep</span>
                <h1>Wykonaj płatność</h1>
            </div>
            <hr/>
            <div class="parent">
                <div class="div1"> 
                    <div class="img-section">
                        <div>
                            <h2>{{ product.name }}</h2>
                            <hr>
                            <img :src="product.imageUrl" alt="" class="img-left">
                        </div>
                    </div>
                </div> 
                <div class="div2"> 
                    <div class="buy-section">
                        <div>
                            <h2>Item name</h2>
                            <hr>
                        </div>
                        <div class="btn-sel-method">
                            <div class="method" v-for="price in product.prices" :key="price.id">
                                <label>
                                    <input type="radio" :value="price.gateway" v-model="selectedPaymentGateway">
                                    <span class="method-operator">{{ price.payment.name }}</span>
                                </label>
                                <span class="text-price">{{ price.price }} zł</span>
                            </div>
                            <div class="nick-mail">
                                <div>
                                    <div class="content">
                                        <input type="text" placeholder="Twój nick" v-model="nickname">
                                        <input type="text" placeholder="Twój adres e-mail" v-model="email">
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="discount-code">
                                    <input type="text" class="" placeholder="Kod rabatowy">
                            </div> -->
                        </div>
                        <div class="btn-payment">
                            <button class="btn-secondary" @click="buy">Płatność</button>
                        </div>

                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      product: null,
      nickname: null,
      email: null,
      selectedPaymentGateway: null
    }
  },
  created() {
    axios.get(`/products/${this.$route.params.productId}`).then(response => {
        this.product = response.data
    }).catch(error => {
        console.log('ERROR API WIKTOR')
        console.log(error.response)
    })
  },
  methods: {
        buy() {
            axios.post(`/payments/init`,{
                productId: this.product.id,
                nickname: this.nickname,
                email: this.email,
                method: this.selectedPaymentGateway,
                count: 1
            }).then(response => {
                window.location.replace(response.data.url)
            }).catch(error => {
                if (error.response.status == 400) {
                    const message = error.response.data['message']
                    useToast().error(Array.isArray(message) ? message[0] : message)
                }
                console.log(error.response)
            })
        }
    }
}


</script>

<style scoped src="@/assets/style/views/home.less" lang="less"></style>
<style scoped src="@/assets/style/views/shopProductBuy.less" lang="less"></style>