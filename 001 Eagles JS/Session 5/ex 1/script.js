
// -----------------------------------------------------------------------------------
function print_all()
{
    document.getElementById("container").innerHTML = "";
    var max = document.getElementById("n1").value;
    for (var i =1 ; i<= max; i++)
    {
        var content = `<div>Hello ${i}</div>`;
        document.getElementById("container").innerHTML += content;
    }
}