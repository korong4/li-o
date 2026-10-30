// Classe ObraDeArte com a ordem exata dos atributos
class ObraDeArte {
    constructor(titulo, descricao, imagem, descImagem) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    }
}

/*****************************************************/

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impede o recarregamento padrão da página

    // Captura os valores digitados nos inputs
    const tituloF = document.getElementById('titulo').value;
    const imagemF = document.getElementById('imagem').value;
    const descricaoImF = document.getElementById('descricao').value;
    const textoF = document.getElementById('paragrafo').value;

    // Instancia o objeto (atenção à ordem: titulo, descricao, imagem, descImagem)
    const novaObra = new ObraDeArte(tituloF, textoF, imagemF, descricaoImF);

    // Dispara a requisição POST para a API
    fetch('/api/lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaObra)
    })
    .then(resposta => resposta.json())
    .then(() => {
        alert('Obra enviada com sucesso!');
        formulario.reset();
        window.location.href = 'index.html'; // Redireciona para ver o card na galeria
    })
    .catch(erro => console.error("Erro ao enviar:", erro));
});
