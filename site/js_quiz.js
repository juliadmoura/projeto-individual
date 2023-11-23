/* criação de variaveis que nao mudam de valor */

const startGameButton = document.querySelector(".start-quiz")
const botao_prox_questao = document.querySelector(".next-question")
const questionsContainer = document.querySelector(".questions-container")
const questionText = document.querySelector(".question")
const answersContainer = document.querySelector(".answers-container")
const answers = document.querySelectorAll(".answer")

let questao_atual = 0
let acertos = 0

startGameButton.addEventListener("click", startGame)
botao_prox_questao.addEventListener("click", mostrar_prox_pergunta)

function startGame() {
  startGameButton.classList.add("hide") /* escondendo o botao inicial do quiz */
  questionsContainer.classList.remove("hide") /* mostrando as perguntas removendo a invisibilidade */
  mostrar_prox_pergunta()
}

/* funcao para aparecer a proxima pergunta */

function mostrar_prox_pergunta() {
  reiniciando()
  
  if (questions.length === questao_atual) { /* caso a quantidade de questoes seja == nossa variavel que informa em qual questao está, ele retorna para a funcao de finalizar o quiz*/
    return finalizar_quiz()
  }

  questionText.textContent = questions[questao_atual].question
  questions[questao_atual].answers.forEach(answer => {
    const nova_resposta = document.createElement("button")
    nova_resposta.classList.add("button", "answer")
    nova_resposta.textContent = answer.text

    /* adicionando uma informação pro botao, caso ele seja correto é possivel conseguir recuperar esse dado */
    if (answer.correct) {
      nova_resposta.dataset.correct = answer.correct
    }
    answersContainer.appendChild(nova_resposta) /* adicionando outro filho para a div, mostrando a nova pergunta */

    nova_resposta.addEventListener("click", resposta_escolhida) /*quando o usuario clicar, verifica se escolheu a resposta certa*/
  })
}

/* funcao que seta todos os comandos ao iniciar uma pergunta do quiz */
function reiniciando() {
  while(answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild)
  }

  botao_prox_questao.classList.add("hide") /* escondendo o botao de prox pergunta */
}

function resposta_escolhida(event) {
  const resposta_clicada = event.target /* informa o botao que ele clicou */

  if (resposta_clicada.dataset.correct) {
    acertos++
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true /* não deixar o usuario clicar em outro botao apos ja ter escolhido */

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  botao_prox_questao.classList.remove("hide")
  questao_atual++
}
/* função de finalização, retorna os resultados do desempenho do usuario */
function finalizar_quiz() {
  const totalQuestions = questions.length
  const performance = Math.floor(acertos * 100 / totalQuestions) /* transformando em porcentagem e arrendondando o resultado */
  
  let message = ""

  switch (true) { /* condição, similar ao else if */
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default: /* = else, entra aqui caso não entre em nenhum dos outros case(if) */
      message = "Pode melhorar :("
  }

  /* mostrando o resultado do quiz, a mensagem sobre o desempenho e dando a opção para o usuario refazer o teste atraves do window.location.reload() */
  questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${acertos} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button">
      Refazer teste
    </button>
  `
}
 /* questoes do quiz em arrays */

const questions = [
  {
    question: "Dentro de qual elemento HTML colocamos o JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false }
    ]
  },
  {
    question: "Onde é o lugar correto para inserir JavaScript?",
    answers: [
      { text: "Tanto no <head> quanto no <body> está correto", correct: true },
      { text: "No <body>", correct: false },
      { text: "No <head>", correct: false },
      { text: "Em outro lugar", correct: false }
    ]
  },
  {
    question: 'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"',
    answers: [
      { text: '<script src="xxx.js">', correct: true },
      { text: '<script href="xxx.js">', correct: false },
      { text: '<script name="xxx.js">', correct: false },
      { text: "Nenhuma das alternativas", correct: false }
    ]
  },
  {
    question: 'O arquivo JavaScript externo deve conter a tag <script>',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Como escrever "Hello World" numa caixa de alerta?',
    answers: [
      { text: 'msg("Hello World");', correct: false },
      { text: 'alert("Hello World");', correct: true },
      { text: 'msgBox("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false }
    ]
  },
  {
    question: 'Como podemos criar uma função no JavaScript?',
    answers: [
      { text: 'function:myFunction()', correct: false },
      { text: 'function myFunction()', correct: true },
      { text: 'function = myFunction()', correct: false },
      { text: 'Nenhum desses códigos criaria uma função', correct: false }
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
]