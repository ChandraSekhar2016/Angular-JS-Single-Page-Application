var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){

$routeProvider.when("/",{

	controller:"defaultController",
	templateUrl:"views/default.html"
})
	.when("/contact",{
		controller:"contactController",
		templateUrl:"views/contact.html"
	})

	.when("/showcontact",{
		controller:"contactController",
		templateUrl:"views/contactlist.html"
	})

 
});
