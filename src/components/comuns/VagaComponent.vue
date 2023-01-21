<template>
<div class="card">
    <div class="card-header bg-dark text-white">
        <div class="row">
            <div class="col d-flex justify-content-between">
                <div class="">{{ titulo }}</div>
                <div class="">
                    <div class="form-check form-switch">
                        <div class="form-check-input" type="checkbox"></div>
                        <label for="" class="form-check-label">Favoritar</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body">
        <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">Salário: R${{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Publicação: {{ publicacao }}</small>
    </div>  
</div>
</template>

<script>
export default {
    name: 'VagaComponent',
    props: {
        titulo: {
            type: String,
            required: true,
            validator(p){ //Retorna true se o valor for válido e false se for inválido
                return p.length > 5
            }
        },
        descricao: {
            type: String,
            required: true
        },
        salario: {
            type: [Number, String],
            required: true
        },
        modalidade: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        publicacao: {
            type: [String, Date],
            required: true
        }
    },
    computed: {
        getModalidade(){
            return this.modalidade == '1' ? 'Presencial' : 'Remoto'
        },
        getTipo(){
            return this.tipo == '1' ? 'CLT' : 'PJ'
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
