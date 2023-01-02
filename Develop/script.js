let questions = [
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
        question: "Which organelles of a cell are referred to as 'the powerhouse of the cell?'",
        answers: {
            a: 'Nucleus',
            b: 'Cytoplasm',
            c: 'Chloroplast',
            d: 'Mitochondria',
        },
        correctAnswers: 'Mitochondria'
    },
    {
        question: "",
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: '',
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    }
    
]
console.log(questions[0].question)
console.log(questions[0].correctAnswer, questions[1].correctAnswer)
console.log(questions[0].answers.a)
console.log(questions[0].answers.b)
console.log(questions[0].answers.c)
console.log(questions[0].answers.d)
    var currentQuestion = 0
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
    var correctAnswer = questions[currentQuestion].correctAnswer
    if (correctAnswer === event.target.innerText) {
        console.log('correct')
        if ((questions.length - 1) > currentQuestion) {
            currentQuestion = currentQuestion + 1;
            displayQuestion();
        }
    } else {
        console.log('incorrect')
    }




}

function toggleQuestion1() {
    let Question1 = document.querySelector('.hide');
    // let displaySetting = Question1.style.display;
    // let startButton = document.getElementById('start-btn');
    console.log(Question1)
    Question1.style.display = 'block'
    displayQuestion()
    // if (displaySetting == 'none') {
    //     Question1.style.display = 'block';
    // }
    // else {
    //     Question1.style.display = 'none';
    // }
}

console.log(toggleQuestion1)

// document.getElementById('start-btn').addEventListener('click',function(){
//     let hide = document.getElementsByClassName('hide');
//     for(i =0;i < hide.length ; i++){
//         hide[i].style.display = 'block';
//     }
// })

// document.getElementById('start-btn'),function(){
//     let hide = document.getElementsByClassName('hide');
//     for(i =0;i < hide.length ; i++){
//         hide[i].style.display = 'block';
//     }
// }