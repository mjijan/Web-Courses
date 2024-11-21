var turn = "O";
// -------------------------------------------------------
function f()
{
	document.getElementById("d1").innerHTML = turn;

	if (turn == "X")
		turn = "O";
	else
		turn = "X";
}
// -------------------------------------------------------
