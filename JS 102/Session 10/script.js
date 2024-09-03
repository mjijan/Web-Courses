var count = 0;
var total = 0;

function add_item(id)
{
    count++;
    document.getElementById("count").innerHTML = count;
    var p_name = document.getElementById("item" + id).innerHTML;
    var p_price = parseFloat( document.getElementById("price" + id).innerHTML );
    // var p_image = document.getElementById("img" + id).src;

    var buy_item = `<div class="cart-item" id="new_item${count}">
                    <div class="row-img">
                        <img class="rowimg" src="image/${id}.jpg">
                    </div>
                    <p style="font-size:12px;">${p_name}</p>
                    <h2 style="font-size: 15px;">$ ${p_price}</h2>
                    <i class="fa-solid fa-trash" onclick="delete_item(${count} , ${p_price})"></i>
                    </div>`;
    document.getElementById("cartItem").innerHTML += buy_item;

    total += p_price; // total = total + p_price
    document.getElementById("total").innerHTML = total;

}

function delete_item(par_count , par_price)
{
    count--;
    document.getElementById("count").innerHTML = count;

    total -= par_price;
    document.getElementById("total").innerHTML = total;

    document.getElementById("new_item" + par_count).remove();
}