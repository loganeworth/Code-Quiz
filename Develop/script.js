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
console.log(questions[0].question)
console.log(questions[0].correctAnswer, questions[1].correctAnswer)
console.log(questions[0].answers.a)
console.log(questions[0].answers.b)
console.log(questions[0].answers.c)
console.log(questions[0].answers.d)
    let currentQuestion = 0
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
    var timeLeft = 30;
    var elem = document.querySelector('.timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }


}






// const time = document.querySelector('.timer');
// let timeSecond = 30;

// displayTime(timeSecond)

// const countDown = setInterval (()=>{
//     timeSecond--;
//     displayTime(timeSecond);
//     if(timeSecond <= 0 || timeSecond < 1){
//         clearInterval(countDown)
//     }
// },1000)

// function displayTime(second) {
//     const min = Math.floor(second / 60);
//     const sec = Math.floor(second % 60);
//     time.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`
// }




// time.innerHTML = `00:${timeSecond}`;

// const countDown = setInterval (()=>{
//     timeSecond--;
//     time.innerHTML = `00:${timeSecond}`;
//     if(timeSecond<0 || timeSecond<1);
// },)

// let count = 30;
// let interval = setInterval(function(){
//     document.getElementById('start-btn');
//     count--;
//     if (count === 0) {
//         clearInterval(interval);
        
//     }
// }, 30);

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