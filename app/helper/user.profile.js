"use strict";
// user context
var UserProfile = (function () {
    function UserProfile(role, weakVision, computerSelfEfficiacy) {
        this.role = role;
        this.weakVision = weakVision;
        this.computerSelfEfficiacy = computerSelfEfficiacy;
    }
    ;
    // Set role of user
    UserProfile.prototype.setUserRole = function (role) {
        this.role = role;
    };
    ;
    // True if user has weak eyesight, false otherwise
    UserProfile.prototype.setWeakVision = function (hasWeakVision) {
        this.weakVision = hasWeakVision;
    };
    ;
    // True if user has high computer self-efficiacy, false otherwise
    UserProfile.prototype.setComputerSelfEfficiacy = function (computerSelfEfficiacy) {
        this.computerSelfEfficiacy = computerSelfEfficiacy;
    };
    ;
    // Get role of user
    UserProfile.prototype.getUserRole = function () {
        return this.role;
    };
    ;
    // Get if user has weak vision
    UserProfile.prototype.hasWeakVision = function () {
        return this.weakVision;
    };
    ;
    // Get if user has high computer self-efficiacy
    UserProfile.prototype.hasHighComputerSelfEfficiacy = function () {
        return this.computerSelfEfficiacy;
    };
    ;
    return UserProfile;
}());
exports.UserProfile = UserProfile;
//# sourceMappingURL=user.profile.js.map