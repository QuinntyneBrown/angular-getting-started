angular.module("app", ["ngX.components"]).config(["$routeProvider", function ($routeProvider) {

    var routes = JSON.parse(ngX.getFromUrlSync({ url: "routes.json " }));

    for (var i = 0; i < routes.length; i++) {
        $routeProvider.when(routes[i].when, routes[i].config);
    }

    //var routes = ngX.getFromUrlSync({ url: "routes.json " });

    //$routeProvider.when("/", {
    //    componentName: "homeComponent",
    //    authorizationRequired: true
    //});

    //$routeProvider.when("/about", {
    //    componentName: "aboutComponent",
    //    authorizationRequired: true
    //});

    //$routeProvider.when("/login", {
    //    componentName: "loginComponent",
    //    authorizationRequired: false
    //});
}]).run(["$location", "$rootScope", "securityManager", function ($location, $rootScope, securityManager) {

    $rootScope.title = "Getting Started";


}]);