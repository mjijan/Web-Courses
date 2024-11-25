var turn = "X";
var game_over = false;
// ---------------------------------------------------------------
function user_click(clicked_div) {

    // if (clicked_div.innerHTML != "")
    if (clicked_div.innerHTML == "X" || clicked_div.innerHTML == "O")
        return;

    if (game_over == true)
        return;

    clicked_div.innerHTML = turn;
    if (turn == "X")
        clicked_div.style.backgroundColor = "rgb(255, 225, 247)";
    else
        clicked_div.style.backgroundColor = "rgb(219, 248, 255)";

    check_wining();

    change_turn();
}
// ---------------------------------------------------------------
function change_turn() {
    if (turn == "X")
        turn = "O";
    else
        turn = "X";
}
// ---------------------------------------------------------------
function check_wining() {
    var d1 = document.getElementById("s1").innerHTML;
    var d2 = document.getElementById("s2").innerHTML;
    var d3 = document.getElementById("s3").innerHTML;

    var d4 = document.getElementById("s4").innerHTML;
    var d5 = document.getElementById("s5").innerHTML;
    var d6 = document.getElementById("s6").innerHTML;

    var d7 = document.getElementById("s7").innerHTML;
    var d8 = document.getElementById("s8").innerHTML;
    var d9 = document.getElementById("s9").innerHTML;

    if (d1 == d2 && d2 == d3 && d3 != "") {
        document.getElementById("s1").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s2").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s3").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }
    else if (d4 == d5 && d5 == d6 && d6 != "") {
        document.getElementById("s4").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s5").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s6").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }
    else if (d7 == d8 && d8 == d9 && d9 != "") {
        document.getElementById("s7").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s8").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s9").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }
    else if (d1 == d4 && d4 == d7 && d7 != "") {
        document.getElementById("s1").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s4").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s7").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }
    else if (d2 == d5 && d5 == d8 && d8 != "") {
        document.getElementById("s2").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s5").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s8").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }
    else if (d3 == d6 && d6 == d9 && d9 != "") {
        document.getElementById("s3").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s6").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s9").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }
    else if (d1 == d5 && d5 == d9 && d9 != "") {
        document.getElementById("s1").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s5").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s9").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }
    else if (d3 == d5 && d5 == d7 && d7 != "") {
        document.getElementById("s3").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s5").style.backgroundColor = "rgb(209, 249, 188)";
        document.getElementById("s7").style.backgroundColor = "rgb(209, 249, 188)";
        game_over = true;
    }

    if (game_over == false && d1 != "" && d2 != "" && d3 != "" && d4 != "" && d5 != "" && d6 != "" && d7 != "" && d8 != "" && d9 != "")
        document.getElementById("container").style.backgroundColor = " rgb(139, 0, 0)";

    if (game_over == true) {
        // document.getElementById("congratulations").style.display = "block";
        document.getElementById("congratulations").classList.add("anim1");
        document.getElementById("congratulations").innerHTML = "congratulations " + turn;
    }
}