<template>
    <div class="container py-4">
        <!-- Componente de pesquisar caga -->
        <div class="row">
            <div class="col">
             <pesquisar-vaga-component></pesquisar-vaga-component>
            </div>
        </div>
        <!-- Componente de vagas -->
        <div class="row mt-5" v-for="(vaga, indice) in vagas" :key="indice">
            <div class="col">
                <vaga-component v-bind="vaga"/>
            </div>
        </div>
        <!-- Componente de indicadores -->
        <div class="row mt-5">
            <div class="col-4">
                <indicador-component titulo="Vagas abertas" indicador="25"/>
            </div>
            <div class="col-4">
                <indicador-component titulo="Profissionais cadastrados" indicador="125"/>
            </div>    
            <div class="col-4">
                <indicador-component titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-black"/>
            </div>
        </div>
    </div>
</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVagaComponent.vue'
import IndicadorComponent from '@/components/comuns/IndicadorComponent.vue'
import VagaComponent from '@/components/comuns/VagaComponent.vue'
export default {
 name: 'HomeComponent',
 components: {
    PesquisarVagaComponent: PesquisarVaga,  
    IndicadorComponent: IndicadorComponent,
    VagaComponent: VagaComponent
 },
 data(){
    return {
        usuariosOnline: 0,
        vagas: [],
    }
 },
 methods: {
    getUserOnline(){
        this.usuariosOnline = Math.floor(Math.random() * 101) //Gerando um número aleatório entre 0 e 100
    }
 },
 created(){
    setInterval(this.getUserOnline, 10000) //Chamando a função getUserOnline a cada 1 segundo
 },
 activated(){
    //Pegando os dados do localStorage
    let vagas =  JSON.parse(localStorage.getItem('vagas')) || []
    this.vagas = vagas
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
