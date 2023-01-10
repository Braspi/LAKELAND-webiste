<template>
    <header>
        <div class="nav-bar">
          <div class="logo">
              <router-link to="/">
                  <img src="@/assets/icon/logo/lakeland-round.png" alt="">
              </router-link>
          </div>
          <div class="status" v-if="server">
            <h3 class="server-status-container">
                  <div :class="server.isOnline ? 'online' : 'offline'"></div>
                  <span v-html="server.isOnline ? `${server.online}` : '-/-'"></span>
                  <p> graczy</p>
            </h3>
          </div>
          <div class="links">
              <router-link to="/">Strona Główna</router-link>
              <router-link to="/">O nas</router-link>
              <router-link to="/regulamin">Regulamin</router-link>
              <router-link to="/">Sklep</router-link>
          </div>
        </div>
    </header>
</template>

<style scoped src="@/assets/style/components/nav.less" lang="less"></style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      server: null
    }
  },
  created() {
    axios.get('/servers').then(response => {
        this.server = response.data[0]
    }).catch(error => {
        console.log('ERROR API WIKTOR')
        console.log(error.response)
    })
  }
}

</script>