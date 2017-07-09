function Product(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;

    this.showSumWeight = function (number) {
        var weight = this.weight * parseInt(number);
        return weight;
    }

    this.showSumPrice = function (number) {
        var price = this.price * parseInt(number);
        return price;
    }
}
