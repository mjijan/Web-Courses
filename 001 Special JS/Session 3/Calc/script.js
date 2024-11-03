var first_number = "";
var second_number = "";
// ----------------------------------------------------------------------------
function set_number( pressed_num )
{
    // var pressed_num = '3'; only for kareem
    document.getElementById("screen").innerHTML += pressed_num;
}
// ----------------------------------------------------------------------------
function f()
{
    first_number = parseFloat( document.getElementById("screen").innerHTML );
    document.getElementById("screen").innerHTML = "";
}
// ----------------------------------------------------------------------------
function print_result()
{
    second_number = parseFloat( document.getElementById("screen").innerHTML );
    var result = first_number + second_number;
    document.getElementById("screen").innerHTML = result;
}