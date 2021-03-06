﻿(function () {

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

