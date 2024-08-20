const caixaprincipal = document.querySelector('.caixa-principal');
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector("caixaResultado");
const caixaresultados = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "você vai ter muito dinheiro, mas",
                afirmacao: "só pode gastar esse dinheiro no país Butão",
            }

        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "árvores nescem a cada óbito humano, mas",
                afirmacao: "você é o primeiro a morrer",
            }
        ]
        },
        {
        enunciado: " No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "ter o melhor pc do mercado, mas",
                afirmacao: "você não pode usar nem teclado e nem mouse",
            }
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
        botaoAlternativa.addEventListener("click", ()=> opcaoSelecionada(afirmacao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }

    function respostaSelecionada (opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;

        atual++;
        mostraPerguntas()
    }
}
mostraPerguntas();