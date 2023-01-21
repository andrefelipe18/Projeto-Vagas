<template>
    <vagas-favoritas-component/>
    <topo-component @navegar="componente = $event"></topo-component>
    <conteudo-principal :conteudo="componente"></conteudo-principal>
</template>

<script>
import VagasFavoritasComponent from '@/components/comuns/VagasFavoritasComponent.vue'
import ConteudoPrincipal from '@/components/layouts/ConteudoPrincipal.vue'
import TopoComponent from '@/components/layouts/TopoComponent.vue'

export default {
  name: 'App',
  data(){
    return {
     componente: 'HomeComponent'
    }
  },
  components: {
    ConteudoPrincipal: ConteudoPrincipal,
    TopoComponent: TopoComponent,
    VagasFavoritasComponent: VagasFavoritasComponent
  },
  methods: {
    acao(p1) {
      console.log('Ação do componente pai que foi passada para o filho ' + p1)
    }
  }
}
</script>

<style scoped>
 h1{
    color: red;
 }
</style>
