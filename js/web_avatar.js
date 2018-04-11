//---------------------------------------------------------
//
// web_avatar.js
// Data: 10/29/2015
//
//---------------------------------------------------------

var app = angular.module('appWebAvatar', []);
app.controller('ctrlWebAvatar', function($scope, $http) {
    $http.get("./dialogs/dialog-1.js")
    .success(function(response){
		$scope.root = response.root;
		$scope.nodes = response.nodes;
		$scope.currentNode = $scope.nodes[$scope.root];
	});
});