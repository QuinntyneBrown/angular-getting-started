

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
