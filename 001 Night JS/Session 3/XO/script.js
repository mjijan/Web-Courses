/* ------ Global Variables ------ */
var game_over = false;
var turn = "X";
// -------------------------------------------------------------------------
function f( div )
{
    if (div.innerHTML != "" || game_over == true)
        return;

    div.innerHTML = turn;

    check_wining();

    if (game_over != true)
        change_turn();
}
// -------------------------------------------------------------------------
function check_wining()
{
    var s1 = document.getElementById("d1").innerHTML;
    var s2 = document.getElementById("d2").innerHTML;
    var s3 = document.getElementById("d3").innerHTML;

    var s4 = document.getElementById("d4").innerHTML;
    var s5 = document.getElementById("d5").innerHTML;
    var s6 = document.getElementById("d6").innerHTML;

    var s7 = document.getElementById("d7").innerHTML;
    var s8 = document.getElementById("d8").innerHTML;
    var s9 = document.getElementById("d9").innerHTML;

    if (s1 == s2 && s2 == s3 && s3 != "")
    {
        document.getElementById("d1").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d2").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d3").style.backgroundColor = "rgb(0,100,0)";
        game_over = true;
        document.getElementById("line1").style.display = "block";
        setTimeout( show_alert , 200 );
    }
    else if (s4 == s5 && s5 == s6 && s6 != "")
    {
        document.getElementById("d4").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d5").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d6").style.backgroundColor = "rgb(0,100,0)";
        game_over = true;
    }
    else if (s7 == s8 && s8 == s9 && s9 != "")
    {
        document.getElementById("d7").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d8").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d9").style.backgroundColor = "rgb(0,100,0)";
        game_over = true;
    }
    else if (s1 == s4 && s4 == s7 && s7 != "")
    {
        document.getElementById("d1").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d4").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d7").style.backgroundColor = "rgb(0,100,0)";
        game_over = true;
    }
    else if (s2 == s5 && s5 == s8 && s8 != "")
    {
        document.getElementById("d2").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d5").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d8").style.backgroundColor = "rgb(0,100,0)";
        game_over = true;
    }
    else if (s3 == s6 && s6 == s9 && s9 != "")
    {
        document.getElementById("d3").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d6").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d9").style.backgroundColor = "rgb(0,100,0)";
        game_over = true;
    }
    else if (s1 == s5 && s5 == s9 && s9 != "")
    {
        document.getElementById("d1").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d5").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d9").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("line7").style.display = "block";
        game_over = true;
    }
    else if (s3 == s5 && s5 == s7 && s7 != "")
    {
        document.getElementById("d3").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d5").style.backgroundColor = "rgb(0,100,0)";
        document.getElementById("d7").style.backgroundColor = "rgb(0,100,0)";
        game_over = true;
    }

    if (game_over == false && s1!="" && s2!="" && s3!="" && s4!="" && s5!="" && s6!="" && s7!="" && s8!="" && s9!="" )
    {
        document.getElementById("draw").style.display = "block";
        game_over = true;
    }
}
// -------------------------------------------------------------------------
function change_turn()
{
    if (turn == "X")
        turn = "O";
    else    
        turn = "X";
}
// -------------------------------------------------------------------------
function show_alert()
{
    alert (turn + " is Winner")
}
// -------------------------------------------------------------------------
function reset_game()
{
    var divs = document.getElementsByClassName("d");
    for(var i=0 ; i<divs.length ; i++)
    {
        divs[i].innerHTML = "";
        divs[i].style.backgroundColor = "rgb(173, 8, 8)";
    }

    var lines = document.getElementsByClassName("line");
    for(var i=0 ; i<lines.length ; i++)
    {
        lines[i].style.display = "none";
    }
    game_over = false;
    turn = "X";
    document.getElementById("draw").style.display = "none";
}