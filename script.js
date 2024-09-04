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
                texto:"ser a pessoa mais rica do mundo, mas só poderá comprar coisas infláveis",
                afirmacao: "Você é rico, porém quase não compra nada.",
            },
            {
                texto:"você se torna a pessoa mais bonita do mundo, mas seu 3°@ falece",
                afirmacao:"Sabia que está maravilhoso! Mas uma vida vale isso?",
            },
    ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto:"acabar com a poluição do planeta, mas as árvores pegam fogo espontaneamente",
                afirmacao: "Você acabou com a poluição, que bom né? Mas em pouco tempo qualquer sinal de natureza irá desaparecer.",
            },
            {
                texto:"toda água do mar se torna limpa, mas não existe sistema de esgoto",
                afirmacao:"Toda água vai ser limpa, porém irá sujar tudo de novo em pouco tempo, além da nojeira que irá se sujeitar.",
            },
    ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto:"ter o melhor pc do mercado, mas você não pode usar o teclado",
                afirmacao: "Vôce tem um pc brabo, mas quase não usa ele.",
            },
            {
                texto:"ter todo conhecimento sobre programação, mas só poder ensinar, nunca usar",
                afirmacao:"Apesar de ser um expert em programação, nunca mostrará ao mundo seu dom.",
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
    caixaPerguntas.textContent = "No final, você escolheu...";
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()
