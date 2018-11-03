angular.module("MyApp").controller('FriendsAddController', function ($scope, $location, FriendsService, Notification) {
    $scope.friends = {};

    $scope.cancelForm = function() {
        $location.path('/friends');
    }

    $scope.submitForm = function() {
        console.log($scope.friends);
        FriendsService.saveFriend($scope.friends).then(function(response) {
            console.log(response);
            if(response) {
                Notification.success({message: 'Friend is added successfully.', title: 'Information'});
                $location.path('/friends');
            }
        }, function(error){
            console.log(error);
        });
    }
});