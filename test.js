function changeH1Color() {
    $("h1").css("color", "red");
}
$(document).ready(function() {
    $("button").click(changeH1Color);
});