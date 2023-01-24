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
        question: 'Which starship does Captain Picard command?',
        answers: ['Enterprise', 'Apollo'],
        correct: 'Enterprise',
        value: '100'

        // add 4 more questions
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
        value: '100'

        // add 4 more questions
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
        value: '100'

        // add 4 more questions
      }
    ]
  },
  {
    topic: 'Superheroes',
    questions: [
      {
        question: "What is Spiderman's real name?",
        answers: ['Eddie Brock', 'Peter Parker'],
        correct: 'Peter Parker',
        value: '100'

        // add 4 more questions
      }
    ]
  }
]

console.log(gameCategories)
