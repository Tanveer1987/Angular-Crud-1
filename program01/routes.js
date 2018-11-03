angular.module("MyApp").config(function($routeProvider, NotificationProvider) {

    console.log("Configuration function is running....");

    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'left',
        positionY: 'bottom'
    });

    
    $routeProvider.when("/", {
        redirectTo : "/home"
    }).when("/home", {
        templateUrl : 'template/home/home.html',
        controller : 'HomeController'
    }).when("/about", {
        templateUrl : 'template/about/about.html',
        controller : 'AboutController'
    }).when("/friends", {
        templateUrl : 'template/friends/friends.html',
        controller : 'FriendsController'
    }).when("/friends/add", {
        templateUrl : 'template/friends/friends_add.html',
        controller : 'FriendsAddController'
    }).when("/friends/edit/:id", {
        templateUrl : 'template/friends/friends_edit.html',
        controller : 'FriendsEditController'
    });
});