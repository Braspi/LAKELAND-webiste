<template>
    <section>
        <div class="title">
            <span class="shop-title">Sklep</span>
            <h2>Wybierz przedmiot!</h2>
            <hr/>
        </div>
        <div class="shop-flex">
            <div class="template-shop" v-for="product in products" :key="product.id">
                <div>
                    <h2>{{ product.name }}</h2>
                    <h3>Kliknij, aby wybrać produkt</h3>
                <hr/>
                <div class="img-sel" :style="`background-image: url(${product.imageUrl})`"></div>
                <div>
                    <router-link to="">
                  <button class="btn-secondary btn-sel">Wybierz</button>
                    </router-link>
                </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    axios.get(`/products?server=${this.$route.params.serverId}`).then(response => {
        this.products = response.data
    }).catch(error => {
        console.log('ERROR API WIKTOR')
        console.log(error.response)
    })
  }
}

</script>

<style scoped src="@/assets/style/views/home.less" lang="less"></style>

<style scoped src="@/assets/style/views/shopProduct.less" lang="less"></style>