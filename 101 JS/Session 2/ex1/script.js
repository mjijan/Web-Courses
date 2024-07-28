function max() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    if (n1 > n2)
        document.getElementById("result").innerHTML = n1;
    else if (n2 > n1)
        document.getElementById("result").innerHTML = n2;
    else
        document.getElementById("result").innerHTML = "Equaled";
}