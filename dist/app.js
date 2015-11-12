angular.module("app", ["ngX.components"]).config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        componentName: "homeComponent"
    });

    $routeProvider.when("/about", {
        componentName: "aboutComponent"
    });
}]);
function AboutComponent() {


}

ngX.Component({
    component: AboutComponent
});
ngX.Component({
    selector: "app-header",
    template: [
        "<div>",
        "<a href='#/'>Home</a>",
        "<a href='#/about'>About</a>",
        "</div>"
    ].join(" ")
})
function HomeComponent() {


}

ngX.Component({
    component: AboutComponent
});