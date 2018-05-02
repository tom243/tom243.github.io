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


$( document ).ready(function() {
    // $(function() {
    //     $('.lazy').lazy({
    //         effect: "scrollTop",
    //         effectTime: 2000,
    //         threshold: 0
    //     });
    // });

    $('.animate').scrolla({
        once: true
    });

    var video = document.getElementById('video');
    video.play();
    video.loop = true;
});
