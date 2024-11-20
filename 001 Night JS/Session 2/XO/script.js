
var turn = "X";
// -------------------------------------------
function f( num )
{
    document.getElementById("d" + num).innerHTML = turn;

    if (turn == "X")
        turn = "O";
    else    
        turn = "X";
}