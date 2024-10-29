
function sum()
{
    var x = document.getElementById("n1").value;
    var y = parseInt ( document.getElementById("n2").value );
    var z = parseInt( x ) + y ;
    document.getElementById("result").innerHTML = z;
}