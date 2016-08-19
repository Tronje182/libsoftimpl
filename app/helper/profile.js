"use strict";
var platform_profile_1 = require('../helper/platform.profile');
var user_profile_1 = require('../helper/user.profile');
var environment_profile_1 = require('../helper/environment.profile');
var displayProperties_1 = require('../helper/displayProperties');
// instance of context model
var Profile = (function () {
    function Profile() {
        // initialize context profiles
        this.user = new user_profile_1.UserProfile('', false, false);
        this.platform = new platform_profile_1.PlatformProfile('');
        this.environment = new environment_profile_1.EnvironmentProfile(50);
        this.displayProperties = new displayProperties_1.DisplayProperties();
    }
    ;
    // set the user role
    Profile.prototype.setUserRole = function (v) {
        this.user.setUserRole(v);
    };
    // set if the user has weak vision
    Profile.prototype.setUserWeakVision = function (v) {
        this.user.setWeakVision(v);
    };
    // set if the user has high computer self-efficiacy
    Profile.prototype.setUserComputerSelfEfficiacy = function (v) {
        this.user.setComputerSelfEfficiacy(v);
    };
    // set platform type
    Profile.prototype.setPlatformType = function (v) {
        this.platform.setPlatformType(v);
    };
    // set environment brightness on a scale of 0 to 100
    Profile.prototype.setEnvironmentBrightness = function (v) {
        this.environment.setBrightnessLevel(v);
    };
    // get user profile
    Profile.prototype.getUser = function () {
        return this.user;
    };
    // get platform profile
    Profile.prototype.getPlatform = function () {
        return this.platform;
    };
    // get environment profile
    Profile.prototype.getEnvironment = function () {
        return this.environment;
    };
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map