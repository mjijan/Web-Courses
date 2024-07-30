var turn = "X";
var stopped = false;

function move(parameter) {
    var d = "n" + parameter;

    if (document.getElementById(d).innerHTML != "" || stopped == true)
        return;

    document.getElementById(d).innerHTML = turn;

    check_for_win();

    if (turn == "X")
        turn = "O";
    else
        turn = "X";
}

function check_for_win() {
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").innerHTML;
    var n3 = document.getElementById("n3").innerHTML;

    var n4 = document.getElementById("n4").innerHTML;
    var n5 = document.getElementById("n5").innerHTML;
    var n6 = document.getElementById("n6").innerHTML;

    var n7 = document.getElementById("n7").innerHTML;
    var n8 = document.getElementById("n8").innerHTML;
    var n9 = document.getElementById("n9").innerHTML;

    if (n1 == n2 && n2 == n3 && n1 != "") {
        document.getElementById("n1").style.backgroundColor = "green";
        document.getElementById("n2").style.backgroundColor = "green";
        document.getElementById("n3").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }
    else if (n4 == n5 && n5 == n6 && n4 != "") {
        document.getElementById("n4").style.backgroundColor = "green";
        document.getElementById("n5").style.backgroundColor = "green";
        document.getElementById("n6").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }
    else if (n7 == n8 && n8 == n9 && n7 != "") {
        document.getElementById("n7").style.backgroundColor = "green";
        document.getElementById("n8").style.backgroundColor = "green";
        document.getElementById("n9").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }
    else if (n1 == n4 && n4 == n7 && n1 != "") {
        document.getElementById("n1").style.backgroundColor = "green";
        document.getElementById("n4").style.backgroundColor = "green";
        document.getElementById("n7").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }
    else if (n2 == n5 && n5 == n8 && n2 != "") {
        document.getElementById("n2").style.backgroundColor = "green";
        document.getElementById("n5").style.backgroundColor = "green";
        document.getElementById("n8").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }
    else if (n3 == n6 && n6 == n9 && n3 != "") {
        document.getElementById("n3").style.backgroundColor = "green";
        document.getElementById("n6").style.backgroundColor = "green";
        document.getElementById("n9").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }
    else if (n1 == n5 && n5 == n9 && n1 != "") {
        document.getElementById("n1").style.backgroundColor = "green";
        document.getElementById("n5").style.backgroundColor = "green";
        document.getElementById("n9").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }
    else if (n3 == n5 && n5 == n7 && n3 != "") {
        document.getElementById("n3").style.backgroundColor = "green";
        document.getElementById("n5").style.backgroundColor = "green";
        document.getElementById("n7").style.backgroundColor = "green";
        document.getElementById("wining").innerHTML = turn + " Wins";
        stopped = true;
    }

    if (stopped == true) {
        document.getElementById("wining").style.display = "block";
        document.getElementById("reset").style.display = "block";

    }
}

function reset() {

    for (var i = 1; i <= 9; i++) {
        document.getElementById("n" + i).innerHTML = "";
        document.getElementById("n" + i).style.background = "rgb(147, 0, 0)";
    }

    turn = "X";
    stopped = false;

    document.getElementById("reset").style.display = "none";
    document.getElementById("wining").style.display = "none";
}