var count = 0;
var visible = false;
var check = document.querySelector('.check');
var overlay = document.querySelector('.overlay');

function getBill() {
    var shop = new Shop();
    var bill = new BillView();
    visible = true;

    var arr = shop.getValue();
    var total = shop.getTotal();
    bill.render(arr);
    bill.getTotalSum(total);
    bill.getCheckNumber(count);
    count++;
    bill.getTime();

}
function closeCheck() {
    visible = !visible;
    if (visible == false) {
        check.classList.remove('visible');
        overlay.classList.remove('visible');
    }
}
