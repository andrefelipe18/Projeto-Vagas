<template>
    <!-- Renderização dinamica -->
   <keep-alive>
   <component :is="conteudo"></component>
    </keep-alive>
</template>
<script>
import Home from '@/components/views/HomeComponent.vue'
import PublicarVaga from '@/components/views/PublicarVagaComponent.vue'
export default {
    name: 'ConteudoPrincipal',
    props: {
        conteudo: {
            type: String,
            required: true
        }
    },
    data(){
        return{
         //   conteudo: 'home-component'
        }
    },
    components: {
    HomeComponent: Home,
    PublicarVagaComponent: PublicarVaga,
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
