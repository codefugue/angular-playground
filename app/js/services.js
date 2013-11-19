'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
 .service("myService",function(){
 	var fileContents = {
 		"f1_file1": [
 			{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
         ],
         "f1_file2": [
         	{name: "Jacob", age: 27},
         	{name: "Nephi", age: 29},
         	{name: "Enos", age: 34}
         ],
		 "f1_file3": [
		 	{name: "Enos", age: 34},
         	{name: "Jacob", age: 27},
         	{name: "Tiancum", age: 43}
         ],

		 "f2_file1": [
		 	{name: "werer", age: 34},
         	{name: "herta", age: 54},
         	{name: "Tumerga", age: 56}
         ],

 	}

 	var getTree = function(){
 		return [
 			{	
				name: "folder1",
				files : [
					{filename : "f1_file1"},
					{filename : "f1_file2"},
					{filename : "f1_file3"}
				]
 			},
 			{
				name: "folder2",
				files : [
					{filename : "f2_file1"},
				]
 			} 			
 		]
 	};

 	var getFileContent = function(filename){
 		return fileContents[filename];
 	};

 	return {
 		"getTree" : getTree,
 		"getFileContent" : getFileContent
 	}
 })
