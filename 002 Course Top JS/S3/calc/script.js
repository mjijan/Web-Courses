
var first_number = "";
var second_number = "";
var my_operation = "";
// ------------------------------------------------------------
function set_num( num )
{
    if (num == '.' &&  document.getElementById("screen").textContent.includes('.') )
        return;

    document.getElementById("screen").textContent += num;
    if (num != '.')
        document.getElementById("screen").textContent = parseFloat(document.getElementById("screen").textContent);
}
// ------------------------------------------------------------
function set_operation( op )
{
    first_number = parseFloat( document.getElementById("screen").textContent ) ;
    my_operation = op ;
    document.getElementById("widget").textContent = first_number + " " + op + " ";
    document.getElementById("screen").textContent = "";
}
// ------------------------------------------------------------
function show_result()
{
    second_number = parseFloat ( document.getElementById("screen").textContent );
    document.getElementById("widget").textContent += second_number + " = "

    var result;

    if (my_operation == "+")
        result = first_number + second_number;
    else  if (my_operation == "-")
        result = first_number - second_number;
    else  if (my_operation == "×")
        result = first_number * second_number;
    else  if (my_operation == "÷")
        result = first_number / second_number;
    
    document.getElementById("screen").textContent  = result;   

}
// ------------------------------------------------------------
function change_sign()
{
    document.getElementById("screen").textContent = parseFloat(document.getElementById("screen").textContent) * (-1);
}
// ------------------------------------------------------------
function reset_all()
{
    first_number = "";
    second_number = "";
    my_operation = "";
    document.getElementById("screen").textContent = "0";
    document.getElementById("widget").textContent = "-";
}
// ------------------------------------------------------------
function percent()
{
    document.getElementById("screen").textContent = parseFloat(document.getElementById("screen").textContent) / (100);
}
// ------------------------------------------------------------
function del_one()
{
    var n = document.getElementById("screen").textContent;
    
    document.getElementById("screen").textContent = parseFloat( n.slice(0,-1) );
}
// ------------------------------------------------------------