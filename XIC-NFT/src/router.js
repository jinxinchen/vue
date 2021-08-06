import VueRouter from "vue-router"

import home from "./views/home.vue"
import about from "./views/about.vue"
import market from "./views/market.vue"
import artist from "./views/artist.vue"
import collector from "./views/collector.vue"
import person from "./views/person.vue"



var router = new VueRouter({
	routes:[
       {path:"/",redirect:"/home"},
       {path:"/home", component:home},
       {path:"/about", component:about},
       {path:"/market", component:market},
       {path:"/artist", component:artist},
       {path:"/collector", component:collector},
       {path:"/person", component:person},
	],
	linkActiveClass:"mui-active"
})

export default router