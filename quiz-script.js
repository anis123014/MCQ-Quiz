var currentQuestion=0;
var score=0;
var totQuestions=questions.length;

var container=document.getElementById('quizContainer');
var questionEl=document.getElementById('question');
var op1=document.getElementById('opt1');
var op2=document.getElementById('opt2');
var op3=document.getElementById('opt3');
var op4=document.getElementById('opt4');

var nextButton=document.getElementById('nextButton');
var resultCont=document.getElementById('result');

function loadQuestion(questionIndex) {
var q=questions[questionIndex];
questionEl.textContent=(questionIndex +1)+ '. '+q.question;
    op1.textContent=q.option1;
    op2.textContent=q.option2;
    op3.textContent=q.option3;
    op4.textContent=q.option4;
};
function loadNextQuestion() {
var selectedOption=document.querySelector('input[type=radio]:checked');
if(!selectedOption){
    alert('Please select your answer!');
    return;
}
var answer=selectedOption.value;
if(questions[currentQuestion].answer==answer){
    score +=10;
}
selectedOption.checked=false;
currentQuestion++;
if(currentQuestion==totQuestions-1){
    nextButton.textContent='Finish';

}
if (currentQuestion==totQuestions){
    container.style.display='none';
    resultCont.style.display='';
    resultCont.textContent='Your Score : '+ score;
    return;
}
loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);