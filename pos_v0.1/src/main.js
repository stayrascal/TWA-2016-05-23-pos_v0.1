function printInventory(inputs) {
    var expectText = '***<没钱赚商店>购物清单***\n' 
                    + getItemsMessage(inputs) 
                    + '----------------------\n' 
                    + getTotalPriceMessage(inputs) 
                    + '**********************';
    console.log(expectText);
}

function getTotalPriceMessage(inputs) {
    return '总计：' + getTotalPrice(inputs) + '(元)\n';
}

function getItemMessage(data, subTotal) {
    return '名称：' + data.name + '，数量：' + data.quantity + data.unit + '，单价：' + data.price + '(元)，小计：' + subTotal + '(元)\n';
}

function getTotalPrice(inputs) {
    var totalPrice = 0.0;
    inputs.forEach(function(element) {
        totalPrice += element.price;
    });
    return totalPrice.toFixed(2);
}

function getItemsInfo(inputs) {
    var itemsInfo = {};
    inputs.forEach(function(element) {
        if (!itemsInfo[element.barcode]) {
            itemsInfo[element.barcode] = {};
            itemsInfo[element.barcode].name = element.name;
            itemsInfo[element.barcode].unit = element.unit;
            itemsInfo[element.barcode].price = element.price.toFixed(2);
            itemsInfo[element.barcode].quantity = 1
        } else {
            itemsInfo[element.barcode].quantity += 1;
        }
    });
    return itemsInfo;
}

function getItemsMessage(inputs) {
    var itemsMessage = '';
    itemInfo = getItemsInfo(inputs);
    Object.keys(itemInfo).forEach(function(key) {
        var subTotal = itemInfo[key].quantity * itemInfo[key].price;
        itemsMessage += getItemMessage(itemInfo[key], subTotal.toFixed(2));
    });
    return itemsMessage;
}



/*function printInventory(inputs) {

    subTotal = getSubTotal(inputs);
    sumMessage = '总计：' + subTotal.toFixed(2) + '(元)\n';
    var expectText = '***<没钱赚商店>购物清单***\n' + getItemMessage(inputs) + '----------------------\n' + sumMessage + '**********************';
    console.log(expectText);
}

function getItemMessage(inputs) {
    itemGroups = getItemGroups(inputs);
    var message = '';
    for (var index in itemGroups) {
        var numbers = itemGroups[index].length;
        message += getMessage(itemGroups[index][0], numbers);
    }
    return message;
}

function getItemGroups(inputs) {
    var groupByBarcode = fjs.group(function(item) {
        return item.barcode;
    });
    var itemGroups = groupByBarcode(inputs);
    return itemGroups;
}

function getSubTotal(inputs) {
    var add = function(args1, args2) {
        return args1 + args2;
    }
    var sum = fjs.reduce(add);

    var prices = fjs.pluck('price', inputs);
    var subTotal = sum(prices);
    return subTotal;
}

function getMessage(data, numbers) {
    return '名称：' + data.name + '，数量：' + numbers + data.unit + '，单价：' + data.price.toFixed(2) + '(元)，小计：' + (data.price * numbers).toFixed(2) + '(元)\n';
}*/
