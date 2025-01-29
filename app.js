//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

     //1 Array para armazenar os nomes
let listaAmigos = [];

//2 Função para adicionar um nome à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome) {
        //3 Adiciona o nome ao array
        listaAmigos.push(nome);

        //4 Cria um item de lista oculto
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        itemLista.style.display = 'none'; 
        //5 Oculta o nome adicional
        document.getElementById('listaAmigos').appendChild(itemLista);

        //6 Limpa o campo de input adicional
        inputAmigo.value = '';
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

//7 Função para sortear um nome
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    //8 Verifica se há pelo menos 3 nomes
    if (listaAmigos.length < 3) {
        alert('Adicione pelo menos 3 nomes para realizar o sorteio.');
        return;
    }

    //9 Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceSorteado];

    //10 Exibe o resultado
    resultado.innerHTML = `<li>${nomeSorteado}</li>`;
}
              