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
                texto:"ser a pessoa mais rica do mundo, mas",
                afirmacao: "você só pode comprar coisas infláveis",
            },
            {
                texto:"voce se torna a pessoa mais amada do mundo, mas",
                afirmacao:"a pessoa que você mais ama te odeia",
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
                texto:"você tira todo lixo da praia, mas",
                afirmacao:"o lixo vai todo para sua casa",
            },
    ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto:"Elon musk te da toda sua fortuna, mas",
                afirmacao: "você perde suas duas pernas",
            },
            {
                texto:"ter o melhor pc do mercado, mas",
                afirmacao:"você não pode usar teclado",
            },
    ]
    },   
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas(){
    if(atual >= perguntas.length){
        mostraPerguntas();
        return
    }
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
historiaFinal += afirmacoes + "";
        atual++;
        mostraPerguntas()
    }
}
function mostraResultado(){
    caixaPerguntas.textContent = "esse caba escolheu";
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="greed";
}
mostraPerguntas();