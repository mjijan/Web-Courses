var num = 1;
// -------------------------------------------------------
function f()
{
    var my_star = "*";
    document.getElementById("d1").innerHTML = num;

    if (num % 10 == 0)
    {
        document.getElementById("stars").innerHTML += my_star;
        document.getElementById("stars").style.backgroundColor = "rgb(0, 0, 136)";
    }

    num++;
}
// -------------------------------------------------------
