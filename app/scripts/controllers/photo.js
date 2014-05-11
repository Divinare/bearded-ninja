'use strict';

var app = angular.module('beardedNinjaApp');
  
  app.directive('myDraggable', ['$document', function($document) {
    return function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    };
  }]);

app.controller('PhotoCtrl', function ($scope, $routeParams, $http, Comments) {

	$http.get('http://bearded-ninja-backend.herokuapp.com/images/' + $routeParams.id + '.json').success( function(data, status, headers, config) {
		console.log(data);
		console.log($routeParams.id);
		console.log(data.name);
		$scope.image = data;


/*		$scope.createComment = function() {
        $http.post('http://bearded-ninja-backend.herokuapp.com/comments.json', $scope.comment).success( function(data, status, headers, config) {
            $scope.entries.push(data)
        });
        $scope.comment = {}
    }*/
//     $scope.createComment = function() {
//      Comments.create($scope.comment).success(function(data, status, headers, config) {
// /*        $scope.entries.push(data);*/
//      });
//      $scope.comment = {}
//     }

	});

	$scope.growViews = function(){
		$scope.views = $scope.views + 1;
	}

		$scope.views = 0;

});

app.factory('Comments', function($http){
    var URL_BASE = 'http://bearded-ninja-backend.herokuapp.com/comments';

    var commentsService = {};
    
    commentsService.all = function(){
     return $http.get(URL_BASE+".json")	
    }

    commentsService.create = function(data){
     console.log("called")
     return $http.post(URL_BASE+".json", data)	
    }

    commentsService.delete = function(data){
      return $http.delete(URL_BASE+"/"+data.id+".json", data)
    }

    return commentsService;
});

