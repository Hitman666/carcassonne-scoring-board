'use strict';

angular.module('carcassonneScoringBoardApp')
	.controller('MainCtrl', function ($scope) {
    	$scope.playersCount = 0;

    	$scope.initializeGame = true;
    	$scope.gameStarted = false;
    	$scope.showResults = false;
    	
    	$scope.points = [];
    	$scope.players = [];

    	$scope.useri = []; //array of objects

    	$scope.selectedUser = '';
    	$scope.selectedUserId = 0;

    	$scope.getTimes=function(){
		    var a = new Array();

		    for(var i=1; i <= $scope.playersCount; i++)
				a.push(i);

		    return a;	    
		}

		$scope.getPlayers = function(id){
	        //here get the value of that inserted in the element with the id of "input_" + id
	        return $scope.players[id-1];
	    }

	    $scope.getPoints = function(id){
	        //here get the value of that inserted in the element with the id of "input_" + id
	        return $scope.points[id-1];
	    }

		$scope.startGame = function(){
			$scope.initializeGame = false;
			$scope.gameStarted = true;

			for (var i = 0; i < $scope.playersCount; i++)
				$scope.points[i] = 0;

			$scope.useri = []; //array of objects
		}

		$scope.endGame = function(){
			$scope.gameStarted = false;
			$scope.showResults = true;

			//sort results
			for(var i = 0; i < $scope.players.length; i++){
				var user = {};
				user.name = $scope.players[i];
				user.points = $scope.points[i];

				$scope.useri.push(user);
			}

			$scope.useri.sort(function(a,b) {
			    if( a.points === b.points){
			    	return a.points > b.points;
			    }
			    else{
			    	return a.points < b.points;
			    }
			});
		}

		$scope.newGame = function(){
			$scope.initializeGame = true;
			$scope.gameStarted = false;
			$scope.showResults = false;

			$scope.playersCount = 0;

			$scope.points = [];
	    	$scope.players = [];

	    	$scope.selectedUser = '';
    		$scope.selectedUserId = 0;
		}

		$scope.restartGame = function(){
			$scope.initializeGame = true;
			$scope.showResults = false;

			$scope.points = [];
	    	
	    	$scope.selectedUser = '';
    		$scope.selectedUserId = 0;

    		$scope.startGame();
		}


		$scope.setSelectedUser = function(id){
			$scope.selectedUserId = id;
			$scope.selectedUser = $scope.players[id];
		}

		$scope.isSelected = function(id){
			if ($scope.players[id] == $scope.selectedUser)
				return true;
			else
				return false;
		}

		$scope.addPoints = function (points){
			$scope.points[$scope.selectedUserId] += points;
		}
	});

angular.module('carcassonneScoringBoardWelcome')
	.controller('MyController', function ($scope) {
    	$scope._showElectronic = false;
    	$scope._how = false;

    	$scope.showElectronic = function(){
			$scope._how = false;			
			$scope._showElectronic = !$scope._showElectronic;
    	}

    	$scope.showHow = function(){
			$scope._showElectronic = false;	
			$scope._how = !$scope._how;
    	}
	});