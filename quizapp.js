const quizDB = [{
    question: "Q1 : what  is the Full Form oF Html?",
    a: "Hyper Text Markup Language",
    b: "Hyper  Text mashup Language",
    c: "Hyper Tutorial Markup language",
    d: "Hyper Text Marking Language",
    ans: "ans1"
},
{
    question: "Q2 : what  is the Full Form Of CSS",
    a: "Cascading Style sheet",
    b: "Cascading Super sheet",
    c: "Cascading Super style",
    d: "Cascading supportive sheet",
    ans: "ans1"
},
{
    question: "Q3 : what Is The Purpose Of Javascript",
    a: "To Create Dynamic Webpages",
    b: "To Create Static Webpages",
    c: "To Develop Modularity",
    d: "To Create Datatbases",
    ans: "ans1"
},{
    question: "Q4 : Javascript is a _______ Programming Language",
    a: "Object Based",
    b: "Object Oriented",
    c: "Bottom-up approach",
    d: "System Based",
    ans: "ans1"
},{
    question: "Q5 : The Following Are The key words in Javascript?",
    a: "Var,Let,Const",
    b: "constant,integer",
    c: "variable, radiar",
    d: "only var",
    ans: "ans1"
},{
    question: "Q6 : The _____ Tag is used to create form in HTML?",
    a: "<form><form/>",
    b: "<table>",
    c: "<h1>",
    d: "<br/>",
    ans: "ans1"
},
{
    question: "Q7 : The JSON stands for _____?",
    a: "Javascript Object Notation",
    b: "Javascript Obect Name",
    c: "Javascript Orient Notation",
    d: "Javascript Objected Nomination",
    ans: "ans1"
},
{
    question: "Q8 : The Following are the key words in Javascript",
    a: "Var,Let,Const",
    b: "constant,integer",
    c: "variable, radiar",
    d: "only var",
    ans: "ans1"
}, 
{
    question: "Q9 : Javascript is a Case senstive programming Language",
    a: "True",
    b: "False",
    c: "Not Applicable",
    d: "None of the above",
    ans: "ans1"
},
{
    question: "Q10 : HTTP stands for?",
    a: "Hyper Text Transfer Protocol",
    b: " Hyperly tranfering Protocol",
    c: "Hypo Text Transmitting Protocol",
    d: "Hybrid Text Transfer Protocol",
    ans: "ans1"
}
];

let length = quizDB.length;

let quest = document.getElementById("#question");
const option1 = document.querySelector("#option1");
const option2 =  document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const scored = document.querySelector("#score");
const section = document.querySelector("#section");

let question_number = 0;
let score = 0;
console.log(score);
const loadQuestion = ()=>{
    quest.innerText = quizDB[question_number].question;
    option1.innerText = quizDB[question_number].a;
    option2.innerText = quizDB[question_number].b;
    option3.innerText = quizDB[question_number].c;
    option4.innerText = quizDB[question_number].d;    

}

loadQuestion();


const answercheck = () =>{
    let answer;
    answers.forEach((ele)=>{
        if(ele.checked){
            answer=ele.id;
        }
    });
    return answer;
}
const deselectAll = () =>{
    answers.forEach((ele)=> ele.checked=false);
}
submit.addEventListener('click',()=>{
    const answercheckd = answercheck();

    if(answercheckd === quizDB[question_number].ans){
        score= score+1;
        console.log(score);
       

    }
    question_number++;
    deselectAll();
    if(question_number<quizDB.length){
        loadQuestion();
       
    }

    else{
                scored.innerHTML = `<h3> Total Scored ${score}/${length} </h3> 
                <button class="button" onclick = "location.reload();"> Play Again </button>`;
                scored.classList.remove('scoreArea') ; 
                submit.classList.add('scoreArea');
    }

    console.log("score");
    
});



