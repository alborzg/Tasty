angular.module('tasty', []);
angular.module('tasty')
.controller('MainController', function($scope, $http) {
	$scope.title = "Tasty"
	$scope.counter = 0;
	var count = $scope.counter;
	// Add capability to increment and decrement between gifs and pages with counters
	//https://www.reddit.com/r/gifrecipes#page=1
    $http.get("https://www.reddit.com/r/gifrecipes.json")
    .then(function(response) {
        $scope.gifData = response.data.data.children[count].data.preview.images[0].variants.gif.source.url;
    });
});
