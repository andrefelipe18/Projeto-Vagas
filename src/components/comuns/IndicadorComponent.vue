<template>
        <div :class="estilo">
            <p>{{ titulo }}</p>
            <h2>{{ indicador }}</h2>
        </div>
</template>

<script>
export default {
    name: 'IndicadorComponent',
    props: {
        titulo: {
            type: String,
            required: true
        },
        indicador: {
            required: true
        },
        bg: {
            type: String,
            default: 'bg-dark'
        },
        color: {
            type: String,
            default: 'text-white'
        }
    },
    computed: {
        estilo(){
            return `h-100 p-5 rounded-3 border ${this.bg} ${this.color}`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
