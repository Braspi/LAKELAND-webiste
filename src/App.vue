<template>
  <div>
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/FooterComponent.vue'
import Nav from '@/components/NavbarComponent.vue'
import "vue-toastification/dist/index.css";

export default {
  components: {
    Footer,
    Nav
  }
}
</script>
