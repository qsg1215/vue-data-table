<template>
    <div id="app" style="padding-bottom: 300px;">
        <VueDataTable></VueDataTable>
    </div>
</template>

<script>
    import VueDataTable from './src/vue-data-table.vue'
    export default {
        name: 'app',
        data () {
            return {}
        },
        components: {VueDataTable},
        methods: {

        }
    }
</script>

<style>
    #app {
        backgroundColor: 'red'
    }
</style>
