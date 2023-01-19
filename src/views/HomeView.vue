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
                  <font-awesome-icon icon="fa-solid fa-people-robbery" />
                </span>
                <span>Administracja o dużym doświadczeniu dbająca o porządek i kulturę</span>
              </div>
              <div class="icon">
                <span class="icon-in">
                  <font-awesome-icon icon="fa-solid fa-globe" />
                </span>
                <span>Wysoka jakość rozgrywki oraz płynność w grze!</span>
              </div>
            </div>
            <div class="btn-top">
              <a href="https://dc.lake-land.pl">
                <input type="button" name="" id="" value="SERWER Discord" class="btn-primary">
              </a>
              <a href="#shop" class="btn-secondary">SKLEP</a>
            </div>
          </div>
          <div class="div2">
            <img src="@/assets/icon/logo/render.png" alt="">
          </div>
        </div> 
      </section>
      <section class="shop" id="shop">
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
        <div class="last-buyers">
            <div class="buyers">
              <div class="template-buyers" v-for="buyer in lastBuyers" :key="buyer.id">
                <img :src="`https://minotar.net/helm/${buyer.nickname}/100.png`" alt="">
              </div>
              <div class="last-recharge">
                  <div class="icon-recharge"><font-awesome-icon icon="fa-solid fa-tag" /></div>
                  <span>Ostatnie zakupy</span>
                </div>
            </div>
        </div>
      </section>
      <section class="team" id="onas">
        <div class="team-pos">
          <div class="team-container">
            <span>Administracja Serwera</span>
            <h5>Poznaj naszą ekipę!</h5>
            <p>Administracja, która codziennie poświęca godziny, aby pilnować porządku i odpowiadać na wasze pytania.</p>
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
      servers: [],
      lastBuyers: []
    }
  },
  created() {
    axios.get('/servers').then(response => {
        this.servers = response.data
        response.data.forEach(element => {
          axios.get(`/servers/${element.id}/last_buyers`).then(response => {
            this.lastBuyers = this.lastBuyers.concat(response.data);
          });
        });
    }).catch(error => {
        console.log('ERROR API WIKTOR')
        console.log(error.response)
    })
  }
}

</script>

<style scoped src="@/assets/style/views/home.less" lang="less"></style>

