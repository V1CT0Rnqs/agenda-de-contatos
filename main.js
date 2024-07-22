const form = document.getElementById('form-contato');
const nome = [];
const telefone = [];

    let coluna = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if(nome.includes(inputNome.value)){
        alert(`${inputNome.value} já existe`);
        alert(`${inputTelefone.value} já existe`);
    } else {
        nome.push(inputNome.value);
        telefone.push(parseFloat(inputNome));

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        coluna += linha;
    }

    inputNome.value = '';
    inputNome.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = coluna;
}
