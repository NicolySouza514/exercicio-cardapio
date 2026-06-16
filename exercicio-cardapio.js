// Fase 2: Banco de Dados "Fake" (Simulação do JSON do Back-end)
// 5 itens cadastrados com 4 propriedades obrigatórias: id, nome, categoria e preco
const bancoDeDadosJogos = [
    { id: 1, nome: "The Witcher 3", categoria: "RPG", preco: 129.90 },
    { id: 2, nome: "Elden Ring", categoria: "RPG", preco: 249.00 },
    { id: 3, nome: "GTA V", categoria: "Ação", preco: 69.90 },
    { id: 4, nome: "Cyberpunk 2077", categoria: "Ação", preco: 199.90 },
    { id: 5, nome: "Forza Horizon 5", categoria: "Corrida", preco: 219.00 }
];

// Captura da div principal onde os itens serão injetados
const vitrine = document.getElementById("vitrine");

// Fase 3: A Renderização (Função que desenha na tela)
function renderizarTela(listaDeJogos) {
    // Limpa a tela antes de desenhar (evita duplicar itens ao filtrar)
    vitrine.innerHTML = "";

    // Laço de repetição varrendo o array recebido por parâmetro
    listaDeJogos.forEach(jogo => {
        // Criando a estrutura HTML dinamicamente com Template Literals
        vitrine.innerHTML += `
            <div class="game-card">
                <h3>${jogo.nome}</h3>
                <p><strong>Preço:</strong> R$ ${jogo.preco.toFixed(2)}</p>
                <span class="categoria">${jogo.categoria}</span>
            </div>
        `;
    });
}

// Fase 4: A Mágica dos Filtros (.filter)
function filtrarJogos(categoriaSelecionada) {
    // Se a categoria for "Todos", renderiza o banco completo original
    if (categoriaSelecionada === "Todos") {
        renderizarTela(bancoDeDadosJogos);
    } else {
        // Aplica o método .filter() gerando uma nova lista filtrada
        const listaFiltrada = bancoDeDadosJogos.filter(jogo => jogo.categoria === categoriaSelecionada);
        // Manda desenhar apenas a nova lista na tela
        renderizarTela(listaFiltrada);
    }
}

// Inicialização: Renderiza todos os itens assim que a página carrega pela primeira vez
renderizarTela(bancoDeDadosJogos);
