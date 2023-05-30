const questions=[
    { question:"The control centre for human body is",
    answers:[
        {text:"heart",correct:"false"},
        {text:"brain",correct:"true"},
        {text:"liver",correct:"false"},
        {text:"kidney",correct:"false"},
    ]

    },
    {
        question:"How many sense organs do we have?",
    answers:[
        {text:"3",correct:"false"},
        {text:"4",correct:"false"},
        {text:"7",correct:"false"},
        {text:"5",correct:"true"},
    ]
    },
    {
        question:"Plants are also called:",
    answers:[
        {text:"Consumers",correct:"false"},
        {text:"Producers",correct:"true"},
        {text:"Herbivores",correct:"false"},
        {text:"Decomposers",correct:"false"},
    ]
    },
    { 
        question:"When a plant performs the process of photosynthesis, what is produced?",
    answers:[
        {text:"Carbondioxide",correct:"true"},
        {text:"Oxygen",correct:"false"},
        {text:"Nitrogen",correct:"false"},
        {text:"Green pigment",correct:"false"},
    ]
       
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer");
const nextButton=document.getElementById("btn2");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
 currentQuestion.answers.forEach(answer =>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selecAnswer);
 })

}
function resetState(){
   
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selecAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
   }
   else{
    selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
        
    }
    button.disabled=true;
   });
   

}
function showScore(){
    resetState();
    questionElement.innerHTML=`Score: ${score}/${questions.length}`;
      nextButton.innerHTML="Retake"
      nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();