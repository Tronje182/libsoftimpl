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
var profile_1 = require('../helper/profile');
var welcomeLowStudent_component_1 = require('../DynamicComponents/welcomeLowStudent.component');
var welcomeLowStaff_component_1 = require('../DynamicComponents/welcomeLowStaff.component');
var NoolsService = (function () {
    function NoolsService(dcl, _injector, _router) {
        this.dcl = dcl;
        this._injector = _injector;
        this._router = _router;
        this.flow = nools.flow("ProfileEvaluation", function (flow) {
            flow.rule("Low Self-Efficiacy", [profile_1.Profile, "m", "m.user.computerSelfEfficiacy =~ /false/"], function (facts) {
                var tempLoc = facts.m.state.getLocation();
                if (tempLoc != undefined && $("#content").length != 0) {
                    if (tempLoc.__proto__.constructor.name == "DefaultComponent") {
                        if (facts.m.user.getUserRole() == "student") {
                            dcl.loadAsRoot(welcomeLowStudent_component_1.WelcomeLowStudentComponent, "#content", _injector);
                        }
                        else {
                            dcl.loadAsRoot(welcomeLowStaff_component_1.WelcomeLowStaffComponent, "#content", _injector);
                        }
                    }
                    else if (tempLoc.__proto__.constructor.name == "BaseComponent") {
                        console.log("Is Base :(");
                    }
                    else {
                        console.log("what is this???");
                    }
                }
                facts.m.displayProperties.isAdvancedUser = false;
            });
            flow.rule("High Self-Efficiacy", [profile_1.Profile, "m", "m.user.computerSelfEfficiacy =~ /true/"], function (facts) {
                var tempLoc = facts.m.state.getLocation();
                if (tempLoc != undefined && $("#content").length != 0) {
                    if (tempLoc.__proto__.constructor.name == "DefaultComponent") {
                        if (facts.m.user.getUserRole() === "student") {
                            // advanced students go directly to search books
                            _router.navigate(['/searchBooks']);
                        }
                        else {
                            // advanced staff members go directly  to reservations
                            _router.navigate(['/reservations']);
                        }
                    }
                    else if (tempLoc.__proto__.constructor.name == "BaseComponent") {
                        console.log("Is Base :(");
                    }
                    else {
                        console.log("what is this???");
                    }
                }
                facts.m.displayProperties.isAdvancedUser = true;
            });
            flow.rule("Evironment Brigthness Over 40", [profile_1.Profile, "m", "m.getEnvironment().getBrightnessLevel() > 40"], function (facts) {
                // color schemes
                $('.backgroundPrimary').css('background-color', 'white');
                $('.backgroundSecondary').css('background-color', 'lightgrey');
                //$('.backgroundSecondary li:hover').css('background-color', 'rgba(255,255,255,0.5)');
                //$('.backgroundSecondary li:hover').css('color', '#999999');
                $('.textPrimary').css('color', 'black');
                $('.borderPrimary').css('border-color', 'black');
                $('.borderSecondary').css('border-color', 'white');
                //adapt bootstrap
                $('.form-control').css('background-color', '#fff');
                $('.form-control').css('border-color', '#ccc');
                facts.m.displayProperties.setTableClass('table table-striped table-hover table-condensed');
            });
            flow.rule("Evironment Brigthness Under 40", [profile_1.Profile, "m", "m.getEnvironment().getBrightnessLevel() <= 40"], function (facts) {
                //color schemes
                $('.backgroundPrimary').css('background-color', '#232323');
                $('.backgroundSecondary').css('background-color', '#323632');
                //$('.backgroundSecondary li:hover').css('background-color', 'black !important');
                $('.backgroundSecondary li:hover').css('color', 'white !important');
                $('.textPrimary').css('color', '#666666');
                $('.borderPrimary').css('border-color', 'black');
                $('.borderSecondary').css('border-color', 'black');
                // adapt bootstrap
                $('.form-control').css('background-color', '#323232');
                $('.form-control').css('border-color', '#636363');
                facts.m.displayProperties.setTableClass('table table-striped table-striped-dark table-hover table-condensed');
            });
            flow.rule("Platform Desktop", [profile_1.Profile, "m", "m.getPlatform().getPlatformType() =~ /desktop/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'row backgroundSecondary divLine borderSecondary';
                facts.m.displayProperties.routerOutletClass = 'col-md-10';
                facts.m.displayProperties.hideOnMobile = '';
                facts.m.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
                facts.m.displayProperties.navbarWrapperClass = 'sidebar-wrapper backgroundSecondary';
                facts.m.displayProperties.navbarHeaderClass = 'hideElement';
                facts.m.displayProperties.navbarCollapseClass = '';
                facts.m.displayProperties.navbarItemListClass = 'sidebar-nav';
                facts.m.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-4';
                facts.m.displayProperties.isMobile = false;
                this.modify(facts.m);
            });
            flow.rule("Platform Mobile", [profile_1.Profile, "m", "m.getPlatform().getPlatformType() =~ /mobile/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'hideElement';
                facts.m.displayProperties.routerOutletClass = 'col-md-12';
                facts.m.displayProperties.hideOnMobile = 'hideElement';
                facts.m.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
                facts.m.displayProperties.navbarWrapperClass = 'container-fluid';
                facts.m.displayProperties.navbarHeaderClass = 'navbar-header';
                facts.m.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
                facts.m.displayProperties.navbarItemListClass = 'nav navbar-nav';
                facts.m.displayProperties.searchInputGroupClass = 'input-group';
                facts.m.displayProperties.isMobile = true;
                this.modify(facts.m);
            });
        });
    }
    NoolsService.prototype.getSession = function () {
        return this.flow.getSession();
    };
    NoolsService.prototype.test = function (test) {
        console.log(test);
    };
    NoolsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, router_1.Router])
    ], NoolsService);
    return NoolsService;
}());
exports.NoolsService = NoolsService;
//# sourceMappingURL=nools.service.js.map