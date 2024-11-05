var turn = "X";
var wining_color = "rgb(150,255,180)";
var is_finished = false;
// -----------------------------------------------------------------
function f( div_num )
{
    if (is_finished == true)
        return;

    if (document.getElementById("d" + div_num).innerHTML != "")
        return;

    document.getElementById("d" + div_num).innerHTML = turn;

    check_for_win();

    if (turn == "X")
        turn = "O";
    else
        turn = "X";
}
// -----------------------------------------------------------------
function check_for_win()
{
    var v1 = document.getElementById("d1").innerHTML;
    var v2 = document.getElementById("d2").innerHTML;
    var v3 = document.getElementById("d3").innerHTML;

    var v4 = document.getElementById("d4").innerHTML;
    var v5 = document.getElementById("d5").innerHTML;
    var v6 = document.getElementById("d6").innerHTML;

    var v7 = document.getElementById("d7").innerHTML;
    var v8 = document.getElementById("d8").innerHTML;
    var v9 = document.getElementById("d9").innerHTML;

    if (v1 == v2 && v2 == v3 && v3 != "")
    {
        document.getElementById("d1").style.backgroundColor = wining_color;
        document.getElementById("d2").style.backgroundColor = wining_color;
        document.getElementById("d3").style.backgroundColor = wining_color;
        is_finished = true;
    }
    else if (v4 == v5 && v5 == v6 && v6 != "")
    {
        document.getElementById("d4").style.backgroundColor = wining_color;
        document.getElementById("d5").style.backgroundColor = wining_color;
        document.getElementById("d6").style.backgroundColor = wining_color;
        is_finished = true;
    }
    else if (v7 == v8 && v8 == v9 && v9 != "")
    {
        document.getElementById("d7").style.backgroundColor = wining_color;
        document.getElementById("d8").style.backgroundColor = wining_color;
        document.getElementById("d9").style.backgroundColor = wining_color;
        is_finished = true;
    }

    else if (v1 == v4 && v4 == v7 && v7 != "")
    {
        document.getElementById("d1").style.backgroundColor = wining_color;
        document.getElementById("d4").style.backgroundColor = wining_color;
        document.getElementById("d7").style.backgroundColor = wining_color;
        is_finished = true;
    }
    else if (v2 == v5 && v5 == v8 && v8 != "")
    {
        document.getElementById("d2").style.backgroundColor = wining_color;
        document.getElementById("d5").style.backgroundColor = wining_color;
        document.getElementById("d8").style.backgroundColor = wining_color;
        is_finished = true;
    }

    else if (v3 == v6 && v6 == v9 && v9 != "")
    {
        document.getElementById("d3").style.backgroundColor = wining_color;
        document.getElementById("d6").style.backgroundColor = wining_color;
        document.getElementById("d9").style.backgroundColor = wining_color;
        is_finished = true;
    }
    else if (v1 == v5 && v5 == v9 && v9 != "")
    {
        document.getElementById("d1").style.backgroundColor = wining_color;
        document.getElementById("d5").style.backgroundColor = wining_color;
        document.getElementById("d9").style.backgroundColor = wining_color;
        is_finished = true;
    }
    else if (v3 == v5 && v5 == v7 && v7 != "")
    {
        document.getElementById("d3").style.backgroundColor = wining_color;
        document.getElementById("d5").style.backgroundColor = wining_color;
        document.getElementById("d7").style.backgroundColor = wining_color;
        is_finished = true;
    }

    if (is_finished == true)
    {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = turn + " Wins";
    }
}