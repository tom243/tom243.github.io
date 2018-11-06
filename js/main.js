var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

/* Utils */

function scrollReval() {

    // Changing the defaults
    window.sr = ScrollReveal({reset: true});

    // Customizing a reveal set
    sr.reveal('.animate', {
        // 'bottom', 'left', 'top', 'right'
        origin: 'bottom',

        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        distance: '100px',

        // Time in milliseconds.
        duration: 1500,
        delay: 0,

        // Starting angles in degrees, will transition from these values to 0 in all axes.
        rotate: {x: 0, y: 0, z: 0},

        // Starting opacity value, before transitioning to the computed opacity.
        opacity: 0,

        // Starting scale value, will transition from this value to 1
        scale: 0.9,

        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',

        // `<html>` is the default reveal container. You can pass either:
        // DOM Node, e.g. document.querySelector('.fooContainer')
        // Selector, e.g. '.fooContainer'
        container: window.document.documentElement,

        // true/false to control reveal animations on mobile.
        mobile: true,

        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        reset: true,

        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        useDelay: 'always',

        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        viewFactor: 0.1,

        // Pixel values that alter the container boundaries.
        // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
        // --
        // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},

        // Callbacks that fire for each triggered element reveal, and reset.
        beforeReveal: function (domEl) {
        },
        beforeReset: function (domEl) {
        },

        // Callbacks that fire for each completed element reveal, and reset.
        afterReveal: function (domEl) {
        },
        afterReset: function (domEl) {
        }
    });

}

function scrollTop() {
    $(window).scrollTop(0);
}


function EnableBrowserButtons(index) {

    if (index === 0) {
        $(".prev-button").attr("disabled", true);
    }

    if (index === projectArr.length - 1) {
        $(".next-button").attr("disabled", true);
    }

    $(".prev-button").click(function () {
        if (index < projectArr.length && index >= 0) {
            index--;
            window.location.href = "#" + projectArr[index];
        }
    });

    $(".next-button").click(function () {
        if (index < projectArr.length && index >= 0) {
            index++;
            window.location.href = "#" + projectArr[index];
        }
    });

}

/* End Utils */

/* End Common functions */

/* Common vars */

var projectArr = [
    "project-fastlane", "project-fashion", "project-cafe-kadosh", "project-cv-matcher", "project-gali-website",
    "project-lana",  "project-brochure", "project-weddings"
];

/* End Common vars */

/* Common functions */

angular.element(document).ready(function () {

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("is-active");
    });

    $('.navbar-nav a').on('click', function () {
        $('.navbar-toggler').click() //bootstrap 3.x by Richard
    });

});

// configure our routes
portfolioApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })

        // route for the project-brochure page
        .when('/project-brochure', {
            templateUrl: 'pages/project-brochure.html',
            controller: 'projectBrochureController'
        })

        // route for the project-cv-matcher page
        .when('/project-cv-matcher', {
            templateUrl: 'pages/project-cv-matcher.html',
            controller: 'projectCvMatcher'
        })

        // route for the project-fashion page
        .when('/project-fashion', {
            templateUrl: 'pages/project-fashion.html',
            controller: 'projectFashionController'
        })

        // route for the project-fastlane page
        .when('/project-fastlane', {
            templateUrl: 'pages/project-fastlane.html',
            controller: 'projectFastlaneController'
        })

        // route for the project-lana page
        .when('/project-lana', {
            templateUrl: 'pages/project-lana.html',
            controller: 'projectLanaController'
        })

        // route for the project-cafe-kadosh
        .when('/project-cafe-kadosh', {
            templateUrl: 'pages/project-cafe-kadosh.html',
            controller: 'projectCafeKadoshController'
        })

        // route for the project-gali-website page
        .when('/project-gali-website', {
            templateUrl: 'pages/project-gali-website.html',
            controller: 'projectGaliWebsiteController'
        })

        // route for the project-weddings page
        .when('/project-weddings', {
            templateUrl: 'pages/project-weddings.html',
            controller: 'projectWeddingsController'
        });

});

// create the controller and inject Angular's $scope
portfolioApp.controller('mainController', function ($scope) {
    scrollTop();
});

portfolioApp.controller('aboutController', function ($scope) {
    scrollTop();
});

portfolioApp.controller('contactController', function ($scope) {
    scrollTop();
});

portfolioApp.controller('projectFastlaneController', function ($scope) {
    scrollTop();
    scrollReval();

    angular.element(document).ready(function () {
        EnableBrowserButtons(0);
    });

});

portfolioApp.controller('projectFashionController', function ($scope) {
    scrollTop();

    angular.element(document).ready(function () {
        EnableBrowserButtons(1);
    });

});

portfolioApp.controller('projectCafeKadoshController', function ($scope) {
    scrollTop();
    scrollReval();

    angular.element(document).ready(function () {
        EnableBrowserButtons(2);
    });
});

portfolioApp.controller('projectCvMatcher', function ($scope) {

    function normalizeVideoWidth() {
        var width = $("#cv-matcher .images > img:nth-child(1) ").width();
        $("#cv-matcher #cv-matcher-video").css("width", width);
        $("#cv-matcher #cv-matcher-video > video").css("width", width);
    }

    var flag = false;

    function checkFlag() {

        var width = $("#cv-matcher .images > img:nth-child(1) ").width();
        if (width !== 0) {
            flag = true;
        }

        if(flag === false) {
            window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
        } else {
            normalizeVideoWidth();
        }
    }

    angular.element(document).ready(function () {
        checkFlag();
        $(window).resize(function () {
            normalizeVideoWidth();
        });
        EnableBrowserButtons(3);
    });

    scrollTop();
    scrollReval();
});

portfolioApp.controller('projectGaliWebsiteController', function ($scope) {
    scrollTop();
    scrollReval();

    angular.element(document).ready(function () {
        EnableBrowserButtons(4);
    });
});

portfolioApp.controller('projectLanaController', function ($scope) {
    scrollTop();
    scrollReval();

    angular.element(document).ready(function () {
        EnableBrowserButtons(5);
    });

});

portfolioApp.controller('projectBrochureController', function ($scope) {
    scrollTop();
    scrollReval();

    angular.element(document).ready(function () {
        EnableBrowserButtons(6);
    });
});

portfolioApp.controller('projectWeddingsController', function ($scope) {
    scrollTop();
    scrollReval();

    angular.element(document).ready(function () {
        EnableBrowserButtons(7);
    });
});

