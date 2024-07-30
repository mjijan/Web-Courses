function p() {
    var x = parseInt(document.getElementById("num").value);
    for (var i = 1; i <= 10; i++) {
        document.getElementById("printing").innerHTML +=
         i + " * " + x + " = " + (i*x) + "<br>";
    }

    document.getElementById("printing").innerHTML += "<hr>";

}