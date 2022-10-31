let $monthVal = null;

for (var i = 1; i < 13; i++) {
    $monthVal = i;
    $("#select-month").append("<option value=" + $monthVal + ">" + $monthVal + "</option>");
}

sessionStorage.setItem("appoint", JSON.stringify(appoint_patient));

let name = "2022" + $(월값) + "." + $(읿갓)