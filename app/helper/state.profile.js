"use strict";
// current application state
var StateProfile = (function () {
    function StateProfile() {
    }
    ;
    // set platform type to 'mobile' or 'desktop'
    StateProfile.prototype.setLocation = function (loc) {
        this.loc = loc;
    };
    ;
    // get platform type
    StateProfile.prototype.getLocation = function () {
        return this.loc;
    };
    ;
    return StateProfile;
}());
exports.StateProfile = StateProfile;
//# sourceMappingURL=state.profile.js.map