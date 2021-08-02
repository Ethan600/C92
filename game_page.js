player1_name = localStorage.getItem("1st_name");
player2_name = localStorage.getItem("2nd_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " :  ";
document.getElementById("player2").innerHTML = player2_name + " :  ";

document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;

document.getElementById("player_ques").innerHTML = "Question turn - " + " " +  player1_name;
document.getElementById("player_ans").innerHTML = "Answer turn - " + " " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    letter_one = word.charAt(1);
    console.log(letter_one);

    mid = Math.floor(word.length/2);
    middle_letter = word.charAt(mid);
    console.log(middle_letter);

    end = word.length - 1;
    ending_letter = word.charAt(end);
    console.log(ending_letter);

    replace_1 = word.replace(letter_one, "_");
    replace_2 = replace_1.replace(middle_letter, "_");
    replace_3 = replace_2.replace(ending_letter, "_");

    console.log(replace_3);

    Question = "<h4 id = 'word_display'>Q." + replace_3 + "</h4>";
    Input_box = "<br> Ans. <input type = 'text' id = 'answer_box' placeholder = 'Enter answer !'>";
    Check = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = Question + Input_box + Check;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_ans =  document.getElementById("answer_box").value;
    get_ans_in_lower_case = get_ans.toLowerCase();
    console.log("Ans in lower case = " + get_ans_in_lower_case);

    if (get_ans_in_lower_case == word){

        if (answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }

        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_ques").innerHTML = "Question turn - " + player2_name;
    }

    else{
        question_turn = "player1";
        document.getElementById("player_ques").innerHTML = "Question turn - " + player1_name;
    }

    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_ans").innerHTML = "Answer turn - " + player2_name;
    }

    else{
        answer_turn = "player1";
        document.getElementById("player_ans").innerHTML = "Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
