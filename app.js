angular.module('tasty', []);
angular.module('tasty')
.controller('MainController', function($scope, $http) {
	$scope.title = "Tasty"
	$scope.counter = 1;
    console.log($scope.counter);

    $scope.increment = function(counter){
        $scope.counter += 1;
         //$scope.updateGif();
				 scope.$apply();   
         console.log($scope.counter);

      }
    $scope.decrement = function(counter){
        if(counter<=0)
            {
                return;
            }

        $scope.counter -= 1;
         console.log($scope.counter);

      }

    $scope.updateGif = function(counter) {
      $http.get("https://www.reddit.com/r/gifrecipes.json")
    .then(function(response) {
        $scope.gifData = response.data.data.children[$scope.counter].data.preview.images[0].variants.gif.source.url;
    });
    }
	// Add capability to increment and decrement between gifs and pages with counters
	//https://www.reddit.com/r/gifrecipes#page=1
    $http.get("https://www.reddit.com/r/gifrecipes.json")
    .then(function(response) {
        $scope.gifData = response.data.data.children[$scope.counter].data.preview.images[0].variants.gif.source.url;
    });
});
