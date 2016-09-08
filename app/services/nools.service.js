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
var resource_service_1 = require('./resource.service');
var logger_service_1 = require('./logger.service');
var NoolsService = (function () {
    function NoolsService(dcl, _injector, _router, logger, _resources) {
        this.dcl = dcl;
        this._injector = _injector;
        this._router = _router;
        this.logger = logger;
        this._resources = _resources;
        this.flow = nools.flow("ProfileEvaluation", function (flow) {
            flow.rule("Lang ENUS", { salience: 4 }, [profile_1.Profile, "m", "m.getUser().getLanguage() =~ /enus/ && m.getUser().getLangChecked() === false"], function (facts) {
                facts.m.getUser().setLangChecked(true);
                _resources.setLangFile('enus');
            });
            flow.rule("Lang DEDE", { salience: 4 }, [profile_1.Profile, "m", "m.getUser().getLanguage() =~ /dede/  && m.getUser().getLangChecked() === false"], function (facts) {
                facts.m.getUser().setLangChecked(true);
                _resources.setLangFile('dede');
            });
            flow.rule("Images Low Res", { salience: 6 }, [profile_1.Profile, "m", "m.getEnvironment().getBrightnessLevel() <= 40"], function (facts) {
                //change image on brightness change
                _resources.setImageFile('low');
            });
            flow.rule("Images High Res", { salience: 6 }, [profile_1.Profile, "m", "m.getEnvironment().getBrightnessLevel() > 40"], function (facts) {
                _resources.setImageFile('high');
            });
            flow.rule("Admin Option Unselected", { salience: 10 }, [profile_1.Profile, "m", "m.getUser().getIsAdmin() === false && m.getUser().getAdminChecked() === false"], function (facts) {
                facts.m.getUser().setAdminChecked(true);
                facts.m.displayProperties.removeNavigationPath('\administration');
            });
            flow.rule("Admin Option Selected", { salience: 10 }, [profile_1.Profile, "m", "m.getUser().getUserRole() == 'staff'  && m.getUser().getIsAdmin() === true && m.getUser().getAdminChecked() === false"], function (facts) {
                facts.m.getUser().setAdminChecked(true);
                facts.m.displayProperties.pushNavigation({ path: '\administration', key: 'administration' });
            });
            flow.rule("Navigation Student", { salience: 11 }, [profile_1.Profile, "m", "m.getUser().getUserRole() == 'student' && m.getUser().getRoleChecked() === false"], function (facts) {
                facts.m.getUser().setRoleChecked(true);
                facts.m.displayProperties.clearNavigation();
                facts.m.displayProperties.pushNavigation({ path: '\lentBooks', key: 'lent' });
                facts.m.displayProperties.pushNavigation({ path: '\searchBooks', key: 'books' });
            });
            flow.rule("Navigation Staff", { salience: 11 }, [profile_1.Profile, "m", "m.getUser().getUserRole() == 'staff'  && m.getUser().getRoleChecked() === false"], function (facts) {
                facts.m.getUser().setRoleChecked(true);
                facts.m.displayProperties.clearNavigation();
                facts.m.displayProperties.pushNavigation({ path: '\searchBooks', key: 'books' });
                facts.m.displayProperties.pushNavigation({ path: '\students', key: 'students' });
                facts.m.displayProperties.pushNavigation({ path: '\\reservations', key: 'reservations' });
                facts.m.displayProperties.pushNavigation({ path: '\lendingForm', key: 'lendingForm' });
            });
            flow.rule("Navigation Unregistered", { salience: 12 }, [profile_1.Profile, "m", "m.getUser().getUserRole() != 'student' && m.getUser().getUserRole() != 'staff'"], function (facts) {
                facts.m.displayProperties.clearNavigation();
            });
            flow.rule("LowVision", { salience: 9 }, [profile_1.Profile, "m", "m.getUser().hasWeakVision() == 'true'"], function (facts) {
                $('.textPrimary').css('font-size', '24px');
                $('.textSecondary').css('font-size', '20px');
            });
            flow.rule("NormalVision", { salience: 9 }, [profile_1.Profile, "m", "m.getUser().hasWeakVision() == 'false'"], function (facts) {
                $('.textPrimary').css('font-size', '18px');
                $('.textSecondary').css('font-size', '14px');
            });
            flow.rule("Low Self-Efficiacy", { salience: 8 }, [profile_1.Profile, "m", "m.getUser().hasHighComputerSelfEfficiacy() =~ /false/"], function (facts) {
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
            flow.rule("High Self-Efficiacy", { salience: 8 }, [profile_1.Profile, "m", "m.getUser().hasHighComputerSelfEfficiacy() =~ /true/"], function (facts) {
                var tempLoc = facts.m.state.getLocation();
                if (tempLoc != undefined && $("#content").length != 0) {
                    if (tempLoc.__proto__.constructor.name == "DefaultComponent") {
                        if (facts.m.user.getUserRole() === "student") {
                            // advanced students go directly to search books
                            console.log("student -> search books");
                            _router.navigate(['/searchBooks']);
                        }
                        else {
                            // advanced staff members go directly  to reservations
                            console.log("staff -> reservations");
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
            flow.rule("Evironment Brigthness Over 40", { salience: 6 }, [profile_1.Profile, "m", "m.getEnvironment().getBrightnessLevel() > 40"], function (facts) {
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
                facts.m.displayProperties.setTableClass('table table-striped table-hover table-condensed textSecondary');
            });
            flow.rule("Evironment Brigthness Under 40", { salience: 6 }, [profile_1.Profile, "m", "m.getEnvironment().getBrightnessLevel() <= 40"], function (facts) {
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
                facts.m.displayProperties.setTableClass('table table-striped table-striped-dark table-hover table-condensed textSecondary');
            });
            flow.rule("Platform Desktop", { salience: 10 }, [profile_1.Profile, "m", "m.getPlatform().getPlatformType() =~ /desktop/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'row backgroundSecondary divLine borderSecondary';
                facts.m.displayProperties.routerOutletClass = 'col-md-10';
                facts.m.displayProperties.hideOnMobile = '';
                facts.m.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
                facts.m.displayProperties.navbarWrapperClass = 'sidebar-wrapper backgroundSecondary';
                facts.m.displayProperties.navbarHeaderClass = 'hideElement';
                facts.m.displayProperties.navbarCollapseClass = '';
                facts.m.displayProperties.navbarItemListClass = 'sidebar-nav textPrimary';
                facts.m.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-4';
                facts.m.displayProperties.isMobile = false;
            });
            flow.rule("Platform Mobile", { salience: 10 }, [profile_1.Profile, "m", "m.getPlatform().getPlatformType() =~ /mobile/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'hideElement';
                facts.m.displayProperties.routerOutletClass = 'col-md-12';
                facts.m.displayProperties.hideOnMobile = 'hideElement';
                facts.m.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
                facts.m.displayProperties.navbarWrapperClass = 'container-fluid';
                facts.m.displayProperties.navbarHeaderClass = 'navbar-header';
                facts.m.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
                facts.m.displayProperties.navbarItemListClass = 'nav navbar-nav textPrimary';
                facts.m.displayProperties.searchInputGroupClass = 'input-group';
                facts.m.displayProperties.isMobile = true;
            });
        });
        var rules = "\n\n            rule \"Environment Brigthness Under 40\" {\n                agenda-group: \"ag1\";\n                when {\n                    m : Profile m.getEnvironment().getBrightnessLevel() <= 40;\n                }\n                then{\n                    logger.log(\"brightness\");\n                    //color schemes\n                    $('.backgroundPrimary').css('background-color', '#232323');\n                    $('.backgroundSecondary').css('background-color', '#323632');\n\n                    //$('.backgroundSecondary li:hover').css('background-color', 'black !important');\n                    $('.backgroundSecondary li:hover').css('color', 'white !important');\n                    \n                    $('.textPrimary').css('color', '#666666');\n                    \n                    $('.borderPrimary').css('border-color', 'black');\n                    $('.borderSecondary').css('border-color', 'black');\n\n                    // adapt bootstrap\n                    $('.form-control').css('background-color', '#323232');\n                    $('.form-control').css('border-color', '#636363');\n\n                    modify(m, function(){\n                        this.displayProperties.setTableClass('table table-striped table-striped-dark table-hover table-condensed textSecondary');\n                    });\n                }\n            }\n\n            rule \"Environment Brigthness Over 40\" {\n                agenda-group: \"ag1\";\n                when {\n                    m : Profile m.getEnvironment().getBrightnessLevel() > 40;\n                }\n                then{\n                    logger.log(\"brightness\");\n                    // color schemes\n                    $('.backgroundPrimary').css('background-color', 'white');\n                    $('.backgroundSecondary').css('background-color', 'lightgrey');\n\n                    //$('.backgroundSecondary li:hover').css('background-color', 'rgba(255,255,255,0.5)');\n                    //$('.backgroundSecondary li:hover').css('color', '#999999');\n                    \n                    $('.textPrimary').css('color', 'black');\n                    \n                    $('.borderPrimary').css('border-color', 'black');\n                    $('.borderSecondary').css('border-color', 'white');\n\n                    //adapt bootstrap\n                    $('.form-control').css('background-color', '#fff');\n                    $('.form-control').css('border-color', '#ccc');\n\n                    modify(m, function(){\n                        this.displayProperties.setTableClass('table table-striped table-hover table-condensed textSecondary');\n                    });\n                }\n            }\n            \n            rule PlatformMobile {\n                agenda-group: \"ag2\";\n                when {\n                    m : Profile m.getPlatform().getPlatformType() =~ /mobile/;\n                }\n                then{\n                    modify(m, function(){\n                        logger.log(\"Platform Mobile\");\n                        this.displayProperties.headerBarClass = 'hideElement';\n                        this.displayProperties.routerOutletClass = 'col-md-12';\n                        this.displayProperties.hideOnMobile = 'hideElement';\n\n                        this.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';\n                        this.displayProperties.navbarWrapperClass = 'container-fluid';\n                        this.displayProperties.navbarHeaderClass = 'navbar-header';\n                        this.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';\n                        this.displayProperties.navbarItemListClass = 'nav navbar-nav textPrimary';\n\n                        this.displayProperties.searchInputGroupClass = 'input-group';\n\n                        this.displayProperties.isMobile = true;\n                    });\n                }\n            }\n\n            rule PlatformDesktop {\n                agenda-group: \"ag2\";\n                when {\n                    m : Profile m.getPlatform().getPlatformType() =~ /desktop/;\n                }\n                then{\n                    modify(m, function(){\n                        logger.log(\"Platform Desktop\");\n                        this.displayProperties.headerBarClass = 'row backgroundSecondary divLine borderSecondary';\n                        this.displayProperties.routerOutletClass = 'col-md-10';\n                        this.displayProperties.hideOnMobile = '';\n\n                        this.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';\n                        this.displayProperties.navbarWrapperClass = 'sidebar-wrapper backgroundSecondary';\n                        this.displayProperties.navbarHeaderClass = 'hideElement';\n                        this.displayProperties.navbarCollapseClass = '';\n                        this.displayProperties.navbarItemListClass = 'sidebar-nav textPrimary';\n\n                        this.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-4';\n\n                        this.displayProperties.isMobile = false;\n                    });\n                }\n            }\n  \n            rule \"Low Self-Efficiacy\" {\n                agenda-group: \"ag3\";\n                when {\n                    m : Profile m.user.computerSelfEfficiacy =~ /false/;\n                }\n                then{\n                    var tempLoc = facts.m.state.getLocation();\n                    if(tempLoc != undefined && $(\"#content\").length != 0){  \n                        if(tempLoc.__proto__.constructor.name == \"DefaultComponent\"){\n                            if(facts.m.user.getUserRole() == \"student\"){\n                                dcl.loadAsRoot(WelcomeLowStudentComponent, \"#content\",_injector);\n                            }else{\n                                dcl.loadAsRoot(WelcomeLowStaffComponent, \"#content\", _injector);\n                            }\n                        }else if(tempLoc.__proto__.constructor.name == \"BaseComponent\"){\n                            logger.log(\"Is Base :(\");\n                        }else{\n                            logger.log(\"what is this???\");\n                        } \n                    }\n\n                    modify(m, function(){\n                        this.displayProperties.isAdvancedUser = false;\n                    });\n                }\n            }  \n\n            rule \"High Self-Efficiacy\" {\n                agenda-group: \"ag3\";\n                when {\n                    m : Profile m.user.computerSelfEfficiacy =~ /true/;\n                }\n                then{\n                    var tempLoc = facts.m.state.getLocation();\n                    if(tempLoc != undefined && $(\"#content\").length != 0){  \n                        if(tempLoc.__proto__.constructor.name == \"DefaultComponent\"){\n                            if(facts.m.user.getUserRole() === \"student\"){\n                                // advanced students go directly to search books\n                                _router.navigate(['/searchBooks']);\n                            }else{\n                                // advanced staff members go directly  to reservations\n                                _router.navigate(['/reservations']);\n                            }\n                        }else if(tempLoc.__proto__.constructor.name == \"BaseComponent\"){\n                            logger.log(\"Is Base :(\");\n                        }else{\n                            logger.log(\"what is this???\");\n                        } \n                    }\n\n                    modify(m, function(){\n                        this.displayProperties.isAdvancedUser = true;\n                    });\n                }\n            }  \n       ";
        /*this.flow = nools.compile(rules, {
            define : {
                Profile : Profile
            },
            scope:{
                dcl : this.dcl,
                _injector : this._injector,
                _router : this._router,
                logger: this.logger,
                $: $
            },
            name: "Profile Evaluation"
        });*/
        this.flow.conflictResolution(["activationRecency"]);
    }
    NoolsService.prototype.getSession = function () {
        return this.flow.getSession();
    };
    NoolsService.prototype.test = function (test) {
        console.log(test);
    };
    NoolsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, router_1.Router, logger_service_1.LoggerService, resource_service_1.ResourceService])
    ], NoolsService);
    return NoolsService;
}());
exports.NoolsService = NoolsService;
//# sourceMappingURL=nools.service.js.map