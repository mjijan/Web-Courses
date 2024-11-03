var first_number = "";
var second_number = "";
var global_op_option = "";
// ----------------------------------------------------------------------------
function set_number( pressed_num )
{
    if (pressed_num == '.')
    {
        var current_number = document.getElementById("screen").innerHTML;
        if (current_number.includes('.'))
        {
            alert("لا يمكنك إضافة الفاصلة العشرية مرتين يا صديقي");
            return;
        }
            
    }
    if (document.getElementById("screen").innerHTML == "0")
        if ( pressed_num == "00")
            document.getElementById("screen").innerHTML = "0";
        else
            document.getElementById("screen").innerHTML = pressed_num;
    else
        document.getElementById("screen").innerHTML += pressed_num;
}
// ----------------------------------------------------------------------------
function f( op_option )
{
    first_number = parseFloat( document.getElementById("screen").innerHTML );
    document.getElementById("screen").innerHTML = "";
    global_op_option = op_option;
}
// ----------------------------------------------------------------------------
function print_result()
{
    second_number = parseFloat( document.getElementById("screen").innerHTML );
    var result;
    if (global_op_option == '+')
        result = first_number + second_number;
    else if (global_op_option == '-')
        result = first_number - second_number;
    else if (global_op_option == '*')
        result = first_number * second_number;
    else if (global_op_option == '/')
        result = first_number / second_number;

    document.getElementById("screen").innerHTML = result;
}
// ----------------------------------------------------------------------------
function reset_all()
{
    first_number = "";
    second_number = "";
    document.getElementById("screen").innerHTML = "0";
}
// ----------------------------------------------------------------------------
function backspace()
{
    var current_number =  document.getElementById("screen").innerHTML ;
    var result = current_number.substring(0, current_number.length - 1);
    document.getElementById("screen").innerHTML = parseFloat( result );
}