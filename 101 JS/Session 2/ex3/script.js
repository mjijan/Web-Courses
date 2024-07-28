function max() {
    document.getElementById("n1").style.backgroundColor = "rgb(71, 71, 71)";
    document.getElementById("n2").style.backgroundColor = "rgb(71, 71, 71)";
    document.getElementById("n3").style.backgroundColor = "rgb(71, 71, 71)";

    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);

    if (n1 > n2 && n1 > n3)
        document.getElementById("n1").style.backgroundColor = "red";
    else if (n2 > n1 && n2 > n3)
        document.getElementById("n2").style.backgroundColor = "red";
    else if (n3 > n1 && n3 > n2)
        document.getElementById("n3").style.backgroundColor = "red";
    else if (n1 > n2 && n1 == n3) {
        document.getElementById("n1").style.backgroundColor = "green";
        document.getElementById("n3").style.backgroundColor = "green";
    }
    else if (n2 > n1 && n2 == n3) {
        document.getElementById("n2").style.backgroundColor = "green";
        document.getElementById("n3").style.backgroundColor = "green";
    }
    else if (n1 > n3 && n2 == n1) {
        document.getElementById("n1").style.backgroundColor = "green";
        document.getElementById("n2").style.backgroundColor = "green";
    }
    else {
        document.getElementById("n1").style.backgroundColor = "blue";
        document.getElementById("n2").style.backgroundColor = "blue";
        document.getElementById("n3").style.backgroundColor = "blue";
    }

}