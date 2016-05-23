var fjs = require('functional.js')

var inputs = [{
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00

}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
}, {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00
}, {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00
}, {
    barcode: 'ITEM000004',
    name: '电池',
    unit: '个',
    price: 2.00
}];

var fjs = require('functional.js')
function printInventory(inputs) {

    totalPrice = getTotalPrice(inputs);
    sumMessage = '总计：' + totalPrice.toFixed(2) + '(元)\n';
    var expectText = '***<没钱赚商店>购物清单***\n' + getItemMessage(inputs) + '----------------------\n' + sumMessage + '**********************';
    console.log(expectText);
}

function getItemMessage(inputs){
    itemGroups = getItemGroups(inputs);
    var message = '';
    for (var index in itemGroups) {
        var numbers = itemGroups[index].length;
        message += getMessage(itemGroups[index][0], numbers);
    }
    return message;
}

function getItemGroups(inputs){
    var groupByBarcode = fjs.group(function(item) {
        return item.barcode;
    });
    var itemGroups = groupByBarcode(inputs);
    return itemGroups;
}

function getTotalPrice(inputs){
     var add = function(args1, args2) {
        return args1 + args2;
    }
    var sum = fjs.reduce(add);

    var prices = fjs.pluck('price', inputs);
    var totalPrice = sum(prices);
    return totalPrice;
}

function getMessage(data, numbers) {
    return '名称：' + data.name + '，数量：' + numbers + data.unit + '，单价：' + data.price.toFixed(2) + '(元)，小计：' + (data.price * numbers).toFixed(2) + '(元)\n';
}

printInventory(inputs);
