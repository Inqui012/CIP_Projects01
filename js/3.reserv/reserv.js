let $appointDate, $appointName, $appointTel, $appointVisit, $appointDocu;
let $appoint_patient = [];

// 셀렉트박스 생성
for (var i = 1; i < 13; i++) {
    $("#select-month").append("<option value=" + i + ">" + i + "</option>");
}
let $monthVal = 1;
let $lastDate = new Date(2022, $monthVal, 0);
for (var j = 1; j < $lastDate.getDate() + 1; j++) {
    $("#select-day").append("<option value=" + j + ">" + j + "</option>");
}
$("#select-month").change(function () {
    $monthVal = $("#select-month option:selected").val();
    $lastDate = new Date(2022, $monthVal, 0);
    $("#select-day").empty();
    for (var j = 1; j < $lastDate.getDate() + 1; j++) {
        $("#select-day").append("<option value=" + j + ">" + j + "</option>");
    }
})

$(".btn-01").click(function () {
    $("input[type=text]").siblings("span").css({ display: "none" });
})

// 완료버튼 누르면서 변수저장
$(".btn-02").click(function (e) {
    e.preventDefault();
    nameCheck();
    telCheck();
    $appointDate = "2022. " + $monthVal + ". " + $("#select-day option:selected").val();
    $appointName = $("#user-name").val();
    console.log($appointDate);
    console.log($appointName);
})

function nameCheck() {
    if (!$("#user-name").val().replace(/\s/g, "")) {
        $("input[type=text]").siblings("span").css({ display: "none" });
        $("#user-name").siblings(".input-required").css({ display: "block" })
        $("#user-name").css({ border: "2px solid red"})
        return false;
    } else {
        if (!nameVailCheck($("#user-name").val())) {
            $("input[type=text]").siblings("span").css({ display: "none" });
            $("#user-name").siblings(".input-vail-check").css({ display: "block" });
            $("#user-name").css({ border: "2px solid red"})
        }
        return false;
    }
    return true;
}

function telCheck() {
    if (!$("#user-tel").val().replace(/\s/g, "")) {
        $("#user-tel").next(".input-required").css({
            display: "block"
        })
        return false;
    }
    return true;
}

function nameVailCheck(name) {
    var reg = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    return reg.test(name);
}
function telVailCheck(tel) {
    var reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

sessionStorage.setItem("appoint", JSON.stringify($appoint_patient));
// let name = "2022" + $(월값) + "." + $(읿갓)