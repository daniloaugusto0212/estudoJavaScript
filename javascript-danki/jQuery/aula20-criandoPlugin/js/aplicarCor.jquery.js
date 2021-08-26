
$.fn.aplicarCor = function (options) {
    var settings = $.extend({
        //default
        color: "#556b2f",
        backgroundColor: "white"
    }, options);

    return this.css({
        color: settings.color,
        backgroundColor: settings.backgroundColor
    });
}




