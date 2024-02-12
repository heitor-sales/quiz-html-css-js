const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para se referir a um elemento HTML usando JavaScript?",
    respostas: [
      "document.element('elemento')",
      "document.querySelector('elemento')",
      "getElementById('elemento')",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador usado para atribuição de valor em JavaScript?",
    respostas: [
      "=",
      "==",
      ":=",
    ],
    correta: 0
  },
  {
    pergunta: "Qual desses métodos é usado para imprimir algo no console em JavaScript?",
    respostas: [
      "console.print()",
      "console.write()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: [
      "32",
      "5",
      "Erro",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do método usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "removeLast()",
      "deleteLast()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo de dado retornado pelo operador typeof em JavaScript?",
    respostas: [
      "String",
      "Boolean",
      "String",
    ],
    correta: 2
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "var",
      "let",
      "ambos",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita (valor e tipo)",
      "Atribuição",
      "Comparação solta (apenas valor)",
    ],
    correta: 0
  },
  {
    pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "append()",
      "push()",
      "insert()",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'parseInt()' faz em JavaScript?",
    respostas: [
      "Converte um número para inteiro",
      "Converte uma string para inteiro",
      "Converte um número para string",
    ],
    correta: 1
  }
];

const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for (let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    quizItem.querySelector('dl').appendChild(dt)

    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)

      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
