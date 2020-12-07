function changeH1Red() {
    $("h1").css("color", "red");
}

function changeH1Blue() {
    $("h1").css("color", "blue");
}
$(document).ready(function() {
    $("button").mousedown(changeH1Red);
    $("button").mouseup(changeH1Blue);
});