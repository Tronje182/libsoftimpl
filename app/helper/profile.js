"use strict";
var platform_profile_1 = require('../helper/platform.profile');
var user_profile_1 = require('../helper/user.profile');
var displayProperties_1 = require('../helper/displayProperties');
var Profile = (function () {
    function Profile() {
        this.user = new user_profile_1.UserProfile('');
        this.platform = new platform_profile_1.PlatformProfile('');
        this.displayProperties = new displayProperties_1.DisplayProperties();
    }
    ;
    Profile.prototype.setUserProfile = function (v) {
        this.user.profile = v;
    };
    Profile.prototype.setPlatformType = function (v) {
        this.platform.type = v;
    };
    Profile.prototype.getUserProfile = function () {
        return this.user.profile;
    };
    Profile.prototype.getPlatformType = function () {
        return this.platform.type;
    };
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map