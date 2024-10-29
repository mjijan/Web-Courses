
function f( operation )
{
    var x = parseFloat ( document.getElementById("n1").value );
    var y = parseFloat ( document.getElementById("n2").value );
    var z;
    if (operation == '+')
    {
        z = x + y ;
        document.getElementById("result").style.backgroundColor = "rgb(200,199,233)";
    }
    else if (operation == '-')
    {
        z = x - y ;
        document.getElementById("result").style.backgroundColor = "rgb(200,199,177)";
    }
        
    else if (operation == '*')
    {
        z = x * y ;
        document.getElementById("result").style.backgroundColor = "rgb(255,199,158)";
    }
    else if (operation == '/')
    {
        z = x / y ;
        document.getElementById("result").style.backgroundColor = "rgb(222,171,185)";
    }
    else if (operation == 'sqrt')
    {
        z = Math.sqrt(x);
        document.getElementById("result").style.backgroundColor = "rgb(222,199,211)";
    }

    document.getElementById("result").innerHTML = z;
}