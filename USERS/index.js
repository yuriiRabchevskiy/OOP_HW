var users = [];
var count = 1;


function addUser(e) {
    e.preventDefault();
    var user = new User();
    var name = document.querySelector('#name');
    var birth = document.querySelector('#birth');
    var address = document.querySelector('#address');
    var phone = document.querySelector('#phone');
    var email = document.querySelector('#email');
    var sexMale = document.querySelector('#male');
    var sexFem = document.querySelector('#female');
    var sex = sexMale.checked ? sexMale : sexFem;
    user.setUser(count, name.value, sex.id, birth.value, address.value, phone.value, email.value);
    users.push(user);
    count++;
    if (users.length > 0) {
        $('.table-container').empty();
    }
    createTable(users);
}

function createTable(users) {
    var keys = getKeys(users);

    var table = $('<table />');
    table.addClass('table');
    var tHeader = $('<thead />');
    var tBody = createBody(users, keys);
    var thCell = createHeader(keys);
    tHeader.append(_.initial(thCell));
    table.append(tHeader).append(tBody);
    $('.table-container').append(table);

}

function getKeys(users) {
    return _.chain(users).map(function (key) {
        return _.keys(key);
    }).flatten().unique().value();
}

function createHeader(keys) {
    return _.map(keys, function (key, index) {
        var cell = $('<th />');
        cell.text(key);
        cell.addClass('th-cell');
        return cell;
    });
}

function createBody(users, keys) {
    var newTable = $('.user-table');
    var tBody = $('<tbody />');
    var rows = _.map(users, function (item, index) {
        var row = $('<tr />');
        var cells = _.map(keys, function (key, index) {
            var cell = $('<td />');
            if (item[key]) {
                cell.text(item[key]);
            }
            if (index > 1) cell.addClass('hidden');
            return cell;
        });
        row.append(_.initial(cells));
        row.on('click', function () {
            var isVisible = item.changeDataVisibility();
            var el = _.without(cells, cells[0], cells[1]);
            if (!isVisible) {
                _.map(el, function (it) {
                    return it.removeClass('visible').addClass('hidden');
                });
            } else {
                _.map(el, function (it) {
                    return it.removeClass('hidden').addClass('visible');
                });
            }
        });
        return row;
    });
    tBody.append(rows);
    return tBody;
}