
var speed_value = 1000;
var timer_id = setInterval( change_color , speed_value);

// ------------------------------------------------------------------------------
function change_color()
{
    var red_value = Math.round( Math.random() * 255); 
    var green_value =Math.round(  Math.random() * 255); 
    var blue_value = Math.round( Math.random() * 255); 

    var color_name = `rgb(${red_value} , ${green_value} , ${blue_value})`;

    document.getElementById("container").style.backgroundColor = color_name;
    document.getElementById("container").innerHTML = color_name;
}
// ------------------------------------------------------------------------------
function change_speed( range )
{
    speed_value = range.value;

    clearInterval(timer_id); // stop timer

    timer_id = setInterval( change_color , speed_value);
    console.log(timer_id);
}