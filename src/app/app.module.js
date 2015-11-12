angular.module("app", ["ngX.components"]).config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        componentName: "homeComponent"
    });

    $routeProvider.when("/about", {
        componentName: "aboutComponent"
    });
}]);