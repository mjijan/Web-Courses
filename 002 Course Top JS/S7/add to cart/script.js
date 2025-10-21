
var s1 = {"id" : 1 , "name" : "Z Flip Foldable Mobile" , "price" : 120.0  }
var s2 = {"id" : 2 , "name" : "Air Pods Pro" , "price" : 60.0  }
var s3 = {"id" : 3 , "name" : "250D DSLR Camera" , "price" : 230.0  }
var s4 = {"id" : 4 , "name" : "Head Phones" , "price" : 100.0  }

var market = [];
market.push(s1);
market.push(s2);
market.push(s3);
market.push(s4);

var count = 0;
var total = 0;
var line_count = 1;

var bought_items = [];
// --------------------------------------------------------------------------------
function add_item(num)
{

    for (var i=0 ; i<bought_items.length ; i++) 
        if (bought_items[i].id == market[num-1].id)
        {
            alert("You already bought this item");
            return;
        }

    count++;
    document.getElementById("count").innerHTML = count;

    total += market[num-1].price ;
    document.getElementById("total").innerHTML = total;


    var new_line = `
                    <div class="cart-item" id="line${line_count}">
                        <div class="row-img">
                            <img class="rowimg" src="image/${market[num-1].id}.jpg">
                        </div>
                        <input onchange="update_item_bought(${market[num-1].id} , this)" class="inp1" type="number" min="1" value="1" />
                        <p style="font-size:12px;">${market[num-1].name}</p>
                        <h2 style="font-size: 15px;">$ ${market[num-1].price}</h2>
                        <i class="fa-solid fa-trash fa fa-trash-o" 
                        onclick="remove_item(${line_count} , ${market[num-1].price} , ${market[num-1].id})"></i>
                    </div>
                `;
    line_count++;
    document.getElementById("cartItem").innerHTML += new_line;

    bought_items.push({"id": market[num-1].id, "price":market[num-1].price , "qty":1});
}
// --------------------------------------------------------------------------------
function remove_item( line_num , price , item_id)
{
    count--;
    document.getElementById("count").innerHTML = count;

    total = total - price;
    document.getElementById("total").innerHTML = total;

    document.getElementById("line" + line_num).remove();

    for (var i=0 ; i<bought_items.length ; i++)
        if(bought_items[i].id == item_id)
        {
            bought_items.splice(i , 1);
            break;
        }
    update_cart_total();
}
// --------------------------------------------------------------------------------
function update_item_bought( id , qty_input )
{
    var new_qty = qty_input.value;
    console.log(id + " , " + qty_input.value);
    for (var i=0 ; i<bought_items.length ; i++)
    {
        if (bought_items[i].id == id)
        {
            bought_items[i].qty = parseInt(new_qty);
            break;
        }
    }
    update_cart_total();
}
// --------------------------------------------------------------------------------
function update_cart_total()
{
    total = 0;
    for (var i=0; i<bought_items.length; i++)
    {
        total += (bought_items[i].price * parseInt( bought_items[i].qty) ) ;
    }

    document.getElementById("total").innerHTML = total;
}