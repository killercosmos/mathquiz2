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
var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;;
var answer = parseInt(num1) * parseInt(num2);


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
var answer_turn = "player2";

function check()
{
    var answer_given = document.getElementById('answer').value;
    var correct_answer = parseInt(num1)*parseInt(num2);
    if(answer_given == correct_answer)
    {
        if(answer_turn = "player2")
        {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_name + " Score : " + player2_score;
        }
        else
        {
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML =player1_name + " Score : " + player1_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question : " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question : " + player1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer : " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer : " + player1_name;
    }
document.getElementById("output").innerHTML = "";


}
