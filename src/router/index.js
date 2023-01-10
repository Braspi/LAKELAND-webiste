import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopProductView from '../views/ShopProductView.vue'
import ShopProductBuyView from '../views/ShopProductBuyView.vue'
import TransactionStatusView from '@/views/TransactionStatusView.vue'
import RulesView from '@/views/RulesView.vue'

const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'shop/:serverId',
        name: 'shop',
        component: ShopProductView
      },
      {
        path: 'shop/:serverId/product/:productId',
        name: 'shoProductBuy',
        component: ShopProductBuyView
      },
      {
        path: 'transaction',
        name: 'TransactionView',
        component: TransactionStatusView
      },
      {
        path: 'regulamin',
        name: 'RulesView',
        component: RulesView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
