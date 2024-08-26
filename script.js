const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor marca de trator?",
        alternativas: [
            {
                texto: "Agralle",
                afirmacao: "Agralle é a melhor marca de trator."
            },
            {
                texto: "Valtra",
                afirmacao: "Valtra é a pior a pior marca de trator."
            }
        ]
    },
    {
        enunciado: "Quantos litros de dieesel vai em um trator?",
        alternativas: [
            {
                texto: "60l de combustivel em um trator.",
                afirmacao: "Resposta correta."
            },
            {
                texto: "20l",
                afirmacao: "20l é uma quantoidade baixa de combustivel."
                
            }
        ]
    },
    {
        enunciado: "Quantas rodas vai em um trator?",
        alternativas: [
            {
                texto: "4 rodas",
                afirmacao: "Um trator possui 4 rodas."
            },
            {
                texto: "2 rodas",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Quantas pessoas cabem dentro de um trator?",
        alternativas: [
            {
                texto: "2 pessoas",
                afirmacao: "2 lugares pois o trator possui só o banco do motorista e um de caroneiro"
            },
            {
                texto: "4 pessoas",
                afirmacao: "Não è 4 bancos pois não tem espaço para isso"
            }
        ]
    },
    {
        enunciado: "Quantas portas tem um trator? ",
        alternativas: [
            {
                texto: "1 porta",
                afirmacao: "pois é só por um lado que entra"
            },
            {
                texto: "3 portas",
                afirmacao: "1 porta pois não há necesidade para ter 3 portas     "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No campo.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Os tratores são muito utilizados!";
}

mostraPergunta();
