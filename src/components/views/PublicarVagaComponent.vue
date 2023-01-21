<template>
    <div class="container py-4 bg-dark text-white mt-2 rounded">
        <div class="row">
            <div class="col">
                <h4>Apresente a sua vaga para milhares de profissionais</h4>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Titulo da vaga</label> 
                <input type="text" name="" id="" class="form-control" v-model="titulo">
                <div class="form-text">Por exemplo: Programador JavaScript e VueJS</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Descrição</label>
                <textarea class="form-control" v-model="descricao"></textarea>
                <div class="form-text">Informe os detalhes da vaga</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Salário</label>
                <input type="number" name="" id="" class="form-control" v-model="salario">
                <div class="form-text">Informe o salário</div>
            </div>
            <div class="col">
                <label class="form-label">Modalidade</label>
                <select class="form-select" v-model="modalidade">
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="1">Presencial</option>
                    <option value="2">Remoto</option>
                </select>
                <div class="form-text">Informe onde as atividades serão realizadas</div>
            </div>
            <div class="col">
                <label class="form-label">Tipo</label>
                <select class="form-select" v-model="tipo">
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="1">CLT</option>
                    <option value="2">PJ</option>
                </select>
                <div class="form-text">Informe o tipo de contrato</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <button type="submit" class="btn btn-primary" @click="salvarVaga()">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name: 'PublicarVagaComponent',
 data(){
    return {
        titulo: '',
        descricao: '',
        salario: '',
        modalidade: '',
        tipo: '',
    }
 },
 methods:{
    salvarVaga(){

        let tempoDecorrido = Date.now();
        let dataAtual = new Date(tempoDecorrido);
        let dataFormatada = dataAtual.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        let vagas = JSON.parse(localStorage.getItem('vagas')) || []
        vagas.push({
            titulo: this.titulo,
            descricao: this.descricao,
            salario: this.salario,
            modalidade: this.modalidade,
            tipo: this.tipo,
            publicacao: dataFormatada
        })
        localStorage.setItem('vagas', JSON.stringify(vagas))
    }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
