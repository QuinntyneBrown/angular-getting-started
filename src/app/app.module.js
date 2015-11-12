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
}]).run(["$location", "$rootScope", function ($location, $rootScope) {

    $rootScope.$on("$routeChangeStart", function (c, n) {

        if (n.authorizationRequired && !window.token) {
            $location.path("/login");
        }

        if ($location.path() === "/login") {
            window.token = null;
        }        
    });

}]);