
var limit;

// ------------------------------------------------------------------

document.querySelector("body").innerHTML += `<input id="num" oninput="change_it()" />`;
document.querySelector("body").innerHTML += `<div id="container"></div>`;

// ------------------------------------------------------------------
function change_it() {
    limit = document.getElementById("num").value;
    draw_divs();
}
// ------------------------------------------------------------------
function draw_divs() {
    document.getElementById("container").innerHTML = "";
    for (var i = 1; i <= limit; i++) {
        var content = `<div class="d" id="d${i}" >${i}</div>`;
        document.getElementById("container").innerHTML += content;
    }
}