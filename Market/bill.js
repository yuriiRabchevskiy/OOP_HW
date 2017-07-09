function BillView() {
    var check = document.querySelector('.check').classList.add('visible');
    var overlay = document.querySelector('.overlay').classList.add('visible');
    var billWrap = document.querySelector('.bill-wrap');
    var bill = document.querySelector('template#bill').innerHTML;
    var billTotal = document.querySelector('.bTotal');
    var checkNum = document.querySelector('.number-bill');
    var date = new Date();
    var billDay = document.querySelector('.bill-day');

    this.render = function (items) {
        var html = '';
        items.forEach(function (item) {
            if (item.number == 0) return;
            html += bill.replace('{name}', item.name)
                .replace('{price}', item.price)
                .replace('{weight}', item.weight)
                .replace('{number}', item.number)
                .replace('{totalWeight}', item.totalWeight)
                .replace('{totalPrice}', item.totalPrice)
        });
        billWrap.innerHTML = html;
    }

    this.getCheckNumber = function (check) {
        checkNum.innerHTML = 'Check Number: ' + check;
    }

    this.getTime = function () {
        var time = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + '--' + ' ' + date.getHours() + '/' + date.getMinutes();
        billDay.innerHTML = '# ' + time;
    }

    this.getTotalSum = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i];
        }
        billTotal.innerHTML = '$' + sum.toFixed(4);
    }

    return this;
}