function printInventory(inputs) {
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
}
