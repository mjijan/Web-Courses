var first_card = 0;
var second_card = 0;
var cards_count = 16;
var game_started = false;
var game_numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var timer_id;
var timer_width = 495;

shuffle();
set_numbers();

function time_step()
{
    timer_width -= 1;
    document.getElementById("timer").style.width = timer_width + "px";
}

function set_numbers()
{
    for (var i=0 ; i<cards_count ; i++)
    {
        document.getElementById("n" + (i+1)).innerHTML = game_numbers[i];
    }
}

function start_game()
{
    game_started = true;
    document.getElementById("start_btn").disabled = true;
    timer_id = setInterval(time_step, 50);
}

function show_num(num)
{
    if (game_started == false)
        return;

    document.getElementById("n" + num).style.display = "inline-block";

    if (first_card == 0)
        first_card = num;
    else if(second_card == 0 )
    {
        second_card = num;
        
        if (first_card == second_card)
        {
            second_card = 0;
            return;
        }
        var num1 = document.getElementById("n" + first_card).innerHTML;
        var num2 = document.getElementById("n" + second_card).innerHTML;

        if (num1 != num2)
        {
            game_started = false;
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

    game_started = true;
}

function shuffle() {
    let currentIndex = game_numbers.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [game_numbers[currentIndex], game_numbers[randomIndex]] = [
        game_numbers[randomIndex], game_numbers[currentIndex]];
    }
  }