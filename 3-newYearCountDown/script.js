
var result = setInterval(function () {
    var thisYear = new Date().getFullYear();
    var countDownDate = new Date(thisYear + 1, 0, 1);

    var nowDate = new Date().getTime();

    var difference = countDownDate - nowDate;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById('counter').innerHTML = 'You have ' + days + ' days till New Year';

    if (difference < 0) {
        clearInterval(result);
        document.getElementById('counter').innerHTML = 'Happy New Year';
    }
}, 1000);