'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  controller('MyCtrl1',['$scope','myService',function($scope,myService) {

  	var items = [
  		{ name:"item1",value:"23"},
  		{ name:"item2",value:"45"},
  		{ name:"item3",value:"67"},
  		{ name:"item4",value:"34"}
  	];
  	$scope.loadData = function(){
  		$scope.list = items;
  	};

  	

  }])
  .controller('MyCtrl2', ['$scope','myService',function($scope,myService){
  
  	$scope.file = {};
  	$scope.getFile = function(filename){
  		$scope.file[filename] = $scope.file[filename] || myService.getFileContent(filename);
  		$scope.currentFile = $scope.file[filename];
  	}

  	$scope.folders = myService.getTree();

  	$scope.addNewPerson = function(){
  		$scope.currentFile.push({name:"",age:""});
  	};
  }]);