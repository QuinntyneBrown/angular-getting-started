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



    function AboutComponent() {
    }

    ngX.Component({
        component: AboutComponent
    });




function HeaderComponent() {

    var self = this;


    self.isLoggedIn = function () {
        return (window.token != null);
    }

    return self;
}

ngX.Component({
    selector: "app-header",
    component: HeaderComponent,
    template: [
        "<div>",
        "<a data-ng-if='vm.isLoggedIn()' href='#/'>Home</a>",
        "<a data-ng-if='vm.isLoggedIn()' href='#/about'>About</a>",
        "<a data-ng-if='vm.isLoggedIn()' href='#/login'>Logout</a>",
        "</div>"
    ].join(" ")
})


    function HomeComponent() {

    }

    ngX.Component({
        component: HomeComponent
    });



function LoginComponent($location) {

    var self = this;

    self.login = function () {
        window.token = true;
        $location.path("/");
    }
    return self;
}

ngX.Component({
    component: LoginComponent,
    providers: ["$location"]
});
