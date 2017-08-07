(function() {

var app = angular.module("catdogApp");

// Define a controller named 'bandMembersController'
app.controller("dogInfoController", function($scope) {
    // Add a variable called "bandMembers" to the scope.
    $scope.bestDog = { name: "Strider", age: "11", breed: "Australian Cattle Dog"};
});

})();