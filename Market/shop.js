function Shop() {
    this.products = ['bread', 'milk', 'cheese', 'egg', 'potato', 'chips', 'water',
        'onion', 'tomato', 'meat', 'cucumber', 'oil', 'sauce', 'cookies', 'sweets'];

    this.getProduct = function (name) {
        switch (name) {
            case 'bread':
                return new Product(name, 500, 7.99);
            case 'milk':
                return new Product(name, 900, 14.99);
            case 'cheese':
                return new Product(name, 1000, 149.99);
            case 'egg':
                return new Product(name, 50, 0.99);
            case 'meat':
                return new Product(name, 1000, 99.99);
            case 'potato':
                return new Product(name, 1000, 8.99);
            case 'chips':
                return new Product(name, 200, 3.99);
            case 'water':
                return new Product(name, 500, 2.99);
            case 'onion':
                return new Product(name, 1000, 5.99);
            case 'tomato':
                return new Product(name, 1000, 24.99);
            case 'cucumber':
                return new Product(name, 1000, 10.99);
            case 'oil':
                return new Product(name, 500, 32.99);
            case 'sauce':
                return new Product(name, 200, 22.99);
            case 'cookies':
                return new Product(name, 1000, 64.99);
            case 'sweets':
                return new Product(name, 1000, 124.5);
            default:
                return 10;
        }
    }

    this.getValue = function () {
        var arr = [];
        for (var i = 0; i < this.products.length; i++) {
            var prodName = this.products[i];
            var prodNum = document.getElementById(prodName).value;
            var product = this.getProduct(prodName);
            var sumWeight = product.showSumWeight(prodNum);
            var sumPrice = product.showSumPrice(prodNum);
            var obj = {
                name: prodName,
                number: prodNum,
                weight: product.weight,
                price: product.price,
                totalWeight: sumWeight,
                totalPrice: sumPrice
            }
            arr.push(obj);
        }
        return arr;
    }
    this.getTotal = function () {
        var arr = this.getValue();
        var total = [];
        arr.forEach(function(item) {
            total.push(item.totalPrice);
        });
        return total;
    }
}
