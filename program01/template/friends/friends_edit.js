angular.module("MyApp").controller('FriendsEditController', function ($scope, $routeParams, $location, FriendsService, Notification) {

    if($routeParams.id) {
        console.log("ID : " + $routeParams.id);
        FriendsService.getFriendById($routeParams.id).then(function(response){
            $scope.friends = response;
        }, function(error){
            $scope.friends = {};
        });
    }


    

    $scope.cancelForm = function() {
        $location.path('/friends');
    }

    $scope.submitForm = function() {
        console.log($scope.friends);
        FriendsService.updateFriend($scope.friends).then(function(response) {
            console.log(response);
            if(response) {
                Notification.success({message: 'Friend is updated successfully.', title: 'Information'});
                $location.path('/friends');
            }
        }, function(error){
            console.log(error);
        });
    }
});