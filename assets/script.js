function navigation() {
    var element = document.getElementById("mobile-nav");
    element.classList.toggle("show");
}

function startAdvertising() {
    var element = document.getElementById("body-id");
    element.classList.toggle("hide");
    var element = document.getElementById("lightbox");
    element.classList.toggle("start-advertising-toggle");
}
