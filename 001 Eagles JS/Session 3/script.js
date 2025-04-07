
var turn = "X";
var is_finished = false;
var x_result = 0;
var o_result = 0;
// ------------------------------------------------------------------------------------------
function next(num)
{
    if (document.getElementById("s"+num).innerHTML != "")
        return;

    if (is_finished == true)
        return;
    
    document.getElementById("s"+num).innerHTML = turn;

    check_wining();

    change_turn();
    
}
// ------------------------------------------------------------------------------------------
function change_turn()
{
    if (turn == "X")
        turn = "O";
    else
        turn = "X";
}
// ------------------------------------------------------------------------------------------
function check_wining()
{
    var d1 = document.getElementById("s1").innerHTML;
    var d2 = document.getElementById("s2").innerHTML;
    var d3 = document.getElementById("s3").innerHTML;

    var d4 = document.getElementById("s4").innerHTML;
    var d5 = document.getElementById("s5").innerHTML;
    var d6 = document.getElementById("s6").innerHTML;

    var d7 = document.getElementById("s7").innerHTML;
    var d8 = document.getElementById("s8").innerHTML;
    var d9 = document.getElementById("s9").innerHTML;

    if (d1==d2 && d2==d3 && d1 != "")
    {
        document.getElementById("s1").style.backgroundColor = "pink";
        document.getElementById("s2").style.backgroundColor = "pink";
        document.getElementById("s3").style.backgroundColor = "pink";
        is_finished = true;
    }
    else if (d4==d5 && d5==d6 && d4 != "")
    {
        document.getElementById("s4").style.backgroundColor = "pink";
        document.getElementById("s5").style.backgroundColor = "pink";
        document.getElementById("s6").style.backgroundColor = "pink";
        is_finished = true;
    }
    else if (d7==d8 && d8==d9 && d9 != "")
    {
        document.getElementById("s7").style.backgroundColor = "pink";
        document.getElementById("s8").style.backgroundColor = "pink";
        document.getElementById("s9").style.backgroundColor = "pink";
        is_finished = true;
    }
    else if (d1==d4 && d4==d7 && d4 != "")
    {
        document.getElementById("s1").style.backgroundColor = "pink";
        document.getElementById("s4").style.backgroundColor = "pink";
        document.getElementById("s7").style.backgroundColor = "pink";
        is_finished = true;
    }
    else if (d2==d5 && d5==d8 && d5 != "")
    {
        document.getElementById("s2").style.backgroundColor = "pink";
        document.getElementById("s5").style.backgroundColor = "pink";
        document.getElementById("s8").style.backgroundColor = "pink";
        is_finished = true;
    }
    else if (d3==d6 && d6==d9 && d9 != "")
    {
        document.getElementById("s3").style.backgroundColor = "pink";
        document.getElementById("s6").style.backgroundColor = "pink";
        document.getElementById("s9").style.backgroundColor = "pink";
        is_finished = true;
    }
    else if (d1==d5 && d5==d9 && d5 != "")
    {
        document.getElementById("s1").style.backgroundColor = "pink";
        document.getElementById("s5").style.backgroundColor = "pink";
        document.getElementById("s9").style.backgroundColor = "pink";
        is_finished = true;
    }
    else if (d3==d5 && d5==d7 && d3 != "")
    {
        document.getElementById("s3").style.backgroundColor = "pink";
        document.getElementById("s5").style.backgroundColor = "pink";
        document.getElementById("s7").style.backgroundColor = "pink";
        is_finished = true;
    }

    if (is_finished == true)
    {
        document.getElementById("reset").style.display = "block";
        if (turn == "X")
        {
            x_result++;
            document.getElementById("x").innerHTML = "X result = " + x_result;
        }
        else
        {
            o_result++;
            document.getElementById("o").innerHTML = "O result = " + o_result;
        }
    }
}
// ------------------------------------------------------------------------------------------
function reset1(){
    document.getElementById("s1").innerHTML="";
    document.getElementById("s2").innerHTML="";
    document.getElementById("s3").innerHTML="";
    document.getElementById("s4").innerHTML="";
    document.getElementById("s5").innerHTML="";
    document.getElementById("s6").innerHTML="";
    document.getElementById("s7").innerHTML="";
    document.getElementById("s8").innerHTML="";
    document.getElementById("s9").innerHTML="";
    //----------------
    document.getElementById("s1").style.backgroundColor="white";
    document.getElementById("s2").style.backgroundColor="white";
    document.getElementById("s3").style.backgroundColor="white";
    document.getElementById("s4").style.backgroundColor="white";
    document.getElementById("s5").style.backgroundColor="white";
    document.getElementById("s6").style.backgroundColor="white";
    document.getElementById("s7").style.backgroundColor="white";
    document.getElementById("s8").style.backgroundColor="white";
    document.getElementById("s9").style.backgroundColor="white";
    document.getElementById("reset").style.display = "none";
    is_finished=false;
    turn = "X";
}