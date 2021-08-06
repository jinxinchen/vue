import VueRouter from 'vue-router';

import GoodsHomeComponent from '../component/goods/GoodsHome.vue';
import GoodsDetailComponent from '../component/goods/detail/GoodsDetail.vue';
import GoodsMoreComponent from '../component/goods/more/GoodsMore.vue';
import ShopcartComponent from '../component/shopcart/Shopcart.vue';

const routerConfig = [
    /* 默认访问首页 */
    { path: '/', redirect: '/goods' },

    /* 商品 */
    { name: 'g', path: '/goods', component: GoodsHomeComponent },
    { name: 'gd', path: '/goods/detail/:id', component: GoodsDetailComponent },
    { name: 'gm', path: '/goods/more', component: GoodsMoreComponent },
    { name: 'gsc', path: '/goods/shopcart', component: ShopcartComponent }

];

export default new VueRouter({
    routes: routerConfig
});