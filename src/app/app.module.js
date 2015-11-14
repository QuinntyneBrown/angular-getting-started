angular.module("app", ["ngX.components"]).config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        componentName: "homeComponent",
        authorizationRequired: true
    });

    $routeProvider.when("/about", {
        componentName: "aboutComponent",
        authorizationRequired: true
    });

    $routeProvider.when("/login", {
        componentName: "loginComponent",
        authorizationRequired: false
    });
}]).run(["$location", "$rootScope", "securityManager", function ($location, $rootScope, securityManager) {

    $rootScope.title = "Getting Started";


}]);