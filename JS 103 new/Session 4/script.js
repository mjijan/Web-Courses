var turn = "X";
var is_finished = false;

function next_move( box_number ) {
    if (document.getElementById("b" + box_number).innerHTML != "")
        return;
    
    if (is_finished == true)
        return;
    
    document.getElementById("b" + box_number).innerHTML = turn;

    var v1 = document.getElementById("b1").innerHTML;
    var v2 = document.getElementById("b2").innerHTML;
    var v3 = document.getElementById("b3").innerHTML;

    var v4 = document.getElementById("b4").innerHTML;
    var v5 = document.getElementById("b5").innerHTML;
    var v6 = document.getElementById("b6").innerHTML;

    var v7 = document.getElementById("b7").innerHTML;
    var v8 = document.getElementById("b8").innerHTML;
    var v9 = document.getElementById("b9").innerHTML;

    if (v1 == v2 && v2 == v3 && v1 != "")
    {
        document.getElementById("b1").style.background = "rgb(0,250,0)";
        document.getElementById("b2").style.background = "rgb(0,250,0)";
        document.getElementById("b3").style.background = "rgb(0,250,0)";
        document.getElementById("b1").style.color = "black";
        document.getElementById("b2").style.color = "black";
        document.getElementById("b3").style.color = "black";
        is_finished = true;
    }
    else if (v4 == v5 && v5 == v6 && v6 != "")
    {
        document.getElementById("b4").style.background = "rgb(0,250,0)";
        document.getElementById("b5").style.background = "rgb(0,250,0)";
        document.getElementById("b6").style.background = "rgb(0,250,0)";
        document.getElementById("b4").style.color = "black";
        document.getElementById("b5").style.color = "black";
        document.getElementById("b6").style.color = "black";
        is_finished = true;
    }
    else if (v7 == v8 && v8 == v9 && v9 != "")
    {
        document.getElementById("b7").style.background = "rgb(0,250,0)";
        document.getElementById("b8").style.background = "rgb(0,250,0)";
        document.getElementById("b9").style.background = "rgb(0,250,0)";
        document.getElementById("b7").style.color = "black";
        document.getElementById("b8").style.color = "black";
        document.getElementById("b9").style.color = "black";
        is_finished = true;
    }
    else if (v1 == v4 && v4 == v7 && v7 != "")
    {
        document.getElementById("b1").style.background = "rgb(0,250,0)";
        document.getElementById("b4").style.background = "rgb(0,250,0)";
        document.getElementById("b7").style.background = "rgb(0,250,0)";
        document.getElementById("b1").style.color = "black";
        document.getElementById("b4").style.color = "black";
        document.getElementById("b7").style.color = "black";
        is_finished = true;
    }
    else if (v2 == v5 && v5 == v8 && v8 != "")
    {
        document.getElementById("b2").style.background = "rgb(0,250,0)";
        document.getElementById("b5").style.background = "rgb(0,250,0)";
        document.getElementById("b8").style.background = "rgb(0,250,0)";
        document.getElementById("b2").style.color = "black";
        document.getElementById("b5").style.color = "black";
        document.getElementById("b8").style.color = "black";
        is_finished = true;
    }
    else if (v3 == v6 && v6 == v9 && v9 != "")
    {
        document.getElementById("b3").style.background = "rgb(0,250,0)";
        document.getElementById("b6").style.background = "rgb(0,250,0)";
        document.getElementById("b9").style.background = "rgb(0,250,0)";
        document.getElementById("b3").style.color = "black";
        document.getElementById("b6").style.color = "black";
        document.getElementById("b9").style.color = "black";
        is_finished = true;
    }
    else if (v3 == v5 && v5 == v7 && v7 != "")
    {
        document.getElementById("b3").style.background = "rgb(0,250,0)";
        document.getElementById("b5").style.background = "rgb(0,250,0)";
        document.getElementById("b7").style.background = "rgb(0,250,0)";
        document.getElementById("b3").style.color = "black";
        document.getElementById("b5").style.color = "black";
        document.getElementById("b7").style.color = "black";
        is_finished = true;
    }
    else if (v1 == v5 && v5 == v9 && v9 != "")
    {
        document.getElementById("b1").style.background = "rgb(0,250,0)";
        document.getElementById("b5").style.background = "rgb(0,250,0)";
        document.getElementById("b9").style.background = "rgb(0,250,0)";
        document.getElementById("b1").style.color = "black";
        document.getElementById("b5").style.color = "black";
        document.getElementById("b9").style.color = "black";
        is_finished = true;
    }
    change_turn();
}

function change_turn()
{
    
    if (turn == "X")
        turn = "O";
    else
        turn = "X";
}