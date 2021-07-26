// establish all required elements-- CONST= ELEMENTS WILL ALWAYS PERFORM 1 ACTION
const start-btn = document.querySelector(".start-btn button")
const info-box = document.querySelector(".info-box")
const exit-button = .querySelector(".buttons .quit")
const restart-btn = .querySelector(".buttons .restart");
const quiz-box = document.querySelector(".quiz-box")

// IF START BUTTON CLICKED... show info box
start-btn.onclick = ()=>{
    info-box.classlist.add("activeInfo"); 
}
// IF EXIT BUTTON CLICKED... hide info box
// exit-btn.onclick = ()=>{
    // info-box.classlist.remove("activeInfo");
// }

// IF QUIT BUTTON CLICKED... hide info box
exit-btn.onclick = ()=>{
    info-box.classlist.remove("activeInfo");
}

// IF RESTART BUTTON CLICKED... hide info box & quiz box
exit-btn.onclick = ()=>{
    info-box.classlist.remove("activeQuiz");
    quiz-box.classlist.add("activeQuiz");
}

// QUESTIONS---creating an array and passin the number, questions, rules, and answer
let questions = [
    {
        numb:1,
        question: "Who invented Javascript?",
        answer: "Brendan Eich"
        options: [
            "Brendan Eich"
            "Brendan Eichman"
            "Brian Griese"
            "Brendan Schaub"
        ]
    },
];






// Click event creadted for the start button to load questions & hide buttin after clicking
// $(".start-btn").on("click", function(){
    // this removes start page from view
    // $(".board").hide();
    // console.log("user clicked start");
// })

// var question = [

[// question: "blah blah"
// answer 1 ""
// answer 2 ""
// answer 3 ""
// answer 4 ""
// ]
// ]

// question 2: "blah blah"
// answer 1 ""
// answer 2 ""
// answer 3 ""
// answer 4 ""

// console.log(question)
// console.log()

// var timer = 75;
// var score = 0;


// function startTimer(question, time, score) {
// jQuery.createQuestions(question);
// jQuery.createTimer(time);
// jQuery.createScore(score)
// 
// }

// startTimer(questions, timer, score);

// if questions  = 0 {
    // timer === 0
// }

// if timer === 0 {
    // prompt."enter your initials"
    // }