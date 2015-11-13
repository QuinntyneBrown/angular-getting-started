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
(function() {

    "use strict";

    function AboutComponent() {
    }

    ngX.Component({
        component: AboutComponent
    });

})();






(function () {

    "use strict";

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
    });

})();


(function () {

    "use strict";

    function HomeComponent() {
        var self = this;

        self.videos = [
            {
                id: 'VdxTkx4qnKg',
                name: 'angular_hackathon'
            },
            {
                id: 'cgSJlAOmQE4',
                name: 'technology_radar'
            },
            {
                id: '4YmnbGoh49U',
                name: 'sngulsr_2_better_concepts_less_code'
            }
        ];

        
        return self;
    }

    ngX.Component({
        component: HomeComponent
    });

})();



(function() {
    
    "use strict";

    function LoginComponent() {

    }

    ngX.Component({
        component: LoginComponent
    });

})();



(function () {

    "use strict";

    function LoginFormComponent($location) {
        var self = this;

        self.username = "";

        self.password = "";

        self.tryToLogin = function () {
            window.token = true;
            $location.path("/");
        }
        return self;
    }

    ngX.Component({
        selector: "login-form",
        component: LoginFormComponent,
        providers: ["$location"],
        styles: [" .login-form div {  padding-bottom: 15px; } "].join(" /n "),
        template: [
            "<form class='login-form'> ",
            "    <div> ",
            "        <input type='text' placeholder='Username' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='password' placeholder='Password' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <button data-ng-click='vm.tryToLogin()' >Login</button> ",
            "    </div> ",
            "</form> "
        ].join(" ")
    });

})();




