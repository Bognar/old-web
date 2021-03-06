﻿'use strict';
var app = angular.module('midget', ['ngRoute', 'chart.js'])
    .config(['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {
   
    $routeProvider

        .when('/mywork', {
            templateUrl: 'mywork.html',
            controller: 'work'
            
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'about'

        })
        .when('/posts', {
            templateUrl: 'posts.html',
            controller: 'posts'

        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contact'

        })
        .when('/post/:id', {
            templateUrl: 'post.html',
            controller: 'postctrl'

        })
        .otherwise({
            redirectTo: '/'
            });
    $locationProvider.html5Mode({ enabled: true,
  requireBase: false });
    
            }]);

app.controller('work', ['$scope', '$http', function ($scope, $http) {
        $http.get('scripts/skills.json').then(function (response) {
            $scope.mywork = response.data;
            
        });
}]);
    

app.controller('about', function ($scope) { });

app.controller("PolarAreaCtrl", function ($scope) {
    $scope.labels = ["Angular", "Firebase", "Parallax.js", "HTML", "CSS", "JavaScripts", "NodeJS", "Bootstrap", "Angular JS", "PHP", "JQuery", "Ionic", "Photoshop", "Git", "ChartsJS", "Wordpress", "mySQL", "RESTful", "InkScape"];
    $scope.data = [50, 40, 50, 90, 90, 70, 60, 100, 75, 35, 65, 55, 75, 85, 50, 90, 80, 75, 65];
    $scope.options = {
        legend: {
            display: true,
            
            labels: {
                fontColor: '#fdfcba',
                boxWidth: 10
            }
        },
        elements: {
            arc: {
                borderColor: "#ffffff",
                borderWidth: "1"
            }
        
        },
        scales: {
            AngleLines: {
                color: "#ffffff",
            }
        }
    }
});


app.controller('posts', ['$scope', '$http', function ($scope, $http) {
    $http.get('scripts/posts.json').then(function (response) {
        $scope.posts = response.data;
        $scope.posts = JSON.parse($scope.posts)
    });
}]);

app.controller('contact', function ($scope) { });
app.controller('mainCtrl', function ($scope) {

    $scope.hoverIn = function (pimp) {
        var pimp = this;
        pimp.add = "jello";
    };
});

app.controller('pm', function ($scope) { 
$scope.min = 0;

$scope.minus = function () {
    $scope.min = $scope.min - 20;
    
};
$scope.plus = function () {
    $scope.min = $scope.min + 20;
    
};
});
app.controller('postctrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('scripts/posts.json').then(function (response) {
        $scope.post = response.data[$routeParams.id];
    });

}]);
app.config([
    '$httpProvider',
    function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }
])
