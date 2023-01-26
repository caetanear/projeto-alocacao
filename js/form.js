var botaoAdicionar = document.querySelector("#adicionar");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var alocacao = obtemAlocacaoDoFormulario(form);

    var alocacaoTr = montaTr(alocacao);

    var tabela = document.querySelector("#tabela-alocacoes");

    tabela.appendChild(alocacaoTr);

    form.reset();
});

function obtemAlocacaoDoFormulario(form) {

    var alocacao = {
        nome: form.nome.value,
        curso: form.curso.value,
        sala: form.sala.value,
        data: form.data.value,
        turno: form.turno.value,
    }

    return alocacao;
}

function montaTr(alocacao) {
    var alocacaoTr = document.createElement("tr");
    alocacaoTr.classList.add("alocacao");

    alocacaoTr.appendChild(montaTd(alocacao.nome, "info-nome"));
    alocacaoTr.appendChild(montaTd(alocacao.curso, "info-curso"));
    alocacaoTr.appendChild(montaTd(alocacao.sala, "info-sala"));
    alocacaoTr.appendChild(montaTd(alocacao.data, "info-data"));
    alocacaoTr.appendChild(montaTd(alocacao.turno, "info-turno"));

    return alocacaoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
