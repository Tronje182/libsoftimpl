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
var profile_1 = require('../helper/profile');
var NoolsService = (function () {
    function NoolsService() {
        this.flow = nools.flow("ProfileEvaluation", function (flow) {
            flow.rule("Platform Desktop", [profile_1.Profile, "m", "m.getPlatformType() =~ /desktop/"], function (facts) {
                console.log(facts.m);
                facts.m.displayProperties.setTableClass('table table-inverse table-bordered table-hover');
                facts.m.displayProperties.headerBarClass = 'row divLine';
                facts.m.displayProperties.routerOutletClass = 'col-md-10';
                facts.m.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
                facts.m.displayProperties.navbarWrapperClass = 'sidebar-wrapper';
                facts.m.displayProperties.navbarHeaderClass = 'hideElement';
                facts.m.displayProperties.navbarCollapseClass = '';
                facts.m.displayProperties.navbarItemListClass = 'sidebar-nav';
                facts.m.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-6';
                this.modify(facts.m);
                this.halt();
            });
            flow.rule("Platform Mobile", [profile_1.Profile, "m", "m.getPlatformType() =~ /mobile/"], function (facts) {
                console.log(facts.m);
                facts.m.displayProperties.setTableClass('table table-inverse table-bordered table-hover');
                facts.m.displayProperties.headerBarClass = 'hideElement';
                facts.m.displayProperties.routerOutletClass = 'col-md-12';
                facts.m.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
                facts.m.displayProperties.navbarWrapperClass = 'container-fluid';
                facts.m.displayProperties.navbarHeaderClass = 'navbar-header';
                facts.m.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
                facts.m.displayProperties.navbarItemListClass = 'nav navbar-nav';
                facts.m.displayProperties.searchInputGroupClass = 'input-group';
                this.modify(facts.m);
                this.halt();
            });
        });
    }
    NoolsService.prototype.getSession = function () {
        return this.flow.getSession();
    };
    NoolsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NoolsService);
    return NoolsService;
}());
exports.NoolsService = NoolsService;
//# sourceMappingURL=nools.service.js.map