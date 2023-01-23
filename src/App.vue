<template>
    <vagas-favoritas-component/>
    <topo-component @navegar="componente = $event"></topo-component>
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
        <template v-slot:titulo>
           <h5>{{ alerta.titulo }}</h5>
        </template>
        <template v-slot:descricao>
            <p>{{ alerta.descricao }}</p>
        </template>
    </alerta>
    <conteudo-principal :conteudo="componente"></conteudo-principal>
</template>

<script>
import VagasFavoritasComponent from '@/components/comuns/VagasFavoritasComponent.vue'
import ConteudoPrincipal from '@/components/layouts/ConteudoPrincipal.vue'
import TopoComponent from '@/components/layouts/TopoComponent.vue'
import Alerta from '@/components/comuns/AlertaComponent.vue'

export default {
  name: 'App',
  data(){
    return {
     componente: 'HomeComponent',
     exibirAlerta: false,
     alerta: {
       titulo: '',
       descricao: '',
       tipo: ''
     }
    }
  },
  components: {
    ConteudoPrincipal: ConteudoPrincipal,
    TopoComponent: TopoComponent,
    VagasFavoritasComponent: VagasFavoritasComponent,
    Alerta: Alerta
  },
  methods: {
    acao(p1) {
      console.log('Ação do componente pai que foi passada para o filho ' + p1)
    }
  },
  mounted() {
    //Recebendo o evento global
    this.$root.emitter.on('alerta', (parametro) => {
      this.alerta = parametro
      
      //Retirando o alerta depois de 5 segundos
      this.exibirAlerta = true
      setTimeout(() => {
        this.exibirAlerta = false
      }, 5000)
    })
  }
}
</script>

<style scoped>
 h1{
    color: red;
 }
</style>
