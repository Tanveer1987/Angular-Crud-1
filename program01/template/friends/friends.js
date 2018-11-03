angular.module("MyApp").controller('FriendsController', function ($scope, $location, FriendsService, Notification) {

    $scope.init = function () {
        FriendsService.getFriendsList().then(function (response) {
            $scope.friendsList = response;
        }, function (error) {
            $scope.friendsList = [];
        });
    }

    $scope.addFriends = function () {
        console.log("Add Friends called");
        $location.path("/friends/add");
    }

    $scope.editFriends = function (friend) {
        console.log("Edit Friends called ", friend)
        $location.path("/friends/edit/" + friend._id);
    }

    $scope.deleteFriends = function (friend) {
        console.log("Delete Friends called ", friend)

        FriendsService.deleteFriendById(friend._id).then(function (response) {
            Notification.success({message: 'Friend is deleted successfully.', title: 'Information'});
            $location.path('/home');
        }, function (error) {
            $location.path("/friends");
        });
        
    }

    $scope.init();
});