// Alterna entre tema claro e escuro
function alterarFundo() {
    document.body.classList.toggle('escuro');
}

// Cria um card na galeria a partir de uma obra
function criarCard(obj) {
    const colecao = document.getElementById('colecao');

    const card = document.createElement('div');
    card.className = 'card';

    const titulo = document.createElement('h2');
    titulo.textContent = obj.titulo;

    const imagem = document.createElement('img');
    imagem.src = obj.imagem;
    imagem.alt = obj.descImagem;
    imagem.width = 200;

    const descricao = document.createElement('p');
    descricao.textContent = obj.descricao;

    card.append(titulo, imagem, descricao);
    colecao.appendChild(card);
}

// Na página principal: busca a lista no servidor (rota GET) e monta os cards
if (document.getElementById('colecao')) {
    fetch('/api/lista')
        .then(resposta => resposta.json())
        .then(lista => lista.forEach(criarCard))
        .catch(erro => console.error("Erro ao carregar a lista:", erro));
}
