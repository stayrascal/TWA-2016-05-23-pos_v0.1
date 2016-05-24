function printInventory(inputs) {
    var allItems = loadAllItems();
    var cart = getCart(inputs);

    var expectText = '***<没钱赚商店>购物清单***\n' 
                    + getItemsMessage(cart, allItems) 
                    + '----------------------\n' 
                    + getTotalPriceMessage(cart, allItems) 
                    + '**********************';
    console.log(expectText);

}

function getItemsMessage(cart, items) {
    var itemMessage = '';
    Object.keys(cart).forEach(function(key) {
        var item = getItemByBarcode(key, items);
        item.price = item.price.toFixed(2);
        var subTotal = (item.price * cart[key]).toFixed(2);
        itemMessage += getItemMessage(item, cart[key], subTotal);
    });
    return itemMessage;
}

function getTotalPrice(cart, items) {
    var totalPrice = 0.0;
    Object.keys(cart).forEach(function(key) {
        var item = getItemByBarcode(key, items);
        totalPrice += item.price * cart[key];
    });
    return totalPrice.toFixed(2);
}


function getTotalPriceMessage(cart, items) {
    return '总计：' + getTotalPrice(cart, items) + '(元)\n';
}

function getItemMessage(item, quantity, subTotal) {
    return '名称：' + item.name + '，数量：' + quantity + item.unit + '，单价：' + item.price + '(元)，小计：' + subTotal + '(元)\n';
}

function getCart(inputs) {
    var cart = {};
    inputs.forEach(function(element) {
        if (!cart[element]) {
            cart[element] = 1;
        } else {
            cart[element]++;
        }
    });
    return cart;
}

function getItemByBarcode(barcode, items) {
    // items.forEach(function(item){
    //     if (barcode === item.barcode){
    //         return item;
    //     }
    // });
    for (var i = 0; i < items.length; i++) {
        if (barcode === items[i].barcode) {
            return items[i];
        }
    }
}
