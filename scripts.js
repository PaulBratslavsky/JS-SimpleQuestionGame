(()=> {

console.log('Working...');
/*********************************************
    GLOBAL VARIABLES
*********************************************/
var isGameOn = true;
var questionList = [];

var score = [0,0];

/*********************************************
    FUNCTION CONSTRUCTOR
*********************************************/
function Questions(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

// Create questions
var question1 = new Questions('Do you like Javasript?', ['yes', 'no'], 0);
var question2 = new Questions('Do you not like Javasript?', ['yes', 'no'], 1)
var question3 = new Questions('Do you have two eyes?', ['yes', 'no'], 0)
var question4 = new Questions('Do you have a big belly?', ['yes', 'no'], 1)

questionList = [question1, question2, question3, question4];


/*********************************************
    MAIN 
*********************************************/

 while (isGameOn) {

    if ( questionList && questionList.length > 0 ) {
        getAnswer(showQuestion(randomQuestion(questionList)));
    } else {
        exitGame();
    }

}


/*********************************************
    FUNCTIONS
*********************************************/
function playGame() {
    console.log('Game is playing!');
}

function exitGame() {
    isGameOn = false;
    console.log('Game shut down.');

    showFinalScore();
}

function randomQuestion(list) {
    var listLength = list.length;
    var randomChoice = Math.ceil(Math.random() * listLength - 1 );
    return list[randomChoice];
}

function showQuestion(singleQuestion) {
    alert(singleQuestion.question);
    return singleQuestion;
}

function getAnswer(question) {
    var result = prompt('type "yes","no" or "exit" to quit');
    if ( result.toLowerCase() === question.answers[question.correct].toLowerCase() ) {
        score[0] += 1; 

        removeCorrectQuestion(question.question);
        alert('you are correct.');

        console.log(score[0], 'correct');
    } else if ( result.toLowerCase() === 'exit') {
        console.log('Exit game.')
        exitGame();
    }
    else {
        score[1] += 1;
        alert('You are wrong.');
        console.log(score[1], 'incorrect')
    }
}

function showFinalScore() {
    alert(`You got ${score[0]} correct answers and ${score[1]} wrong answers.`);
}

function removeCorrectQuestion(current) {
    console.log(questionList, 'Before filter')
    var x = questionList.filter( (item) => { 
         return item.question !== current; 
    });
    
    questionList = x;
    console.log(questionList, 'After filter')
}

})();