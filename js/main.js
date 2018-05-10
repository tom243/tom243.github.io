function normalizeVideoWidth() {
    var width = $("#cv-matcher .images > img").width();
    $("#cv-matcher #cv-matcher-video").css("width" , width);
    $("#cv-matcher #cv-matcher-video > video").css("width" , width);
}

$( document ).ready(function() {

    $('.animate').scrolla({
        once: true
    });

    $(".navbar-toggler").click(function() {
       $(this).toggleClass("is-active");
    });

    normalizeVideoWidth();

    $( window ).resize(function() {
        normalizeVideoWidth();
    });

});
