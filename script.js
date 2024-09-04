const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textResultado = document.querySelector(".texto-resultado")

const perguntas= [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto:"ser a pessoa mais rica do munod, mas só poderá comprar coisas infláveis",
                afirmacao: "",
            },
            {
                texto:"você se torna a pessoa mais bonita do mundo, mas seu 3°@ falece",
                afirmacao:"",
            },
    ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto:"acabar com a poluição do do planeta, mas as árvores pegam fogo espontaneamente",
                afirmacao: "",
            },
            {
                texto:"toda água do mar se torna limpa, mas não existe sistema de esgoto",
                afirmacao:"",
            },
    ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto:"ter o melhor pc do mercado, mas você não pode usar o teclado",
                afirmacao: "",
            },
            {
                texto:"ter todo conhecimento sobre programação, mas só poder ensinar, nunca usar",
                afirmacao:"",
            },
    ]
    },   
]

let atual = 0;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado()
        return
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa)

}}

function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você faz um site, mas é sobre perguntas";
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()
