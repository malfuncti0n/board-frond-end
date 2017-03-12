export class AuthController {
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }
    //register function satelizer
    register() {
        //vm is view model
        var vm = this;
        this.$auth.signup(this.user).then(function (token) {
            vm.$auth.setToken(token);
        });
    }
    //login function satelizer

        login() {
        //vm is view model
        var vm = this;
        this.$auth.login(this.login.user).then(function (token) {
            vm.$auth.setToken(token);
        });
    }

}
