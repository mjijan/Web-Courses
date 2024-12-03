var js_count = 0;
var js_total = 0;
var sold_id = 1;

var old_count = localStorage.getItem("count");
if (old_count != null) {
    js_count = parseFloat(old_count);
    document.getElementById("count").innerHTML = js_count;

}

var old_total = localStorage.getItem("total");
if (old_total != null) {
    js_total = parseFloat(old_total);
    document.getElementById("total").innerHTML = js_total;

}
// --------------------------------------------------------------------------------
function add_item(item_id) {
    js_count++;
    document.getElementById("count").innerHTML = js_count;

    var product_item = document.getElementById("item" + item_id).innerHTML;
    var product_price = parseFloat(document.getElementById("price" + item_id).innerHTML);

    var content = `<div class="cart-item" id="sold${sold_id}">
                        <div class="row-img">
                            <img class="rowimg" src="image/${item_id}.jpg">
                        </div>
                        <p style="font-size:12px;">${product_item}</p>
                        <h2 style="font-size: 15px;">$ ${product_price}</h2>
                        <i class="fa fa-window-close icon" onclick="delete_item(${sold_id} , ${product_price})"></i>
                    </div>`;

    document.getElementById("cartItem").innerHTML += content;

    js_total += product_price;
    document.getElementById("total").innerHTML = js_total;

    sold_id++;

    localStorage.setItem("count", js_count);
    localStorage.setItem("total", js_total);
}
// --------------------------------------------------------------------------------
function delete_item(item_sold, item_price) {
    js_count--;
    document.getElementById("count").innerHTML = js_count;

    js_total -= item_price;
    document.getElementById("total").innerHTML = js_total;

    document.getElementById("sold" + item_sold).remove();
}