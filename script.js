// O Banco de Dados
let produtos = [];

// Função para Adicionar
function adicionar() {
    const nome = document.getElementById('inputProduto').value;
    const preco = parseFloat(document.getElementById('inputPreco').value);
    const qtd = parseInt(document.getElementById('inputQtd').value);

    // Cria o objeto e adiciona no array
    const novoProduto = { nome: nome, preco: preco, qtd: qtd };
    produtos.push(novoProduto);

    // Exibe mensagem de sucesso
    document.getElementById('resultado').innerHTML =
    `<p>Produto Adicionado. Total Cadastrados: ${produtos.length}</p>;`
}

// Função para Remover
function remover() {
    // Pega o índice digitado no campo de texto
    const indice = parseInt(document.getElementById('inputIndice').value);

    // Verifica se o índice é válido (se existe no array)
    if (indice >= 0 && indice < produtos.length) {
        // Remove 1 item na posição 'indice'
        produtos.splice(indice, 1);

        document.getElementById('resultado').innerHTML = `<p>Item do índice ${indice} removido com sucesso!</p>`;
    } else {
        document.getElementById('resultado').innerHTML = `<p style="color: red;">Erro: Índice inválido!</p>`;
    }
    // Limpa p campo de índice após a ação
    document.getElementById('inputIndice').value = "";
    }

// Função para Listar Produtos
function listar() {
    // Se o array estiver vazio, avisa o usuário
    if (produtos.length === 0) {
        document.getElementById('resultado').innerHTML = "<p>Nenhum produto cadastrado para Listar.</p>";
        return;
    }

    // Estrutura da Tabela
    let tabela = `<h3>Produtos Cadastrados</h3>
                  <table border="1" style="border-collapse; width: 50%;">
                   <thead>
                       <tr>
                         <th>Índice</th>
                         <th>Produto</th>
                         <th>Preço (R$)</th>
                         <th>Qtd</th>
                         <th>Subtotal (R$)</th>
                        </tr>
                    </thead>
                    <tbody>`; 

    // Loop para criar cada linha (tr) da tabela
    produtos.forEach((prod, i) => {
        let subtotal = prod.preco * prod.qtd;
        tabela += `<tr>
                    <td>${i}</td>
                    <td>${prod.nome}</td>
                    <td>${prod.preco.toFixed(2)}</td>
                    <td>${prod.qtd}</td>
                    <td>${subtotal.toFixed(2)}</td>
                   </tr>`;
    });

    tabela += `</tbody></table>`;
    
    // Joga a tabela para dentro da div de resultado
    document.getElementById('resultado').innerHTML = tabela;
}

function resumo() {
        if (produtos.length === 0) {
            document.getElementById('resultado').innerHTML = "<p>O Estoque está vazio.</p>";
            return;
        }

        let totalItens = 0;
        let valorTotalEstoque = 0;

        // Percorre o array para somar as quantidades e os valores
        for (let p of produtos) {
            totalItens += p.qtd;
            valorTotalEstoque += (p.preco * p.qtd);
        }

        // Exibe o resumo conforme o design solicitado
        document.getElementById('resultado').innerHTML =`
            <h3>Resumo</h3>
            <p>Total de produtos (linhas): ${produtos.length}</p>
            <p>Total de itens (somando quantidades): ${totalItens}</p>
            <p>Valor total do estoque: <b>R$ ${valorTotalEstoque.toFixed(2)}</b></p>
        `; 
}

// Função de Limpar Tudo
function limparTudo() {
    produtos = []; // Esvazia o array
    document.getElementById('resultado').innerHTML = "<p>Todos os produtos foram removidos.</p>";

    // Limpa também os inputs para ficar visualmente limpo
    document.getElementById('inputProduto').value = "";
    document.getElementById('inputPreco').value = "";
    document.getElementById('inputQtd').value = "";
    document.getElementById('inputIndice').value = "";
}
