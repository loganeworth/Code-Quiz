const questions = [
    {
        question: "What is 36/6?",
        answers: {
            a: '5',
            b: '7',
            c: '6',
            d: '6.5',
        },
        correctAnswer: '6'
    },
    {
        question: "How many states does Michigan border?",
        answers: {
            a: '4',
            b: '3',
            c: '2',
            d: '5',
        },
        correctAnswer: '3'
    },
    {
        question: "What organelles of a cell are referred to as 'the powerhouse of the cell?'",
        answers: {
            a: 'Nucleus',
            b: 'Cytoplasm',
            c: 'Chloroplast',
            d: 'Mitochondria',
        },
        correctAnswer: 'Mitochondria'
    },
    {
        question: "What is the capitol of Minnesota",
        answers: {
            a: 'Duluth',
            b: 'Minneapolis',
            c: 'St. Paul',
            d: 'Rochester',
        },
        correctAnswer: 'St. Paul'
    },
    {
        question: 'What is the smallest state in the continental United States?',
        answers: {
            a: 'Connecticut',
            b: 'Hawaii',
            c: 'Delaware',
            d: 'Rhode Island',
        },
        correctAnswer: 'Rhode Island'
    }
    
]
let currentQuestion = 0;
let timeLeft = 30;
let userForm = document.querySelector('#user-form');
let userInput = document.querySelector('#user-text');
let userList = document.querySelector('#user-list');
let users = [];

console.log(questions[0].question)
console.log(questions[0].correctAnswer, questions[1].correctAnswer)
console.log(questions[0].answers.a)
console.log(questions[0].answers.b)
console.log(questions[0].answers.c)
console.log(questions[0].answers.d)

function displayQuestion() {
    let displayQuestionEl = document.querySelector('.displayQuestion')
    let displayAnswer1 = document.querySelector('.displayAnswer1')
    let displayAnswer2 = document.querySelector('.displayAnswer2')
    let displayAnswer3 = document.querySelector('.displayAnswer3')
    let displayAnswer4 = document.querySelector('.displayAnswer4')

    displayQuestionEl.textContent = questions[currentQuestion].question
    displayAnswer1.textContent = questions[currentQuestion].answers.a
    displayAnswer2.textContent = questions[currentQuestion].answers.b
    displayAnswer3.textContent = questions[currentQuestion].answers.c
    displayAnswer4.textContent = questions[currentQuestion].answers.d


}



function checkAnswer(event) {
    event.preventDefault()
    console.log(event.target.innerText)
    let correctAnswer = questions[currentQuestion].correctAnswer
    console.log(correctAnswer)
    if (currentQuestion === questions.length - 1){
        gameOver()
    };
    if (correctAnswer === event.target.innerText) {
        console.log('correct')
        currentQuestion = currentQuestion + 1;
        timeLeft = timeLeft + 1;
        displayQuestion();
        
        
    } else {
        console.log('incorrect')
        timeLeft = timeLeft - 5;
    }

    // localStorage.setItem(timeLeft)

}

// *THE BELOW COMMENTED OUT CODE IS FOR LATER, SO I CAN GO BACK AND FIX THIS QUIZ

// function Leaderboard(initials, score) {
//     const list = document.querySelector('#user-list')
//     let li = document.createElement('li')
//     list.append(li)
// }

// Leaderboard()


// localStorage.setItem("#user-text", input.val())

// userForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let userText = userInput.value.trim();
//     if (userText === "") {
//         return;
//     }

//     users.push(userText);
//     userInput.value = "";

//     localStorage.push(userText)
    
// }
// );

// END OF CODE THAT WILL COME BACK TO*

function gameOver() {
    document.querySelector('.form').style.display = 'block';
    document.querySelector('.disappear').style.display = 'none';
    console.log(timeLeft)
    // let input = document.querySelector('.input')
    // console.log(input)
    // let button = document.querySelector('.button')
    // console.log(button)
    
    
}


function start() {
    document.querySelector('.hide').style.display = 'block';
    
    displayQuestion()

    let elem = document.querySelector('.timer');
    
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft === -1) {
        clearTimeout(timerId);
        
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
    
}

