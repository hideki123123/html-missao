const caixaprincipal = document.querySelector('caixa-principal');
const caixaperguntas = document.querySelector('caixa-perguntas');
const caixaalternativas = document.querySelector('caixa-alternativas');
const caixaresultados = document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "alterativa 1",
                afirmacao: "afirmacao 2",
            }
               
            ]
        },

            {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
            texto: "alterativa 1",
            afirmacao: "afirmacao 2",
            }
            ]
    
         },

        {    
        enunciado: " No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "alterativa 1",
                afirmacao: "afirmacao 2",
            }
        ]
    },

]

let atual = 0;
let perguntaAtual;

function mostrarPerguntas(){
    perguntaAtual = peruntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;

}
function mostrarPerguntas(){
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativas;
        caixaalternativas.appendChild(botaoAlternativa)
    }
}
