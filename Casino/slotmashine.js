/*
@constructor class Slot MAshine
*/
class SlotMashin {
    constructor(id, cash) {
        this.id = id;
        this.money = cash;
    }
    getMoney() {
        return this.money;
    }
    setMoney(cash) {
        this.money = cash;
    }
    _getRandomNum(min, max) {
        var int = parseInt(Math.random() * (max - min + 1) + min);
        return int;
    }

    play(id, money) {
        if (this.money <= 0) return alert('You dont have money, please push cash....!!!');

        var input = document.querySelector('.step' + id);
        if (input.value > 5) {
            if (this.money >= input.value) {
                this.money = money - this._getRandomNum(-5, 5);
            } else {
                alert('Please Require step');
            }
        } else {
            if (this.money >= input.value) {
                this.money = money - this._getRandomNum(-input.value, input.value);
            }
            else {
                alert('Please Require step');
            }
        } 
        var curentCash = document.querySelector('.curr' + id);
        curentCash.innerHTML = this.money;
        // A gaming machine that increases the amount of money and you will never be able to win
        return this.money;
    }


}