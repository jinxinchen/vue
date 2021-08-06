<template>
    <p>
        <a v-for="item in menu" :key="item.id">
            {{item.title}}
            <app-menu v-if="item.subcates && item.subcates.length != 0" :menu="item.subcates"></app-menu>
        </a>
    </p>
</template>

<script>
export default {
    name: 'app-menu',
    props: ['menu']
}
</script>

<style scoped>

</style>