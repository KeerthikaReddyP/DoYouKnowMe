var readlineSync= require("readline-sync");
var userName=readlineSync.question("What's your name? ");
console.log("Welcome "+userName+". I'm Keerthika. Let's see how well do you know me.");
var score=0;
console.log("--------------------");
function play(userAns,answer){
  if(userAns===answer){
    console.log("Correct.");
    score++;
  }
  else{
    console.log("Wrong. It's "+answer+"!");
  }
  console.log("Current score is "+score);
  console.log("--------------------");
}

var arr=[
  {
    question:"What's my fav food? ",
    answer: "Dosa",
  },
  {
    question:"Am I an Introvert or Extrovert? ",
    answer: "Introvert",
  },
  {
    question:"What do I choose? Icecream or Panipuri? ",
    answer: "Panipuri",
  },
  {
    question:"Books or Bikes? ",
    answer: "Books",
  },
  {
    question:"Black or Pink? ",
    answer: "Pink",
  },
];

for(let i=0;i<arr.length;i++){
  var userAnswer=readlineSync.question(arr[i].question);
  play(userAnswer,arr[i].answer);
}

console.log("Your final score is "+score);
if(score==5) console.log("Awwww, you know me well.");
else if(score>=3) console.log("I'm glad that you know me this much.");
else if(score>=1) console.log("That's enough for being my friend.");
else console.log("I see😏😒");