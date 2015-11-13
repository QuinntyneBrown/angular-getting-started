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

ngX.component({
    selector: "login-form",
    component: LoginFormComponent,
    providers: ["$location"],
    style: [" .login-form div {  padding-bottom: 15px; } "].join(" /n "),
    template: [
        "<form class='login-form'> ",
        "    <div> ",
        "        <input type='text' placeholder='Username' data-ng-model='vm.username' /> ",
        "    </div> ",
        "    <div> ",
        "        <input type='password' placeholder='Username' data-ng-model='vm.username' /> ",
        "    </div> ",
        "    <div> ",
        "        <button data-ng-click='vm.tryToLogin()' >Login</button> ",
        "    </div> ",
        "</form> "
    ].join(" ")
});

