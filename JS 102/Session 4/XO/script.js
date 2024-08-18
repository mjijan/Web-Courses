
var turn = "X";
var end_game = false;

function next_play(square_id)
{
    if (document.getElementById("b" + square_id).innerHTML != ""  )
        return;

    if (end_game == true)
        return;

    /*
    if (document.getElementById("b" + square_id).innerHTML != ""  ||  end_game == true ) 
        return;
    */
    document.getElementById("b" + square_id).innerHTML = turn;

    check_win();

    if (end_game == true)
    {
        document.getElementById("wining_message").style.display = "block";
        document.getElementById("wining_message").innerHTML = turn + " is Winner.";
    }

    if (turn =="X")
        turn = "O";
    else
        turn = "X";
}

function check_win()
{
    var b1 = document.getElementById("b1").innerHTML;
    var b2 = document.getElementById("b2").innerHTML;
    var b3 = document.getElementById("b3").innerHTML;

    var b4 = document.getElementById("b4").innerHTML;
    var b5 = document.getElementById("b5").innerHTML;
    var b6 = document.getElementById("b6").innerHTML;

    var b7 = document.getElementById("b7").innerHTML;
    var b8 = document.getElementById("b8").innerHTML;
    var b9 = document.getElementById("b9").innerHTML;

    if (b1==b2 && b2==b3 && b1!="")
    {
        document.getElementById("b1").style.background = "rgb(198, 255, 192)";
        document.getElementById("b2").style.background = "rgb(198, 255, 192)";
        document.getElementById("b3").style.background = "rgb(198, 255, 192)";
        end_game = true;
    }
    else if(b4==b5 && b5==b6 && b4!="")
    {
        document.getElementById("b4").style.background = "rgb(198, 255, 192)";
        document.getElementById("b5").style.background = "rgb(198, 255, 192)";
        document.getElementById("b6").style.background = "rgb(198, 255, 192)";
        end_game = true;
    } 
    else if(b7==b8 && b8==b9 && b7!="")
    {
        document.getElementById("b7").style.background = "rgb(198, 255, 192)";
        document.getElementById("b8").style.background = "rgb(198, 255, 192)";
        document.getElementById("b9").style.background = "rgb(198, 255, 192)";
        end_game = true;
    } 
    else if(b1==b4 && b4==b7 && b1!="")
    {
        document.getElementById("b1").style.background = "rgb(198, 255, 192)";
        document.getElementById("b4").style.background = "rgb(198, 255, 192)";
        document.getElementById("b7").style.background = "rgb(198, 255, 192)";
        end_game = true;
    } 
    else if(b2==b5 && b5==b8 && b2!="")
    {
        document.getElementById("b2").style.background = "rgb(198, 255, 192)";
        document.getElementById("b5").style.background = "rgb(198, 255, 192)";
        document.getElementById("b8").style.background = "rgb(198, 255, 192)";
        end_game = true;
    } 
    else if(b3==b6 && b6==b9 && b3!="")
    {
        document.getElementById("b3").style.background = "rgb(198, 255, 192)";
        document.getElementById("b6").style.background = "rgb(198, 255, 192)";
        document.getElementById("b9").style.background = "rgb(198, 255, 192)";
        end_game = true;
    } 
    else if(b1==b5 && b5==b9 && b1!="")
    {
        document.getElementById("b1").style.background = "rgb(198, 255, 192)";
        document.getElementById("b5").style.background = "rgb(198, 255, 192)";
        document.getElementById("b9").style.background = "rgb(198, 255, 192)";
        end_game = true;
    } 
    else if(b3==b5 && b5==b7 && b3!="")
    {
        document.getElementById("b3").style.background = "rgb(198, 255, 192)";
        document.getElementById("b5").style.background = "rgb(198, 255, 192)";
        document.getElementById("b7").style.background = "rgb(198, 255, 192)";
        end_game = true;
    } 

}


function reset_all()
{
    for (var i = 1 ; i<=9 ; i++)
    {
        document.getElementById("b" + i).innerHTML = "";
        document.getElementById("b" + i).style.background = "white";
        turn = "X";
        end_game = false;
        document.getElementById("wining_message").style.display = "none";
    }
}