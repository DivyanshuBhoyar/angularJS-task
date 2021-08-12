var myApp = angular.module("myApp", [])

myApp.controller("storeControl", ["$scope" ,"$http" , ($scope, $http) => {
   
    //fetch data from api
    function getData() {
        $http({
            method: 'GET',
            url: 'https://fakestoreapi.com/products?limit=50'
        }).then(function successCallback(response) {
            $scope.items = response.data
            console.log($scope.items)
        }, function errorCallback(response) {
            alert("API error")
        });
    }
    //get data on load

    getData()

    
}])