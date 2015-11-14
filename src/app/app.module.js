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

    $rootScope.$on("$routeChangeStart", function (c, n) {

        if (n.authorizationRequired && !securityManager.token) {
            $location.path("/login");
        }

        if ($location.path() === "/login") {
            securityManager.token = null;
        }        
    });

}]);