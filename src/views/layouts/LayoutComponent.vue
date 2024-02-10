
<template>
    <div>
        <Header @shareData_="getData" />
        <router-view />
    </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'

export default {

    components: {
        Header
    },

    methods: {
        getData(data) {
            console.log(data);
        }
    }
}
</script>
