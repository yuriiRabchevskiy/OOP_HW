class Casino {

    constructor(num, cash) {
        this.totalMoney = cash;
        this.totalSum = [];
        this.number = num;
        this.mashines = [];
        for (var i = 0; i < num; i++) {
            var mashine, sum;
            if (i == 0 && num % 2 != 0) {
                sum = Math.ceil(cash / num);
                mashine = new SlotMashin(i, sum);
            } else {
                sum = Math.floor(cash / num);
                mashine = new SlotMashin(i, sum);
            }
            this.mashines.push(mashine);
        }
    }

    getCasino() {
        return this.mashines;
    }
    getTotalMoney() {
        if (this.totalMoney <= 0) return alert('You WON!!!!');
        return this.totalMoney;
    }
    setTotalMoney(money) {
        this.totalMoney += money;
    }
    chengeMoney(total) {
        var lastIndex;
        if (this.totalSum.length == 0) {
            lastIndex = parseInt(this.totalMoney / this.number);
        } else {
            lastIndex = this.totalSum[this.totalSum.length - 1];
        }
        this.totalSum.push(total);
        this.totalMoney = this.totalMoney + (lastIndex - total);
    }
}