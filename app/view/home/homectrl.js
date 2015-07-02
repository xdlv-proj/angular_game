'use strict';

App.controller('HomeCtrl', ['$scope', 'Card', function($scope, Card) {
	$scope.cards = [];
	$scope.step = 0;
	
	function makeCards() {
		var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn', 'that-guy', 'zeppelin'];
		var cardList = [];
		tileNames.forEach(function(tile) {
			cardList.push(new Card(tile));
			cardList.push(new Card(tile));
		});

		var gridDimension = Math.sqrt(cardList.length);
		var random;
		for (var row = 0; row < gridDimension; row++) {
			$scope.cards[row] = [];
			for (var col = 0; col < gridDimension; col++) {
				random = Math.floor(Math.random() * cardList.length);
				$scope.cards[row][col] = cardList.splice(random, 1)[0];
			}
		}
	}

	$scope.flip = function(card) {
		if (card.flipped) {
			return;
		}
		card.flip();
		$scope.step++;
		switch ($scope.step % 3) {
			case 0:
			    $scope.firstCard.flip();
			    $scope.secondCard.flip();

			    $scope.firstCard = card;
			    $scope.secondCard = undefined;
			    $scope.step = 1;
				break;
			case 1:
				$scope.firstCard = card;
				break;
			case 2:
				$scope.secondCard = card;
				if ($scope.firstCard.title == $scope.secondCard.title){
					$scope.step = 0;
					$scope.firstCard = $scope.secondCard = undefined;
				}
				break;
		}
	};

	makeCards();
}]);