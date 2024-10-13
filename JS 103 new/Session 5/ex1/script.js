var my_num = 5;

function print_result()
{
    my_num = document.getElementById("n").value;
    if (my_num % 2 == 0)
        var my_color = "even";
    else
        var my_color = "odd";

    var result ="<div class='card " +  my_color + " '> ";
    for (var i = 1 ; i<= 10 ; i++)
    {
        result += i + " * " + my_num + " = " + i*my_num + "<br>" ;
    }
    result += "</div>";
    document.getElementById("container").innerHTML += result;
}

function reset_all()
{
    document.getElementById("container").innerHTML = "";
}