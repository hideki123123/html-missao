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
                texto:"voce tera amigos confiaveis mas, voce nao pode pedir nada para eles",
                afirmacao: "",
            },
            {
                texto:"o tiktok pararia de existir mas, nada de ruim acontece",
                afirmacao:"",
            },
    ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto:"a natureza se restaura mas, o seu 3° @ falece",
                afirmacao: "",
            },
            {
                texto:"as tartarugas poderiam usar canudos para tomar agua mas, elas nao parariam de tomar até acabar",
                afirmacao:"",
            },
    ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto:"elon musk te da todo o dinheiro dele, porém, voce morre",
                afirmacao: "",
            },
            {
                texto:"fortnite é real mas...fortnite é real",
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
    caixaPerguntas.textContent = "desce duvidando, sobe acreditando...";
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()
