
import { BaseComponent } from '../DesktopViews/base.component'

// current application state
export class StateProfile {
    private loc: BaseComponent;
    
    constructor()
    {};

    // set platform type to 'mobile' or 'desktop'
    public setLocation(loc: BaseComponent){
        this.loc = loc;
    };

    // get platform type
    public getLocation(): BaseComponent{
        return this.loc;
    };
}
