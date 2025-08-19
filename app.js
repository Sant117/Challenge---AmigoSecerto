//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista onde vou guardar os nomes
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    let campoNome = document.getElementById("amigo");
    let nomeAmigo = campoNome.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        mostrarLista();
    }

    campoNome.value = "";
    campoNome.focus();
}

// Função para mostrar os nomes na tela
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O amigo secreto sorteado foi: " + amigoSorteado;
}
