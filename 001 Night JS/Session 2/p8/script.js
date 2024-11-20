// this is external JS file

function f( data , stuname )
{
    document.getElementById("d1").innerHTML = data + " " + stuname;

    if (data == 1)
    {
        document.getElementById("d1").style.backgroundColor = "red";
    }
    else if (data == 2)
    {
        document.getElementById("d1").style.backgroundColor = "green";
    }
    else if (data == 3)
    {
        document.getElementById("d1").style.backgroundColor = "gray";
    }
}

