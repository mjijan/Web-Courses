
var first_number = "";
var second_number = "";
var my_op = "";

var audio1 = new Audio('sounds/click1.mp3');

// ----------------------------------------------------------
function set_number( num )
{
 
    if (num == '.' && document.getElementById("screen").innerHTML.includes('.'))
            return;

    document.getElementById("screen").innerHTML += num;
    audio1.play();
}
// ----------------------------------------------------------
function set_operation( op )
{
    if (my_op != "")
    {
        my_op = op;
        document.getElementById("memory").innerHTML = first_number + " " + op + " " ;
        return;
    }
    
    first_number = parseFloat( document.getElementById("screen").innerHTML );
    document.getElementById("memory").innerHTML = first_number + " " + op + " " ;
    document.getElementById("screen").innerHTML = "";
    my_op = op;
}
// ----------------------------------------------------------
function show_result()
{
    if (document.getElementById("screen").innerHTML == "")
        second_number = first_number;
    else
        second_number = parseFloat( document.getElementById("screen").innerHTML );

    document.getElementById("memory").innerHTML += second_number;

    if (my_op == '+')
        var reuslt = first_number + second_number;
    else if (my_op == '-')
        var reuslt = first_number - second_number;
    else if (my_op == '*')
        var reuslt = first_number * second_number;
    else if (my_op == '/')
        var reuslt = first_number / second_number;

    document.getElementById("screen").innerHTML = reuslt;
}
// ----------------------------------------------------------
function reset_calc()
{
    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = "";
    first_number = "";
    second_number = "";
    my_op = "";
}
// ----------------------------------------------------------
function change_sign()
{
    var x = parseFloat(document.getElementById("screen").innerHTML);
    x = x * -1;
    document.getElementById("screen").innerHTML = x;
}
// ----------------------------------------------------------
function percentage()
{
    var x = parseFloat(document.getElementById("screen").innerHTML);
    x = x / 100;
    document.getElementById("screen").innerHTML = x;
}
// ----------------------------------------------------------
