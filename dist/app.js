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
(function() {

    "use strict";

    function AboutComponent($rootScope) {
        $rootScope.title = "About";

    }

    ngX.Component({
        component: AboutComponent,
        providers: ["$rootScope"]
    });

})();






(function () {

    "use strict";

    function HeaderComponent(securityManager) {

        var self = this;

        self.isLoggedIn = function () {
            return (securityManager.token != null);
        }

        return self;
    }

    ngX.Component({
        selector: "app-header",
        component: HeaderComponent,
        providers:["securityManager"],
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
                name: 'angulsr_2_better_concepts_less_code'
            }, {
                id: "zoVebZX49rc",
                name: "Using Hypermedia APIs to Drive Interactive Mobile Applications"
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

    function LoginFormComponent($location, securityManager) {
        var self = this;

        self.username = "";

        self.password = "";

        self.tryToLogin = function () {
            securityManager.token = true;
            $location.path("/");
        }
        return self;
    }

    ngX.Component({
        selector: "login-form",
        component: LoginFormComponent,
        providers: ["$location","securityManager"],
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




