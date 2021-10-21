const quiz=[
   {
       question: "Which of these is an animal",
       a:"Tiger",
       b:"Chair",
       c:"Apple",
       d="Orange",
       ans: "ans1"
   },
   {
       question: "Who built The Taj Mahal",
       a:"Abid Ansari",
       b:"Alauddin Khilji",
       c:"Babar",
       d:"Shah Jajan"
       ans:"ans4"
   },
   {
        question: "The capital of India is",
        a:"New Delhi",
        b:"Hyderabad",
        c:"Lucknow",
        d:"Dhanbad",
        ans:"ans1"
   }



];
const question= document.querySelector('.question');
const option1= document.querySelector('#op1');
const option2= document.querySelector('#op2');
const option3= document.querySelector('#op3');
const option4= document.querySelector('#op4');
const submit = document.querySelector('#submit');

const loadQuestion = () => {
    question.innerText=quiz[0].question;
    option1.innerText=quiz[0].a;

}
loadQuestion();

