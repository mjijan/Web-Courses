function max() {
    document.getElementById("n1").style.backgroundColor = "rgb(71, 71, 71)";
    document.getElementById("n2").style.backgroundColor = "rgb(71, 71, 71)";

    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    if (n1 > n2) {
        document.getElementById("n1").style.backgroundColor = "red";
    }
    else if (n2 > n1)
        document.getElementById("n2").style.backgroundColor = "red";
    else {
        document.getElementById("n1").style.backgroundColor = "green";
        document.getElementById("n2").style.backgroundColor = "green";
    }

}