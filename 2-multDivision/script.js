var x = 0;
var y = 0;

var sign = '';

function count(a) {
    sign = a;
}

function pressNum(number) {
    if (x === 0) {
        x = number;
    }
    else {
        y = number;
    }
}

function equal() {
    if (sign === '*') {
        alert(x*y);
    }
    else {
        alert(x/y);
    }
    x = 0;
    y =0;
}