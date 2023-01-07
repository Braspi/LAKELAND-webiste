<template>
  <div class="home">
      <section class="top-content">
        <div class="parent">
          <div class="div1">
            <h1>Polski Serwer Minecraft</h1>
            <h3>Dołącz do naszej społeczności!</h3>
            <hr/>
            <div class="bottom-info">
              <div class="icon">
                <span class="icon-in">
                  <i class="fa-solid fa-globe"></i>
                </span>
                <span>Administracja o dużym doświadczeniu dbająca o porządek i kulturę</span>
              </div>
              <div class="icon">
                <span class="icon-in">
                  <i class="fa-solid fa-globe"></i>
                </span>
                <span>Wysoka jakość rozgrywki oraz płynność w grze!</span>
              </div>
            </div>
            <div class="btn-top">
              <input type="button" name="" id="" value="SERWER Discord" class="btn-primary">
              <a href="" class="btn-secondary">SKLEP</a>
            </div>
          </div>
          <div class="div2">
            <img src="@/assets/icon/logo/render.png" alt="">
          </div>
        </div> 
      </section>
      <section class="shop">
        <div class="shop-select">
          <div class="title">
            <span class="shop-title">Sklep</span>
            <h2>Wybierz Tryb</h2>
            <hr>
          </div>
          <div class="shop-flex">
            <div class="template-shop" v-for="server in servers" :key="server.id">
              <div>
                <h2>{{ server.name }}</h2>
                <h3>Kliknij, aby wybrać serwer</h3>
                <hr/>
              <div class="img-sel" :style="`background-image: url(${server.imageUrl})`"></div>
                <router-link :to="`/shop/${server.id}`">
                  <button class="btn-secondary btn-sel">Wybierz</button>
                </router-link>
              </div> 
            </div>
          </div>
        </div>
      </section>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      servers: []
    }
  },
  created() {
    axios.get('/servers').then(response => {
        this.servers = response.data
    }).catch(error => {
        console.log('ERROR API WIKTOR')
        console.log(error.response)
    })
  }
}

</script>

<style scoped src="@/assets/style/views/home.less" lang="less"></style>

