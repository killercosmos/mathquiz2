var player1_name = localStorage.getItem("player1_name") ;
var player2_name = localStorage.getItem("player2_name") ;

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":" ;
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_name + "Score : " + player1_score;
document.getElementById("player2_score").innerHTML = player2_name + "Score : " + player2_score;

document.getElementById("player_question").innerHTML = "Question: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer: " + player2_name;

function Send() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;;
    var answer = parseInt(num1) * parseInt(num2);

    var Question = "<h1> Q. " + num1 +"X" + num2 + "</h1>";
    var input = "<br> Answer: <input type = 'text' id = 'answer' placeholder = 'Answer' >";
    var button = "<br> <br> <button id ='check' class = 'btn btn-info' onclick = 'check()'>Check </button> "
    var row = Question + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
var question_turn = "player1";
var answer_turn = "player2"

