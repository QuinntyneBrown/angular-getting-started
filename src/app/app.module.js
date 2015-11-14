angular.module("app", ["ngX.components"]).config(["$routeProvider", function ($routeProvider) {    
    $routeProvider.buildFromUrl({ url: "routes.json" });
}]).run(["$rootScope", function ($rootScope) {
    $rootScope.title = "Getting Started";
}]);