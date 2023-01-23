<template>
<div :class="alerta" role="alert">
  <slot name="titulo">
    Titulo do alerta padrão
  </slot>
  <hr>
  <slot name="descricao"> 
    Descrição do alerta padrão 
  </slot>
</div>
</template>

<script>
export default {
    name: 'AlertaComponent',
    props: {
        tipo: {
          type: String,
          required: true
        }
    },
    computed: {
      alerta(){
        if(this.tipo == 'success'){
          return 'alert alert-success'
        }else if(this.tipo == 'danger'){
          return 'alert alert-danger'
        }else if(this.tipo == 'warning'){
          return 'alert alert-warning'
        }else{
          return 'alert alert-primary'
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
