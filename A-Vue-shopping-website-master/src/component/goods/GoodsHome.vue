<template>
    <div>
        <app-bread></app-bread>
        <app-top></app-top>
         <app-list></app-list>
    </div>
</template>

<script>
/* 1.导入 */
import BreadcumdComponent from './frame/Breadcumd.vue';
import TopComponent from './frame/Top.vue';
import ListComponent from './frame/List.vue';
    export default {
       /* 2.注册 */ 
       components: {
           appBread:BreadcumdComponent,
           appTop:TopComponent,
           appList:ListComponent
       }
    }
</script>

<style scoped>

</style>