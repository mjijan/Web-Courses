
var limit = 128;
var numbers = [];
// ------------------------------------------------------------------

document.querySelector("body").innerHTML += `<div id="container"></div>`;

var num = 0;
for (var i=0 ; i<limit ; i++)
{
    if (i % 2 == 0)
        num++;

    numbers[i] = num;
    numbers[i+1] = num;
    
}

for (var i=0 ; i<limit ; i++)
{
    var content = `<div class="d" id="d${i}" >${numbers[i]}</div>`;
    document.getElementById("container").innerHTML += content;

}


// ------------------------------------------------------------------
