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


function sizeTheVideo() {
    // - 1.78 is the aspect ratio of the video
// - This will work if your video is 1920 x 1080
// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
    var aspectRatio = 1.78;

    var video = $('#videoWithJs iframe');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight * aspectRatio;
    var halfNewWidth = newWidth / 2;

    //Define the new width and centrally align the iframe
    video.css({"width": newWidth + "px", "left": "50%", "margin-left": "-" + halfNewWidth + "px"});
}

$( document ).ready(function() {

    $('.animate').scrolla({
        once: true
    });

    // var video =$("video");
    // video.play();

    // // video.loop = true;
    // sizeTheVideo();
    // $(window).resize(function(){
    //     sizeTheVideo();
    // });

});
