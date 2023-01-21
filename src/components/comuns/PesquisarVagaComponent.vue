<template>
<div class="rounded-3 h-100 p-5 bg-light border">
<h2>Pesquisar Vagas</h2>
<div class="row">
    <div class="col">
        <div class="form-group">
            <label for="inputPesquisa">Título da vaga</label>
            <input type="text" class="form-control" id="inputPesquisa" placeholder="Pesquisa por palavras chaves, 'PHP', 'Pleno' etc...">
            <small class="form-text text-muted">Informe palavras relacionadas com a vaga desejada</small>
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <button class="btn btn-outline-dark mt-2">Buscar</button>
    </div>
</div>
</div>
</template>
   
<script>
export default {
    name: 'PesquisarVagaComponent',
}
</script>

<style scoped>

</style>
   