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





