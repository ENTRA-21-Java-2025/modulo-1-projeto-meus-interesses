document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();
    
    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        document.getElementById('itemList').appendChild(li);
        input.value = ''; // Limpa o campo de entrada
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('itemList').innerHTML = ''; // Limpa a lista
});

// 1. Adicionar um item à lista
// Linha 1: O código adiciona um ouvinte de evento (addEventListener) ao botão com o ID addButton. Este ouvinte é acionado quando o botão é clicado.
// Linha 2: Obtém o elemento de entrada de texto (input) com o ID itemInput.
// Linha 3: Obtém o valor do campo de entrada, removendo espaços em branco no início e no final com o método trim().
// Linha 5: Verifica se o valor do campo de entrada não está vazio.
// Linha 6: Cria um novo elemento <li> (item de lista).
// Linha 7: Define o texto do novo item de lista como o valor do campo de entrada.
// Linha 8: Adiciona o novo item de lista (<li>) à lista existente com o ID itemList.
// Linha 9: Limpa o campo de entrada, definindo seu valor como uma string vazia.

// 2. Limpar a lista
// Linha 12: Adiciona um ouvinte de evento ao botão com o ID clearButton. Este ouvinte é acionado quando o botão é clicado.
// Linha 13: Define o conteúdo interno do elemento com o ID itemList como uma string vazia (''), o que remove todos os itens da lista.

// Resumo:
// O botão "Adicionar" (addButton) permite que o usuário insira um texto em um campo e o adicione como um item em uma lista.
// O botão "Limpar" (clearButton) remove todos os itens da lista.
// Este código é útil para criar uma lista dinâmica em uma página da web, como uma lista de tarefas ou de compras.