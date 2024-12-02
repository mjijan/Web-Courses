
var limit = 16;
var numbers = [];
var first_card = -1;
var second_card = -1;
var timer_width = 635;
var timer_id;
var has_started = false;
var correct_cards = 0;
// ------------------------------------------------------------------
document.querySelector("body").innerHTML += `<button class="btn1" onclick="start_game(this)">Start Game</button>`;
document.querySelector("body").innerHTML += `<div id="container"></div>`;
document.querySelector("body").innerHTML += `<input value="#0057A9" type="color" id="timer" oninput="change_color()" />`;

var num = 0;
for (var i=0 ; i<limit ; i++)
{
    if (i % 2 == 0)
        num++;

    numbers[i] = num;
}
//console.log(numbers);
shuffle(numbers);

for (var i=0 ; i<limit ; i++)
{
    var content = `<div class="d" id="d${i}" >
                    <div id="numb${i}">${numbers[i]}</div>
                    <div class="color" id="color${i}" onclick="hide_me(${i})"></div>
                    </div>`;
    document.getElementById("container").innerHTML += content;

}
// ------------------------------------------------------------------
function change_color()
{
    var rt = document.querySelector(":root");
    var new_color = document.getElementById("timer").value;
    rt.style.setProperty("--color1" , new_color )
}
// ------------------------------------------------------------------
function start_game(btn)
{
    if(has_started)
        return;

    has_started = true;
    btn.style.visibility = "hidden";
    timer_id = setInterval(tick, 100);
}
// ------------------------------------------------------------------
function tick()
{
    timer_width -= 3;
    document.getElementById("timer").style.width = timer_width + "px";
    if(timer_width <=0)
    {
        clearInterval(timer_id);
        alert("You Loose");
    }
       
}
// ------------------------------------------------------------------
function hide_me( div_index )
{
    if (has_started == false)
        return;
    //document.getElementById("color" + div_index).classList.add("anim1");
    document.getElementById("color" + div_index).style.display = "none";
   if (first_card == -1)
    first_card = div_index;
   else if (second_card == -1)
   {
    second_card = div_index;
    var a = document.getElementById("numb"+first_card).innerHTML;
    var b = document.getElementById("numb"+second_card).innerHTML;
    if (a == b)
    {
        document.getElementById("d"+first_card).style.backgroundColor = "green";
        document.getElementById("d"+second_card).style.backgroundColor = "green";
        first_card = -1;
        second_card = -1;
        correct_cards +=2;
        if (correct_cards == limit)
        {
            clearInterval(timer_id);
            setTimeout(show_alert , 200);
        }
    }
    else{
        has_started = false;
        setTimeout(flip_it , 300);
    }
   }

   console.log(`first card: ${first_card}, second card: ${second_card}`)
}
// ------------------------------------------------------------------
function show_alert()
{
    alert("You Win");
}
// ------------------------------------------------------------------
function flip_it()
{
    document.getElementById("color"+first_card).style.display = "block";
    document.getElementById("color"+second_card).style.display = "block";
    first_card = -1;
    second_card = -1;
    has_started = true;
}
// ------------------------------------------------------------------


// ------------------------------------------------------------------
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  // ------------------------------------------------------------------
