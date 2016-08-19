import { PlatformProfile } from '../helper/platform.profile';
import { UserProfile } from '../helper/user.profile';
import { EnvironmentProfile } from '../helper/environment.profile';

// instance of context model
export class Profile {
    private user: UserProfile;
    private platform: PlatformProfile;
    private environment: EnvironmentProfile;

    constructor()
    {
        // initialize context profiles
        this.user = new UserProfile('',false,false);
        this.platform = new PlatformProfile ('');
        this.environment = new EnvironmentProfile(50);
    };
 
    // set the user role
    public setUserRole(v : string) {
        this.user.setUserRole(v);
    }

    // set if the user has weak vision
    public setUserWeakVision(v: boolean){
        this.user.setWeakVision(v);
    }

    // set if the user has high computer self-efficiacy
    public setUserComputerSelfEfficiacy(v: boolean){
        this.user.setComputerSelfEfficiacy(v);
    }

    // set platform type
    public setPlatformType(v : string){
        this.platform.setPlatformType(v);
    }
    
    // set environment brightness on a scale of 0 to 100
    public setEnvironmentBrightness(v: number){
        this.environment.setBrightnessLevel(v);
    }

    // get user profile
    public getUser() : UserProfile {
        return this.user;
    }
    
    // get platform profile
    public getPlatform() : PlatformProfile {
        return this.platform;
    }

    // get environment profile
    public getEnvironment() : EnvironmentProfile {
        return this.environment;
    }
}
