var js_count = 0;
var js_total = 0;

setInterval(change_time, 1000);

var js_count_item = localStorage.getItem("count_item");
var js_total_item = localStorage.getItem("total_item");

console.log(js_count_item);
console.log(js_total_item);

if (js_count_item != null) {
    js_count = js_count_item;
    document.getElementById("count").innerHTML = js_count;
}
if (js_total_item != null) {
    js_total = js_total_item;
    document.getElementById("total").innerHTML = js_total;
}


function change_time() {
    document.getElementById("logo").innerHTML = new Date().toLocaleString("en-US");
}

function add_item(id) {
    js_count++;
    document.getElementById("count").innerHTML = js_count;

    var element_name = document.getElementById("item" + id).innerHTML;
    var element_price = parseFloat(document.getElementById("price" + id).innerHTML);

    var element = `<div class="cart-item" id="bought_item_${js_count}">
						<div class="row-img">
							<img class="rowimg" src="image/${id}.jpg">
						</div>
						<p style="font-size:12px;">${element_name}</p>
						<h2 style="font-size: 15px;">$ ${element_price}</h2>
						<i class="fa-solid fa-trash" onclick="delete_item(${js_count} , ${element_price})">X</i>
					</div>`;
    document.getElementById("cartItem").innerHTML += element;

    js_total += element_price;
    document.getElementById("total").innerHTML = js_total;

    localStorage.setItem("count_item", js_count);
    localStorage.setItem("total_item", js_total);
}

function delete_item(deleted_num, deleted_price) {
    document.getElementById("bought_item_" + deleted_num).remove();

    js_count--;
    document.getElementById("count").innerHTML = js_count;

    js_total -= deleted_price;
    document.getElementById("total").innerHTML = js_total;
}