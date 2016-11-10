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
            if(num==1){
                document.getElementById("li1").className += " active";
                if(document.getElementById("li2").classList.contains("active")){
                    document.getElementById("li2").classList.remove("active");
                } else if(document.getElementById("li3").classList.contains("active")){
                    document.getElementById("li3").classList.remove("active");
                } else if(document.getElementById("li4").classList.contains("active")){
                    document.getElementById("li4").classList.remove("active");
                }
            }
            else if(num==2){
                document.getElementById("li2").className += " active";
                if(document.getElementById("li1").classList.contains("active")){
                    document.getElementById("li1").classList.remove("active");
                } else if(document.getElementById("li3").classList.contains("active")){
                    document.getElementById("li3").classList.remove("active");
                } else if(document.getElementById("li4").classList.contains("active")){
                    document.getElementById("li4").classList.remove("active");
                }
            }
            else if (num==3){
                document.getElementById("li3").className += " active";
                if(document.getElementById("li2").classList.contains("active")){
                    document.getElementById("li2").classList.remove("active");
                } else if(document.getElementById("li1").classList.contains("active")){
                    document.getElementById("li1").classList.remove("active");
                } else if(document.getElementById("li4").classList.contains("active")){
                    document.getElementById("li4").classList.remove("active");
                }
            }
            else if(num==4){
                document.getElementById("li4").className += " active";
                if(document.getElementById("li2").classList.contains("active")){
                    document.getElementById("li2").classList.remove("active");
                } else if(document.getElementById("li3").classList.contains("active")){
                    document.getElementById("li3").classList.remove("active");
                } else if(document.getElementById("li1").classList.contains("active")){
                    document.getElementById("li1").classList.remove("active");
                }
            }
            document.body.scrollTop = 0;
        };
        $scope.goToTop = function(){
            alert("here");
            $window.scrollTo(0,0);
        };
    });





})();