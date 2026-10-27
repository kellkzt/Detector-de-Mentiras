let perguntas = [
    "Você esteve no local onde ocorreu o crime no dia do acontecimento? Digite Sim ou Não:",
   "Você conhecia a vítima antes do ocorrido? Digite Sim ou Não: ",
    "Você teve contato com a vítima nas 24 horas anteriores ao crime? Digite Sim ou Não:",
    "Você possui alguma informação sobre o crime que não relatou as autoridades? Digite Sim ou Não:",
    " Você já negou ou omitiu conhecer alguma informação crucial para a investigação? Digite Sim ou Não:",
    " Você já tomou uma atitude que não gostaria que viesse a publico? Digite Sim ou Não:",
     "Você já deixou alguém acreditar em algo que sabia não ser verdadeiro? Digite Sim ou Não: ",
    "Você tem antecedentes criminais ou passagem pela polícia? Digite Sim ou Não: ",
    "Se pudesse ser verificadas suas últimas declarações, encontraria uma contradição importante? Digite Sim ou Não: ",
    "Existe alguma resposta que você mudaria caso soubesse que todas as informações poderiam ser verificadas? Digite Sim ou Não: ",
];

let respostas = [];
let atual = 0;
let sim=0;

mostrarPergunta();

function mostrarPergunta() {
    document.getElementById("pergunta").innerHTML = perguntas[atual];
    document.getElementById("numero").innerHTML = "Pergunta " + (atual + 1);
}

function responder() {

    let resposta = document.getElementById("resposta").value;

    if (resposta == "") {
        alert("Escolha uma resposta!");
        return;
    }
    if (resposta.toLowerCase() == "sim") {
        sim++;
    }

    respostas[atual] = resposta;
    atual++;

    document.getElementById("resposta").value = "";

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        resultado();
    }
}

function resultado() {
    alert(sim)

    if (sim <= 4){
        
     mensagem = "Classificação: Inocente, \n";
     mensagem += "Você não possui envolvimento com o crime! ";
} else if (sim == 5){
     mensagem = "Classificação: Suspeito, \n";
     mensagem += " Sujeito a uma investigação mais aprofundada!"
} else if( sim >= 6 && sim <= 8){
     mensagem = "Classificação: Cúmplice, \n";
     mensagem += " Você possui envolvimento com o crime e deve ser investigado!"
} else {
     mensagem = "Classificação: Culpado, \n";
     mensagem += " Você é considerado culpado e deve ser preso!"
}
    //let pontos = 0;

   //if (respostas[0] != respostas[3]) pontos++;
   // if (respostas[1] != respostas[4]) pontos++;
   // if (respostas[2] != respostas[5]) pontos++;

  //  let mensagem = "";

  //  switch (pontos) {
  //      case 0:
   //         mensagem = "VERDADE! Respostas consistentes.";
   //         break;

  //      case 1:
  //          mensagem = "SUSPEITO! Uma contradição.";
  //          break;

 //       default:
   //         mensagem = "POSSÍVEL MENTIRA! Várias contradições.";
  //  }

    document.getElementById("pergunta").innerHTML = mensagem;
    document.getElementById("numero").innerHTML = "Fim do interrogatório";

    document.getElementById("resposta").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("reiniciar").style.display = "inline-block";
}

function reiniciarQuestionario() {
    location.reload();
}