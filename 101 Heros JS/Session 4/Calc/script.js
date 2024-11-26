
var first_number = "";
var second_number = "";
var my_op = "";
var finaal = "";
var audio1 = new Audio("sounds/click1.mp3");
// ------------------------------------------------------------------------
function set_number(num) {

    if (document.getElementById("screen").innerHTML.includes('.') && num == '.')
        return;


    document.getElementById("screen").innerHTML += num;
    audio1.play();
}
// ------------------------------------------------------------------------
function set_operation(op) {
    first_number = parseFloat(document.getElementById("screen").innerHTML);
    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = first_number + " " + op + " ";
    my_op = op;
}
// ------------------------------------------------------------------------
function show_result() {
    if (document.getElementById("screen").innerHTML == "")
        second_number = first_number;
    else
        second_number = parseFloat(document.getElementById("screen").innerHTML);

    document.getElementById("memory").innerHTML += second_number;

    if (my_op == '+')
        finaal = first_number + second_number;
    else if (my_op == '-')
        finaal = first_number - second_number;
    else if (my_op == '*')
        finaal = first_number * second_number;
    else if (my_op == '/')
        finaal = first_number / second_number;

    document.getElementById("screen").innerHTML = parseFloat(finaal);

}
// ------------------------------------------------------------------------
function reset_all() {
    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = "";
    first_number = "";
    second_number = "";
    my_op = "";
}
// ------------------------------------------------------------------------
function change_sign() {
    var x = parseFloat(document.getElementById("screen").innerHTML);
    x = x * (-1);
    document.getElementById("screen").innerHTML = x;
}
// ------------------------------------------------------------------------
function percent() {
    var x = parseFloat(document.getElementById("screen").innerHTML);
    x = x / 100;
    document.getElementById("screen").innerHTML = x;
}