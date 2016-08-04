import {Injectable} from '@angular/core';

import { Profile } from '../helper/profile'
import { DisplayProperties } from '../helper/displayProperties'

declare var nools: any;

@Injectable()
export class NoolsService {

    public flow;

  constructor(){
      this.flow = nools.flow("ProfileEvaluation", function (flow) {
            flow.rule("Platform Desktop", [Profile, "m", "m.getPlatformType() =~ /desktop/"], function (facts) {
                console.log(facts.m);
                facts.m.displayProperties.setTableClass('table table-inverse table-bordered table-hover');

                facts.m.displayProperties.headerBarClass = 'row divLine';
                facts.m.displayProperties.routerOutletClass = 'col-md-10';

                facts.m.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
                facts.m.displayProperties.navbarWrapperClass = 'sidebar-wrapper';
                facts.m.displayProperties.navbarHeaderClass = 'hideElement';
                facts.m.displayProperties.navbarCollapseClass = '';
                facts.m.displayProperties.navbarItemListClass = 'sidebar-nav';

                facts.m.displayProperties.searchInputGroupClass = 'input-group col-md-6 col-md-offset-6'

                this.modify(facts.m);
                this.halt();
            });

            flow.rule("Platform Mobile", [Profile, "m", "m.getPlatformType() =~ /mobile/"], function (facts) {
                console.log(facts.m);
                facts.m.displayProperties.setTableClass('table table-inverse table-bordered table-hover');

                facts.m.displayProperties.headerBarClass = 'hideElement';
                facts.m.displayProperties.routerOutletClass = 'col-md-12';

                facts.m.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
                facts.m.displayProperties.navbarWrapperClass = 'container-fluid';
                facts.m.displayProperties.navbarHeaderClass = 'navbar-header';
                facts.m.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
                facts.m.displayProperties.navbarItemListClass = 'nav navbar-nav';

                facts.m.displayProperties.searchInputGroupClass = 'input-group'

                this.modify(facts.m);
                this.halt();
            });
        });
    }

    public getSession(){
        return this.flow.getSession();
    }
}