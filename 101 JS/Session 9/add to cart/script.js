
var js_count = 0;
var js_total = 0;

function add_item(product_nubmer) {
    js_count++;
    document.getElementById("count").innerHTML = js_count;
    var new_name = document.getElementById("item" + product_nubmer).innerHTML;
    var new_image = document.getElementById("img" + product_nubmer).src;
    var new_price = parseFloat(document.getElementById("price" + product_nubmer).innerHTML);

    var my_product = `\
                <div class="cart-item" id="buy_item_${js_count}">\
                    <div class="row-img">\
                       <img class="rowimg" src="${new_image}">\
                    </div>\
                    <p style="font-size:12px;">${new_name}</p>\
                    <h2 style="font-size: 15px;">$ ${new_price}</h2>\
                    <i class="fa-solid fa-trash" onclick="remove_item(${js_count} , ${new_price})"></i>\
                </div>   `;
    document.getElementById("cartItem").innerHTML += my_product;

    js_total += new_price;

    document.getElementById("total").innerHTML = js_total;
}


function remove_item(item_number, item_price) {
    document.getElementById("buy_item_" + item_number).remove();
    js_count--;
    document.getElementById("count").innerHTML = js_count;

    js_total -= item_price;
    document.getElementById("total").innerHTML = js_total;

}