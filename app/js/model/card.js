'use strict';

App.factory('Card', [function(){
	return function Card(title){
		this.title = title;
		this.flipped = false;

		this.flip = function(){
			this.flipped = !this.flipped;
		};
	};
}]);