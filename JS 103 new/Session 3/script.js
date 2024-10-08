var my_mp = "";
var first_num = "";
var second_num = "";
var final_num = "";

function number( x )
{
    // if (final_num != "")
    //     document.getElementById("screen").innerHTML = "";

    document.getElementById("screen").innerHTML += x;
}

function operation( op )
{
    if (my_mp != "")
    {
        result();
        return;
    }
   

    my_mp = op;
    first_num = parseFloat( document.getElementById("screen").innerHTML );

    console.log("first : " + first_num);
    console.log("op : " + my_mp);
    document.getElementById("screen").innerHTML = "";
}

function result()
{
    if (second_num == "")
        second_num = parseFloat ( document.getElementById("screen").innerHTML );
    else
        first_num = parseFloat ( document.getElementById("screen").innerHTML );

    console.log("second : " + second_num);
    
    if (my_mp == '+')
        final_num = first_num + second_num;
    else if(my_mp == '-')
        final_num = first_num - second_num;
    else if(my_mp == '*')
        final_num = first_num * second_num;
    else if(my_mp == '/')
        final_num = first_num / second_num;

    console.log(final_num);

    document.getElementById("screen").innerHTML = final_num;
}

function change_sign()
{
    var temp = parseFloat(document.getElementById("screen").innerHTML) * -1;
    document.getElementById("screen").innerHTML = temp;
}

function reset_all()
{
    document.getElementById("screen").innerHTML = "";
    first_num = "";
    second_num = "";
    my_mp = "";
}

function percentage()
{
    var temp = parseFloat(document.getElementById("screen").innerHTML) / 100;
    document.getElementById("screen").innerHTML = temp;
}