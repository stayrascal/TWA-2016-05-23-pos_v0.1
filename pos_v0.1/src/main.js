/*function printInventory(inputs) {
    var itemInfo = {};
    var sum = 0.0;

    inputs.forEach(function(element) {
        if (!itemInfo[element.barcode]) {
            element['numbers'] = 1;
            itemInfo[element.barcode] = element;
        } else {
            itemInfo[element.barcode]['numbers'] += 1;
        }
        sum += element.price;
    });

    sumMessage = '总计：' + sum.toFixed(2) + '(元)\n';
    var expectText = '***<没钱赚商店>购物清单***\n' + getItemMessage(itemInfo) + '----------------------\n' + sumMessage + '**********************';
    console.log(expectText);
}

function getMessage(data) {
    return '名称：' + data.name + '，数量：' + data.numbers + data.unit + '，单价：' + data.price.toFixed(2) + '(元)，小计：' + (data.price * data.numbers).toFixed(2) + '(元)\n';
}

function getItemMessage(itemInfo) {
    var itemMessage = '';
    for (var element in itemInfo) {
        itemMessage += getMessage(itemInfo[element]);
    }
    return itemMessage;
}*/



function printInventory(inputs) {

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
}
