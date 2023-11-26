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
    question: "Antes da carreira musical, quais foram os trabalhos de Cássia Eller?",
    answers: [
      { text: "Vendedora, motorista e advogada", correct: false },
      { text: "Diarista, secretária e médica", correct: false },
      { text: "Garçonete, cozinheira e secretária", correct: true },
      { text: "Garçonete, vendedora e bancária", correct: false }
    ]
  },
  {
    question: "Qual música Michael Jackson escreveu sobre o problema que enfrentava com sua pele?",
    answers: [
      { text: "Billie Jean", correct: false },
      { text: "Smooth Criminal", correct: false },
      { text: "Black or White", correct: true },
      { text: "Chicago", correct: false }
    ]
  },
  {
    question: 'Em qual ano Rita Lee foi presa durante a ditadura militar?',
    answers: [
      { text: '1976', correct: true },
      { text: '1984', correct: false },
      { text: '1966', correct: false },
      { text: '1970', correct: false }
    ]
  },
  {
    question: 'O grupo musical ABBA escreveu a música "Mamma Mia" exclusivamente para o filme de mesmo título.',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Quem foi o responsável por revolucionar os videoclipes?',
    answers: [
      { text: 'Queen', correct: false },
      { text: 'Elvis Presley', correct: false },
      { text: 'Michael Jackson', correct: true },
      { text: 'Madonna', correct: false }
    ]
  },
  {
    question: 'Quais artistas faleceram por conta da AIDS?',
    answers: [
      { text: 'George Michael, Ney Matogrosso e Tim Maia', correct: false },
      { text: 'Renato Russo, Cazuza e Freddie Mercury', correct: true },
      { text: 'Cássia Eller, Freddie Mercury e Michael Jackson', correct: false },
      { text: 'Tim Maia, Renato Russo e Rita Lee', correct: false }
    ]
  },
  {
    question: 'Qual a formação de Freddie Mercury?',
    answers: [
      { text: 'Odontologia', correct: false },
      { text: 'Música', correct: false },
      { text: 'Biologia', correct: false },
      { text: 'Design gráfico', correct: true },
    ]
  },
]