angular.module("MyApp").controller('HomeController', function($scope, FriendsService) {
    console.log("HomeController is running");

    FriendsService.getFriendsList().then(function(response){
        $scope.friendsList = response;
    }, function(error){
        $scope.friendsList = [];
    });

});