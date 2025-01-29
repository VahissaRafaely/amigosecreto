let amigos = []; // Array para armazenar os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nomeInput = document.getElementById('nome');
  console.log(nomeInput); // Adiciona um log para depuração
  const nome = nomeInput.value.trim();

  // Verifica se o campo está vazio
  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nome);
  nomeInput.value = ''; // Limpa o campo de texto
  atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista existente

  // Percorre o array de amigos e cria elementos de lista
  for (const amigo of amigos) {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  // Verifica se há amigos na lista
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo para sortear.');
    return;
  }

  // Gera um índice aleatório
  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  // Mostra o resultado do sorteio
  const resultado = document.getElementById('resultado');
  resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}