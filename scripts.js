console.log('...Whats UP')



var questions = [
  "Is the rock 6'5 inches tall",
  "Is the rock real name Dwayne Johnson",
  "Is the Rock the current wwe champion",
  "Is the rock signature finish move the peoples elbow",
  "Did the rock invent the rock bottom finesher",
  "Is brett heart the rocks biggest rival",
  "Was the rock's farther a wrestler",
  "Did you ever smell what the rock was cooking",  "Are the drums the rock's favorite instrument",
  "Does the rock Sings",
  "Was the rocks firt debut in 1996 survivor series"
];

var answers = [
  "yes",
  "yes",
  "no",
  "yes",
  "no",
  "no",
  "yes",
  "no",
  "no",
  "yes",
  "yes",
];

var answer;


function getMeAQuestionbro() {
  var rand = Math.floor(Math.random() * questions.length);
  var question = questions[rand]
  console.log(question);
  // console.log(answer);
  return question
}

function getAnswer(question){
  var idx = questions.indexOf(question);
  console.log(idx);
  return answers[idx]
}


function renderQuestion() {
  var question = getMeAQuestionbro();
  $('#question').html( question );
  var answer = getAnswer(question);
  console.log(answer);
}



function setupListeners() {
 $('button#yes').on('click', function(){
   renderQuestion();
 });

}

renderQuestion();
setupListeners();

var pictures = [
"http://dailywrestlingnews.com/wp-content/uploads/2014/10/Rock-SD-moments-gifs-001.gif",
"https://media.giphy.com/media/4g6xgP7FXjy12/giphy.gif", "https://media.giphy.com/media/kMSyCATSq9SEw/giphy.gif",
"https://media.giphy.com/media/V53jWRdPWwO0U/giphy.gif", "https://media3.giphy.com/media/Af6dsiJBh21qg/200.gif",
"https://media2.giphy.com/media/zainSSjEMwOHe/200.gif", "https://media3.giphy.com/media/A9AlCLULGEVpe/200.gif",
"https://media1.giphy.com/media/127h8dMHnk5H5C/200.gif", "https://media1.giphy.com/media/vAEuGaCUzM676/200.gif",
"https://media1.giphy.com/media/5BdqG8zyAzr7W/200.gif", "https://media2.giphy.com/media/bSYfwd2fBTWmc/200.gif",
]

var randomNumber = function(){
  return Math.floor(Math.random() *11);
}

//var checkAnswer(question, answer){
  // if answer is right
  //if (answer === question)
  //return true;
  // else
  // if answer is wrong
  //return false;
//}

$(document).ready(function(){
  $("#yes").on("click", function(){
    var question = $("#question").text();
    var idx = questions.indexOf(question);
    var answer = answers[idx];

    if (answer === "yes"){
      $("#results").html("your Right" + "")
    } else {
      console.log('incorrect');
      $("#results").html("your Wrong Jabroni" + "")
    }

    $("#picId").attr("src", pictures[ randomNumber() ]);
  });

  $("#no").on("click", function(){
    var question = $("#question").text();
    var idx = questions.indexOf(question);
    var answer = answers[idx];

    if (answer === "no"){
      $("#results").html("your Right" + "")
    } else {
      console.log('incorrect');
      $("#results").html("your Wrong Jabroni" + "")
    }

    $("#picId").attr("src", pictures[ randomNumber() ]);
  });


})

var score = 0;
function guess(playerGuess){
  if (playerGuess === answer){
    score= score + 1;
     $('#scoreboard').text(score);
      console.log(score);
  }
}








// function(question, answer)on.click


/*<h2>Do you know "the Rock"</h2>

//var name = "Dwayne Johnson";
var question1 = "What is Rocks name" "?";

//console.log(question1);

<p>What year was "the Rocks" debut?</p>

<p>Whats "The Rock" real name?</p>

<p>What was "The Rock" first wrestler name</p>

<p>Whats "The Rock" favorite instrument?</p>

<p>What does he do to hes challengers?</p>

<p>Whats the Rocks signature finish move?</p>

<p>How old is "The Rock"?</p>

<p>Who is "The Rock" biggest rival?</p>

<p>Who is the Rocks farther ?</p>*/
