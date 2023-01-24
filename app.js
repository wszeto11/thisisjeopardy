const game = document.getElementById('main-game')
const playerTotal = document.getElementById('total')

const gameCategories = [
  {
    topic: 'The Office',
    questions: [
      {
        question: "What is Michael Scott's middle name?",
        answers: ['Henry', 'Gary'],
        correct: 'Gary',
        value: '100',

        question: 'In what year did The Office 1st premiere?',
        answers: ['2005', '2013'],
        correct: '2005',
        value: '200',

        question: 'Who did Jim date before FINALLY dating Pam?',
        answers: ['Angela Martin', 'Karen Filippelli'],
        correct: 'Karen Filippelli',
        value: '300',

        question: "What is the make and model of Michael Scott's car?",
        answers: ['Chrysler Sebring', 'Dodge Neon'],
        correct: 'Chrysler Sebring',
        value: '400',
        // ^ make dailyDoubleOne

        question: 'Where did Pam go to art school?',
        answers: ['Philadelphia', 'NYC'],
        answer: 'NYC',
        value: '500'
      }
    ]
  },
  {
    topic: 'Star Trek',
    questions: [
      {
        question: 'Which starship has Captain Picard commanded?',
        answers: ['Enterprise', 'Apollo'],
        correct: 'Enterprise',
        value: '100',

        question: "What is the name of Spock's home planet?",
        answers: ['Romulus', 'Vulcan'],
        correct: 'Vulcan',
        value: '200',

        question:
          'Michelle Yeoh plays which character in Star Trek: Discovery?',
        answers: ['Sulu', 'Philippa Georgiou'],
        correct: 'Philippa Georgiou',
        value: '300',

        question:
          'The USS Discovery utilizes what experimental propulsion system?',
        answers: ['Spore Drive', 'Proto Drive'],
        correct: 'Spore Drive',
        value: '400',

        question: 'In what year was the United Federation of Planets founded?',
        answers: ['2213', '2161'],
        correct: '2161',
        value: '500'
      }
    ]
  },
  {
    topic: 'Knicks',
    questions: [
      {
        question: 'Who is the latest Knick to be an all-star?',
        answers: ['Julius Randle', 'Bob Dole'],
        correct: 'Julius Randle',
        value: '100',

        question: 'Where do the Knicks play their home games?',
        answers: ['Barclay Center', 'Madison Square Garden'],
        correct: 'Madison Square Garden',
        value: '200',

        question: 'Who was the last Knick to win a scoring title?',
        answers: ['Carmelo Anthony', 'Patrick Ewing'],
        correct: 'Carmelo Anthony',
        value: '300',

        question: 'When was the last time the Knicks won the Finals?',
        answers: ['1999', '1973'],
        correct: '1973',
        value: '400',

        question: 'How many head coaches have the Knicks had since 2009?',
        answers: ['8', '5'],
        correct: '8',
        value: '500,'
      }
    ]
  },
  {
    topic: 'Empire State',
    questions: [
      {
        question: 'What is the name of the tallest building in New York state?',
        answers: ['Empire State Building', 'Madison Square Garden'],
        correct: 'Empire State Building',
        value: '100',

        question: 'What is the capital of New York?',
        answers: ['Manhattan', 'Albany'],
        correct: 'Albany',
        value: '200',

        question:
          "How many pounds of confetti is used every year during the New Year's Eve celebration?",
        answers: ['3,300', '2,200'],
        correct: '3,300',
        value: '300',

        question: "What is New York's state bird?",
        answers: ['Eastern Goldfinch', 'Eastern Bluebird'],
        correct: 'Eastern Bluebird',
        value: '400',

        question: 'How many counties make up New York state?',
        answers: ['62', '45'],
        correct: '62',
        value: '500'
      }
    ]
  },
  {
    topic: 'Superheroes',
    questions: [
      {
        question: "What is Spider Man's real name?",
        answers: ['Eddie Brock', 'Peter Parker'],
        correct: 'Peter Parker',
        value: '100',

        question: 'Who protects Metropolis?',
        answers: ['Green Arrow', 'Superman'],
        correct: 'Superman',
        value: '200',

        question: "When did 'Batman: The Animated Series' make its premiere?",
        answers: ['1992', '1997'],
        correct: '1992',
        value: '300',

        question: 'How many suits of armor has Iron Man created in the MCU?',
        answers: ['85', '15'],
        correct: '85',
        value: '400',

        question: 'What was Wonder Woman originally named?',
        answers: ['Wonder Girl', 'Suprema'],
        correct: 'Suprema',
        value: '500'
      }
    ]
  }
]

function addOfficeCategory(category) {
  const column = document.createElement('div')
  column.classList.add('topic-column')

  const topicTitle = document.createElement('div')
  topicTitle.classList.add('topic-title')
  topicTitle.innerText = category.topic

  column.appendChild(topicTitle)
  game.append(column)
}

gameCategories.forEach((category) => addOfficeCategory(category))
