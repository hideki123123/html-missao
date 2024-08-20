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
                texto:"voce tera amigos confiaveis mas,",
                afirmacao: "voce nao pode pedir nada para eles",
            },
            {
                texto:"o tiktok pararia de existir mas,",
                afirmacao:"nada de ruim acontece",
            },
    ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto:"a natureza se restaura mas,",
                afirmacao: "o seu 3° @ falece",
            },
            {
                texto:"as tartarugas poderiam usar canudos para tomar agua mas,",
                afirmacao:"elas nao parariam de tomar até acabar",
            },
    ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto:"elon musk te da todo o dinheiro dele, porém,",
                afirmacao: "voce morre",
            },
            {
                texto:"fortnite é real mas...",
                afirmacao:"fortnite é real",
            },
    ]
    },   
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}
function mostraAlternativas (){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> opcaoSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }

    function respostaSelecionada (opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
historiaFinal = alternativa;
        atual++;
        mostraPerguntas()
    }
}
mostraPerguntas();