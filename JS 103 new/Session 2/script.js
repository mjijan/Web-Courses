var my_mp;
var first_num;
var second_num;

function number( x )
{
    document.getElementById("screen").innerHTML += x;
}

function operation( op )
{
    my_mp = op;
    first_num = document.getElementById("screen").innerHTML;

    console.log("first : " + first_num);
    console.log("op : " + my_mp);
    document.getElementById("screen").innerHTML = "";
}

function result()
{
    second_num = document.getElementById("screen").innerHTML;
    console.log("second : " + second_num);
}