var js_count = 0;
var js_total = 0;

setInterval(change_time, 1000);

function change_time()
{
    document.getElementById("logo").innerHTML = new Date().toLocaleString("en-US")  ;
}

function add_item(id)
{
    js_count++;
    document.getElementById("count").innerHTML = js_count;

    var element_name = document.getElementById("item" + id).innerHTML;
    var element_price = parseFloat( document.getElementById("price" + id).innerHTML );

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
}

function delete_item(deleted_num , deleted_price)
{
    document.getElementById("bought_item_" + deleted_num).remove();

    js_count--;
    document.getElementById("count").innerHTML = js_count;

    js_total -= deleted_price;
    document.getElementById("total").innerHTML = js_total;
}