"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var profile_service_1 = require('../services/profile.service');
var User = (function () {
    function User(email, password, role, id, firstname, lastname) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return User;
}());
exports.User = User;
var users = [
    new User('admin', 'admin', 'staff', '', 'Admin', 'User'),
    new User('hstahl', 'hstahl', 'student', '6701277', 'Hagen', 'Stahl'),
    new User('rich', 'rich', 'student', '1231233', 'Richard', 'Roe')
];
var AuthenticationService = (function () {
    function AuthenticationService(_router, profile) {
        this._router = _router;
        this.profile = profile;
        this.isLoggedIn = false;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.isLoggedIn = false;
        this._router.navigate(['login']);
        this.profile.setUserRole('');
    };
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = users.find(function (u) { return u.email === user.email; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem('user', JSON.stringify(authenticatedUser));
            this._router.navigate(['default']);
            this.isLoggedIn = true;
            this.profile.setUserRole(authenticatedUser.role);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.getName = function () {
        if (localStorage.getItem('user') != null) {
            return JSON.parse(localStorage.getItem("user")).firstname + " " + JSON.parse(localStorage.getItem('user')).lastname;
        }
    };
    AuthenticationService.prototype.getId = function () {
        if (localStorage.getItem('user') != null) {
            return JSON.parse(localStorage.getItem("user")).id;
        }
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem('user') == null) {
            this._router.navigate(['login']);
        }
    };
    AuthenticationService.prototype.checkStaffPrivileges = function () {
        var user;
        user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            this._router.navigate(['login']);
        }
        else {
            if (user.role !== "staff") {
                this._router.navigate(['default']);
            }
        }
    };
    AuthenticationService.prototype.checkAdminPrivileges = function () {
        if (!this.profile.getProfile().getUser().getIsAdmin()) {
            this._router.navigate(['default']);
        }
    };
    AuthenticationService.prototype.isStaff = function () {
        if (localStorage.getItem('user') != null && JSON.parse(localStorage.getItem("user")).role === 'staff') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isStudent = function () {
        if (localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role === 'student') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, profile_service_1.ProfileService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map