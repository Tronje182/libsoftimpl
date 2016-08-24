"use strict";
var DisplayProperties = (function () {
    function DisplayProperties() {
        this.type = '';
        this.role = '';
        //General Layout
        this.headerBarClass = '';
        this.routerOutletClass = '';
        this.hideOnMobile = '';
        this.hideOnDesktop = '';
        //tables
        this.tableClass = 'table table-striped table-hover table-condensed';
        //navigation
        this.navbarContainerClass = '';
        this.navbarWrapperClass = '';
        this.navbarHeaderClass = '';
        this.navbarCollapseClass = '';
        this.navbarItemListClass = '';
        //search
        this.searchInputGroupClass = '';
        //boolean
        this.isMobile = false;
        this.isAdvancedUser = false;
    }
    ;
    DisplayProperties.prototype.setType = function (v) {
        this.type = v;
    };
    DisplayProperties.prototype.setRole = function (v) {
        this.role = v;
    };
    DisplayProperties.prototype.setTableClass = function (v) {
        this.tableClass = v;
    };
    return DisplayProperties;
}());
exports.DisplayProperties = DisplayProperties;
//# sourceMappingURL=displayProperties.js.map