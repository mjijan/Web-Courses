
var js_count = 0;
var js_total = 0;
var sold_id = 0;
var is_visibile = true;

var products = [
    { name: "Z Flip Foldable Mobile", price: 120 },
    { name: "Air Pods Pro", price: 60 },
    { name: "250D DSLR Camera", price: 230 },
    { name: "Head Phones", price: 100 }];

// ------------------------------------------------------------
function add_item(item) {
    js_count++;
    document.getElementById("count").innerHTML = js_count;

    var product_num = document.getElementById(`num${item}`).value;

    var content = `<div class="cart-item" id="sold${sold_id}">
                        <div class="row-img">
                            <img class="rowimg" src="image/${item}.jpg">
                        </div>
                        <p class="p_num">${product_num}</p>
                        <p class="item-name" style="font-size:12px;">${products[item].name}</p>
                        <h2 style="font-size: 15px;">$ ${products[item].price * product_num}  </h2>
                        <i class="exit fa fa-window-close icon" onclick="delete_item(${sold_id} , ${products[item].price} , ${product_num})"></i>
                    </div>`;

    js_total += products[item].price * product_num;
    document.getElementById("total").innerHTML = js_total;

    document.getElementById("cartItem").innerHTML += content;
    sold_id++;
}
// ------------------------------------------------------------
function delete_item(id, price, p_num) {
    js_total -= price * p_num;
    document.getElementById("total").innerHTML = js_total;

    js_count--;
    document.getElementById("count").innerHTML = js_count;

    document.getElementById(`sold${id}`).remove();

}
// ------------------------------------------------------------
function show_it() {
    if (is_visibile == true) {
        is_visibile = false;
        document.getElementById("sidebar").style.display = "none";
    }
    else {
        is_visibile = true;
        document.getElementById("sidebar").style.display = "block";
    }
}