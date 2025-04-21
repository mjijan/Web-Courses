
var count = 0;
var total = 0;
var bought_id = 1;
// -----------------------------------------------------------------
function add_item(id)
{
    count++;
    document.getElementById("count").innerHTML = count;

    var item_price = document.getElementById("price"+id).innerHTML;
    var item_name = document.getElementById("item"+id).innerHTML;

    var new_item = `<div class="cart-item" id="bought${bought_id}">
						<div class="row-img">
							<img class="rowimg" src="image/${id}.jpg">
						</div>
						<p style="font-size:12px;">${item_name}</p>
						<h2 style="font-size: 15px;">$ ${item_price}</h2>
						<i class="fa-solid fa-trash remove" onclick="remove_item(${bought_id} , ${id})">X</i>
					</div>`;
    document.getElementById("cartItem").innerHTML += new_item;

    total += parseFloat(item_price);
    document.getElementById("total").innerHTML = total;
    bought_id++;
}
// -----------------------------------------------------------------
function remove_item(b_id , id)
{
    var mydiv = document.getElementById("bought"+b_id).remove();
   
    count--;
    document.getElementById("count").innerHTML = count;

    // this place for your code
    var price = document.getElementById("price"+id).innerHTML;
    
    total -= parseFloat(price);
    document.getElementById("total").innerHTML = total;
}