$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

// $(summary).click(function cloloChange() {
//   document.getElementById("summary").style.backgroundColor =
//     document.getElementById("#6098ff").value;
// });

// $("q-color").on("click", function () {
//   $("q-color").addClass("q-color").removeClass("q-color");
// });

// if ($("q-color").hasClass("bg-red")) {
//   $("q-color").addClass("bg-blue").removeClass("red");
// } else {
//   $("q-color").addClass("bg-red").removeClass("bg-blue");
// }

// function colorFunction() {
//   document.getElementById("q-color").style.backgroundcolor = "#6098ff";
// }
