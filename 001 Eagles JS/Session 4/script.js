var first_number = "";
var second_number = "";
var my_op = "";
// -----------------------------------------------------------------
function number(x)
{
    if (x == '.' && document.getElementById("screen").innerHTML.includes('.'))
        return;

    document.getElementById("screen").innerHTML += x;

    if (x != '.')
        document.getElementById("screen").innerHTML = parseFloat (document.getElementById("screen").innerHTML);
}
// -----------------------------------------------------------------
function operation(p)
{
    first_number = document.getElementById("screen").innerHTML;
    my_op = p;
    document.getElementById("screen").innerHTML = "";

    reset_buttons_color();

    if (p == '+')
        document.getElementById("b4").style.backgroundColor = "rgb(185, 114, 0)";
    else if (p == '-')
        document.getElementById("b3").style.backgroundColor = "rgb(185, 114, 0)";
    else if (p == '*')
        document.getElementById("b2").style.backgroundColor = "rgb(185, 114, 0)";
    else if (p == '/')
        document.getElementById("b1").style.backgroundColor = "rgb(185, 114, 0)";
}
// -----------------------------------------------------------------
function result()
{
    reset_buttons_color();
    second_number = document.getElementById("screen").innerHTML;

    if (my_op == '+')
        var final_res = parseFloat(first_number) + parseFloat(second_number);
    else if(my_op == '-')
        var final_res = parseFloat(first_number) - parseFloat(second_number);
    else if(my_op == '*')
        var final_res = parseFloat(first_number) * parseFloat(second_number);
    else if(my_op == '/')
        var final_res = parseFloat(first_number) / parseFloat(second_number);

    document.getElementById("screen").innerHTML = final_res;
}
// -----------------------------------------------------------------
function reset_all()
{
    first_number = "";
    second_number = "";
    my_op = "";
    document.getElementById("screen").innerHTML = "0";
}
// -----------------------------------------------------------------
function delete_once()
{
    var n = document.getElementById("screen").innerHTML;
    n = n.substring(0, n.length - 1);
    document.getElementById("screen").innerHTML = parseFloat(n);
}
// -----------------------------------------------------------------
function percent()
{
    var n = parseFloat (document.getElementById("screen").innerHTML) ;
    var res = n * 0.1;
    document.getElementById("screen").innerHTML = res;
}
// -----------------------------------------------------------------
function reset_buttons_color()
{
    document.getElementById("b1").style.backgroundColor = "rgb(238, 148, 6)";
    document.getElementById("b2").style.backgroundColor = "rgb(238, 148, 6)";
    document.getElementById("b3").style.backgroundColor = "rgb(238, 148, 6)";
    document.getElementById("b4").style.backgroundColor = "rgb(238, 148, 6)";
}