angular.module("MyApp").service('FriendsService', function ($http, $q) {

    var FRIEND_URL = 'http://localhost:3000/friends/';



    this.getFriendsList = function () {

        var deferred = $q.defer();

         $http.get(FRIEND_URL)
              .then( (response) => deferred.resolve(response.data),
                    (error) => deferred.reject(error) );
        
        return deferred.promise;
    }

    this.saveFriend = function (friend) {

        var deferred = $q.defer();

         $http.post(FRIEND_URL, friend)
            .then( (response) => deferred.resolve(response.data),
                   (error) => deferred.reject(error) );
        
        return deferred.promise;
    }

    this.updateFriend = function (friend) {

        var deferred = $q.defer();

         $http.put(FRIEND_URL, friend)
         .then( (response) => deferred.resolve(response.data),
                (error) => deferred.reject(error) );
        
        return deferred.promise;
    }

    this.getFriendById = function (id) {

        var deferred = $q.defer();

         $http.get(FRIEND_URL + id)
         .then( (response) => deferred.resolve(response.data),
                (error) => deferred.reject(error) );
        
        return deferred.promise;
    }

    this.deleteFriendById = function (id) {

        var deferred = $q.defer();

         $http.delete(FRIEND_URL + id)
         .then( (response) => deferred.resolve(response.data),
                 (error) => deferred.reject(error) );
        
        return deferred.promise;
    }

    

   
});