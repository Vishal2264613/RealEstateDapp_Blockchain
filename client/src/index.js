var accordian = document.getElementsByClassName("contentBx");
var _loop_1 = function (i) {
    accordian[i].addEventListener("click", function () {
        accordian[i].classList.toggle("active");
    });
};
for (var i = 0; i < accordian.length; i++) {
    _loop_1(i);
}
