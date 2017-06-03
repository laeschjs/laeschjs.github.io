(function() {
    var routingApp = angular.module('routingApp', ['ngRoute']);

    routingApp.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'appController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'appController'
            })
            .when('/philosophy', {
                templateUrl: 'views/philosophy.html',
                controller: 'appController'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'appController'
            })
            .otherwise({
                redirectTo: '/home'
            });

    });

    // routingApp.config(['$httpProvider', function($httpProvider) {
    //     $httpProvider.defaults.useXDomain = true;
    //     delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //   }
    // ]);


    routingApp.controller('appController', function($scope) {
        $scope.changeClass = function(num){
            var li_div = "li" + num;
            document.querySelector(".active").classList.remove("active");
            document.getElementById(li_div).className += " active";
            document.body.scrollTop = 0;
        };
        $scope.goToTop = function(){
            $window.scrollTo(0,0);
        };
    });
})();