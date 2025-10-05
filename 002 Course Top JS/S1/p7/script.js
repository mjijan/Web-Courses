
var state = "no";

// ---------------------------------------------------------------

function f1()
{
    var num1 = parseInt( document.getElementById("n1").value );
    var num2 = parseInt( document.getElementById("n2").value );
    var z = num1 + num2;
    document.getElementById("result").innerHTML = z;
}

function f2()
{
    var num1 = parseInt( document.getElementById("n1").value );
    var num2 = parseInt( document.getElementById("n2").value );
    var z = num1 - num2;
    document.getElementById("result").innerHTML = z;
}

function f3()
{
    var num1 = parseInt( document.getElementById("n1").value );
    var num2 = parseInt( document.getElementById("n2").value );
    var z = num1 * num2;
    document.getElementById("result").innerHTML = z;
}

function f4()
{
    var num1 = parseInt( document.getElementById("n1").value );
    var num2 = parseInt( document.getElementById("n2").value );
    var z = num1 / num2;
    document.getElementById("result").innerHTML = z;
}

function toggle_calc()
{
    if (state == "no")
    {
        document.getElementById("calc").style.display = "block";
        document.getElementById("btn").innerHTML = "Hide Calculator";
        state = "yes";
    }
    else 
    {
        document.getElementById("calc").style.display = "none";
        document.getElementById("btn").innerHTML = "Show Calculator";
        state = "no";
    }
}

