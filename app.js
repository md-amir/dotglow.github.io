
document.addEventListener("DOMContentLoaded", function () {
    var section = document.getElementById("section");

    for (var i = 0; i < 510; i++) {
        section.insertAdjacentHTML('beforeend', '<span></span>');
    }

});