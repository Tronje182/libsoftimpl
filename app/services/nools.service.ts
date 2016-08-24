import {Injectable, DynamicComponentLoader, Injector} from '@angular/core';

import { Profile } from '../helper/profile'
import { DisplayProperties } from '../helper/displayProperties'

import { BaseComponent } from '../DesktopViews/base.component'
import { DefaultComponent } from '../DesktopViews/default.component'

import { WelcomeHighComponent } from '../DynamicComponents/welcomeHigh.component'
import { WelcomeLowComponent } from '../DynamicComponents/welcomeLow.component'

declare var nools: any;
declare var $: any;

@Injectable()
export class NoolsService {

    public flow;
    public baseComp;

  constructor(private dcl: DynamicComponentLoader, public _injector: Injector){
      this.flow = nools.flow("ProfileEvaluation", function (flow) {
            flow.rule("Low Self-Efficiacy", [Profile, "m", "m.user.computerSelfEfficiacy =~ /false/"], function(facts){
                var tempLoc = facts.m.state.getLocation();
                if(tempLoc != undefined && $("#content").length != 0){  
                    if(tempLoc.__proto__.constructor.name == "DefaultComponent"){
                        dcl.loadAsRoot(WelcomeLowComponent, "#content",_injector);
                    }else if(tempLoc.__proto__.constructor.name == "BaseComponent"){
                        console.log("Is Base :(");
                    }else{
                        console.log("what is this???");
                    } 
                }

                facts.m.displayProperties.isAdvancedUser = false;
            });

            flow.rule("High Self-Efficiacy", [Profile, "m", "m.user.computerSelfEfficiacy =~ /true/"], function(facts){
                var tempLoc = facts.m.state.getLocation();
                if(tempLoc != undefined && $("#content").length != 0){  
                    if(tempLoc.__proto__.constructor.name == "DefaultComponent"){
                        dcl.loadAsRoot(WelcomeHighComponent, "#content",_injector);
                    }else if(tempLoc.__proto__.constructor.name == "BaseComponent"){
                        console.log("Is Base :(");
                    }else{
                        console.log("what is this???");
                    } 
                }
                
                facts.m.displayProperties.isAdvancedUser = true;
            });

            flow.rule("Evironment Brigthness Over 40", [Profile, "m", "m.getEnvironment().getBrightnessLevel() > 40"], function(facts){
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

            flow.rule("Evironment Brigthness Under 40", [Profile, "m", "m.getEnvironment().getBrightnessLevel() <= 40"], function(facts){
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

            flow.rule("Platform Desktop", [Profile, "m", "m.getPlatform().getPlatformType() =~ /desktop/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'row backgroundSecondary divLine borderSecondary';
                facts.m.displayProperties.routerOutletClass = 'col-md-10';
                facts.m.displayProperties.hideOnMobile = '';

                facts.m.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
                facts.m.displayProperties.navbarWrapperClass = 'sidebar-wrapper backgroundSecondary';
                facts.m.displayProperties.navbarHeaderClass = 'hideElement';
                facts.m.displayProperties.navbarCollapseClass = '';
                facts.m.displayProperties.navbarItemListClass = 'sidebar-nav';

                facts.m.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-4'

                facts.m.displayProperties.isMobile = false;

                this.modify(facts.m);
                
            });

            flow.rule("Platform Mobile", [Profile, "m", "m.getPlatform().getPlatformType() =~ /mobile/"], function (facts) {
                facts.m.displayProperties.headerBarClass = 'hideElement';
                facts.m.displayProperties.routerOutletClass = 'col-md-12';
                facts.m.displayProperties.hideOnMobile = 'hideElement';

                facts.m.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
                facts.m.displayProperties.navbarWrapperClass = 'container-fluid';
                facts.m.displayProperties.navbarHeaderClass = 'navbar-header';
                facts.m.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
                facts.m.displayProperties.navbarItemListClass = 'nav navbar-nav';

                facts.m.displayProperties.searchInputGroupClass = 'input-group'

                facts.m.displayProperties.isMobile = true;

                this.modify(facts.m);
            });
        });
    }

    public getSession(){
        return this.flow.getSession();
    }

    public test(test: BaseComponent){
        console.log(test);
    }
}