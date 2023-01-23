<template>
<div class="divVagasFavoritas">
 <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Vagas Favoritas</button>
</div>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Vagas Favoritadas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="list-group bg-dark">
      <li class="list-group-item" v-for="(vaga, indice) in vagasFavoritas" :key="indice">{{ vaga }}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            vagasFavoritas: []
        }
    },
    mounted(){
        //Recebendo o evento global
        this.$root.emitter.on('favoritarVaga', (vaga) => {
            this.vagasFavoritas.push(vaga)
        })

        this.$root.emitter.on('desfavoritarVaga', (vaga) => {
            this.vagasFavoritas = this.vagasFavoritas.filter(v => v != vaga)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divVagasFavoritas{
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 0px;
}

</style>
   