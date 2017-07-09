var input = document.querySelector('#userMoney');
var numSlot = document.querySelector('#numSlot');
var casino;

function createMashine(id, money) {
  var ul = document.getElementById('mashines');
  var li = document.createElement('li');
  li.setAttribute('class', 'mashine-wrap');
  var number = document.createElement('span');
  number.innerHTML = 'Slot Number ' + id;
  var current = document.createElement('span');
  current.setAttribute('class', 'curr' + `${id}`);
  current.innerHTML = money;
  var step = document.createElement('input');
  step.setAttribute('type', 'number');
  step.setAttribute('class', 'step' + `${id}`);
  step.setAttribute('value', 5);
  var button = document.createElement('button');
  button.setAttribute('id', `${id}`);
  button.innerText = 'Play';
  button.setAttribute('onclick', 'play(event)');

  li.appendChild(number);
  li.appendChild(current);
  li.appendChild(step);
  li.appendChild(button);
  ul.appendChild(li);
}

function createCasino(casino) {
  var ul = document.getElementById('mashines');
  ul.innerHTML = ''
  var yourTotal = document.querySelector('#total');
  yourTotal.innerHTML = casino.getTotalMoney();
  var items = casino.mashines;
  items.forEach(function (item) {
    createMashine(item.id, parseInt(item.money));
  });
}

function pushMoney() {
  if (numSlot.value <= 0) return alert('Please set Mashine');
  if (casino && casino.length > 0) casino = [];
  casino = new Casino(parseInt(numSlot.value), parseInt(input.value));
  createCasino(casino);
}

function play(e) {
  e.preventDefault();
  var arr = [];
  casino.mashines.forEach(function (item) {
    arr.push(item);
  });
  var item = arr.find(i => i.id == e.target.id);
  if (item.money <= 0) return alert('You Lose!!!');
  item.play(item.id, item.money);
  casino.chengeMoney(item.money);
  var total = document.querySelector('#total');
  total.innerHTML = casino.getTotalMoney();
}



