<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/icon/logo/lakeland-round.png" alt="">
            </router-link>
        </div>
        <div class="status-player" v-if="server">
            <div :class="server.isOnline ? 'online' : 'offline'"></div>
            <span> {{server.online}}/{{server.maxOnline}} </span>
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