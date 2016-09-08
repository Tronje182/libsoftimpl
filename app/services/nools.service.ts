import {Injectable, DynamicComponentLoader, Injector} from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../helper/profile'
import { DisplayProperties } from '../helper/displayProperties'

import { BaseComponent } from '../DesktopViews/base.component'
import { DefaultComponent } from '../DesktopViews/default.component'

import { WelcomeLowStudentComponent } from '../DynamicComponents/welcomeLowStudent.component'
import { WelcomeLowStaffComponent } from '../DynamicComponents/welcomeLowStaff.component'

import { ResourceService } from './resource.service';
import { LoggerService } from './logger.service';

declare var nools: any;
declare var $: any;

@Injectable()
export class NoolsService {

    public flow;
    public baseComp;

  constructor(private dcl: DynamicComponentLoader, public _injector: Injector, public _router: Router, public logger: LoggerService, public _resources: ResourceService){
      this.flow = nools.flow("ProfileEvaluation", function (flow) {
            flow.rule("Lang ENUS",{salience:4},[Profile, "m", "m.getUser().getLanguage() =~ /enus/ && m.getUser().getLangChecked() === false"],function(facts){
                facts.m.getUser().setLangChecked(true);
                _resources.setLangFile('enus');
            });

            flow.rule("Lang DEDE",{salience:4},[Profile, "m", "m.getUser().getLanguage() =~ /dede/  && m.getUser().getLangChecked() === false"],function(facts){
                facts.m.getUser().setLangChecked(true);
                _resources.setLangFile('dede');
            });

            flow.rule("Images Low Res",{salience:6},[Profile, "m", "m.getEnvironment().getBrightnessLevel() <= 40"],function(facts){
                //change image on brightness change
                _resources.setImageFile('low');
            });

            flow.rule("Images High Res",{salience:6},[Profile, "m", "m.getEnvironment().getBrightnessLevel() > 40"],function(facts){
                _resources.setImageFile('high');
            });

            flow.rule("Admin Option Unselected",{salience:10}, [Profile, "m", "m.getUser().getIsAdmin() === false && m.getUser().getAdminChecked() === false"], function(facts){
                facts.m.getUser().setAdminChecked(true);
                facts.m.displayProperties.removeNavigationPath('\administration');
            });

            flow.rule("Admin Option Selected",{salience:10}, [Profile, "m", "m.getUser().getUserRole() == 'staff'  && m.getUser().getIsAdmin() === true && m.getUser().getAdminChecked() === false"], function(facts){
                facts.m.getUser().setAdminChecked(true);
                facts.m.displayProperties.pushNavigation({path:'\administration', key:'administration'});
            });

            flow.rule("Navigation Student",{salience:11}, [Profile, "m", "m.getUser().getUserRole() == 'student' && m.getUser().getRoleChecked() === false"], function(facts){
                facts.m.getUser().setRoleChecked(true);
                facts.m.displayProperties.clearNavigation();
                facts.m.displayProperties.pushNavigation({path:'\lentBooks', key:'lent'});
                facts.m.displayProperties.pushNavigation({path:'\searchBooks', key:'books'});
            });

            flow.rule("Navigation Staff",{salience:11}, [Profile, "m", "m.getUser().getUserRole() == 'staff'  && m.getUser().getRoleChecked() === false"], function(facts){
                facts.m.getUser().setRoleChecked(true);
                facts.m.displayProperties.clearNavigation();
                facts.m.displayProperties.pushNavigation({path:'\searchBooks', key:'books'});
                facts.m.displayProperties.pushNavigation({path:'\students', key:'students'});
                facts.m.displayProperties.pushNavigation({path:'\\reservations', key:'reservations'});
                facts.m.displayProperties.pushNavigation({path:'\lendingForm', key:'lendingForm'});
            });

            flow.rule("Navigation Unregistered",{salience:12}, [Profile, "m", "m.getUser().getUserRole() != 'student' && m.getUser().getUserRole() != 'staff'"], function(facts){
                facts.m.displayProperties.clearNavigation();
            });

            flow.rule("LowVision",{salience:9}, [Profile, "m", "m.getUser().hasWeakVision() == 'true'"], function(facts){
                $('.textPrimary').css('font-size', '24px');
                $('.textSecondary').css('font-size', '20px');
            });

            flow.rule("NormalVision",{salience:9}, [Profile, "m", "m.getUser().hasWeakVision() == 'false'"], function(facts){
                $('.textPrimary').css('font-size', '18px');
                $('.textSecondary').css('font-size', '14px');
            });

            flow.rule("Low Self-Efficiacy",{salience:8}, [Profile, "m", "m.getUser().hasHighComputerSelfEfficiacy() =~ /false/"], function(facts){
                var tempLoc = facts.m.state.getLocation();
                if(tempLoc != undefined && $("#content").length != 0){  
                    if(tempLoc.__proto__.constructor.name == "DefaultComponent"){
                        if(facts.m.user.getUserRole() == "student"){
                            dcl.loadAsRoot(WelcomeLowStudentComponent, "#content",_injector);
                        }else{
                            dcl.loadAsRoot(WelcomeLowStaffComponent, "#content", _injector);
                        }
                    }else if(tempLoc.__proto__.constructor.name == "BaseComponent"){
                        console.log("Is Base :(");
                    }else{
                        console.log("what is this???");
                    } 
                }

                facts.m.displayProperties.isAdvancedUser = false;
            });

            flow.rule("High Self-Efficiacy",{salience:8}, [Profile, "m", "m.getUser().hasHighComputerSelfEfficiacy() =~ /true/"], function(facts){
                var tempLoc = facts.m.state.getLocation();
                if(tempLoc != undefined && $("#content").length != 0){  
                    if(tempLoc.__proto__.constructor.name == "DefaultComponent"){
                        if(facts.m.user.getUserRole() === "student"){
                            // advanced students go directly to search books
                            console.log("student -> search books");
                            _router.navigate(['/searchBooks']);
                        }else{
                            // advanced staff members go directly  to reservations
                            console.log("staff -> reservations");
                            _router.navigate(['/reservations']);
                        }
                    }else if(tempLoc.__proto__.constructor.name == "BaseComponent"){
                        console.log("Is Base :(");
                    }else{
                        console.log("what is this???");
                    } 
                }
                
                facts.m.displayProperties.isAdvancedUser = true;
            });

            flow.rule("Evironment Brigthness Over 40",{salience:6}, [Profile, "m", "m.getEnvironment().getBrightnessLevel() > 40"], function(facts){
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

            flow.rule("Evironment Brigthness Under 40",{salience:6}, [Profile, "m", "m.getEnvironment().getBrightnessLevel() <= 40"], function(facts){
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

            flow.rule("Platform Desktop",{salience:10}, [Profile, "m", "m.getPlatform().getPlatformType() =~ /desktop/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'row backgroundSecondary divLine borderSecondary';
                facts.m.displayProperties.routerOutletClass = 'col-md-10';
                facts.m.displayProperties.hideOnMobile = '';

                facts.m.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
                facts.m.displayProperties.navbarWrapperClass = 'sidebar-wrapper backgroundSecondary';
                facts.m.displayProperties.navbarHeaderClass = 'hideElement';
                facts.m.displayProperties.navbarCollapseClass = '';
                facts.m.displayProperties.navbarItemListClass = 'sidebar-nav textPrimary';

                facts.m.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-4'

                facts.m.displayProperties.isMobile = false;
            });

            flow.rule("Platform Mobile",{salience:10}, [Profile, "m", "m.getPlatform().getPlatformType() =~ /mobile/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'hideElement';
                facts.m.displayProperties.routerOutletClass = 'col-md-12';
                facts.m.displayProperties.hideOnMobile = 'hideElement';

                facts.m.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
                facts.m.displayProperties.navbarWrapperClass = 'container-fluid';
                facts.m.displayProperties.navbarHeaderClass = 'navbar-header';
                facts.m.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
                facts.m.displayProperties.navbarItemListClass = 'nav navbar-nav textPrimary';

                facts.m.displayProperties.searchInputGroupClass = 'input-group'

                facts.m.displayProperties.isMobile = true;
            });
       });

       var rules = `

            rule "Environment Brigthness Under 40" {
                agenda-group: "ag1";
                when {
                    m : Profile m.getEnvironment().getBrightnessLevel() <= 40;
                }
                then{
                    logger.log("brightness");
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

                    modify(m, function(){
                        this.displayProperties.setTableClass('table table-striped table-striped-dark table-hover table-condensed textSecondary');
                    });
                }
            }

            rule "Environment Brigthness Over 40" {
                agenda-group: "ag1";
                when {
                    m : Profile m.getEnvironment().getBrightnessLevel() > 40;
                }
                then{
                    logger.log("brightness");
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

                    modify(m, function(){
                        this.displayProperties.setTableClass('table table-striped table-hover table-condensed textSecondary');
                    });
                }
            }
            
            rule PlatformMobile {
                agenda-group: "ag2";
                when {
                    m : Profile m.getPlatform().getPlatformType() =~ /mobile/;
                }
                then{
                    modify(m, function(){
                        logger.log("Platform Mobile");
                        this.displayProperties.headerBarClass = 'hideElement';
                        this.displayProperties.routerOutletClass = 'col-md-12';
                        this.displayProperties.hideOnMobile = 'hideElement';

                        this.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
                        this.displayProperties.navbarWrapperClass = 'container-fluid';
                        this.displayProperties.navbarHeaderClass = 'navbar-header';
                        this.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
                        this.displayProperties.navbarItemListClass = 'nav navbar-nav textPrimary';

                        this.displayProperties.searchInputGroupClass = 'input-group';

                        this.displayProperties.isMobile = true;
                    });
                }
            }

            rule PlatformDesktop {
                agenda-group: "ag2";
                when {
                    m : Profile m.getPlatform().getPlatformType() =~ /desktop/;
                }
                then{
                    modify(m, function(){
                        logger.log("Platform Desktop");
                        this.displayProperties.headerBarClass = 'row backgroundSecondary divLine borderSecondary';
                        this.displayProperties.routerOutletClass = 'col-md-10';
                        this.displayProperties.hideOnMobile = '';

                        this.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
                        this.displayProperties.navbarWrapperClass = 'sidebar-wrapper backgroundSecondary';
                        this.displayProperties.navbarHeaderClass = 'hideElement';
                        this.displayProperties.navbarCollapseClass = '';
                        this.displayProperties.navbarItemListClass = 'sidebar-nav textPrimary';

                        this.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-4';

                        this.displayProperties.isMobile = false;
                    });
                }
            }
  
            rule "Low Self-Efficiacy" {
                agenda-group: "ag3";
                when {
                    m : Profile m.user.computerSelfEfficiacy =~ /false/;
                }
                then{
                    var tempLoc = facts.m.state.getLocation();
                    if(tempLoc != undefined && $("#content").length != 0){  
                        if(tempLoc.__proto__.constructor.name == "DefaultComponent"){
                            if(facts.m.user.getUserRole() == "student"){
                                dcl.loadAsRoot(WelcomeLowStudentComponent, "#content",_injector);
                            }else{
                                dcl.loadAsRoot(WelcomeLowStaffComponent, "#content", _injector);
                            }
                        }else if(tempLoc.__proto__.constructor.name == "BaseComponent"){
                            logger.log("Is Base :(");
                        }else{
                            logger.log("what is this???");
                        } 
                    }

                    modify(m, function(){
                        this.displayProperties.isAdvancedUser = false;
                    });
                }
            }  

            rule "High Self-Efficiacy" {
                agenda-group: "ag3";
                when {
                    m : Profile m.user.computerSelfEfficiacy =~ /true/;
                }
                then{
                    var tempLoc = facts.m.state.getLocation();
                    if(tempLoc != undefined && $("#content").length != 0){  
                        if(tempLoc.__proto__.constructor.name == "DefaultComponent"){
                            if(facts.m.user.getUserRole() === "student"){
                                // advanced students go directly to search books
                                _router.navigate(['/searchBooks']);
                            }else{
                                // advanced staff members go directly  to reservations
                                _router.navigate(['/reservations']);
                            }
                        }else if(tempLoc.__proto__.constructor.name == "BaseComponent"){
                            logger.log("Is Base :(");
                        }else{
                            logger.log("what is this???");
                        } 
                    }

                    modify(m, function(){
                        this.displayProperties.isAdvancedUser = true;
                    });
                }
            }  
       `;

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


    public getSession(){
        return this.flow.getSession();
    }

    public test(test: BaseComponent){
        console.log(test);
    }
}