let _pic = $(".pic");
let _wrap = $("#wrap");
let _first = 360;
let target = 0;

let num = _pic.length;
let wide = 400;
let center = _wrap.width() / 2;
let deg = 360 / num;
let der = _pic.width() / 2;

let x = [];
let p = [];

console.log(x, p);

setInterval(radian, 80);

function radian() {
    _first = _first + (target - _first) * 0.1;

    for (var i = 0; i <= num; i++) {
        x[i] = Math.cos((_first + deg * i) * Math.PI / 180) * wide + center;
        p[i] = (1 - Math.sin((_first + deg * i) * Math.PI / 180)) / 2;

        _pic.eq(i).css({
            left: x[i] - der,
            transform: "scale(" + p[i] + "," + p[i] + ")",
            zIndex: Math.floor(p[i] * 100),
            opacity: p[i]
        });
    };
};

$(".next").click(function () {
    target += deg;
});

$(".prev").click(function () {
    target -= deg;
});

$("#wrap").mousewheel(function (e, delta) {
    if (delta < 0) {
        $(".next").click();
    } else {
        $(".prev").click();
    }
});