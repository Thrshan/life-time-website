let windowWidth = $(window).width();
$(".box").hover(function (event) {
    if (event.clientX > (windowWidth / 2)) {
        $(this).find("span").addClass("to-left");
    }
}, function () {
    if (event.clientX > (windowWidth / 2)) {
        $(this).find("span").removeClass("to-left");
    }
});

function validateForm() {
var bDay = document.forms["DOBform"]["birthDay"].value;
  if (bDay == "") {
    alert("Fill birthday");
    return false;
  } else {
      return true;
  }
}