function printInventory(inputs) {
    var info = {};
    var itemInfo = {};

    for (var index in inputs) {
        var item = new Item(inputs[index]);
        itemInfo[inputs[index].barcode] = item;

        info[inputs[index].barcode] = info[inputs[index].barcode] ? info[inputs[index].barcode] + 1 : 1;
    }

    var sum = 0.0;
    var message = '';
    for (var index in info) {
        var item = itemInfo[index];
        var data = {};
        data.name = item.name;
        data.unit = item.unit;
        data.price = item.price;
        data.count = info[index];
        data.total = data.count * data.price;
        sum += data.total;
        message += getMessage(data);
    }

    sumMessage = '总计：' + sum.toFixed(2) + '(元)\n';


    // var expectText =
    //         '***<没钱赚商店>购物清单***\n' +
    //         message + 
    //         '----------------------\n' +
    //         sumMessage +
    //         '**********************'.toString();

    var expectText =
        '***<没钱赚商店>购物清单***\n' +
        // '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
        // '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
        // '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
        message + 
        '----------------------\n' +
        sumMessage +
        '**********************';
    console.log(expectText);
}

function getMessage(data) {
    return '名称：' + data.name + '，数量：' + data.count + data.unit + '，单价：' + data.price.toFixed(2) + '(元)，小计：' + data.total.toFixed(2) + '(元)\n';

}
