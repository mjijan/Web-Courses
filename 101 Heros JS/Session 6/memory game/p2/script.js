
var limit = 16;
var numbers = [];
var plus = 1;
var first_card = -1;
var second_card = -1;

// ------------------------------------------------------------------

document.querySelector("body").innerHTML += `<input value="16" id="num" oninput="change_it()" />`;
document.querySelector("body").innerHTML += `<div id="container"></div>`;
draw_divs();
// ------------------------------------------------------------------
function change_it() {
    limit = document.getElementById("num").value;
    plus = 1;
    draw_divs();
}
// ------------------------------------------------------------------
function draw_divs() {
    document.getElementById("container").innerHTML = "";

    for (var i = 0; i < limit; i++) {
        numbers[i] = plus;
        if (i % 2 != 0)
            plus++;
    }

    shuffle(numbers);

    for (var i = 0; i < limit; i++) {
        var content = `<div class="d" id="d${i}" >
                        <div id="numb${i}" class="numb">${numbers[i]}</div>
                        <div id="color${i}" class="color" onclick="hide_me(${i})"></div>
                        </div>`;

        document.getElementById("container").innerHTML += content;
    }
}
// ------------------------------------------------------------------
function hide_me(id_num) {

    document.getElementById("color" + id_num).style.display = "none";

    if (first_card == -1) {
        first_card = id_num;
        console.log(`first card: ${first_card} , second card: ${second_card} `);
    }
    else if (second_card == -1) {
        second_card = id_num;
        var a = document.getElementById("numb" + first_card).innerHTML;
        var b = document.getElementById("numb" + second_card).innerHTML;

        console.log(`first card: ${first_card} , second card: ${second_card} `);

        if (a == b) {
            document.getElementById("d" + first_card).style.backgroundColor = "green";
            document.getElementById("d" + second_card).style.backgroundColor = "green";

            first_card = -1;
            second_card = -1;
        }
        else {
            setTimeout(flip_it, 500);
        }

    }

}
// ------------------------------------------------------------------
function flip_it() {
    document.getElementById("color" + first_card).style.display = "block";
    document.getElementById("color" + second_card).style.display = "block";

    first_card = -1;
    second_card = -1;
}
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