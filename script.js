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
                afirmacao: "afirmacao 1",
            }
               
            ]
        },

            {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
            texto: "alterativa 3",
            afirmacao: "afirmacao 3",
            }
            ]
    
         },

        {    
        enunciado: " No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "alterativa 5",
                afirmacao: "afirmacao 5",
            }
        ]
    },

]

let atual = 0;
let perguntaAtual;

function mostrarPerguntas(){
    perguntaAtual = peruntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent="";
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativas.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostrarPerguntas();
        })
        
        caixaalternativas.appendChild(botaoAlternativa);
    }
}

mostrarPerguntas();