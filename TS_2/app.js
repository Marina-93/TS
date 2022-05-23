var age = 50;
var n = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
var anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person = ['Max', 21];
var Loder;
(function (Loder) {
    Loder[Loder["LOADING"] = 0] = "LOADING";
    Loder[Loder["READY"] = 1] = "READY";
})(Loder || (Loder = {}));
;
var page = {
    load: Loder.LOADING
};
if (page.load === Loder.LOADING) {
    console.log('LOADING');
}
if (page.load === Loder.READY) {
    console.log('READY');
}
var typeAny;
var literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
