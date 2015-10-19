var app = angular.module("myApp",[]);
	
	app.controller("CompanyCtrl",function($scope){
		$scope.companies = [
							{ 'name':'Google',
								'employees':125000,
								'headoffice':'California'},
							{'name':'Facebook',
								'employees':121233,
								'headoffice':'Menlo Park'},

							{'name':'Tower Research',
								'employees':4395454,
								'headoffice':'Gurgaon'},

							{'name':'Crystal',
								'employees':102873,
								'headoffice':'Random'},
							{'name':'Yahoo',
								'employees':10001,
								'headoffice':'U.S.'},
							];
		$scope.addRow = function(){
			$scope.companies.push({'name':$scope.name,
								'employees':$scope.employees,
								'headoffice':$scope.headoffice});
			$scope.name='';
			$scope.employees='';
			$scope.headoffice='';
		};

		$scope.removeRow = function(name){
			var index = -1;
			var comArr = eval($scope.companies);
			for(var i=0;i<comArr.length;i++){
				if(comArr[i].name===name){
					index=i;
					break;
				}
			}
			if(index===-1){
				alert("oopss!!! Something went wrong");
			}
			$scope.companies.splice(index,1);
		};
	});