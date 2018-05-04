// var $video  = $('video'),
//     $window = $(window);
//
// $(window).resize(function(){
//     var height = $window.height();
//     $video.css('height', height);
//
//     var videoWidth = $video.width(),
//         windowWidth = $window.width(),
//         marginLeftAdjust =   (windowWidth - videoWidth) / 2;
//
//     $video.css({
//         'height': height,
//         'marginLeft' : marginLeftAdjust
//     });
//
// }).resize();


function fakeClick(fn) {
    var $a = $('<a href="#" id="fakeClick"></a>');
    $a.bind("click", function(e) {
        e.preventDefault();
        fn();
    });

    $("body").append($a);

    var evt,
        el = $("#fakeClick").get(0);

    if (document.createEvent) {
        evt = document.createEvent("MouseEvents");
        if (evt.initMouseEvent) {
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            el.dispatchEvent(evt);
        }
    }

    $(el).remove();
}

$( document ).ready(function() {

    $('.animate').scrolla({
        once: true
    });

    var video = $("video").get(0);

    fakeClick(function() {
        video.play();
    });

});
