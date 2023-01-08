<template>
    <div class="message" :class="color">
       {{ message }}
    </div>
    </template>

<script>
import axios from 'axios';
export default {
    name: 'TransactionStatusView',
    data: () => {
        return {
            message: null,
            color: null
        }
    },
    created() {
        axios.get(`/payments/transaction/${this.$route.query.transactionId}`).then(data => {
            console.log(data.response)
            const response = data.data;
            if(response.id){
                this.color = 'green'
                switch (response.status){
                case 'pending':
                    this.message = 'Trwa oczekiwanie na potwierdzenie zamowienia przez operatora platnosci...'
                    this.color = 'yellow'
                    break
                case 'cancelled':
                    this.message = 'Zamowienie zostalo anulowane!'
                    this.color = 'red'
                    break
                case 'executing':
                    this.message = 'Zamówienie zostalo oplacone i oczekuje na realizacje...'
                    break
                case 'finished':
                    this.message = 'Zamówienie zostalo oplacone i zrealizowane!'
                    break
                }
            }
        }).catch(err => {
            if(err.response.data.statusCode === 404){
                this.message = 'Zamowienie nie zostalo odnalezione!'
                this.color = 'red'
            }
        })
        
    }
}
</script>

<style scoped src="@/assets/style/views/transactionStatus.less" lang="less"></style>