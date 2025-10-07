var turn = "X";
var is_finished = false;
x_result = 0;
o_result = 0;
// -------------------------------------------------------------
function f( div_id )
{
    if (div_id.innerHTML != "" || is_finished == true)
        return;

    div_id.innerHTML = turn;
    check_wining();
    change_turn();
}
// -------------------------------------------------------------
function change_turn()
{
    if (turn == "X")
        turn = "O";
    else
        turn = "X";
}
// -------------------------------------------------------------
function check_wining()
{
    var b1 = document.getElementById("b1").innerHTML;
    var b2 = document.getElementById("b2").innerHTML;
    var b3 = document.getElementById("b3").innerHTML;

    var b4 = document.getElementById("b4").innerHTML;
    var b5 = document.getElementById("b5").innerHTML;
    var b6 = document.getElementById("b6").innerHTML;

    var b7 = document.getElementById("b7").innerHTML;
    var b8 = document.getElementById("b8").innerHTML;
    var b9 = document.getElementById("b9").innerHTML;

    if (b1 == b2 && b2 == b3 && b3 != "")
    {
        document.getElementById("b1").style.backgroundColor = "yellow";
        document.getElementById("b2").style.backgroundColor = "yellow";
        document.getElementById("b3").style.backgroundColor = "yellow";
        is_finished = true;

    }
    else if (b4 == b5 && b5 == b6 && b6 != "")
    {
        document.getElementById("b4").style.backgroundColor = "yellow";
        document.getElementById("b5").style.backgroundColor = "yellow";
        document.getElementById("b6").style.backgroundColor = "yellow";
        is_finished = true;

    }
    else if (b7 == b8 && b8 == b9 && b9 != "")
    {
        document.getElementById("b7").style.backgroundColor = "yellow";
        document.getElementById("b8").style.backgroundColor = "yellow";
        document.getElementById("b9").style.backgroundColor = "yellow";
        is_finished = true;

    }
    else if (b1 == b4 && b4 == b7 && b7 != "")
    {
        document.getElementById("b1").style.backgroundColor = "yellow";
        document.getElementById("b4").style.backgroundColor = "yellow";
        document.getElementById("b7").style.backgroundColor = "yellow";
        is_finished = true;

    }
    else if (b2 == b5 && b5 == b8 && b8 != "")
    {
        document.getElementById("b2").style.backgroundColor = "yellow";
        document.getElementById("b5").style.backgroundColor = "yellow";
        document.getElementById("b8").style.backgroundColor = "yellow";
        is_finished = true;

    }
    else if (b3 == b6 && b6 == b9 && b9 != "")
    {
        document.getElementById("b3").style.backgroundColor = "yellow";
        document.getElementById("b6").style.backgroundColor = "yellow";
        document.getElementById("b9").style.backgroundColor = "yellow";
        is_finished = true;

    }
    else if (b1 == b5 && b5 == b9 && b9 != "")
    {
        document.getElementById("b1").style.backgroundColor = "yellow";
        document.getElementById("b5").style.backgroundColor = "yellow";
        document.getElementById("b9").style.backgroundColor = "yellow";
        is_finished = true;

    }
    else if (b3 == b5 && b5 == b7 && b7 != "")
    {
        document.getElementById("b3").style.backgroundColor = "yellow";
        document.getElementById("b5").style.backgroundColor = "yellow";
        document.getElementById("b7").style.backgroundColor = "yellow";
        is_finished = true;

    }

    if (is_finished == true)
    {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = `${turn} Wins. click to play again.`;
        if (turn == "X")
        {
            x_result++;
            document.getElementById("x_result").innerHTML = `X result : ${x_result}`;
        }
        else 
        {
            o_result++;
            document.getElementById("o_result").innerHTML = `O result : ${o_result}`;
        }
    }
}
// -------------------------------------------------------------
function reset_all()
{
    for (var i=1 ; i<=9 ; i++)
    {
        document.getElementById("b" + i).innerHTML = "";
        document.getElementById("b" + i).style.backgroundColor = "rgb(231, 231, 231)";
    }
    is_finished = false;
    turn = "X";
    document.getElementById("msg").style.display = "none";
}
// -------------------------------------------------------------
