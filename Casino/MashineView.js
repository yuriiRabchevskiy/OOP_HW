// function MashineView() {
//     var slot = new SlotMashine();

//     this.render = function () {
//         var ul = document.querySelector('.slot-list');

//         var li = document.querySelector('.slot-item');
//         var wrap = document.querySelector('.mashine-wrap');

//         var current = document.querySelector('.curr');
//         var total = document.querySelector('.total');

//         current.innerHTML = slot.getUserMoney();
//         total.innerHTML = slot.getTotalMoney();
//         console.log('hello', slot)

//         li.appendChild(wrap);
//         ul.appendChild(li);

//     };

//     return this;
// }