
var js_count = 0;
var js_total = 0;
var sold_id = 0;
var is_showed = true;

var products = [ {name:"Z Flip Foldable Mobile" , price:120} , 
                 {name:"Air Pods Pro" , price:60} ,
                 {name:"250D DSLR Camera" , price:230} , 
                 {name:"Head Phones" , price:100} ];

// ------------------------------------------------------------------------------------
function add_item( index )
{
    var p_numer = parseInt ( document.getElementById("num"+index).value );

    js_count++;
    document.getElementById("count").innerHTML = js_count;



    var content =  `<div class="cart-item" id="sold${sold_id}">
                        <div class="row-img">
                            <img class="rowimg" src="image/${index}.jpg">
                        </div>
                        <p id="p_total_${sold_id}" >${p_numer}</p>
                        <p style="font-size:12px;">${products[index].name}</p>
                        <h2 style="font-size: 15px;">$ <span id="final${sold_id}">${products[index].price * p_numer}</span></h2>
                        <i class="fa fa-window-close icon" onclick="delete_item(${sold_id} , ${index})"></i>
                    </div>`;

    document.getElementById("cartItem").innerHTML += content;

    js_total += products[index].price * p_numer;
    document.getElementById("total").innerHTML = js_total ;



    sold_id++;
}
// ------------------------------------------------------------------------------------
function delete_item ( sold_id , index )
{
    js_count--;
    document.getElementById("count").innerHTML = js_count;

    var p_final = parseInt( document.getElementById("final" + sold_id).innerHTML );
    js_total -= p_final;
    document.getElementById("total").innerHTML = js_total;

    document.getElementById("sold" + sold_id).remove();
}
// ------------------------------------------------------------------------------------
function show_it()
{
    if (is_showed == true)
    {
        is_showed = false;
        document.getElementById("sidebar").style.display = "none";
    }
    else{
        is_showed = true;
        document.getElementById("sidebar").style.display = "block";
    }
}