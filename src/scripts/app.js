angular.module('myApp',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('route1')

		$stateProvider
			.state('route1',{
				url:'/route1',
				// templateUrl:'partials/route1.html'
				views:{
					"viewA":{
						template:"route1.viewA"
					},
					"viewB":{
						template:"route2.viewB"
					}
				}
			})

			.state('route1.list',{
				url:'/list',
				templateUrl:'partials/route1.list.html',
				controller:function($scope){
					$scope.items = ["A","List","Of","Items"];
				}
			})
			.state('route2',{
				url:'/route2',
				// templateUrl:'partials/route2.html'
				views:{
					"viewA":{
						template:"route2.viewA"
					},
					"viewB":{
						template:"route2.viewB"
					}
				}
			})
			.state('route2.list',{
				url:'/list',
				templateUrl:'partials/route2.list.html',
				controller:function($scope){
					$scope.things = ["A","Set","Of","Things"];
				}
			})
	})