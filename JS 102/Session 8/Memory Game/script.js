var first_card = 0;
var second_card = 0;

function show_num(num)
{
    document.getElementById("n" + num).style.display = "inline-block";

    if (first_card == 0)
        first_card = num;
    else if(second_card == 0)
    {
        second_card = num;
   
        var num1 = document.getElementById("n" + first_card).innerHTML;
        var num2 = document.getElementById("n" + second_card).innerHTML;

        if (num1 != num2)
        {
            setTimeout( hide_numbers , 200);
        }
        else
        {
            document.getElementById("n" + first_card).style.background = "rgb(150,0,0)";
            document.getElementById("n" + second_card).style.background = "rgb(150,0,0)";

            first_card = 0;
            second_card = 0;
        }
       
    }
}

function hide_numbers()
{
    document.getElementById("n" + first_card).style.display = "none";
    document.getElementById("n" + second_card).style.display = "none";

    first_card = 0;
    second_card = 0;
}