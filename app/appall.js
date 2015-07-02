"use strict";
var App = angular.module("ParkStation", ["ngRoute"]);
App.config(["$routeProvider", function(e) {
	e.when("/home", {
		templateUrl: "view/home/home.html",
		controller: "HomeCtrl"
	}).otherwise({
		redirectTo: "/home"
	})
}]), App.factory("Card", [function() {
	return function(e) {
		this.title = e, this.flipped = !1, this.flip = function() {
			this.flipped = !this.flipped
		}
	}
}]), App.directive("myDraggable", ["$document", function(e) {
	return {
		link: function(t, o) {
			function r(e) {
				p = e.pageY - a, s = e.pageX - i, o.css({
					top: p + "px",
					left: s + "px"
				})
			}

			function n() {
				e.off("mousemove", r), e.off("mouseup", n)
			}
			var i = 0,
				a = 0,
				s = 0,
				p = 0;
			o.css({
				position: "relative",
				cursor: "pointer"
			}), o.on("mousedown", function(t) {
				t.preventDefault(), i = t.pageX - s, a = t.pageY - p, e.on("mousemove", r), e.on("mouseup", n)
			})
		}
	}
}]), App.controller("HomeCtrl", ["$scope", "Card", function(e, t) {
	function o() {
		var o = ["8-ball", "kronos", "baked-potato", "dinosaur", "rocket", "skinny-unicorn", "that-guy", "zeppelin"],
			r = [];
		o.forEach(function(e) {
			r.push(new t(e)), r.push(new t(e))
		});
		for (var n, i = Math.sqrt(r.length), a = 0; i > a; a++) {
			e.cards[a] = [];
			for (var s = 0; i > s; s++) n = Math.floor(Math.random() * r.length), e.cards[a][s] = r.splice(n, 1)[0]
		}
	}
	e.cards = [], e.step = 0, e.flip = function(t) {
		if (!t.flipped) switch (t.flip(), e.step++, e.step % 3) {
			case 0:
				e.firstCard.flip(), e.secondCard.flip(), e.firstCard = t, e.secondCard = void 0, e.step = 1;
				break;
			case 1:
				e.firstCard = t;
				break;
			case 2:
				e.secondCard = t, e.firstCard.title == e.secondCard.title && (e.step = 0, e.firstCard = e.secondCard = void 0)
		}
	}, o()
}]);